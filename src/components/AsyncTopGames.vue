<template>
  <section class="games">
    <div class="games-container">
      <div class="games-item" v-for="(game, index) in data" :key=game.id>
        <p class="games-item-place">{{ index+ 1}}</p>
        <p class="games-item-name">Title: {{ game.name }}</p>
        <router-link class="btn btn-submit" :to="{ name: 'GameDetails', params: { game: game.id } }">Game
          details</router-link>
        <p class="games-item-score">Metacritic score: {{ game.metacritic }} / 100</p>

        <div>
          <img v-if="game.background_image" :src="game.background_image" alt="image">
        </div>
        <div v-if="err"> {{err}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  async setup() {
    const data = ref([]);
    const apiKey = "7e6f5e92eb2b4fd99cbb0e664a1db752"
    const err = ref()

    async function getTop() {
      try {
        const resp = await fetch(`https://api.rawg.io/api/games?-ordering=metacritic&key=${apiKey}`)
        const json = await resp.json()
        json.results.sort((a, b) => {
          return b.metacritic - a.metacritic
        })
        json.results.splice(10, 10);
        data.value = await json.results
      }
      catch (e) {
        err.value = e
      }
    }

    await getTop()

    return {
      err,
      getTop,
      data
    }
  }
}
</script>

<style scoped lang="scss">
.games {
  text-align: center;
  padding-bottom: 1rem;
  padding-inline: 1rem;

  &-container {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
  }

  &-item {
    text-align: center;
    margin: 1.5rem;
    display: flex;
    align-items: center;
    flex-flow: column;
    box-shadow: 1px -1px 2px #000;

    & img {
      max-height: 70vh;
    }

    & p {
      padding: 1rem;
    }

    &-place {
      font-size: 2.5rem;
      font-weight: 700;
    }

    &-name {
      text-transform: uppercase;
    }

    &-score {
      color: blue;
    }
  }
}
</style>
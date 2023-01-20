<template>
  <section class="games" id="games">
    <div class="games-container">
      <div class="games-item" v-for="game in data" :key=game.id>
        <p>{{ game.name }}</p>
        <div>
          <img v-if="game.background_image" :src="game.background_image" alt="image">
        </div>
        <router-link class="btn btn-submit" :to="{ name: 'GameDetails', params: { game: game.id } }">Game
          details</router-link>
      </div>
      <div v-if="err">{{ err }}</div>
    </div>
    <div class="btns">
      <button class="btn btn-page" @click="getData(prevPage)" v-if="prevPage">Prev</button>
      <button class="btn btn-page" @click="getData(nextPage)">Next</button>
    </div>

  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  async setup() {
    const data = ref([]);
    const mainLink = "https://api.rawg.io/api/games?key=7e6f5e92eb2b4fd99cbb0e664a1db752"
    const nextPage = ref()
    const prevPage = ref()
    const err = ref()
    async function getData(link) {
      try {
        const resp = await fetch(link)
        const json = await resp.json()
        data.value = await json.results
        nextPage.value = await json.next
        prevPage.value = await json.previous
      }
      catch (e) {
        err.value = e
      }
    }
    await getData(mainLink)

    return {
      err,
      getData,
      prevPage,
      nextPage,
      data,
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
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  &-item {
    justify-content: space-between;
    margin: 0.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    background: lightgray;
    padding: 1rem;

    & img {
      max-height: 180px;
    }

    & p {
      padding-bottom: 1rem;
    }
  }

}
</style>

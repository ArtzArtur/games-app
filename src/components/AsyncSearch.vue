<template>
  <section class="games" v-if="!noResults">
    <div class="games-info" v-for="game in searchedGames" :key="game.id">
      <p class="games-title">{{ game.name }}</p>
      <router-link class="btn btn-submit" :to="{ name: 'GameDetails', params: { game: game.id } }">Game details
      </router-link>
      <p>Release date: {{ game.released }}</p>
      <div class="games-platform">
        <span v-for="type in game.platforms" :key="type.id">
          {{ type.platform.name }}
        </span>
      </div>
    </div>
    <span class="page-count" v-if="totalResults">Page:{{ page }} of {{ Math.ceil(totalResults / 20) }}</span>
    <div class="btns" v-if="totalResults">
      <button class="btn btn-page" v-if="prevPage" @click="search(prevPage),
      page--">Prev</button>
      <button class="btn btn-page" @click="search(nextPage),
      page++" v-if="nextPage">Next</button>
    </div>
  </section>
  <div class="no-results" v-else-if="noResults">
    <p>no results found..</p>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  name: "SearchList",
  props: {
    searchedItem: {
      type: String
    }
  },
  async setup(props) {
    const searchedGames = ref([]);
    const totalResults = ref();
    const apiKey = "7e6f5e92eb2b4fd99cbb0e664a1db752";
    const page = ref(1);
    const noResults = ref(false);
    const nextPage = ref();
    const prevPage = ref();

    async function search(game) {
      try {
        const res = await fetch(`https://api.rawg.io/api/games?search=${game}&search_precise=true&key=${apiKey}`)
        const json = await res.json()
        console.log(json)
        if (json.results.length > 0) {
          totalResults.value = json.count
          json.results.sort((a, b) => {
            return new Date(b.released) - new Date(a.released);
          })
          noResults.value = false;
          searchedGames.value = json.results;
          nextPage.value = json.next;
          prevPage.value = json.previous;
        }
        else {
          noResults.value = true;
        }
      }
      catch (e) {
        console.log('error' + e)
      }
    }

    watchEffect(async () => {
      await search(props.searchedItem)
    });



    return {
      noResults,
      totalResults,
      searchedGames,
      search,
      page,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.games {
  text-align: center;

  & h1 {
    padding-top: 1rem;
  }

  &-title {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 700;
  }

  &-platform {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & span {
      padding: 0.5rem;
      margin: 0.5rem;
      background: lightgray;
    }
  }
}

.games-info {
  max-width: 600px;
  margin: 1rem auto;
  box-shadow: 0 0 1px #000;

  & p {
    padding: 1rem;
  }
}

.games-imgs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  &__wrapper {
    margin: 0.25rem;
  }
}

.page-count {
  padding-bottom: 1rem;
}

.no-results {
  text-align: center;
  min-height: 200px;
  font-size: 2rem;
  display: grid;
  place-content: center;
}
</style>
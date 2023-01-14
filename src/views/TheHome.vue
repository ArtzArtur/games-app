<template>
  <section class="hero">
    <img src="../assets/hero.jpg" alt="hero-image" />
    <header>
      <h1>Games Encyclopedia</h1>
      <h2>The world of games in one place</h2>
      <div class="cta-btns">
        <router-link :to="{ name: 'TopGames' }">Top 10 Games</router-link>
        <router-link :to="{ name: 'Games' }">Games propositions</router-link>
      </div>
      <div class="search-container">
        <div class="search">
          <label for="search-field">What game are you looking for? </label>
          <input aria-label="Search" id="search-field" type="text" @keypress.enter="search(gameTitle)"
            v-model="gameTitle" />
          <span v-if="letters">Minimum 3 letters</span>
          <button @click="search(gameTitle)" class="btn btn-submit">
            Search
          </button>
        </div>
      </div>
    </header>
  </section>
  <search-list :searchedItem=searchedItem />
</template>

<script>
import { ref } from "vue";
import SearchList from "../components/SearchList.vue";
export default {
  name: 'TheHome',
  components: { SearchList },
  setup() {
    const searchedItem = ref();
    const gameTitle = ref("");
    const letters = ref();

    function search(item) {
      if (item.length >= 3) {
        letters.value = false
        searchedItem.value = item
      }
      else {
        letters.value = true
      }
    }
    return {
      search,
      letters,
      searchedItem,
      gameTitle,
    }
  }
}
</script>


<style scoped lang="scss">
.hero {
  overflow-y: hidden;
  background-color: #000;
  height: 100vh;
  position: relative;
}

header {
  color: #fff;
  text-align: center;
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);

  & h1 {
    font-size: clamp(2rem, 10vw, 6rem);
    font-weight: 800;
  }

  & h2 {
    bottom: 5vh;
    font-size: clamp(0.7rem, 5vw, 1rem);
    font-weight: 100;
    letter-spacing: 2px;
  }

  &:img {
    object-fit: cover;
  }
}

.cta-btns {
  display: flex;
  justify-content: center;
}

.cta-btns a {
  display: block;
  color: #fff;
  margin: 0.25rem;
  padding: 0.75rem 2rem;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
  }
}

.cta-btns a:nth-child(1) {
  background: var(--color-light);
}

.cta-btns a:nth-child(2) {
  background: var(--color-dark);

}

.search-container {
  background: hsl(240, 1%, 26%);
  padding: 1rem;
  display: grid;
  place-content: center;
  max-width: 80%;
  margin-inline: auto;
  margin-top: 2rem;
  border-radius: 10px;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & span {
    color: red;
  }

  & input {
    font-size: 1rem;
    outline: none;
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
  }

  & label {
    color: #fff;
  }

  & button {
    font-size: 1.05rem;
  }
}

@media(min-width:900px) {
  header {
    top: 15vh;
  }
}
</style>
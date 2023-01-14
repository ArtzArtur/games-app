<template>
  <section v-if="gameDetails">

    <div class="game">
      <h1 class="game-title">{{ gameDetails.name }}</h1>
      <img class="game-background" :src="gameDetails.background_image" alt="background image">
      <p class="game-score" v-if="gameDetails.metacritic" :style="{
        backgroundColor: gameDetails.scoreColor
      }">Metacritic score: {{ gameDetails.metacritic }} / 100</p>

      <div class="game-platforms">
        <strong>Platforms:</strong>
        <div class="game-platforms-items">
          <div v-for="game in gameDetails.platforms" :key="game.id">
            <p>{{ game.platform.name }}</p>
          </div>
        </div>
      </div>


      <div class="game-esrb" v-if="gameDetails.esrb_rating">
        <span>Esrb rating:</span>
        <p>{{ gameDetails.esrb_rating.name }}</p>
      </div>

      <div class="container">
        <div class="game-genre">
          <strong>Genres:</strong>
          <div v-for="genre in gameDetails.genres" :key="genre.id">
            <p>{{ genre.name }}</p>
          </div>
        </div>
        <div class="game-dev">
          <strong>Developers:</strong>
          <div v-for="dev in gameDetails.developers" :key="dev.id">
            <p>
              {{ dev.name }}
            </p>
          </div>
        </div>
        <div class="game-released">
          <strong>Released: </strong>
          <p>{{ gameDetails.released }}</p>
        </div>
      </div>
      <div class="game-description">
        <strong>Description</strong>
        <p>
          {{ gameDetails.description_raw }}
        </p>
      </div>
      <div class="game-screenshots">
        <img v-for="screen in gameScreenshots" :key="screen.id" :src="screen.image" alt="screenshot"
          @click="fullSize($event)">
      </div>
      <button @click="$router.go(-1)" class="btn btn-back">Back</button>
    </div>
    <div class="fullsize-image" v-if="fullImg">
      <span @click="fullImg = null">+</span>
      <img :src="fullImg" alt="fullsize image">
    </div>
  </section>
  <section v-if="error">
    <div>{{ error }}</div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: {
    game: {
      type: String
    }
  },
  async setup(props) {
    const gameDetails = ref()
    const apiKey = "7e6f5e92eb2b4fd99cbb0e664a1db752"
    const error = ref()
    const gameScreenshots = ref()
    const fullImg = ref()



    async function getDetails(game) {
      const res = await fetch(`https://api.rawg.io/api/games/${game}?key=${apiKey}`)
      if (!res.ok) {
        throw new Error(`Something went wrong, status: ${res.status}`)
      }
      else {
        const json = await res.json()
        gameDetails.value = await json

        if (json.metacritic >= 85) {
          gameDetails.value.scoreColor = 'lime'
        }
        else if (json.metacritic < 85 && json.metacritic >= 70) {
          gameDetails.value.scoreColor = 'greenyellow'
        }
        else if (json.metacritic < 70 && json.metacritic >= 55) {
          gameDetails.value.scoreColor = 'yellow'
        }
        else if (json.metacritic < 55 && json.metacritic > 40) {
          gameDetails.value.scoreColor = 'orange'
        }
        else {
          gameDetails.value.scoreColor = 'red'
        }
      }
    }
    async function getScreenshots(game) {
      const res = await fetch(`https://api.rawg.io/api/games/${game}/screenshots?key=${apiKey}`)
      console.log(res)
      if (!res.ok) {
        throw new Error(`Something went wrong, status: ${res.status}`)
      }
      else {
        const json = await res.json()
        gameScreenshots.value = await json.results
      }
    }


    function fullSize(e) {
      fullImg.value = e.target.src
    }

    async function getAll(game) {
      try {
        await getDetails(game)
        await getScreenshots(game)
      }
      catch (e) {
        error.value = e
      }
    }

    await getAll(props.game)

    return {
      error,
      fullSize,
      gameScreenshots,
      gameDetails,
      fullImg,
    }
  }
}
</script>

<style scoped lang="scss">
.game {
  max-width: 900px;
  text-align: center;
  padding: 1rem;
  margin: 0 auto;

  &-esrb {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    color: #000;
    min-height: 3rem;

    & p {
      font-weight: 900;
    }
  }

  &-description {
    line-height: 3ch;
    text-align: left;
    background: linear-gradient(0deg, white, var(--color-lighter));

    & strong {
      display: block;
      text-align: center;
      background-color: var(--color-dark);
      color: #fff;
    }

    & p {
      padding: 1rem;
    }
  }

  & h1 {
    padding: 1rem;
  }

  & img {
    max-width: 900px;
  }

  &-background {
    margin: 0 auto;
  }

  &-screenshots {
    display: grid;
    justify-content: space-between;
    grid-gap: 10px;
    padding-top: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    & img:hover {
      outline: 2px solid #000;
      cursor: pointer;
    }

    & img {
      max-height: 125px;
    }
  }

  &-platforms {
    padding-block: 1rem;

    &-items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 10px;
    }

    & p {
      padding: 0.25rem;
      box-shadow: 0 0 2px var(--color-dark);
    }

    & strong {
      grid-column: 1/-1;
      justify-content: center;
    }
  }

  &-score {
    font-size: 1.25rem;
    padding: 1rem;
  }
}

.fullsize-image {
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;

  & span {
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    margin: 1rem;
    font-size: 3rem;
    cursor: pointer;

    &:hover {
      color: var(--color-light);
    }
  }
}

.container {
  color: #fff;
  background-color: var(--color-light);
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 1rem;
}
</style>


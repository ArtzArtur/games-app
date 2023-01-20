<template>
  <div class="Games">
    <header>
      <TheHeader :title="'Games for you'" />
    </header>
    <suspense>
      <template #default>
      <GamesResults />
      </template>
      <template #fallback>
        <div class="loader">
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>  
      </template>

    </suspense>
  </div>
</template>

<script>
  import GamesResults from "../components/GamesResults.vue"
import TheHeader from "../components/TheHeader.vue";
export default {
components:{ GamesResults, TheHeader }
}
</script>


<template>
  <div>
    <h1 class="header">Gamelist for you</h1>
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
export default {
components:{GamesResults}
}
</script>


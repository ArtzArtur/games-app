<template>
  <section>
      <h1 class="header">
        Top 10 Games
      </h1>
      <div>
        <suspense>
          <template #default>
            <async-top-games/>
          </template>
          <template #fallback>
            
          <div class="loader">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            </template>
            
          </suspense>
        </div>
      </section>
</template>

<script>
import AsyncTopGames from "../components/AsyncTopGames.vue";
export default{
  components: { AsyncTopGames },
}
</script>
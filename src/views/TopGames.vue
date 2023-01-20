<template>
  <section>
    <TheHeader :title="'Top 10 Games'" />
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
import TheHeader from "../components/TheHeader.vue";
export default{
  components: { AsyncTopGames, TheHeader },
}
</script>

<style scoped>

</style>>
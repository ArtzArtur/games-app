<template>
  <div>
    <suspense>
      <template #default>
        <AsyncSearch v-if="searchedItem" :searchedItem=searchedItem />
      </template>
      <template #fallback>

        <div class="loader">
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </template>
    </suspense>
  </div>
</template>

<script>
import AsyncSearch from './AsyncSearch.vue';
export default {
  components: { AsyncSearch },
  props: {
    searchedItem: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
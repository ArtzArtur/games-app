<template>
  <div>
    <suspense>
      <template #default>
        <AsyncDetails :game=game />
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
import AsyncDetails from '../components/AsyncDetails.vue';
export default {
  components: {
    AsyncDetails,
  },
  props: {
    game: {
      type: String
    }
  },
}
</script>
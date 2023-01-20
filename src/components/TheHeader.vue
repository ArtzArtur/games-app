<template>
  <div>
    <header>
      <i @click="$router.go(-1)" class="fa fa-arrow-left "></i>
      <h1>{{ props.title }}</h1>
    </header>
  </div>
</template>

<script setup>
const props=defineProps({
  title:String
}
)
</script>

<style lang="scss" scoped>
header{
  display:grid;
  grid-template-columns:20px 1fr;
  padding:1rem;
  align-items:center;
  & i{
    font-size:1.5rem;
    &:hover{
      cursor: pointer;
      color:lightblue;
    }
  }
  & h1{
    text-align: center;
    font-size:2rem;
  }
}
</style>
<template>
  <div>
    <List></List>
    <ChangePage></ChangePage>
  </div>
</template>

<script>
import List from "./List.vue";
import ChangePage from './ChangePage.vue'
export default {
  components: {
    List,
    ChangePage,
  },
};
</script>

<style>
</style>
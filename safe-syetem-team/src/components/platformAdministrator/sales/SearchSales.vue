<template>
  <div style="width: 300px">
    <el-input placeholder="请输入内容" v-model="input">
      <template slot="append"
        ><el-button @click="searchsales(input)" icon="el-icon-search"></el-button
      ></template>
    </el-input>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapMutations ,mapActions } = createNamespacedHelpers("Sales");

export default {
  data() {
    return {
      input: "",
    };
  },
  methods:{
    ...mapMutations(['search']),
    ...mapActions(['getSales']),
    searchsales(data){
      this.search(data);
      this.getSales();
    }
  }
};
</script>

<style>
</style>
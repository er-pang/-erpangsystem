<template>
  <div style="width: 300px">
    <el-input placeholder="请输入内容" v-model="input">
      <template slot="append"
        ><el-button @click="searchcustomer(input)" icon="el-icon-search"></el-button
      ></template>
    </el-input>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapMutations ,mapActions } = createNamespacedHelpers("Customer");

export default {
  data() {
    return {
      input: "",
    };
  },
  methods:{
    ...mapMutations(['search']),
    ...mapActions(['getCustomers']),
    searchcustomer(data){
      this.search(data);
      this.getCustomers();
    }
  }
};
</script>

<style>
</style>
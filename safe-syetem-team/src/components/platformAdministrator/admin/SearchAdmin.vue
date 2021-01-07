<template>
  <div style="width: 300px">
    <el-input placeholder="请输入内容" v-model="input">
      <template slot="append"
        ><el-button @click="searchadmin(input)" icon="el-icon-search"></el-button
      ></template>
    </el-input>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapMutations ,mapActions } = createNamespacedHelpers("Admin");

export default {
  data() {
    return {
      input: "",
    };
  },
  methods:{
    ...mapMutations(['search']),
    ...mapActions(['getAdmins']),
    searchadmin(data){
      this.search(data);
      this.getAdmins();
    }
  }
};
</script>

<style>
</style>
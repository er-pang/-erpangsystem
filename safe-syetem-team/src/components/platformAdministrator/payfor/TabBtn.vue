<template>
  <div class="btnbox">
    <el-button type="primary" @click="getPayfors(1)">全部</el-button>
    <el-button type="success" @click="getPayfors(2)">待审核</el-button>
    <el-button type="info" @click="getPayfors(3)">已通过</el-button>
    <el-button type="danger" @click="getPayfors(4)">已驳回</el-button>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions,mapMutations } = createNamespacedHelpers("Payfor");

export default {
  methods: {
    ...mapActions(['getPayfors'])
  },
};
</script>

<style>
</style>
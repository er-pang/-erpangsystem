<template>
  <div>
    <el-button type="danger" size="mini" @click="refuse">驳回</el-button>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Payfor");

export default {
  props:['ids'],
  methods:{
    ...mapActions(['doPayfor','getPayfors']),
    refuse(){
      this.doPayfor({_id:this.ids,statc:false,yes_date:new Date().toLocaleDateString().replace('/','-').replace('/','-')});
      this.getPayfors(1);
    }
  }
};
</script>

<style>
</style>
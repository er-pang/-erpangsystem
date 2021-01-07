<template>
  <div>
    <el-button type="success" size="mini" @click="pass">同意</el-button>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Payfor");

export default {
  props:['ids'],
  methods:{
    ...mapActions(['doPayfor','getPayfors']),
    pass(){
      this.doPayfor({_id:this.ids,statc:true,yes_date:new Date().toLocaleDateString().replace('/','-').replace('/','-')});
      this.getPayfors(1);
    }
  }
};
</script>

<style>
</style>
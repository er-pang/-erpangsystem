<template>
  <el-button size="mini" type="danger"  @click="onsubmit(ids)">删除</el-button>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Admin");

export default {
  props:['ids'],
  methods: {
    ...mapActions(["deleteAdmin",'getAdmins']),

    async onsubmit(data) {
      const sta = await this.deleteAdmin({_id:data});
      if (sta.status) {
        this.$message({
          message: "删除成功",
          type: "success",
        });
        this.getAdmins();
      }
    },
  },
};
</script>

<style>
</style>
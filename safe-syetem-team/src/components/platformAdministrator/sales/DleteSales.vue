<template>
  <div>
    <el-button size="mini" type="danger" @click="onsubmit(ids)">删除</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Sales");

export default {
  props: ["ids"],
  methods: {
    ...mapActions(["deleteSales", "getSales"]),

    async onsubmit(data) {
      const sta = await this.deleteSales({ _id: data });
      if (sta.status) {
        this.$message({
          message: "删除成功",
          type: "success",
        });
        this.getSales();
      }
    },
  },
};
</script>

<style>
</style>
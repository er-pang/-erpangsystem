<template>
  <div>
    <el-button
      type="info"
      @click="
        dialogVisible = true;
      "
      >新增销售</el-button
    >
    <el-dialog
      title="新增销售"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="onsubmit(form)">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Sales");

export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        username: "",
        password: "",
        role: "0",
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    ...mapActions(["addSales","getSales"]),
    async onsubmit(data) {
      const sta =await this.addSales(data);
      if (sta.status) {
        this.$message({
          message: "新增成功",
          type: "success",
        });
        this.getSales();
        this.dialogVisible=false;
      }
      this.form={role:'0'};
    },
  },
};
</script>

<style>
</style>
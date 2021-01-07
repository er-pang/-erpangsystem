<template>
  <div>
    <el-button size="mini" type="info" @click="update">编辑</el-button>
    <el-dialog
      title="修改管理"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="modifyData" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="modifyData.name"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="modifyData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="modifyData.password"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-switch v-model="modifyData.power"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" 
            >提交修改</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Sales");

export default {
  props: ["ids"],
  data() {
    return {
      dialogVisible: false,
      modifyData: {
        _id: "",
        name: "",
        username: "",
        password: "",
        power: true,
        role: "0",
      },
    };
  },
  methods: {
    ...mapActions(["getOneSales", "modifySales", "getSales"]),
    async update() {
      const { statc } = await this.getOneSales({ _id: this.ids });

      this.modifyData._id = statc._id;
      this.modifyData.name = statc.name;
      this.modifyData.username = statc.username;
      this.modifyData.password = statc.password;
      this.modifyData.power = statc.power;
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    onSubmit() {
      this.modifySales(this.modifyData);
      this.$message({
        message: "修改成功",
        type: "success",
      });
      this.getSales();
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="updatestu">
    <el-form ref="form" label-width="140px">
      <el-form-item label>
        <label slot="label">管理员账号:</label>
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label>
        <label slot="label">管理员密码:</label>
        <el-input
          v-model="password"
          :type="passForm.show.new ? 'text' : 'password'"
        ></el-input>
      </el-form-item>
      <el-form-item label>
        <label slot="label">管理员姓名:</label>
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :plain="true"
          >确定</el-button
        >
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("updateadmin");
export default {
  data() {
    return {
      passForm: {
        show: {
          check: false,
        },
      },
      username: "",
      password: "",
      name: "",
    };
  },
  async mounted() {
    let id = localStorage.login;
    const admin = await this.getadmin({ _id: id });
    console.log(admin);
    this.username = admin.statc.username;
    this.password = admin.statc.password;
    this.name = admin.statc.name;
  },
  methods: {
    ...mapActions(["updateadmin", "getadmin"]),
    async onSubmit() {
      let _id = localStorage.login;
      //   console.log(this.username, this.password, _id,this.name);
      const data = await this.updateadmin({
        _id,
        username: this.username,
        password: this.password,
        name: this.name,
      });
      if (data.status) {
        this.$message({
          message: "恭喜你，修改成功",
          type: "success",
        });
        localStorage.removeItem("token");
        localStorage.removeItem("login");
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } else {
        this.$message.error("修改失败");
      }
    },
  },
};
</script>

<style lang='scss'>
.updatestu {
  width: 400px;
  margin: 100px auto 0;
  .el-form {
    // border: 1px solid red;
  }
  .el-form-item__label {
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 3px;
  }
}
</style>
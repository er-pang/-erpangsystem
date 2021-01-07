<template>
  <div class="login">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎登录二胖的保险管理系统</h3>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-radio v-model="form.radio" label="1">平台管理员</el-radio>
        <el-radio v-model="form.radio" label="0">销售员</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>

    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-button :plain="true" style="display: none">成功</el-button>
    <el-button :plain="true" style="display: none">错误</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        radio: "1",
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" },
        ],
      },
      dialogVisible: false,
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data } = await this.$apis.admins.login({
            username: this.form.username,
            password: this.form.password,
            role: this.form.radio,
          });
          console.log(data);
          if (data.status) {
            if (data.status == 1) {
              this.$message({
                showClose: true,
                message: "恭喜你，登陆成功",
                type: "success",
              });
            localStorage.token = data.token
              localStorage.login = data._id;
              if (this.form.radio == "0") {
                setTimeout(() => {
                  this.$router.push("/system_x");
                }, 2000);
              } else {
                if (this.form.radio == "1") {
                  setTimeout(() => {
                    this.$router.push("/system_g");
                  }, 2000);
                }
              }
            } else {
              this.$message({
                showClose: true,
                message: "登陆失败！没有权限,请联系您的管理员",
                type: "warning",
              });
            }
          } else {
            this.$message({
              showClose: true,
              message: "登陆失败！请耐心检查",
              type: "error",
            });
          }
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" >
.login {
  .el-button--primary {
    background-color: rgb(197, 136, 136);
    border: rgb(197, 136, 136);
  }
  .el-button--primary:hover,
  .el-button--primary:focus,
  .el-button--primary:active {
    background: rgb(197, 136, 136);
    border-color: rgb(197, 136, 136);
    color: #ffffff;
    outline: none;
  }
  .login-title {
    margin: 0 auto 40px 50px !important;
  }
  .el-button {
    padding: 12px 80px;
  }
  .goregister {
    color: rgb(197, 136, 136);
    font-weight: bolder;
  }
  .el-link.el-link--primary {
    color: rgb(197, 136, 136);
  }
  .el-radio__inner:hover {
    border-color: rgb(197, 136, 136);
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: rgb(197, 136, 136);
    background: rgb(197, 136, 136);
  }
  .login-box {
    border: 1px solid #dcdfe6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 0px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px rgb(197, 136, 136);
  }
  .el-input__inner:focus {
    outline: none;
    border-color: rgb(197, 136, 136);
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: rgb(197, 136, 136);
  }
}
</style>
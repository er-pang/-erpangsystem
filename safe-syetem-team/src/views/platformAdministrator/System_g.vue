<template>
  <div>
    <el-container id="system">
      <el-container>
        <el-aside width="200px"><TabControl></TabControl></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    
    </el-container>
    <div class="out" @click="gologin">退出</div>
    <el-button :plain="true" style="display: none"></el-button>
  </div>
</template>

<script>
import TabControl from "../../components/platformAdministrator/TabControl_g.vue";

export default {
  components: {
    TabControl,
  },
   methods: {
    gologin() {
      localStorage.removeItem("token");
      localStorage.removeItem("login");
      this.$message({
        message: "退出成功！",
        type: "success",
      });
      setTimeout(() => {
        this.$router.push("/login");
      }, 1500);
    },
 },
};
</script>

<style lang='scss'>
.out {
    position: fixed;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(240, 233, 233, 0.116);
    bottom: 150px;
    border: 2px solid rgb(231, 161, 161);
    right: 30px;
    line-height: 60px;
    text-align: center;
    color: rgb(177, 141, 141);
    font-weight: bolder;
    cursor: pointer;
  }
body {
  margin: 0px;
}
#system {
  height: 100vh;
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
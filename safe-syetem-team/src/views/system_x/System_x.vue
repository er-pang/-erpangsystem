<template>
  <div id="system_x">
    <el-container>
      <el-container style="border: 1px solid #eee">
        <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
          <el-menu  :router="true">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>保险订单管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="/system_x/getsafeorders"
                  >订单列表</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-user-solid"></i>客户管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="/system_x/getcustomer"
                  >客户列表</el-menu-item
                >
                <el-menu-item index="/system_x/addcustomer"
                  >新增客户</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>理赔管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="/system_x/getpayforlists"
                  >理赔列表</el-menu-item
                >
                <el-menu-item index="/system_x/addpayforlists"
                  >新增理赔</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"
                ><i class="el-icon-s-custom"></i>个人中心</template
              >
              <el-menu-item-group>
                <el-menu-item index="/system_x/getuser"
                  >修改个人信息</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        <div class="out" @click="gologin">退出</div>
        <el-button :plain="true" style="display: none"></el-button>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
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
#system_x{
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
  min-height: 91vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: 100vh;
}
  min-height:100vh
}

body {
  margin: 0px;
}
</style>
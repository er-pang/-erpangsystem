<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item :index="item.hash" v-for="item in menu" :key="item._id">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          _id: "1",
          title: "管理员管理",
          icon: "el-icon-s-custom",
          hash: "/system_g/adminlist",
        },
        {
          _id: "2",
          title: "销售员管理",
          icon: "el-icon-user-solid",
          hash: "/system_g/saleslist",
        },
        {
          _id: "3",
          title: "保险分类管理",
          icon: "el-icon-menu",
          hash: "/system_g/insuranceClassificationManagement",
        },
        {
          _id: "4",
          title: "保险产品管理",
          icon: "el-icon-s-grid",
          hash: "/system_g/insuranceProductManagement",
        },
        {
          _id: "5",
          title: "保险订单管理",
          icon: "el-icon-s-order",
          hash: "/system_g/insuranceOrderManagement",
        },
        {
          _id: "6",
          title: "客户管理",
          icon: "el-icon-s-data",
          hash: "/system_g/customer",
        },
        {
          _id: "7",
          title: "理赔管理",
          icon: "el-icon-message-solid",
          hash: "/system_g/payfor",
        },
      ],
      tabPosition: "left",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
</style>
<template>
  <div id="orderNav">
    <el-tabs type="card">
      <el-tab-pane label="全部订单"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
#orderNav {
  margin-top: 20px;
}
.cell {
  text-align: center;
}
.el-tabs__item {
  background-color: teal;
}
.el-tabs__item.is-active {
  color: white;
}
</style>
<template>
  <div id="saleslist">
    <div class="headcontrol">
      <SearchAdmin></SearchAdmin>
    </div>

    <el-table :data="customers" stripe style="width: 100%">
      <el-table-column prop="username" label="账号"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column label="查看">
        <template slot-scope="scope">
          <div class="handle">
            <AllOrders :ids="scope.row._id"></AllOrders>
            <PayforOrders></PayforOrders>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <ChangePage></ChangePage>
  </div>
</template>

<script>
import SearchAdmin from "../../../components/platformAdministrator/customer/SearchCustomer.vue";
import ChangePage from "../../../components/platformAdministrator/customer/ChangePage.vue";
import AllOrders from "../../../components/platformAdministrator/customer/AllOrders.vue";
import PayforOrders from "../../../components/platformAdministrator/customer/PayforOrders.vue";

import {createNamespacedHelpers} from 'vuex';
const {mapActions,mapState} = createNamespacedHelpers('Customer');

export default {
  components: {
    SearchAdmin,
    ChangePage,
    AllOrders,
    PayforOrders,
  },
  created(){
    this.getCustomers();
  },
  computed:{
    ...mapState(['customers'])
  },
  methods:{
     ...mapActions(['getCustomers'])
  }
};
</script>

<style lang='scss'>
#saleslist {
  .cell {
    text-align: center;
  }
  .handle {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      display: inline-block;
      margin: 5px 0px;
      text-align: left;
    }
  }
  .headcontrol {
    display: flex;
    margin-bottom: 5px;
  }
}
</style>
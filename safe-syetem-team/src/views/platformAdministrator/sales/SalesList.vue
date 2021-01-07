<template>
  <div id="saleslist">
    <div class="headcontrol">
      <AddAdmin></AddAdmin>
      <SearchAdmin></SearchAdmin>
    </div>

    <el-table :data="sales" stripe style="width: 100%">
      <el-table-column prop="username" label="账号"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag size="medium" v-show="scope.row.power">正常</el-tag>
          <el-tag
            size="medium"
            v-show="scope.row.power == false"
            style="background: orange; color: #fff"
            >禁用</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="handles">
            <CustomerList></CustomerList>
            <ModifyAdmin :ids="scope.row._id"></ModifyAdmin>
            <DeleteAdmin :ids="scope.row._id"></DeleteAdmin>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <ChangePage></ChangePage>
  </div>
</template>

<script>
import AddAdmin from "../../../components/platformAdministrator/sales/AddSales.vue";
import DeleteAdmin from "../../../components/platformAdministrator/sales/DleteSales.vue";
import SearchAdmin from "../../../components/platformAdministrator/sales/SearchSales.vue";
import ModifyAdmin from "../../../components/platformAdministrator/sales/ModifySales.vue";
import CustomerList from '../../../components/platformAdministrator/sales/CustomerList.vue'
import ChangePage from "../../../components/platformAdministrator/sales/ChangePage.vue";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState ,mapMutations} = createNamespacedHelpers("Sales");

export default {
  components: {
    AddAdmin,
    DeleteAdmin,
    SearchAdmin,
    ModifyAdmin,
    CustomerList,
    ChangePage,
  },
  created() {
    this.getSales();
  },
  computed: {
    ...mapState(["sales", "datatotal", "pagetotal", "pagedata"]),
  },
  methods: {
    ...mapMutations(['changePageSize','changeCurrentPage','search']),
    ...mapActions(["getSales"]),
  },
};
</script>

<style lang='scss'>
#saleslist {
  .cell {
    text-align: center;
  }
  .handles {
    & > div {
      display: inline-block;
      margin: 0px 5px;
      text-align: left;
    }
  }
  .headcontrol {
    display: flex;
    margin-bottom: 5px;
  }
}
</style>
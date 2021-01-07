<template>
  <div id="adminlist">
    <div class="headcontrol">
      <AddAdmin></AddAdmin>
      <SearchAdmin></SearchAdmin>
    </div>

    <el-table :data="admins" stripe style="width: 100%">
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
          <div class="handle">
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
import AddAdmin from "../../../components/platformAdministrator/admin/AddAdmin.vue";
import DeleteAdmin from "../../../components/platformAdministrator/admin/DleteAdmin.vue";
import SearchAdmin from "../../../components/platformAdministrator/admin/SearchAdmin.vue";
import ModifyAdmin from "../../../components/platformAdministrator/admin/ModifyAdmin.vue";
import ChangePage from "../../../components/platformAdministrator/admin/ChangePage.vue";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState ,mapMutations} = createNamespacedHelpers("Admin");

export default {
  components: {
    AddAdmin,
    DeleteAdmin,
    SearchAdmin,
    ModifyAdmin,
    ChangePage,
  },
  created() {
    this.getAdmins();
  },
  computed: {
    ...mapState(["admins", "datatotal", "pagetotal", "pagedata"]),
  },
  methods: {
    ...mapMutations(['changePageSize','changeCurrentPage','search']),
    ...mapActions(["getAdmins"]),
  },
};
</script>

<style lang='scss'>
#adminlist {
  .cell {
    text-align: center;
  }
  .handle {
    & > div {
      display: inline-block;
      margin: 0 5px;
      text-align: left;
    }
  }
  .headcontrol {
    display: flex;
    margin-bottom: 5px;
  }
}
</style>
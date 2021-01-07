<template>
  <div class="table">
    <div id="search">
      <!-- <el-input
        v-model="search.value"
        placeholder="输入关键字搜索"
        prefix-icon="el-icon-search"
      /> -->
      <!--   v-model.lazy="newSearch.value" -->
    </div>
    <el-table :data="payforlists" stripe border style="width: 100%">
      <el-table-column prop="safeorder_id._id" label="保险订单" width="220px">
      </el-table-column>
      <el-table-column prop="users_id.name" label="理赔人" width="220px">
      </el-table-column>
      <el-table-column prop="resaon" label="理赔原因" width="220px">
      </el-table-column>
      <!-- <el-table-column label="理赔凭证" width="120px"> </el-table-column> -->
      <el-table-column label="理赔凭证" width="50px">
        <template slot-scope="scope">
          <el-image
            style="width: 30px; height: 30px"
            :src="
              'http://localhost:3000/images/' +
              (scope.row.pay_img != undefined && scope.row.pay_img != ''
                ? scope.row.pay_img
                : '1607421303721-u=464430531,1780853103&fm=26&gp=0.jpg')
            "
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="理赔申请日期" width="140px">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{
            scope.row.sq_date == undefined || scope.row.sq_date == ""
              ? "暂无"
              : scope.row.sq_date
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="理赔日期" width="140px">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{
            scope.row.yes_date == undefined || scope.row.yes_date == ""
              ? "暂无"
              : scope.row.yes_date
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="statc" label="理赔状态" width="140px">
        <template slot-scope="scope">
          <el-tag size="medium">{{
            scope.row.statc == true
              ? "理赔成功"
              : scope.row.safeorder_id.statc == true
              ? "理赔失败"
              : scope.row.statc == false
              ? "理赔失败"
              : "理赔受理中"
          }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "payforlists"
);
export default {
  mounted() {
    this.getPayforlists();
  },
  computed: {
    ...mapState(["payforlists", "pageData"]),
    lists() {
      console.log(this.payforlists);
      return this.payforlists;
    },
  },
  methods: {
    ...mapActions(["getPayforlists", "deletePayforlist"]),
    ...mapMutations(["changeSearch"]),
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push("/system_x/updatepayforlist/" + row._id);
    },
    handleDelete(index, row) {
      this.deletePayforlist(row._id);
    },
  },
};
</script>

<style>
.cell {
  text-align: center;
}
#search {
  margin-bottom: 20px;
  text-align: left;
}
#search > .el-input {
  width: 300px;
}
</style>
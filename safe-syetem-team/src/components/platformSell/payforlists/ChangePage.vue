<template>
  <div class="page">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="newPageData.currentPage"
      :page-sizes="[4, 8, 12]"
      :page-size="newPageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="newPageData.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "payforlists"
);
export default {
  computed: {
    ...mapState(["pageData"]),
    newPageData: {
      get() {
        return this.pageData;
      },
      set(val) {
        console.log(val);
        this.changePageData(val);
      },
    },
  },
  methods: {
    ...mapMutations(["changePageData"]),
    handleSizeChange(val) {
      this.newPageData.pageSize= val;
        //  console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.newPageData.currentPage = val;
      //   console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style>
.page {
  margin-top: 20px;
}
</style>
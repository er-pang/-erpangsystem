<template>
  <div class="paging">
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[8, 6, 4, 2]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="bothListTotal"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "classification"
);
export default {
  computed: {
    ...mapState([
      "bothListTotal",
      "currentPage",
      "pageSize",
      "value",
      "dataBoth",
    ]),
  },
  methods: {
    ...mapMutations(["changeCurrentPage", "changePageSize"]),
    ...mapActions(["getSafeType"]),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.changePageSize(val);
      this.getSafeType({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.value,
      });
    },
    handleCurrentChange(val) {
      console.log(`第 ${val}页 `);
      this.changeCurrentPage(val);
      this.getSafeType({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.value,
      });
    },
  },
};
</script>

<style>
.paging {
  width: 100%;
}
.paging > div {
  margin: auto;
  text-align: center;
}
</style>
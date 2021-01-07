<template>
  <div id="both">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="产品名称">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.type_id.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="保险价格">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.price }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="投保人">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.holder_id.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="受理人">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.acceptor_id.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="下单时间">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.date }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="是否退保">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.tb }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :plain="true"
            @click="handleEdit(scope.row._id)"
            >同意</el-button
          >
          <el-button
            size="mini"
            type="danger"
            :plain="true"
            @click="handleDelete(scope.row._id)"
            >拒绝</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("order");
export default {
  data() {
    return {
      valueSmall: "未完成",
    };
  },
  created() {
    this.getSafeorders({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      value: this.value,
    });
  },
  computed: {
    ...mapState(["currentPage", "pageSize", "value", "dataBoth"]),
    // 获取所有数据
    tableData() {
      return this.dataBoth;
    },
  },
  methods: {
    ...mapActions(["getSafeorders", "changeSafeorders"]),
    // 同意
    async handleEdit(_id) {
      const data = await this.changeSafeorders({ _id, statc: true });
      if (data.data.status) {
        this.$message("操作同意成功");
        this.getSafeorders({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          value: this.value,
        });
      } else {
        this.$message("操作同意失败");
      }
    },
    // 拒绝
    async handleDelete(_id) {
      const data = await this.changeSafeorders({ _id, statc: false });
      if (data.data.status) {
        this.$message("操作拒绝成功");
        this.getSafeorders({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          value: this.value,
        });
      } else {
        this.$message("操作拒绝失败");
      }
    },
  },
};
</script>

<style lang='scss'>
</style>
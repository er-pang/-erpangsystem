<template>
  <div>
    <el-table :data="tableData1" style="width: 100%">
      <el-table-column label="上线时间">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="保险名称">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="toIdType(scope.row._id)">
            修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            :plain="true"
            @click="delTpye(scope.row._id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改弹出框 -->
    <el-dialog
      title="保险名称更改"
      width="20%"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="请输入更改名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :plain="true" @click="changeTpye(form)">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "classification"
);
export default {
  created() {
    this.getSafeType({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      value: this.value,
    });
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        date: "",
      },
    };
  },
  watch: {
    dialogFormVisible(val) {
      console.log(val);
    },
  },
  computed: {
    ...mapState(["currentPage", "pageSize", "value", "dataBoth"]),
    tableData1() {
      if (this.dataBoth.length < 1) {
        return [];
      } else {
        return this.dataBoth;
      }
    },
  },
  methods: {
    ...mapActions([
      "getSafeType",
      "toIdSateType",
      "changeSateType",
      "delSafeType",
    ]),
    // 通过id查找保险分类
    async toIdType(_id) {
      this.dialogFormVisible = true;
      const data = await this.toIdSateType(_id);
      this.form.name = data.data[0].name;
      this.form._id = data.data[0]._id;
    },
    //修改保险分类数据
    async changeTpye({ name, _id }) {
      this.dialogFormVisible = false;
      const data = await this.changeSateType({ name, _id });
      if (data.data.status) {
        this.$message("修改成功");
        await this.getSafeType({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          value: this.value,
        });
      } else {
        this.$message("修改成功");
      }
    },
    // 删除保险分类数据
    async delTpye(_id) {
      const data = await this.delSafeType(_id);
      if (data.data.status) {
        this.$message("删除成功");
        await this.getSafeType({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          value: this.value,
        });
      } else {
        this.$message("删除失败");
      }
    },
  },
};
</script>

<style>
.cell {
  text-align: center;
}
</style>
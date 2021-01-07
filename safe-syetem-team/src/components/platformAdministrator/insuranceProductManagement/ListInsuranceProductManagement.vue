<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="保险类型">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type_id.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="保险名称">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
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
      <el-table-column label="保险简介">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.content }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" :plain="true" @click="openAdd(scope.row._id)">
            修改
          </el-button>
          <el-button
            size="mini"
            :plain="true"
            type="danger"
            @click="delMsg(scope.row._id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改弹出框 -->
    <el-dialog title="保险更改" width="30%" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-select v-model="form.type_id" placeholder="修改保险类型为">
          <el-option
            v-for="(item, index) in bothList"
            :key="index"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
        <el-form-item label="修改保险名称为">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="修改保险价格为">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="修改保险简介为">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeMsgOne(form)">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "prodyct"
);
export default {
  created() {
    this.getSafeMsg({
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
        price: "",
        content: "",
        type_id: "",
        // 图片数据
        good_img: "",
      },
      bothList: [],
    };
  },
  computed: {
    ...mapState(["currentPage", "pageSize", "value", "dataBoth"]),
    // 获取所有数据
    tableData() {
      if (this.dataBoth.length < 1) {
        return [];
      } else {
        return this.dataBoth;
      }
    },
  },
  methods: {
    ...mapActions([
      "getSafeMsg",
      "getAllSafetypes",
      "toIdMsg",
      "changeMsg",
      "delSafeMsg",
    ]),
    // 获得所有保险类型和需要修改的数据
    async openAdd(_id) {
      this.dialogFormVisible = true;
      this.bothList = await this.getAllSafetypes();
      const data = await this.toIdMsg(_id);
      this.form = data.data[0];
    },
    // 修改数据
    async changeMsgOne(form) {
      this.dialogFormVisible = false;
      const data = await this.changeMsg(form);
      if (data.data.status) {
        this.$message("修改成功");
        await this.getSafeMsg({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          value: this.value,
        });
      } else {
        this.$message("修改失败");
      }
    },
    // 删除数据
    async delMsg(_id) {
      const data = await this.delSafeMsg(_id);
      if (data.data.status) {
        this.$message("删除成功");
        await this.getSafeMsg({
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
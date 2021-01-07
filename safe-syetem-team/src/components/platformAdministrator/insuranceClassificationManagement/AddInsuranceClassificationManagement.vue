<template>
  <div id="add">
    <el-button
      type="primary"
      icon="el-icon-circle-plus-outline"
      @click="dialogFormVisible = true"
    >
      添加
    </el-button>
    <el-dialog
      title="添加保险分类"
      width="20%"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="保险分类名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button :plain="true" @click="addOneSafeType">确定</el-button>
        <!-- <el-button type="primary" @click="addOneSafeType"> 确 定 </el-button> -->
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
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        date: "",
      },
      getBoth: {
        currentPage: 1,
        pageSize: 10,
        value: "",
      },
    };
  },
  methods: {
    ...mapActions(["addSafeType", "getSafeType"]),
    // 添加数据
    async addOneSafeType() {
      var time = new Date().toLocaleString();
      this.form.date = time;
      const { data } = await this.addSafeType(this.form);
      this.dialogFormVisible = false;
      if (data.status) {
        this.$message("添加成功");
        await this.getSafeType(this.getBoth);
        this.form.name = "";
      } else {
        this.$message("添加失败");
      }
    },
  },
};
</script>

<style>
#add {
  float: left;
}
.el-button--primary {
  margin: 20px 0px 20px 0px;
}
</style>
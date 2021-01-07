<template>
  <div id="customer-div">
    <div style="margin: 15px 0px">
      <el-input
        placeholder="请输入内容"
        v-model="sertch.value"
        class="input-with-select"
        @change="get()"
      >
      </el-input>
    </div>

    <!-- 列表区域 -->
    <div>
      <el-table :data="UsersData" border style="width: 100%">
        <el-table-column fixed prop="username" label="账号" width="160">
        </el-table-column>
        <el-table-column fixed prop="name" label="姓名" width="160">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="160"> </el-table-column>
        <el-table-column prop="sex" label="性别" width="160"> </el-table-column>
        <el-table-column prop="phone" label="电话号码" width="160">
        </el-table-column>
        <el-table-column prop="sfz" label="身份证" width="270">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="170">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="$router.push('/system_x/updatecustomer/' + scope.row._id)"
              >修改</el-button
            >
            <el-button type="text" size="small" @click="del(scope.row._id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 5, 7, 10]"
          :page-size="3"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState: mapState,
  mapMutations: mapMutations,
  mapActions: mapActions,
} = createNamespacedHelpers("Users");
export default {
  data() {
    return {
      sertch: {
        pageSize: "3",
        currentPage: "1",
        value: "",
      },
    };
  },

  // 生命函数
  created() {
    this.getUsers(this.sertch);
  },
  // 数据
  computed: {
    ...mapState(["UsersData", "pageSize", "total", "currentPage", "pages"]),
  },
  // 函数
  methods: {
    ...mapActions(["getUsers", "deleteUser"]),
    // 分页方法（选择当前页显示几条数据）
    handleSizeChange(val) {
      this.sertch.pageSize = val;
      this.getUsers(this.sertch);
    },
    // 分页方法（操作页码的方法）
    handleCurrentChange(val) {
      this.sertch.currentPage = val;
      this.getUsers(this.sertch);
    },
    // 查询的方法
    get() {
      console.log(this.sertch);
      this.getUsers(this.sertch);
    },
    // 删除方法
    del(_id) {
      this.deleteUser({ _id });
      this.getUsers(this.sertch);
    },
  },
};
</script>

<style lang="scss">
#customer-div {
  .input-with-select {
    width: 300px;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
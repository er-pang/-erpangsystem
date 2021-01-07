<template>
  <div id="safe-div">
    <!-- 搜索区域 -->
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
      <el-table :data="safeordersData" border style="width: 100%">
        <el-table-column fixed prop="type_id.name" label="保险项目" width="180">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="160">
        </el-table-column>
        <el-table-column prop="holder_id.name" label="投保人" width="160">
        </el-table-column>
        <el-table-column prop="acceptor_id.name" label="受理人" width="160">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>

        <el-table-column label="是否退保">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.tb"
              active-color="#13ce66"
              inactive-color="#ff4949"
              v-if="
                (scope.row.tb && scope.row.statc) ||
                (scope.row.tb && scope.row.statc == false)
              "
              disabled
            >
            </el-switch>
            <el-switch
              v-model="scope.row.tb"
              active-color="#13ce66"
              inactive-color="#ff4949"
              v-else-if="(scope.row.tb && scope.row.statc == undefined)||scope.row.tb==false"
              @change="updatatb(scope.row._id, scope.row.tb)"
            >
            </el-switch> 
           
            
            </template
        ></el-table-column>
        <el-table-column label="退保情况" width="150">
          <template slot-scope="scope">
            <span v-if="scope.row.tb && scope.row.statc">已退保 </span>
            <span v-else-if="scope.row.tb && scope.row.statc == false"
              >退保失败</span
            >
            <span v-else-if="scope.row.tb && scope.row.statc == null"
              >退保中</span
            >
            <span v-else-if="scope.row.tb==false">未退保</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="155">
          <template slot-scope="scope">
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
          :page-sizes="[3, 5, 7, 10]"
          :page-size="3"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals"
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
} = createNamespacedHelpers("safeorders");
export default {
  data() {
    return {
      value: true,
      input: "",
      sertch: {
        pageSize: "3",
        currentPage: "1",
        value: "",
      },
    };
  },

  // 生命函数
  created() {
    this.getSafeorders(this.sertch);
    // console.log(this.safeordersData);
  },
  // 数据
  computed: {
    ...mapState([
      "safeordersData",
      "pageSize",
      "totals",
      "currentPage",
      "pages",
    ]),
  },
  // 函数
  methods: {
    ...mapActions(["getSafeorders", "deleteSafeorder", "updateSafeorder"]),

    // 分页方法（选择当前页显示几条数据）
    handleSizeChange(val) {
      this.sertch.pageSize = val;
      this.getSafeorders(this.sertch);
    },
    // 分页方法（操作页码的方法）
    handleCurrentChange(val) {
      this.sertch.currentPage = val;
      this.getSafeorders(this.sertch);
    },
    // 查询的方法
    get() {
      this.getSafeorders(this.sertch);
    },
    // 删除方法
    del(_id) {
      this.deleteSafeorder({ _id });
      this.getSafeorders(this.sertch);
    },
    updatatb(_id, tb) {
      //   console.log(_id,tb);
      this.updateSafeorder({ _id, tb });
    },
  },
};
</script>

<style lang="scss">
#safe-div {
  .input-with-select {
    width: 300px;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
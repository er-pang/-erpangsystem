<template>
  <div>
    <el-button size="mini" type="primary" @click="dialogVisible = true"
      >所属客户</el-button
    >
    <el-dialog
      title="修改管理"
      :visible.sync="dialogVisible"
      width="60%"
    >
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="username" label="账号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column prop="sex" label="性别"> </el-table-column>
          <el-table-column prop="phone" label="电话"> </el-table-column>
          <el-table-column prop="sfz" label="身份证"> </el-table-column>
        </el-table>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      modifyData: {
        name: "",
        username: "",
        password: "",
        power: true,
        role: "1",
      },
      tableData: [
        {
          username: "123456",
          name: "王小虎",
          age: "23",
          sex: "男",
          phone: "13211111115",
          sfz: "12333333115555555",
        },
        {
          username: "123456",
          name: "王小虎",
          age: "23",
          sex: "男",
          phone: "13211111115",
          sfz: "12333333115555555",
        },
        {
          username: "123456",
          name: "王小虎",
          age: "23",
          sex: "男",
          phone: "13211111115",
          sfz: "12333333115555555",
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style>
</style>
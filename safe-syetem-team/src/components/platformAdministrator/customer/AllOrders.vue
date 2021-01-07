<template>
  <div>
    <el-button size="mini" type="info" @click="showorders"
      >所有保单</el-button
    >
    <el-dialog title="所有保单" :visible.sync="dialogVisible" width="60%">
      <template>
        <el-table :data="allorder" style="width: 100%">
          <el-table-column prop="type_id.name" label="保险类别" width="180">
          </el-table-column>
          <el-table-column prop="price" label="价格" width="180">
          </el-table-column>
          <el-table-column prop="holder_id.name" label="投保人"> </el-table-column>
          <el-table-column prop="acceptor_id.name" label="受理人"> </el-table-column>
          <el-table-column prop="date" label="受理日期"> </el-table-column>

          <el-table-column label="状态">
            <template slot-scope="scope">
                <el-tag size="medium">{{ scope.row.tb&&scope.row.statc==false?'退保中':scope.row.tb&&scope.row.statc? '已退保':'在保'}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-dialog>
  </div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex';
const {mapActions,mapState} = createNamespacedHelpers('Customer');

export default {
  props:['ids'],
  data(){
    return{
      dialogVisible:false,
    }
  },
  computed:{
    ...mapState(['allorder'])
  },
  methods: {
    ...mapActions(['getOneCustomer']),
    showorders(){
      this.getOneCustomer({_id:this.ids});
      this.dialogVisible = true;
    }
  },
};
</script>

<style>
</style>
<template>
  <div>
    <el-button size="mini" type="info" @click="showorders"
      >理赔保单</el-button
    >
    <el-dialog title="理赔保单" :visible.sync="dialogVisible" width="60%">
      <template>
        <el-table :data="payfororder" style="width: 100%">
          <el-table-column prop="safeorder_id.type_id.name" label="保险类别" width="180">
          </el-table-column>
          <el-table-column prop="safeorder_id.price" label="价格" width="180">
          </el-table-column>
          <el-table-column prop="safeorder_id.holder_id.name" label="投保人"> </el-table-column>
          <el-table-column prop="safeorder_id.acceptor_id.name" label="理赔人"> </el-table-column>
          <el-table-column prop="sq_date" label="受理日期"> </el-table-column>

          <el-table-column label="状态">
            <template slot-scope="scope">
                <el-tag size="medium">{{ scope.row.statc==false?'驳回':scope.row.statc? '退保成功':'待审核'}}</el-tag>
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
    ...mapState(['payfororder'])
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
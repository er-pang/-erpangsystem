<template>
  <div id="payfor">
    <Tab></Tab>
    <el-table :data="payfors" stripe style="width: 100%">
      <el-table-column prop="safeorder_id.type_id.name" label="产品名称"> </el-table-column>
      <el-table-column prop="users_id.name" label="理赔人"> </el-table-column>
      <el-table-column prop="reason" label="原因"> </el-table-column>
      <el-table-column prop="sq_date" label="提交日期"> </el-table-column>
      <el-table-column  label="状态"> 
        <template slot-scope="scope">
                <el-tag size="medium">{{ scope.row.statc==true?'已通过':scope.row.statc==undefined?'待审批':'已驳回'}}</el-tag>
            </template>
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <div class="handle" >
            <Detail :ids='scope.row._id'></Detail>
            <Pass :ids='scope.row._id'></Pass>
            <Refuse :ids='scope.row._id'></Refuse>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <ChangePage></ChangePage>
  </div>
</template>

<script>
import Tab from '../../../components/platformAdministrator/payfor/TabBtn.vue'
import ChangePage from "../../../components/platformAdministrator/payfor/ChangePage.vue";
import Detail from "../../../components/platformAdministrator/payfor/Detail.vue";
import Pass from "../../../components/platformAdministrator/payfor/Pass.vue";
import Refuse from "../../../components/platformAdministrator/payfor/Refuse.vue";

import {createNamespacedHelpers} from 'vuex';
const {mapState,mapActions} = createNamespacedHelpers('Payfor');

export default {
  components: {
    Tab,
    ChangePage,
    Detail,
    Pass,
    Refuse
  },
  created(){
    this.getPayfors(1);
  },
  computed:{
    ...mapState(['payfors'])
  },
  methods:{
    ...mapActions(['getPayfors'])
  }
};
</script>

<style lang='scss'>
#payfor {
  .cell {
    text-align: center;
  }
  .handle {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      display: inline-block;
      text-align: left;
      margin: 5px 0px;

    }
  }
  .headcontrol {
    display: flex;
    margin-bottom: 5px;
  }
}
</style>
<template>
  <div id="detail">
    <el-button size="mini" type="info" @click="showDetail">详情</el-button>
    <el-dialog title="保单详情" :visible.sync="dialogVisible" width="60%">
      <template>
        <el-form ref="onePayfor" :model="onePayfor" label-width="80px" disabled>
          <el-form-item label="保单类别">
            <el-input :value="onePayfor.typename"></el-input>
          </el-form-item>
          <el-form-item label="保单价格">
            <el-input :value="onePayfor.price"></el-input>
          </el-form-item>
          <el-form-item label="投保人">
            <el-input :value="onePayfor.holder"></el-input>
          </el-form-item>
          <el-form-item label="受理人">
            <el-input :value="onePayfor.acceptor"></el-input>
          </el-form-item>
          <el-form-item label="办理日期">
            <el-input :value="onePayfor.order_date"></el-input>
          </el-form-item>
          <el-form-item label="提交日期">
            <el-input :value="onePayfor.sq_date"></el-input>
          </el-form-item>
          <el-form-item label="退保原因">
            <el-input type="textarea" :value="onePayfor.reason"></el-input>
          </el-form-item>
          <el-form-item label="退保凭证"> </el-form-item>
        </el-form>
      </template>
      <div class="demo-image">
        <div class="block" key="cover">
          <el-image
            style="width: 60px; height: 60px; margin: 2px"
            :src="url"
            fit="cover"
            :preview-src-list="srcList"
          ></el-image>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("Payfor");

export default {
  props: ["ids"],
  data() {
    return {
      onePayfor: {
        typename: "",
        price: "",
        holder: "",
        acceptor: "",
        order_date: "",
        sq_date: "",
        reason: "",
      },
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      ],
      dialogVisible: false,
    };
  },
  methods: {
    ...mapActions(["getOnePayfor"]),
    async showDetail() {
      const detail = (await this.getOnePayfor({ _id: this.ids })).statc;
      this.onePayfor.typename = detail.safeorder_id.type_id.name;
      this.onePayfor.price = detail.safeorder_id.price;
      this.onePayfor.holder = detail.safeorder_id.holder_id.name;
      this.onePayfor.acceptor = detail.safeorder_id.acceptor_id.name;
      this.onePayfor.order_date = detail.safeorder_id.date;
      this.onePayfor.sq_date = detail.sq_date;
      this.onePayfor.reason = detail.reason;
      //this.url = this.onePayfor.pay_img;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang='scss'>
#detail {
  .block {
    text-align: left;
    margin-top: -50px;
  }
}
</style>
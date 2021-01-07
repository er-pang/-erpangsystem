<template>
  <div id="add">
    <el-button
      type="primary"
      icon="el-icon-circle-plus-outline"
      @click="openAdd()"
    >
      添加
    </el-button>
    <el-dialog
      title="添加保险产品"
      width="30%"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="保险分类">
          <el-select v-model="form.type_id" placeholder="请选择保险类型">
            <el-option
              v-for="(item, index) in bothList"
              :key="index"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="保险名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保险价格">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保险简介">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>

        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/images/uploadImages"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="good_imgs" :src="good_imgs" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :plain="true" @click="addOneSafeMsg(form)">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState: mapStatePor,
  mapMutations: mapMutationsPor,
  mapActions: mapActionsPor,
} = createNamespacedHelpers("prodyct");
export default {
  data() {
    return {
      // 控制新增弹出框
      dialogFormVisible: false,
      // 新增的数据
      form: {
        name: "",
        price: "",
        content: "",
        type_id: "",
        // 图片数据
        good_img: "",
      },
      good_imgs: "",
      // 放保险分类的数据
      bothList: [],
    };
  },
  computed: {
    ...mapStatePor(["currentPage", "pageSize", "value"]),
  },
  methods: {
    ...mapActionsPor(["addSafeMsg", "getAllSafetypes", "getSafeMsg"]),
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 获取到所有的保险类型
    async openAdd() {
      this.dialogFormVisible = true;
      this.bothList = await this.getAllSafetypes();
    },
    // 图片预览成功以后保存图片地址
    handleAvatarSuccess(res, file) {
      this.good_imgs = "http://localhost:3000/temp/" + res[0].filename;
      this.form.good_img = res[0].filename;
    },
    beforeAvatarUpload(file) {},
    // 新增保险内容
    async addOneSafeMsg(msg) {
      this.dialogFormVisible = false;
      const data = await this.addSafeMsg(msg);
      if (data.status) {
        this.$message("添加成功");
        await this.getSafeMsg({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          value: this.value,
        });
        this.good_imgs = "";
        this.form = {
          name: "",
          price: "",
          content: "",
          type_id: "",
          // 图片数据
          good_img: "",
        };
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
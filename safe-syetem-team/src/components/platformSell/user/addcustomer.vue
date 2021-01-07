<template>
    <div id="addcustomer-div">
        <h1>增加客户</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
                <el-input v-model="form.sfz"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- <el-form-item label="受理人">
                <el-select v-model="form" placeholder="请选择受理人">
                    <el-option label="name" value="shanghai"> </el-option>
                    <el-option label="name" value="beijing"></el-option>
                </el-select>
            </el-form-item> -->

            <el-form-item>
                <el-button type="primary" @click="updata">立即增加</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
    mapState: mapState,
    mapMutations: mapMutations,
    mapActions: mapActions,
} = createNamespacedHelpers("Users");
const { mapActions: mapActionss } = createNamespacedHelpers("Admin");
export default {
    data() {
        return {
            type: "0",
            form: {
                username: "",
                password: "",
                age: "",
                phone: "",
                sfz: "",
                sex: "男",
                name: "",
                region: "",
                // data: [],
            },
        };
    },
    // 生命周期函数
    async created() {
        const data = await this.getallAdmins(this.type);
        console.log(data);
        this.form.data = data;
    },
    // 方法
    methods: {
        ...mapActions(["addUser"]),
        ...mapActionss(["getallAdmins"]),
        // 新增的方法
        updata() {
            this.addUser(this.form);
        },
    },
};
</script>

<style lang="scss" >
#addcustomer-div {
    text-align: center;
    margin: auto;
    width: 300px;
}
</style>

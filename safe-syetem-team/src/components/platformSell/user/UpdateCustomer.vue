<template>
    <div id="updateuser-div">
        <h1>修改客户信息</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="客户id">
                <el-input v-model="_id" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.sex"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
                <el-input v-model="form.sfz"></el-input>
            </el-form-item>
            

            <el-form-item>
                <el-button
                    type="primary"
                    @click="updata(), $router.push('/system_x/getcustomer')"
                    >立即修改</el-button
                >

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
export default {
    props: ["_id"],
    data() {
        return {
            form: {
                age: "",
                name: "",
                phone: "",
                sex: "",
                sfz: "",
            },
        };
    },
    // 生命周期函数
    async created() {
        console.log(this._id);
        const data = await this.getUserById({ _id: this._id });
        this.form = data[0];
    },
    // 方法
    methods: {
        ...mapActions(["updateUser", "getUserById"]),
        // 修改的方法
        updata() {
            this.updateUser(this.form);
        },
    },
};
</script>
<style  lang="scss">
#updateuser-div {
    margin: auto;
    text-align: center;
    width: 300px;
}
</style>

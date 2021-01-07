<template>
    <div id="updatesafe-div">
        <h1>修改订单</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="订单id">
                <el-input v-model="_id" disabled></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="受理人">
                <el-select v-model="form.date" placeholder="请重新选择受理人">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="updata(), $router.push('/system_x/getsafeorders')"
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
} = createNamespacedHelpers("Safeorders");
export default {
    props: ["_id"],
    data() {
        return {
            form: {
                price: "",
                date: "",
            },
        };
    },
    async created() {
        const data = await this.getSafeorderById({ _id: this._id });
        this.form = data;
    },
    methods: {
        ...mapActions(["updateSafeorder", "getSafeorderById"]),
        // 修改的方法
        updata() {
            this.updateSafeorder(this.form);
        },
    },
};
</script>
<style lang="scss" >
#updatesafe-div {
    margin: auto;
    text-align: center;
    width: 300px;
}
</style>

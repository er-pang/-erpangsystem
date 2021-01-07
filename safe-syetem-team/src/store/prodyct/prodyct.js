import apis from '../../http/apis'
export default {
    namespaced: true,
    // 仓库数据
    state: {
        // 总共的数据
        dataBoth: [],
        // 总共的条数
        bothListTotal: 0,
        // 总共的页数
        bothPageSize: 1,
        // 当前在第几页
        currentPage: 1,
        // 每页的条数
        pageSize: 8,
        value: "",
    },
    // 方法
    mutations: {
        getAllBoth(state, value) {
            state.dataBoth = value.safegoods;
            state.bothListTotal = value.total;
        },
        changeCurrentPage(state, value) {
            state.currentPage = value;
        },
        changePageSize(state, value) {
            state.pageSize = value;
        },
        changeValue(state, value) {
            state.value = value;
        }
    },
    // 异步请求
    actions: {
        // 获取保险类型数据
        async getAllSafetypes(context) {
            const { data } = await apis.prodyct.getAllSafetypes();
            return data;
        },
        // 新增保险内容
        async addSafeMsg(context, data1) {
            const { data } = await apis.prodyct.addOne(data1);
            return data;
        },
        // 获取所有数据
        async getSafeMsg(context, data1) {
            const { data } = await apis.prodyct.bothMsg(data1);
            context.commit('getAllBoth', data);
        },
        // 获取修改的数据
        async toIdMsg(context, data1) {
            const data = await apis.prodyct.getOneMsg(data1);
            return data;
        },
        // 修改数据
        async changeMsg(context, data1) {
            const data = await apis.prodyct.changeOne(data1);
            return data;
        },
        // 删除数据
        async delSafeMsg(context, data1) {
            const data = await apis.prodyct.delOne(data1)
            return data;
        },
    },

    modules: {

    }
}
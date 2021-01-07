import apis from '../../http/apis.js'
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
            state.dataBoth = value.safetypes;
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
        // 添加数据
        async addSafeType(context, data) {
            console.log(data)
            return await apis.classification.addOne(data);
        },
        // 获取数据
        async getSafeType(context, data1) {
            const { data } = await apis.classification.bothList(data1);
            context.commit('getAllBoth', data);
        },
        // 通过id查找保险分类
        async toIdSateType(context, data1) {
            const data = await apis.classification.toIdOne(data1);
            return data;
        },
        //修改保险分类数据
        async changeSateType(context, data1) {
            const data = await apis.classification.changeOne(data1);
            return data;
        },
        // 删除保险分类数据
        async delSafeType(context, data1) {
            const data = await apis.classification.delOne(data1)
            return data;
        },
    },
    // 模块
    modules: {

    }
}

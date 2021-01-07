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
        newValue: [],

    },
    // 方法
    mutations: {
        getAllBoth(state, value) {
            console.log(1,value)
            console.log(1111,state.newValue);
            state.newValue = value.data.filter(item => item.tb == true && item.statc == undefined)
            console.log(222,state.newValue);
            state.newValue.forEach(item => {
                if (item.tb) {
                    item.tb = "退保"
                }
            })
            console.log(state.newValue);
            state.dataBoth = state.newValue;
            state.bothListTotal = state.dataBoth.length;
            state.bothPageSize = parseInt(state.dataBoth.length % state.pageSize) + 1
        },
        changeCurrentPage(state, value) {
            state.currentPage = value;
        },
        changePageSize(state, value) {
            state.pageSize = value;
        },
        changeValue(state, value) {
            state.value = value;
        },
    },
    // 异步请求
    actions: {
        // 获取所有数据
        async getSafeorders(context, data1) {
            const { data } = await apis.order.getSafeorders(data1);
            context.commit('getAllBoth', data);
        },
        // 修改数据
        async changeSafeorders(context, data1) {
            const data = await apis.order.changeSafeorders(data1);
            console.log(111, data)
            return data;

        },
    },
    // 模块
    modules: {

    }
}
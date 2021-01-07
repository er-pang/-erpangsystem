import apis from '../../../http/apis'
export default {
    namespaced: true,
    // 数据
    state: {
        safeordersData: [],
        totals: 0,
        pages: 0,
    },
    // 修改数据
    mutations: {
        changeSafeordersData(state, data) {
            state.safeordersData = data.data
            state.totals = data.total;
            state.pages = data.pages;
            console.log(state.safeordersData);
        },
       

    },
    // 异步方法
    actions: {
        // 查询订单
        async getSafeorders(context, datas) {
            const { data } = await apis.safeorders.getSafeorders(datas);
            if (data.data.length) {
                context.commit('changeSafeordersData', data);
            }
        },
        // 删除订单
        async deleteSafeorder(context, datas) {
            const { data } = await apis.safeorders.deleteSafeorder(datas);
            if (data) {
                alert("删除成功")
            } else {
                alert("删除失败")
            }
        },
        // 修改订单
        async updateSafeorder(context, datas) {
            const { data } = await apis.safeorders.updateSafeorder(datas);
            if (data) {
                alert("申请成功")
            } else {
                alert("申请失败")
            }
        },
        // 通过id查找
        async getSafeorderById(context, datas) {
            const { data } = await apis.safeorders.getSafeorderById(datas);
            if (data) {
                return data.statc
            } else {
                alert("查找失败")
            }
        },
    }

}
import apis from '../../../http/apis.js'

export default {
    namespaced: true,
    state: {
        sales: [],
        datatotal: '',
        pagetotal: '',
        pagedata: {
            currentPage: '1',
            pageSize: '5',
            value: '',
            role: '0'
        }
    },
    mutations: {
        showSales(state, data) {
            state.sales = data.data;
            state.datatotal = data.total;
            state.pagetotal = data.pages;
        },
        changePageSize(state, data) {
            state.pagedata.pageSize = data;
        },
        changeCurrentPage(state, data) {
            state.pagedata.currentPage = data;
        },
        search(state, data) {
            state.pagedata.value = data;
        }

    },
    actions: {
        async addSales(context, obj) {
            const { data } = await apis.Admin.addAdmin(obj);
            return data;
        },
        async deleteSales(context, _id) {
            const { data } = await apis.Admin.deleteAdmin(_id);
            return data;
        },
        async getSales(context) {
            const { data } = await apis.Admin.getAdmins(context.state.pagedata);
            context.commit('showSales', data);
        },
        async getOneSales(context, _id) {
            const { data } = await apis.Admin.getOneAdmin(_id);
            return data;
        },
        async modifySales(context, obj) {
            const { data } = await apis.Admin.modifyAdmin(obj);
        }
    },
}
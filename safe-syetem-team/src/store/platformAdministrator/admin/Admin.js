import apis from '../../../http/apis.js'

export default {
    namespaced: true,
    state: {
        admins: [],
        datatotal: '',
        pagetotal: '',
        pagedata: {
            currentPage: '1',
            pageSize: '5',
            value: '',
            role: '1'
        }
    },
    mutations: {
        showAdmins(state, data) {
            state.admins = data.data;
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
        async addAdmin(context, obj) {
            const { data } = await apis.Admin.addAdmin(obj);
            return data;
        },
        async deleteAdmin(context, _id) {
            const { data } = await apis.Admin.deleteAdmin(_id);
            return data;
        },
        async getAdmins(context) {
            const { data } = await apis.Admin.getAdmins(context.state.pagedata);
            context.commit('showAdmins', data)
        },
        async getOneAdmin(context, _id) {
            const { data } = await apis.Admin.getOneAdmin(_id);
            return data;
        },
        async modifyAdmin(context, obj) {
            const { data } = await apis.Admin.modifyAdmin(obj);
        },
        // 获取所有销售
        async getallAdmins(context, datas) {
            const data = await apis.Admin.getallAdmins({ role: datas });
            if (data.data) {
                return data.data
            } else {
                alert("查询失败")
            }
        },
    },
}
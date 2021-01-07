import apis from '../../../http/apis.js'

export default {
    namespaced: true,
    state: {
        customers: [],
        allorder:[],
        payfororder:[],
        datatotal: '',
        pagetotal: '',
        pagedata: {
            currentPage: '1',
            pageSize: '5',
            value: '',
        }
    },
    mutations: {
        showCustomers(state,data){
            state.customers = data.users;
            state.datatotal = data.total;
            state.pagetotal = data.pages;
        },
        changePageSize(state,data){
            state.pagedata.pageSize=data;
        },
        changeCurrentPage(state,data){
            state.pagedata.currentPage = data;
        },
        search(state,data){
            state.pagedata.value = data;
        },
        showAllOrder(state,data){
            state.allorder = data.orders_id;
            state.payfororder = data.payfor_id;
        }

    },
    actions: {
        async getCustomers(context) {
            const { data } = await apis.Customer.getUsers(context.state.pagedata);
            context.commit('showCustomers',data); 

        },
        async getOneCustomer(context,_id){
            const {data} = await apis.Customer.getOneUser(_id);
            context.commit('showAllOrder',data[0]); 
        },
    },
}
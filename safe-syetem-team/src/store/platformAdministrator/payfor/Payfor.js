import apis from '../../../http/apis.js'

export default {
    namespaced: true,
    state: {
        payfors: [],
        datatotal: '',
        pagetotal: '',
        pagedata: {
            currentPage: '1',
            pageSize: '5',
            value: '',
        }
    },
    mutations: {
        showPayfors(state,data){
            state.payfors = data.data;
            state.datatotal = data.total;
            state.pagetotal = data.pages;
        },
        changePageSize(state,data){
            state.pagedata.pageSize=data;
        },
        changeCurrentPage(state,data){
            state.pagedata.currentPage = data;
        },
        tab(state,statc){
            state.payfors = state.payfors.filter(item => {
                if(statc == 1){
                    return item;
                }else if(statc == 2){
                    return item.statc == undefined;
                }else if(statc == 3){
                    return item.statc == true;
                }else{
                    return item.statc == false;
                }
            })
        }
    },
    getter:{

    },
    actions: {
        async getPayfors(context,statc) {
            const { data } = await apis.Payfor.getPayfors(context.state.pagedata);
            context.commit('showPayfors',data); 
            context.commit('tab',statc); 
        },
        async getOnePayfor(context,_id){
            const {data} = await apis.Payfor.getOnePayfor(_id);
            return data;
        },
        async doPayfor(context,statc){
            const {data} = await apis.Payfor.doPayfor(statc);
            console.log(data);
        }
    },
}
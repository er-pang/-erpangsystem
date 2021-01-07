import apis from '../../../http/apis'
export default {
    namespaced: true,
    // 数据
    state: {
        
    },
    // 修改数据
    mutations: {
        
    },
    // 异步方法
    actions: {
       async updateadmin(state,parm){

           const {data} =  await apis.updateadmin.updated(parm)
       return data
        },
        async getadmin(state,parm){
            const {data} =  await apis.updateadmin.getadmin(parm)
          
            return data
        }
    }

}
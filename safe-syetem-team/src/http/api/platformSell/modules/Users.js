import axios from '../../../axios'
const users = {

    // 查询订单
    getUsers(params) {
        // 获取客户
        return axios({
            url: '/users/getUsers',
            method: 'get',
            params
        })

    },
    // 删除客户
    deleteUser(data) {
        console.log(data);
        return axios({
            url: '/users/deleteUser',
            method: 'post',
            data
        })

    },
    // 修改客户
    updateUser(data) {
        // 获取订单
        return axios({
            url: '/users/updateUser',
            method: 'post',
            data
        })
    },
    // 增加客户
    addUser(data) {
        // 获取订单
        return axios({
            url: '/users/addUser',
            method: 'post',
            data
        })
    },
    // ——id查询客户
    getUserById(params) {
        // 获取订单
        return axios({
            url: '/users/getUserById',
            method: 'get',
            params
        })
    },


}
export default users
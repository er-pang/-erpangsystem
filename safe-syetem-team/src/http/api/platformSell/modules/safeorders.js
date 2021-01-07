import axios from '../../../axios'
const orders = {

    // 查询订单
    getSafeorders(params) {
        // 获取订单
        return axios({
            url: '/safeorders/getSafeorders',
            method: 'get',
            params
        })

    },
    // 删除订单
    deleteSafeorder(data) {
        // 获取订单
        return axios({
            url: '/safeorders/deleteSafeorder',
            method: 'post',
            data
        })

    },
    // 修改订单
    updateSafeorder(data) {
        // 获取订单
        return axios({
            url: '/safeorders/updateSafeorder',
            method: 'post',
            data
        })

    },
    // 通过id查找
    getSafeorderById(params) {
        // 获取订单
        return axios({
            url: '/safeorders/getSafeorderById',
            method: 'get',
            params
        })

    },
}
export default orders
import axios from "../../axios";
export default {
    // 所有数据
    getSafeorders(data) {
        return axios({
            url: "/safeorders/getSafeorders",
            method: "get",
            params: data,
        })
    },
    // 修改订单数据
    changeSafeorders(data) {
        return axios({
            url: "/safeorders/updateSafeorder",
            method: "post",
            data
        })
    },
}
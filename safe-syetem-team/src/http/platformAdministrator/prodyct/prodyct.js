import axios from "../../axios";
export default {
    // 获取保险类型数据
    getAllSafetypes() {
        return axios({
            url: "/safetypes/getAllSafetypes",
            method: "get",
        })
    },
    // 新增保险内容
    addOne(data) {
        return axios({
            url: "/safegoods/addSafegood",
            method: "post",
            data: data
        })
    },
    // 获取所有数据
    bothMsg(data) {
        return axios({
            url: "/safegoods/getSafegoods",
            method: "get",
            params: data,
        })
    },
    // 获取修改的数据
    getOneMsg(data) {
        return axios({
            url: "/safegoods/getSafegoodById",
            method: "get",
            params: {
                _id: data
            },
        })
    },
    // 修改数据
    changeOne(data) {
        return axios({
            url: "/safegoods/updateSafegood",
            method: "post",
            data
        })
    },
    // 删除数据
    delOne(data) {
        return axios({
            url: "/safegoods/deleteSafegood",
            method: "post",
            data: {
                _id: data
            }
        })
    },
}
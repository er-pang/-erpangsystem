import axios from "../../axios";
export default {
    // 所有数据
    bothList(data) {
        return axios({
            url: "/safetypes/getSafetypes",
            method: "get",
            params: data,
        })
    },
    // 添加数据
    addOne({ name, date }) {
        console.log(name, date)
        return axios({
            url: "/safetypes/addSafetype",
            method: "post",
            data: {
                name,
                date
            }
        })
    },
    // 通过id查找保险分类
    toIdOne(data) {
        return axios({
            url: "/safetypes/getSafetypeById",
            method: "get",
            params: {
                _id: data
            }
        })
    },
    //修改保险分类数据
    changeOne(data) {
        return axios({
            url: "/safetypes/updateSafetype",
            method: "post",
            data
        })
    },
    // 删除保险分类数据
    delOne(data) {
        return axios({
            url: "/safetypes/deleteSafetype",
            method: "post",
            data: {
                _id: data
            }
        })
    },
}
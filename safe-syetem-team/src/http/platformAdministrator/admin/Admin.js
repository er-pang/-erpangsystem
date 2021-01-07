import axios from '../../axios';

export default {
    adminLogin(data) {
        return axios({
            url: '/admins/login',
            method: 'post',
            data
        })
    },
    addAdmin(data) {
        return axios({
            url: '/admins/addAdmin',
            method: 'post',
            data
        })
    },
    deleteAdmin(data) {
        return axios({
            url: '/admins/deleteAdmin',
            method: 'post',
            data
        })
    },
    getOneAdmin(data) {
        return axios({
            url: '/admins/getAdminById/',
            method: 'get',
            params: data
        })
    },
    modifyAdmin(data) {
        return axios({
            url: '/admins/updateAdmin',
            method: 'post',
            data
        })
    },
    getAdmins(data) {
        return axios({
            url: '/admins/getAdmins',
            method: 'get',
            params: data
        })
    },
    //获取所有销售
    getallAdmins(params) {
        return axios({
            url: '/admins/getallAdmins',
            method: 'get',
            params: params
        })
    }
}
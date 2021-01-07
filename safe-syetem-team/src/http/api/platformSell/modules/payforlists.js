import axios from '../../../axios';
import {
    PAYFORLISTS
} from '../../../modules/consts';
export default {
    //添加理赔订单
    addPayforlist(data) {
        return axios({
            url: PAYFORLISTS + '/addPayforlists',
            method: 'post',
            data
        })
    },

    //获取理赔订单
    getPayforlists(params) {
        return axios({
            url: PAYFORLISTS + '/getPayforlists',
            method: 'get',
            params
        })
    },
    deletePayforlist(data) {
        return axios({
            url: PAYFORLISTS + '/deletePayforlist',
            method: 'post',
            data
        })
    },
    getPayforlistById(params) {
        return axios({
            url: PAYFORLISTS + '/getPayforlistById',
            method: 'get',
            params
        })
    },
    updatePayforlist(data) {
        console.log(data);
        return axios({
            url: PAYFORLISTS + '/updatePayforlist',
            method: 'post',
            data
        })
    },
    getAllUsers() {
        return axios({
            url: '/users/getAllUsers',
            method: 'get',
        })
    },
    getUserById(params) {
        return axios({
            url: '/users/getUserById',
            method: 'get',
            params
        })
    },
    //往用户里面添加订单_id,理赔_id的数组
    addorderUser(data) {
        return axios({
            url:'/users/addorderUser',
            method: 'post',
            data,
        });
    }
}
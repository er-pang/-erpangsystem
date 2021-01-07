import axios from '../axios'
import {
    ADMINS
} from './consts.js';
export default {
    login(data) {
        return axios({
            url: ADMINS + '/login',
            method: 'post',
            data
        })
    },
}
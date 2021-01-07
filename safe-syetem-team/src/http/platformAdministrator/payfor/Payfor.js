import axios from '../../axios';

export default{
    getPayfors(data){
        return axios({
            url:'/payforlists/getPayforlists',
            method:'get',
            params:data
        })
    },
    doPayfor(data){
        return axios({
            url:'/payforlists/updatePayforlist',
            method:'post',
            data
        })
    },
    getOnePayfor(data){
        return axios({
            url:'/payforlists/getPayforlistById',
            method:'get',
            params:data
        })
    }
}
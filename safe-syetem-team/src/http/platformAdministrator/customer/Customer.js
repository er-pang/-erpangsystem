import axios from '../../axios';

export default{
    userLogin(data){
        return axios({
            url:'/users/login',
            method:'post',
            data
        })
    },
    getUsers(data){
        return axios({
            url:'/users/getUsers',
            method:'get',
            params:data
        })
    },
    addUser(data){
        return axios({
            url:'/users/addUser',
            method:'post',
            data
        })
    },
    deleteUser(data){
        return axios({
            url:'/users/deleteUser',
            method:'post',
            data
        })
    },
    getOneUser(data){
        return axios({
            url:'/users/getUserById',
            method:'get',
            params:data
        })
    },
    modifyUser(data){
        return axios({
            url:'/users/updateUser',
            method:'post',
            data
        })
    }

}
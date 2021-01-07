//对原生axios进行封装
import axios from 'axios';
import $router from '@/router'
const myAxios = axios.create({
    //axios的url的基础路径
    baseURL: 'http://localhost:3000',
    //设置请求超时的时间，超过timeout设置的时间后，会直接报错
    // timeout: 10000
});
//axios拦截器
//请求拦截器
myAxios.interceptors.request.use((config) => {
    //拦截成功时执行该方法
    //给请求头添加token
    const token = localStorage.token;
    config.headers.Authorization = 'Bearer ' + token;
    return config;
}, (err) => {
    //拦截失败时执行该方法
    return err;
});
//axios响应拦截器
myAxios.interceptors.response.use(res => {
    //响应成功时执行该方法
    return res;
}, (err) => {
    //响应失败时执行该方法
    // err.response
    console.log(err);
    let message = '服务器连接失败'
    if (err && err.response) {
        switch (err.response.status) {
            case 401: {
                message = '身份认证失败（401）';
                alert('请先登陆');
                $router.push('/login')
                break;
            }
            case 404:
                message = '请求资源找不到（404）';
                break;
            case 500:
                message = '服务器错误（500）';
                break;
            case 504:
                message = '网络超时（504）';
                break;
        }
        return {
            message,
            status: 0
        }
    } else {
        return {
            message: '服务器连接失败',
            status: 0
        }
    }
});

export default myAxios;
import axios from '../../../axios'

const updataAdmin = {
        updated(data) {

          return  axios({
                url: '/admins/updateAdmin',
                method: 'post',
                data
            })
        },
        getadmin(params){
            return axios({
                url:'/admins/getAdminById',
                method:'get',
                params
            })
        }
}
export default updataAdmin
import apis from '../../../http/apis';
import router from '../../../router/index';
import $router from '../../../router/index';
export default {
    namespaced: true,
    // 数据
    state: {
        payforlists: [],
        payforlist: {
            safeorder_id: '',
            users_id: "",
            resaon: "",
            sq_date: "",
            yes_date: '',
            pay_img: "",
        },
        image: '',
        path: '',
        pageData: {
            currentPage: 1,
            pageSize: 4,
            total: 3,
            pages: 1
        },
        search: {
            value: "",
        },
        allUsers: [],
        order: [],
    },
    // 修改数据
    mutations: {
        changeImage(state, value) {
            state.image = value;
            state.payforlist.pay_img = value;
        },
        setImage(state, value) {
            state.image = value;
        },
        getPayforlist(state, value) {
            state.payforlist = {
                ...value
            };
        },
        changePayforlists(state, value) {
            state.payforlists = value.data;
            // console.log(state.payforlists);
        },
        changeSqData(state, value) {
            state.payforlist.sq_date = value;
        },

        //修改翻页条件
        changePageData(state, value) {
            if (value.pageSize) {
                state.pageData = {
                    ...value
                };
            } else {
                state.pageData.total = value.total;
                state.pageData.pages = value.pages;
            }
            if (state.pageData.currentPage > state.pageData.pages) {
                state.pageData.currentPage = state.pageData.pages;
            }
            if (state.pageData.currentPage == 0 || state.pageData.currentPage == '0') {
                state.pageData.currentPage = 1;
                state.pageData.pages = 1;
            }
            console.log(state.pageData);
        },
        changeSearch(state, value) {
            state.search = value;
        },
        changeImagePath(state, value) {
            state.path = value;
        },
        setAllUsers(state, value) {
            state.allUsers = value;
        },
        //添加理赔，修改理赔需要的订单列表
        changeOrder(state, value) {   
            var payfor_id = router.history.current.params._id;
            console.log(payfor_id);
            var od = [];
            if (payfor_id) {
                //修改理赔订单功能之后的操作
                const totalOrder = value.orders_id;
                const payfor_orders = value.payfor_id.map(item => item.safeorder_id._id);
                const payfor=value.payfor_id;
               var  onePay= payfor.filter(item=>item._id==payfor_id);
                totalOrder.filter(item => {
                    payfor_orders.filter(item2 => {
                            if(payfor_orders.indexOf(item._id)==-1){
                            od.push(item);
                            }
                        // if (item._id != item2 || payfor_id == item2) {
                        //     od.push(item);
                        // }
                    });
                });
                od=[...new Set(od)];
                if(onePay[0]){
                    od.push(onePay[0]);
                }
            } else {
                //添加理赔订单功能之后的操作
                console.log(value);
                const totalOrder1 = value.orders_id;
                const payfor_orders1 = value.payfor_id.map(item => item.safeorder_id._id);
                totalOrder1.filter(item => {
                    console.log(item);
                    if(payfor_orders1.indexOf(item._id)==-1){
                        od.push(item);
                    }
                });
                od=[...new Set(od)];
            }
            state.order=[...od];
        }
    },
    // 异步方法
    actions: {
        //添加理赔订单
        async addPayforlist(context) {
            context.rootState.payforlists.payforlist.pay_img = context.rootState.payforlists.image;
            console.log(context.rootState.payforlists.payforlist);
            const {
                data
            } = await apis.payforlists.addPayforlist({
                ...context.rootState.payforlists.payforlist
            });
            console.log(data);
            if (data.status) {
                alert('添加理赔订单成功');

                context.rootState.payforlists.image = '';
                context.dispatch('addorderUser', {
                    _id: data.param.users_id,
                    payfor_id: data.param._id
                });
                //  context.commit('addorderUser',{_id:data.param.users_id,payfor_id:data.param._id});
                context.rootState.payforlists.payforlist = {
                    safeorder_id: '',
                    users_id: "",
                    statc: "",
                    resaon: "",
                    yes_date: "",
                    sq_date: '',
                    pay_img: "",
                };
            }
        },
        async getPayforlists(context) {
            // console.log(context.rootState.payforlists.pageData,context.rootState.payforlists.search);
            const {
                data
            } = await apis.payforlists.getPayforlists({
                ...context.rootState.payforlists.pageData,
                ...context.rootState.payforlists.search,
            });
            // console.log(data);
            if (data) {
                context.commit('changePayforlists', data);
                context.commit('changePageData', data);
            }
        },
        async deletePayforlist(context, _id) {
            const {
                data
            } = await apis.payforlists.deletePayforlist({
                _id
            });
            console.log(data);
            if (data) {
                alert('删除成功');
                context.dispatch('getPayforlists');
            }
        },
        async getPayforlistById(context, _id) {
            console.log(_id);
            const {
                data
            } = await apis.payforlists.getPayforlistById(_id);
            console.log(data);
            if (data.status) {
                context.commit('getPayforlist', data.statc);
            }
        },
        async updatePayforlist(context) {
            context.rootState.payforlists.payforlist.pay_img = context.rootState.payforlists.image;
            const {
                data
            } = await apis.payforlists.updatePayforlist({
                ...context.rootState.payforlists.payforlist
            });
            if (data.status) {
                context.rootState.payforlists.payforlist = {
                    safeorder_id: '',
                    users_id: "",
                    statc: "",
                    resaon: "",
                    yes_date: "",
                    sq_date: '',
                    pay_img: "",
                };
                alert('修改理赔订单成功');

                $router.push('/system_x/getpayforlists');
            }
        },
        async getAllUsers(context) {
            const {
                data
            } = await apis.payforlists.getAllUsers();
            console.log(data);
            if (data) {
                // console.log(data);
                context.commit('setAllUsers', data);
            }
        },
        async getUserById(context, _id) {
            const {
                data
            } = await apis.payforlists.getUserById(_id);
            console.log(data);
            if (data[0].orders_id) {
                context.commit('changeOrder', data[0]);
            } else {
                alert('此用户没有订单信息');
            }
        },
        //往用户里面添加订单_id,理赔_id的数组
        async addorderUser(context, value) {
            console.log(111);
            const data = await apis.payforlists.addorderUser(value);
            if (data.status) {
                console.log("添加成功");
            }
        }
    }

}
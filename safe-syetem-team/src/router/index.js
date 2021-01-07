import Vue from 'vue'
import VueRouter from 'vue-router'
// 保险分类管理
const insuranceClassificationManagement = () => import("../common/InsuranceClassificationManagement.vue");
// 保险产品管理
const insuranceProductManagement = () => import("../common/InsuranceProductManagement.vue");
// 保险订单管理
const insuranceOrderManagement = () => import("../common/InsuranceOrderManagement.vue");
//曲雪婷-------start
const PayForLists = () => import('../components/platformSell/payforlists/PayForLists.vue'); //新增理赔
const AddPayForLists = () => import('../components/platformSell/payforlists/addpayforlists.vue'); //理赔订单
const UpdatePayForlist = () => import('../components/platformSell/payforlists/UpdatePayForlist.vue');
//曲雪婷-------end
// 刘健 -----------start
const System = () => import('../views/platformAdministrator/System_g.vue');
const Adminlist = () => import('../views/platformAdministrator/admin/AdminList.vue');
const Saleslist = () => import('../views/platformAdministrator/sales/SalesList.vue');
const Customerlist = () => import('../views/platformAdministrator/customer/CustomerList.vue');
const Payfor = () => import('../views/platformAdministrator/payfor/PayforOrders.vue');
Vue.use(VueRouter)
// 刘健 -----------end
//刘露馨---start
const Login = () => import("../views/login/Login")
//刘露馨---end
const routes = [
    //刘露馨---start
    {
        path: '/login',
        name: '/Login',
        component: Login
    },
    //刘露馨---end
    {
        path: '/system_g',
        component: System,
        children: [{
                path: 'adminlist',
                component: Adminlist,
            },
            {
                path: 'saleslist',
                component: Saleslist,
            },
            {
                path: 'customer',
                component: Customerlist,
            },
            {
                path: 'payfor',
                component: Payfor,
            },
            // 卿杰，保险分类管理
            {
                path: "insuranceClassificationManagement",
                component: insuranceClassificationManagement,
            },
            // 卿杰，保险产品管理
            {
                path: "insuranceProductManagement",
                component: insuranceProductManagement,
            },
            // 卿杰，保险订单管理
            {
                path: "insuranceOrderManagement",
                component: insuranceOrderManagement,
            },
        ]
    },
    // 刘健 -----------------end
    {
        path: '/',
        redirect: '/login'
    },
    // 魏芝慧--------------------start
    {
        path: '/system_x',
        name: 'system_x',
        component: () => import('../views/system_x/System_x.vue'),
        children: [
            //曲雪婷--------------start
            // 理赔订单渲染路由
            {
                path: 'getpayforlists',
                component: PayForLists,
            },
            // 理赔新增路由
            {
                path: 'addpayforlists',
                component: AddPayForLists,
            },
            {
                path: 'updatecustomer/:_id',
                props: true,
                component: () => import('../components/platformSell/user/UpdateCustomer')
            },
            {
                path: 'updatepayforlist/:_id',
                props: true,
                component: UpdatePayForlist,
            },
            //曲雪婷-------end
            // 获取订单路由
            {
                path: 'getsafeorders',
                component: () => import('../components/platformSell/safeorders/getsafeorders.vue')
            },
            // 修改订单路由
            {
                path: 'updatasafeorders/:_id',
                props: true,
                component: () => import('../components/platformSell/safeorders/updatasafeorders.vue')
            },
            // 获取客户路由
            {
                path: 'getcustomer',
                component: () => import('../components/platformSell/user/getcustomer.vue')
            },
            // 新增客户路由
            {
                path: 'addcustomer',
                component: () => import('../components/platformSell/user/addcustomer.vue')
            },

            // 获取个人中心路由
            {
                path: 'getuser',
                component: () => import('../components/platformSell/user/getuser')
            },


        ]
    },
    //魏芝慧-------------------------end


]

const router = new VueRouter({
    routes
})

export default router
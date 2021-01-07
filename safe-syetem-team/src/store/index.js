import Vue from 'vue'
import Vuex from 'vuex'
import safeorders from './platformSell/modules/safeorders.js';
//曲雪婷----start
import payforlists from './platformSell/modules/payforlists'
//曲雪婷----end
import classification from './classification/classification.js'
import updateadmin from './platformSell/modules/updateadmin'
import Users from './platformSell/modules/Users'
import prodyct from './prodyct/prodyct'
import order from "./order/order"

//刘健--------------------start
import Admin from './platformAdministrator/admin/Admin.js'
import Sales from './platformAdministrator/sales/Sales.js'
import Customer from './platformAdministrator/customer/Customer.js'
import Payfor from './platformAdministrator/payfor/Payfor.js'
//刘健---------------------end


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        classification,
        safeorders,
        //曲雪婷-----start
        payforlists,
        //曲雪婷----end
        updateadmin,
        //刘健------------------------start
        Admin, Sales, Customer, Payfor,
        //刘健------------------------end
        Users, prodyct, order

    }
})

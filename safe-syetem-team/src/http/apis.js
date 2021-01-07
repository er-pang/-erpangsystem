// 刘健-----------------------start
import Admin from './platformAdministrator/admin/Admin.js';
import Customer from './platformAdministrator/customer/Customer.js';
import Payfor from './platformAdministrator/payfor/Payfor.js'
//刘健-------------------------end
import admins from './modules/admins'
import safeorders from './api/platformSell/modules/safeorders';
//曲雪婷-----start
import payforlists from './api/platformSell/modules/payforlists'
//曲雪婷-----end
import classification from './platformAdministrator/classification/classification.js'
import prodyct from "./platformAdministrator/prodyct/prodyct.js"
import order from "./platformAdministrator/order/order"

import updateadmin from './api/platformSell/modules/updateadmin'
import Users from './api/platformSell/modules/Users'
export default {
    updateadmin,
    //刘健-------------------start
    Admin,
    Customer,
    prodyct,
    Payfor,
    order,
    admins,
    //刘健-------------------end
    // 魏芝慧---------------start
    safeorders,
    Users,
    // 魏芝慧---------------end
    classification,
    //曲雪婷-----start
    payforlists
    //曲雪婷----end
}
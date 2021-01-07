"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 保险分类管理
var insuranceClassificationManagement = function insuranceClassificationManagement() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../common/InsuranceClassificationManagement.vue"));
  });
}; // 保险产品管理


var insuranceProductManagement = function insuranceProductManagement() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../common/InsuranceProductManagement.vue"));
  });
}; // 保险订单管理


var insuranceOrderManagement = function insuranceOrderManagement() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../common/InsuranceOrderManagement.vue"));
  });
}; //曲雪婷-------start


var PayForLists = function PayForLists() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/platformSell/payforlists/PayForLists.vue'));
  });
}; //新增理赔


var AddPayForLists = function AddPayForLists() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/platformSell/payforlists/addpayforlists.vue'));
  });
}; //理赔订单


var UpdatePayForlist = function UpdatePayForlist() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/platformSell/payforlists/UpdatePayForlist.vue'));
  });
}; //曲雪婷-------end
// 刘健 -----------start


var System = function System() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/platformAdministrator/System_g.vue'));
  });
};

var Adminlist = function Adminlist() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/platformAdministrator/admin/AdminList.vue'));
  });
};

var Saleslist = function Saleslist() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/platformAdministrator/sales/SalesList.vue'));
  });
};

var Customerlist = function Customerlist() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/platformAdministrator/customer/CustomerList.vue'));
  });
};

var Payfor = function Payfor() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/platformAdministrator/payfor/PayforOrders.vue'));
  });
};

_vue["default"].use(_vueRouter["default"]); // 刘健 -----------end
//刘露馨---start


var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../views/login/Login"));
  });
}; //刘露馨---end


var routes = [//刘露馨---start
{
  path: '/login',
  name: '/Login',
  component: Login
}, //刘露馨---end
{
  path: '/system_g',
  component: System,
  children: [{
    path: 'adminlist',
    component: Adminlist
  }, {
    path: 'saleslist',
    component: Saleslist
  }, {
    path: 'customer',
    component: Customerlist
  }, {
    path: 'payfor',
    component: Payfor
  }, // 卿杰，保险分类管理
  {
    path: "insuranceClassificationManagement",
    component: insuranceClassificationManagement
  }, // 卿杰，保险产品管理
  {
    path: "insuranceProductManagement",
    component: insuranceProductManagement
  }, // 卿杰，保险订单管理
  {
    path: "insuranceOrderManagement",
    component: insuranceOrderManagement
  }]
}, // 刘健 -----------------end
{
  path: '/',
  redirect: '/login'
}, // 魏芝慧--------------------start
{
  path: '/system_x',
  name: 'system_x',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/system_x/System_x.vue'));
    });
  },
  children: [//曲雪婷--------------start
  // 理赔订单渲染路由
  {
    path: 'getpayforlists',
    component: PayForLists
  }, // 理赔新增路由
  {
    path: 'addpayforlists',
    component: AddPayForLists
  }, {
    path: 'updatecustomer/:_id',
    props: true,
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/platformSell/user/UpdateCustomer'));
      });
    }
  }, {
    path: 'updatepayforlist/:_id',
    props: true,
    component: UpdatePayForlist
  }, //曲雪婷-------end
  // 获取订单路由
  {
    path: 'getsafeorders',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/platformSell/safeorders/getsafeorders.vue'));
      });
    }
  }, // 修改订单路由
  {
    path: 'updatasafeorders/:_id',
    props: true,
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/platformSell/safeorders/updatasafeorders.vue'));
      });
    }
  }, // 获取客户路由
  {
    path: 'getcustomer',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/platformSell/user/getcustomer.vue'));
      });
    }
  }, // 新增客户路由
  {
    path: 'addcustomer',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/platformSell/user/addcustomer.vue'));
      });
    }
  }, // 获取个人中心路由
  {
    path: 'getuser',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/platformSell/user/getuser'));
      });
    }
  }]
} //魏芝慧-------------------------end
];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apis = _interopRequireDefault(require("../../http/apis.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  // 仓库数据
  state: {
    // 总共的数据
    dataBoth: [],
    // 总共的条数
    bothListTotal: 0,
    // 总共的页数
    bothPageSize: 1,
    // 当前在第几页
    currentPage: 1,
    // 每页的条数
    pageSize: 8,
    value: ""
  },
  // 方法
  mutations: {
    getAllBoth: function getAllBoth(state, value) {
      value.forEach(function (item) {
        if (item.tb) {
          item.tb = "退保";

          if (item.statc) {
            item.statc = "已审批";
          } else if (item.statc == false) {
            item.statc = "驳回";
          } else {
            item.statc = "审批中";
          }
        } else {
          item.tb = "未退保";
          item.statc = "";
        }
      });
      state.dataBoth = value;
      state.bothListTotal = value.length;
    },
    changeCurrentPage: function changeCurrentPage(state, value) {
      state.currentPage = value;
    },
    changePageSize: function changePageSize(state, value) {
      state.pageSize = value;
    },
    changeValue: function changeValue(state, value) {
      state.value = value;
    }
  },
  // 异步请求
  actions: {
    // 获取所有数据
    getSafeorders: function getSafeorders(context, data1) {
      var _ref, data;

      return regeneratorRuntime.async(function getSafeorders$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_apis["default"].order.getSafeorders(data1));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              console.log(data);
              context.commit('getAllBoth', data.data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  // 模块
  modules: {}
};
exports["default"] = _default;
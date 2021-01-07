"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apis = _interopRequireDefault(require("../../../http/apis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  // 数据
  state: {
    safeordersData: [{
      name: "张三",
      age: "20",
      gender: "男"
    }],
    totals: 0,
    pages: 0
  },
  // 修改数据
  mutations: {
    changeSafeordersData: function changeSafeordersData(state, data) {
      state.safeordersData = data.data;
      state.totals = data.total;
      state.pages = data.pages;
      console.log(state.safeordersData);
    }
  },
  // 异步方法
  actions: {
    // 查询订单
    getSafeorders: function getSafeorders(context, datas) {
      var _ref, data;

      return regeneratorRuntime.async(function getSafeorders$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_apis["default"].safeorders.getSafeorders(datas));

            case 2:
              _ref = _context.sent;
              data = _ref.data;

              if (data.data.length) {
                context.commit('changeSafeordersData', data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    // 删除订单
    deleteSafeorder: function deleteSafeorder(context, datas) {
      var _ref2, data;

      return regeneratorRuntime.async(function deleteSafeorder$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_apis["default"].safeorders.deleteSafeorder(datas));

            case 2:
              _ref2 = _context2.sent;
              data = _ref2.data;

              if (data) {
                alert("删除成功");
              } else {
                alert("删除失败");
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    // 修改订单
    updateSafeorder: function updateSafeorder(context, datas) {
      var _ref3, data;

      return regeneratorRuntime.async(function updateSafeorder$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_apis["default"].safeorders.updateSafeorder(datas));

            case 2:
              _ref3 = _context3.sent;
              data = _ref3.data;

              if (data) {
                alert("申请成功");
              } else {
                alert("申请失败");
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    // 通过id查找
    getSafeorderById: function getSafeorderById(context, datas) {
      var _ref4, data;

      return regeneratorRuntime.async(function getSafeorderById$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_apis["default"].safeorders.getSafeorderById(datas));

            case 2:
              _ref4 = _context4.sent;
              data = _ref4.data;

              if (!data) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt("return", data.statc);

            case 8:
              alert("查找失败");

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;
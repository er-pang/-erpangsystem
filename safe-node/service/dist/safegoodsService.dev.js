"use strict";

var _require = require('../dao/safegoodsDao'),
    addSafegood = _require.addSafegood,
    getSafegoods = _require.getSafegoods,
    updateSafegood = _require.updateSafegood,
    getSafegoodById = _require.getSafegoodById,
    deleteSafegood = _require.deleteSafegood,
    getallSafegoods = _require.getallSafegoods; //添加保险产品


module.exports.addSafegood = function _callee(params) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(addSafegood(params));

        case 2:
          data = _context.sent;

          if (!data._id) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", {
            msg: '添加保险产品成功',
            status: 1
          });

        case 5:
          return _context.abrupt("return", {
            msg: '添加保险产品失败',
            status: 0
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; //获取所有保险产品


module.exports.getSafegoods = function _callee2(params) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getSafegoods(params));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //获取全部的保险产品（不需要页数条数）


module.exports.getallSafegoods = function _callee3(params) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getallSafegoods(params));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //通过 _id 获取保险产品


module.exports.getSafegoodById = function _callee4(params) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getSafegoodById(params));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //修改保险产品


module.exports.updateSafegood = function _callee5(params) {
  var data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(updateSafegood(params));

        case 2:
          data = _context5.sent;

          if (!(data.nModified > 0)) {
            _context5.next = 5;
            break;
          }

          return _context5.abrupt("return", {
            msg: '修改保险产品成功',
            status: 1
          });

        case 5:
          return _context5.abrupt("return", {
            msg: '修改保险产品失败',
            status: 0
          });

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //通过 _id 删除保险产品


module.exports.deleteSafegood = function _callee6(params) {
  var data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(deleteSafegood(params));

        case 2:
          data = _context6.sent;

          if (!(data.deletedCount > 0)) {
            _context6.next = 5;
            break;
          }

          return _context6.abrupt("return", {
            msg: '删除保险产品成功',
            status: 1
          });

        case 5:
          return _context6.abrupt("return", {
            msg: '删除保险产品失败',
            status: 0
          });

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
};
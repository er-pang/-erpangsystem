"use strict";

var _require = require('../dao/safeordersDao'),
    getSafeorders = _require.getSafeorders,
    addSafeorders = _require.addSafeorders,
    updateSafeorder = _require.updateSafeorder,
    deleteSafeorder = _require.deleteSafeorder,
    getSafeorderById = _require.getSafeorderById; //获取订单数据


module.exports.getSafeorders = function _callee(data) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getSafeorders(data));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}; //新增保险订单


module.exports.addSafeorders = function _callee2(data) {
  var param;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(addSafeorders(data));

        case 2:
          param = _context2.sent;

          if (!param) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", {
            status: 1,
            msg: '新增成功',
            _id: param._id
          });

        case 7:
          return _context2.abrupt("return", {
            status: 0,
            msg: '新增失败'
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //更新保险订单或者管理员审批退保


module.exports.updateSafeorder = function _callee3(data) {
  var statc;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(updateSafeorder(data));

        case 2:
          statc = _context3.sent;

          if (!statc.nModified) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", {
            status: 1,
            msg: '修改成功'
          });

        case 7:
          return _context3.abrupt("return", {
            status: 0,
            msg: '修改失败'
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //删除保险订单


module.exports.deleteSafeorder = function _callee4(data) {
  var statc;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(deleteSafeorder(data));

        case 2:
          statc = _context4.sent;

          if (!statc.deletedCount) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", {
            status: 1,
            msg: '删除成功'
          });

        case 7:
          return _context4.abrupt("return", {
            status: 0,
            msg: '删除失败'
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //通过id查找订单


module.exports.getSafeorderById = function _callee5(data) {
  var statc;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getSafeorderById(data));

        case 2:
          statc = _context5.sent;

          if (!statc) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", {
            status: 1,
            msg: '获取成功',
            statc: statc
          });

        case 7:
          return _context5.abrupt("return", {
            status: 0,
            msg: '获取失败'
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
};
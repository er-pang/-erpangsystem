"use strict";

var _require = require('../dao/safetypesDao'),
    addSafetype = _require.addSafetype,
    getSafetypes = _require.getSafetypes,
    getSafetypeById = _require.getSafetypeById,
    deleteSafetype = _require.deleteSafetype,
    updateSafetype = _require.updateSafetype,
    getAllSafetypes = _require.getAllSafetypes; //添加保险分类


module.exports.addSafetype = function _callee(params) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(addSafetype(params));

        case 2:
          data = _context.sent;

          if (!data._id) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", {
            msg: '添加保险类型成功',
            status: 1
          });

        case 5:
          return _context.abrupt("return", {
            msg: '添加保险类型失败',
            status: 0
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; //获取所有保险分类


module.exports.getSafetypes = function _callee2(params) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getSafetypes(params));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //获取所有保险分类（没有条数）


module.exports.getAllSafetypes = function _callee3() {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getAllSafetypes());

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //通过 _id 获取保险分类


module.exports.getSafetypeById = function _callee4(params) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getSafetypeById(params));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //修改保险分类


module.exports.updateSafetype = function _callee5(params) {
  var data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(updateSafetype(params));

        case 2:
          data = _context5.sent;

          if (!(data.nModified > 0)) {
            _context5.next = 5;
            break;
          }

          return _context5.abrupt("return", {
            msg: '修改保险分类成功',
            status: 1
          });

        case 5:
          return _context5.abrupt("return", {
            msg: '修改保险分类失败',
            status: 0
          });

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //通过 _id 删除保险分类


module.exports.deleteSafetype = function _callee6(params) {
  var data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(deleteSafetype(params));

        case 2:
          data = _context6.sent;

          if (!(data.deletedCount > 0)) {
            _context6.next = 5;
            break;
          }

          return _context6.abrupt("return", {
            msg: '删除保险分类成功',
            status: 1
          });

        case 5:
          return _context6.abrupt("return", {
            msg: '删除保险分类失败',
            status: 0
          });

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
};
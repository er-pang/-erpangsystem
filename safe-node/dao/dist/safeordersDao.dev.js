"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../dao/model/safeordersModel'),
    safeordersModel = _require.safeordersModel; //获取保险数据


module.exports.getSafeorders = function _callee(_ref) {
  var value, pageSize, currentPage, total, pages, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          value = _ref.value, pageSize = _ref.pageSize, currentPage = _ref.currentPage;
          _context.next = 3;
          return regeneratorRuntime.awrap(safeordersModel.countDocuments({
            $or: [{
              date: {
                $regex: value,
                $options: '$i'
              }
            }, {
              price: {
                $regex: value,
                $options: '$i'
              }
            }]
          }));

        case 3:
          total = _context.sent;
          //总共的页数
          pages = Math.ceil(total / pageSize); //显示的数据

          _context.next = 7;
          return regeneratorRuntime.awrap(safeordersModel.find({
            $or: [{
              date: {
                $regex: value,
                $options: '$i'
              }
            }, {
              price: {
                $regex: value,
                $options: '$i'
              }
            }]
          }).populate('acceptor_id').populate({
            path: 'type_id' // populate: {
            //     path: 'type_id',
            // },

          }).populate('holder_id').limit(pageSize - 0).skip((currentPage - 1) * pageSize));

        case 7:
          data = _context.sent;
          return _context.abrupt("return", {
            total: total,
            pages: pages,
            data: data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}; //新增保险订单


module.exports.addSafeorders = function _callee2(data) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(safeordersModel.create(_objectSpread({}, data, {
            tb: false
          })));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //更新保险订单或者管理员审批退保


module.exports.updateSafeorder = function _callee3(data) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(safeordersModel.updateOne({
            _id: data._id
          }, data));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //删除保险订单


module.exports.deleteSafeorder = function _callee4(data) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(safeordersModel.deleteOne(data));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //通过id查找订单


module.exports.getSafeorderById = function _callee5(data) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(safeordersModel.findOne(data));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};
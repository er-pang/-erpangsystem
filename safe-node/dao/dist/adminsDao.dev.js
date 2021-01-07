"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../dao/model/adminsModel'),
    adminsModel = _require.adminsModel; //获取管理员数据


module.exports.getAdmins = function _callee(_ref) {
  var role, _ref$value, value, pageSize, currentPage, total, pages, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          role = _ref.role, _ref$value = _ref.value, value = _ref$value === void 0 ? '' : _ref$value, pageSize = _ref.pageSize, currentPage = _ref.currentPage;
          _context.next = 3;
          return regeneratorRuntime.awrap(adminsModel.countDocuments({
            role: role,
            $or: [{
              name: {
                $regex: value,
                $options: '$i'
              }
            }, {
              username: {
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
          return regeneratorRuntime.awrap(adminsModel.find({
            role: role,
            $or: [{
              name: {
                $regex: value,
                $options: '$i'
              }
            }, {
              username: {
                $regex: value,
                $options: '$i'
              }
            }]
          }).limit(pageSize - 0).skip((currentPage - 1) * pageSize));

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
}; //获取所有管理员


module.exports.getallAdmins = function _callee2(_ref2) {
  var role, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          role = _ref2.role;
          _context2.next = 3;
          return regeneratorRuntime.awrap(adminsModel.find({
            role: role
          }));

        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //添加管理员


module.exports.addAdmin = function _callee3(data) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(adminsModel.create(_objectSpread({}, data, {
            power: true
          })));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //更新管理员数据


module.exports.updateAdmin = function _callee4(data) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(adminsModel.updateOne({
            _id: data._id
          }, data));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //通过id找到管理数据


module.exports.getAdminById = function _callee5(data) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(adminsModel.findOne(data));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //删除管理员数据


module.exports.deleteAdmin = function _callee6(data) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(adminsModel.deleteOne(data));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

module.exports.login = function _callee7(data) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(adminsModel.findOne(data));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
};
"use strict";

var _require = require('../dao/usersDao'),
    getUsers = _require.getUsers,
    addUser = _require.addUser,
    login = _require.login,
    getUserById = _require.getUserById,
    updateUser = _require.updateUser,
    deleteUser = _require.deleteUser,
    getAllUsers = _require.getAllUsers,
    isExist = _require.isExist,
    addorderUser = _require.addorderUser; //获取所有用户


module.exports.getUsers = function _callee(params) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getUsers(params));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.getAllUsers = function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getAllUsers());

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //新增用户


module.exports.addUser = function _callee3(params) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(addUser(params));

        case 2:
          data = _context3.sent;

          if (!data._id) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", {
            msg: '注册用户成功',
            status: 1,
            data: data
          });

        case 7:
          return _context3.abrupt("return", {
            msg: '新增用户失败',
            status: 0,
            data: data
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //用户名验证


module.exports.isExist = function _callee4(params) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(isExist(params));

        case 2:
          data = _context4.sent;

          if (!(data.length > 0)) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", {
            message: '验证失败',
            status: 0
          });

        case 7:
          return _context4.abrupt("return", {
            message: '验证成功',
            status: 1
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //用户登录


module.exports.login = function _callee5(params) {
  var data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(login(params));

        case 2:
          data = _context5.sent;

          if (!(data.length > 0)) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", {
            msg: '登录成功',
            status: 1,
            _id: data[0]._id
          });

        case 7:
          return _context5.abrupt("return", {
            msg: '登录失败',
            status: 0
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //通过_id 获取用户


module.exports.getUserById = function _callee6(params) {
  var data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(getUserById(params));

        case 2:
          data = _context6.sent;
          return _context6.abrupt("return", data);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
}; //修改用户


module.exports.updateUser = function _callee7(params) {
  var data;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(updateUser(params));

        case 2:
          data = _context7.sent;

          if (!(data.nModified > 0)) {
            _context7.next = 5;
            break;
          }

          return _context7.abrupt("return", {
            msg: '修改用户成功',
            status: 1
          });

        case 5:
          return _context7.abrupt("return", {
            msg: '修改用户失败',
            status: 0
          });

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
}; //删除用户


module.exports.deleteUser = function _callee8(params) {
  var data;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(deleteUser(params));

        case 2:
          data = _context8.sent;

          if (!(data.deletedCount > 0)) {
            _context8.next = 5;
            break;
          }

          return _context8.abrupt("return", {
            msg: '删除用户成功',
            status: 1
          });

        case 5:
          return _context8.abrupt("return", {
            msg: '删除用户失败',
            status: 0
          });

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
};

module.exports.addorderUser = function _callee9(params) {
  var data;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(addorderUser(params));

        case 2:
          data = _context9.sent;
          return _context9.abrupt("return", {
            msg: '添加成功',
            status: 1
          });

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
};
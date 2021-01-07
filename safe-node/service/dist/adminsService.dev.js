"use strict";

var _require = require('../dao/adminsDao'),
    getAdmins = _require.getAdmins,
    addAdmin = _require.addAdmin,
    getAdminById = _require.getAdminById,
    updateAdmin = _require.updateAdmin,
    deleteAdmin = _require.deleteAdmin,
    getallAdmins = _require.getallAdmins,
    login = _require.login; //获取数据


var _require2 = require('../utils/consts'),
    TOKEN_SECRET = _require2.TOKEN_SECRET;

var jwt = require('jsonwebtoken');

module.exports.getAdmins = function _callee(data) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getAdmins(data));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}; //获取所有管理员数据


module.exports.getallAdmins = function _callee2(data) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getallAdmins(data));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //添加管理员


module.exports.addAdmin = function _callee3(data) {
  var statc;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(addAdmin(data));

        case 2:
          statc = _context3.sent;

          if (!statc._id) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", {
            status: 1,
            msg: '新增成功'
          });

        case 7:
          return _context3.abrupt("return", {
            status: 0,
            msg: '新增失败'
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //更新管理员数据


module.exports.updateAdmin = function _callee4(data) {
  var statc;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(updateAdmin(data));

        case 2:
          statc = _context4.sent;

          if (!statc.nModified) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", {
            status: 1,
            msg: '修改成功'
          });

        case 7:
          return _context4.abrupt("return", {
            status: 0,
            msg: '修改失败'
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //通过Id找到管理员


module.exports.getAdminById = function _callee5(data) {
  var statc;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getAdminById(data));

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
}; //删除管理员


module.exports.deleteAdmin = function _callee6(data) {
  var statc;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(deleteAdmin(data));

        case 2:
          statc = _context6.sent;

          if (!statc.deletedCount) {
            _context6.next = 7;
            break;
          }

          return _context6.abrupt("return", {
            status: 1,
            msg: '删除成功'
          });

        case 7:
          return _context6.abrupt("return", {
            status: 0,
            msg: '删除失败'
          });

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
};

module.exports.login = function _callee7(data) {
  var statc, token;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(login(data));

        case 2:
          statc = _context7.sent;

          if (!statc) {
            _context7.next = 12;
            break;
          }

          if (!statc.power) {
            _context7.next = 9;
            break;
          }

          token = jwt.sign({
            username: username
          }, TOKEN_SECRET, {
            expiresIn: 60 * 60
          });
          return _context7.abrupt("return", {
            status: 1,
            msg: '登陆成功',
            _id: statc._id,
            token: token
          });

        case 9:
          return _context7.abrupt("return", {
            status: 2,
            msg: '登陆失败，权限不够'
          });

        case 10:
          _context7.next = 13;
          break;

        case 12:
          return _context7.abrupt("return", {
            status: 0,
            msg: '登陆失败'
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  });
};
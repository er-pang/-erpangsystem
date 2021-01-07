"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../service/usersService.js'),
    getUsers = _require.getUsers,
    addUser = _require.addUser,
    login = _require.login,
    getUserById = _require.getUserById,
    updateUser = _require.updateUser,
    deleteUser = _require.deleteUser,
    getAllUsers = _require.getAllUsers,
    isExist = _require.isExist,
    addorderUser = _require.addorderUser; //获取所有用户


router.get('/getUsers', function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = res;
          _context.next = 3;
          return regeneratorRuntime.awrap(getUsers(req.query));

        case 3:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/getAllUsers', function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = res;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getAllUsers());

        case 3:
          _context2.t1 = _context2.sent;

          _context2.t0.send.call(_context2.t0, _context2.t1);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //新增用户

router.post('/addUser', function _callee3(req, res, next) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = res;
          _context3.next = 3;
          return regeneratorRuntime.awrap(addUser(req.body));

        case 3:
          _context3.t1 = _context3.sent;

          _context3.t0.send.call(_context3.t0, _context3.t1);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //验证用户名是否存在

router.post('/isExist', function _callee4(req, res, next) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = res;
          _context4.next = 3;
          return regeneratorRuntime.awrap(isExist(req.body));

        case 3:
          _context4.t1 = _context4.sent;

          _context4.t0.send.call(_context4.t0, _context4.t1);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //用户登录

router.post('/login', function _callee5(req, res, next) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.t0 = res;
          _context5.next = 3;
          return regeneratorRuntime.awrap(login(req.body));

        case 3:
          _context5.t1 = _context5.sent;

          _context5.t0.send.call(_context5.t0, _context5.t1);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //通过_id 获取用户

router.get('/getUserById', function _callee6(req, res, next) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.t0 = res;
          _context6.next = 3;
          return regeneratorRuntime.awrap(getUserById(req.query));

        case 3:
          _context6.t1 = _context6.sent;

          _context6.t0.send.call(_context6.t0, _context6.t1);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //修改用户

router.post('/updateUser', function _callee7(req, res, next) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.t0 = res;
          _context7.next = 3;
          return regeneratorRuntime.awrap(updateUser(req.body));

        case 3:
          _context7.t1 = _context7.sent;

          _context7.t0.send.call(_context7.t0, _context7.t1);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
}); //删除用户

router.post('/deleteUser', function _callee8(req, res, next) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.t0 = res;
          _context8.next = 3;
          return regeneratorRuntime.awrap(deleteUser(req.body));

        case 3:
          _context8.t1 = _context8.sent;

          _context8.t0.send.call(_context8.t0, _context8.t1);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
});
router.post('/addorderUser', function _callee9(req, res, next) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.t0 = res;
          _context9.next = 3;
          return regeneratorRuntime.awrap(addorderUser(req.body));

        case 3:
          _context9.t1 = _context9.sent;

          _context9.t0.send.call(_context9.t0, _context9.t1);

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
});
module.exports = router;
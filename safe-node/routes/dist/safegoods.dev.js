"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../service/safegoodsService'),
    addSafegood = _require.addSafegood,
    getSafegoods = _require.getSafegoods,
    getSafegoodById = _require.getSafegoodById,
    updateSafegood = _require.updateSafegood,
    deleteSafegood = _require.deleteSafegood,
    getallSafegoods = _require.getallSafegoods; //添加保险产品


router.post('/addSafegood', function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = res;
          _context.next = 3;
          return regeneratorRuntime.awrap(addSafegood(req.body));

        case 3:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); //获取全部的保险产品

router.get('/getSafegoods', function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = res;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getSafegoods(req.query));

        case 3:
          _context2.t1 = _context2.sent;

          _context2.t0.send.call(_context2.t0, _context2.t1);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //获取全部的保险产品（不需要页数条数）

router.get('/getallSafegoods', function _callee3(req, res, next) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = res;
          _context3.next = 3;
          return regeneratorRuntime.awrap(getallSafegoods(req.query));

        case 3:
          _context3.t1 = _context3.sent;

          _context3.t0.send.call(_context3.t0, _context3.t1);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //通过_id 获取的保险产品

router.get('/getSafegoodById', function _callee4(req, res, next) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = res;
          _context4.next = 3;
          return regeneratorRuntime.awrap(getSafegoodById(req.query));

        case 3:
          _context4.t1 = _context4.sent;

          _context4.t0.send.call(_context4.t0, _context4.t1);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //修改保险产品

router.post('/updateSafegood', function _callee5(req, res, next) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.t0 = res;
          _context5.next = 3;
          return regeneratorRuntime.awrap(updateSafegood(req.body));

        case 3:
          _context5.t1 = _context5.sent;

          _context5.t0.send.call(_context5.t0, _context5.t1);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //通过_id 删除的保险产品

router.post('/deleteSafegood', function _callee6(req, res, next) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.t0 = res;
          _context6.next = 3;
          return regeneratorRuntime.awrap(deleteSafegood(req.body));

        case 3:
          _context6.t1 = _context6.sent;

          _context6.t0.send.call(_context6.t0, _context6.t1);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;
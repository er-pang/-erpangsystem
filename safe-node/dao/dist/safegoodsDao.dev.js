"use strict";

var _require = require('./model/safegoodsModel'),
    safegoodsModel = _require.safegoodsModel; //添加保险产品


module.exports.addSafegood = function _callee(params) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(safegoodsModel.create(params));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}; //获取所有保险产品


module.exports.getSafegoods = function _callee2(params) {
  var currentPage, pageSize, value, total, pages, count, safegoods;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          currentPage = params.currentPage, pageSize = params.pageSize, value = params.value; //total 总条数

          _context2.next = 3;
          return regeneratorRuntime.awrap(safegoodsModel.countDocuments({
            $or: [{
              name: {
                $regex: value,
                $options: '$i'
              }
            }]
          }));

        case 3:
          total = _context2.sent;
          // //总页数
          pages = Math.ceil(total / pageSize);
          count = parseInt(pageSize);
          _context2.next = 8;
          return regeneratorRuntime.awrap(safegoodsModel.find({
            $or: [{
              name: {
                $regex: value,
                $options: '$i'
              }
            }, {
              price: {
                $regex: value,
                $options: '$i'
              }
            }, {
              content: {
                $regex: value,
                $options: '$i'
              }
            }]
          }).populate('type_id').limit(count).skip((currentPage - 1) * parseInt(count)));

        case 8:
          safegoods = _context2.sent;
          return _context2.abrupt("return", {
            total: total,
            pages: pages,
            safegoods: safegoods
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.getallSafegoods = function _callee3(params) {
  var safegoods;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(safegoodsModel.find().populate('type_id'));

        case 2:
          safegoods = _context3.sent;
          return _context3.abrupt("return", safegoods);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //通过 _id 查找保险产品


module.exports.getSafegoodById = function _callee4(params) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(params);
          _context4.next = 3;
          return regeneratorRuntime.awrap(safegoodsModel.find(params));

        case 3:
          data = _context4.sent;
          console.log(data);
          return _context4.abrupt("return", data);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //修改保险产品


module.exports.updateSafegood = function _callee5(params) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(safegoodsModel.updateMany({
            _id: params._id
          }, params));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //删除保险产品


module.exports.deleteSafegood = function _callee6(params) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(safegoodsModel.deleteOne(params));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};
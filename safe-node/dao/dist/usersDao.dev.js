"use strict";

var _require = require('./model/usersModel'),
    usersModel = _require.usersModel; //获取所有用户


module.exports.getUsers = function _callee(params) {
  var currentPage, pageSize, value, total, pages, count, users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          currentPage = params.currentPage, pageSize = params.pageSize, value = params.value; //total 总条数

          _context.next = 3;
          return regeneratorRuntime.awrap(usersModel.countDocuments({
            $or: [{
              username: {
                $regex: value,
                $options: '$i'
              }
            }, {
              name: {
                $regex: value,
                $options: '$i'
              }
            }, {
              age: {
                $regex: value,
                $options: '$i'
              }
            }, {
              sex: {
                $regex: value,
                $options: '$i'
              }
            }, {
              phone: {
                $regex: value,
                $options: '$i'
              }
            }, {
              sfz: {
                $regex: value,
                $options: '$i'
              }
            }]
          }));

        case 3:
          total = _context.sent;
          // pages 总页数
          pages = Math.ceil(total / pageSize);
          count = parseInt(pageSize);
          _context.next = 8;
          return regeneratorRuntime.awrap(usersModel.find({
            $or: [{
              username: {
                $regex: value,
                $options: '$i'
              }
            }, {
              name: {
                $regex: value,
                $options: '$i'
              }
            }, {
              age: {
                $regex: value,
                $options: '$i'
              }
            }, {
              sex: {
                $regex: value,
                $options: '$i'
              }
            }, {
              phone: {
                $regex: value,
                $options: '$i'
              }
            }, {
              sfz: {
                $regex: value,
                $options: '$i'
              }
            }]
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'acceptor_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'holder_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'type_id'
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'acceptor_id'
              }
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'holder_id'
              }
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'type_id'
              }
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'holder_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'type_id'
            }
          }).limit(count).skip((currentPage - 1) * parseInt(count)));

        case 8:
          users = _context.sent;
          return _context.abrupt("return", {
            total: total,
            pages: pages,
            users: users
          });

        case 10:
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
          return regeneratorRuntime.awrap(usersModel.find({}).populate({
            path: 'orders_id',
            populate: {
              path: 'acceptor_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'holder_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'type_id'
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'acceptor_id'
              }
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'holder_id'
              }
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'type_id'
              }
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'holder_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'type_id'
            }
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //添加新用户


module.exports.addUser = function _callee3(params) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(usersModel.create(params));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //注册用户名验证


module.exports.isExist = function _callee4(params) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(usersModel.find(params));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //用户登录


module.exports.login = function _callee5(params) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(usersModel.find(params));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //通过_id获取用户


module.exports.getUserById = function _callee6(params) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(usersModel.find(params).populate({
            path: 'orders_id',
            populate: {
              path: 'acceptor_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'holder_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'type_id'
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'acceptor_id'
              }
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'holder_id'
              }
            }
          }).populate({
            path: 'payfor_id',
            populate: {
              path: 'safeorder_id',
              populate: {
                path: 'type_id'
              }
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'holder_id'
            }
          }).populate({
            path: 'orders_id',
            populate: {
              path: 'type_id'
            }
          }));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
}; //修改用户


module.exports.updateUser = function _callee7(params) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(usersModel.updateMany({
            _id: params._id
          }, params));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}; //通过id删除用户


module.exports.deleteUser = function _callee8(params) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(usersModel.deleteOne(params));

        case 2:
          return _context8.abrupt("return", _context8.sent);

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
};

module.exports.addorderUser = function _callee9(params) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(usersModel.findOneAndUpdate({
            _id: params._id
          }, {
            $push: {
              'orders_id': params.orders_id
            }
          }));

        case 2:
          return _context9.abrupt("return", _context9.sent);

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
};
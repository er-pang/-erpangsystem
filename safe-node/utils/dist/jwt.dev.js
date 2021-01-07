"use strict";

var _require = require('../utils/consts'),
    TOKEN_SECRET = _require.TOKEN_SECRET;

var expressJWT = require('express-jwt');

var jwtAuth = expressJWT({
  secret: TOKEN_SECRET,
  //该属性得值要和生成token时得字符串一致
  algorithms: ['HS256'],
  credentialsRequired: true //false:表示对于没有token的请求不进行解析（也就是说直接通过验证）
  //true：对于没有token的请求也会进行token验证，没有则验证不通过

}).unless({
  //用于配置不需要身份认证得路径
  path: ['/users/login', '/users/register', '/admins/login', '/admins/register']
});
module.exports = jwtAuth;
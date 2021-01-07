"use strict";

var express = require("express");

var router = express.Router();

var _require = require('../utils/handleFiles'),
    uploadFiles = _require.uploadFiles; //图片上传


router.post('/uploadImages', function (req, res, next) {
  var uploadImages = uploadFiles({
    path: './public/temp',
    key: 'file',
    size: 5000
  });
  uploadImages(req, res, function (err) {
    if (err) {
      console.log('图片上传失败');
      console.log(err);
    } else {
      console.log('图片上传成功');
      res.send(req.files);
    }
  });
});
module.exports = router;
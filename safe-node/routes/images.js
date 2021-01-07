var express = require("express")
var router = express.Router();
const {uploadFiles} = require('../utils/handleFiles')
//图片上传
router.post('/uploadImages', function(req, res, next) {
    
   const uploadImages = uploadFiles({
    path:'./public/temp',
    key:'file',
    size:5000
   });
   uploadImages(req,res,err=>{
       if(err){
           console.log('图片上传失败');
           console.log(err);
       }
       else{
           console.log('图片上传成功');
          res.send(req.files);
       }
   })
  });
  
  module.exports = router;
  
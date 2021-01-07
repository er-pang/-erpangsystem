var express = require('express');
var router = express.Router();
const { addSafetype, getSafetypes, getSafetypeById, deleteSafetype, updateSafetype, getAllSafetypes } = require('../service/safetypesService');

//添加保险分类
router.post('/addSafetype', async function (req, res, next) {
  res.send(await addSafetype(req.body));
});

//获取全部的保险分类
router.get('/getSafetypes', async function (req, res, next) {
  res.send(await getSafetypes(req.query));
});

//获取所有保险分类（没有条数）
router.get('/getAllSafetypes', async function (req, res, next) {
  res.send(await getAllSafetypes());
});

//通过_id 获取的保险分类
router.get('/getSafetypeById', async function (req, res, next) {
  res.send(await getSafetypeById(req.query));
});

//修改保险分类
router.post('/updateSafetype', async function (req, res, next) {
  res.send(await updateSafetype(req.body));
});

//通过_id 删除的保险分类
router.post('/deleteSafetype', async function (req, res, next) {
  res.send(await deleteSafetype(req.body));
});

module.exports = router;
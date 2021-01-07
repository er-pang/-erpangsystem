var express = require('express');
var router = express.Router();
const {
    addSafegood,getSafegoods,getSafegoodById,updateSafegood,deleteSafegood,getallSafegoods
} = require('../service/safegoodsService');

//添加保险产品
router.post('/addSafegood', async function (req, res, next) {
    res.send(await addSafegood(req.body));
});

//获取全部的保险产品
router.get('/getSafegoods', async function (req, res, next) {
    res.send(await getSafegoods(req.query));
});
//获取全部的保险产品（不需要页数条数）
router.get('/getallSafegoods', async function (req, res, next) {
    res.send(await getallSafegoods(req.query));
});

//通过_id 获取的保险产品
router.get('/getSafegoodById', async function (req, res, next) {
    res.send(await getSafegoodById(req.query));
});

//修改保险产品
router.post('/updateSafegood', async function (req, res, next) {
    res.send(await updateSafegood(req.body));
});

//通过_id 删除的保险产品
router.post('/deleteSafegood', async function (req, res, next) {
    res.send(await deleteSafegood(req.body));
});
module.exports = router;
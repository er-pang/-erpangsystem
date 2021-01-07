var express = require('express');
var router = express.Router();
const {
    getSafeorders,
    addSafeorders,
    updateSafeorder,
    deleteSafeorder,
    getSafeorderById
} = require('../service/safeordersService')

//获取订单数据
router.get('/getSafeorders', async function (req, res, next) {
    const data = req.query;
    // console.log(1,data);
    res.send(await getSafeorders(data))
});
//新增保险订单
router.post('/addSafeorders', async function (req, res, next) {
    //接收前端订单的数据
    const data = req.body;
    res.send(await addSafeorders(data))
});
//更新保险订单或者管理员审批退保
router.post('/updateSafeorder', async function (req, res, next) {
    const data = req.body;
    res.send(await updateSafeorder(data))
});
//删除保险订单
router.post('/deleteSafeorder', async function (req, res, next) {
    //前端接收要删除的数据_ID
    const data = req.body;
    res.send(await deleteSafeorder(data))
});
//通过id查找保险订单
router.get('/getSafeorderById', async function (req, res, next) {
    const data = req.query;
    //接收一个id
    res.send(await getSafeorderById(data))
});
module.exports = router;
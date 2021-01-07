var express = require('express');
var router = express.Router();
const {
    getPayforlists,
    addPayforlists,
    updatePayforlist,
    deletePayforlist,
    getPayforlistById
} = require('../service/payforlistsService')

//获取理赔数据
router.get('/getPayforlists', async function (req, res, next) {
    const data = req.query;
    res.send(await getPayforlists(data))
});
//新增理赔
router.post('/addPayforlists', async function (req, res, next) {
    //接收前端理赔的数据
    const data = req.body;
    res.send(await addPayforlists(data))
});
//更新理赔或者管理员审批理赔
router.post('/updatePayforlist', async function (req, res, next) {
    const data = req.body;
    res.send(await updatePayforlist(data))
});
//删除理赔
router.post('/deletePayforlist', async function (req, res, next) {
    //前端接收要删除的数据_ID
    const data = req.body;
    res.send(await deletePayforlist(data))
});
//通过id查找理赔
router.get('/getPayforlistById', async function (req, res, next) {
    const data = req.query;
    //接收一个id
    res.send(await getPayforlistById(data))
});
module.exports = router;
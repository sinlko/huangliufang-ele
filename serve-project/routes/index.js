var express = require('express');
var router = express.Router();
const {
  find,
  insert
} = require('../db/db')
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('grid'); //利用find方法找到MongoDB中的数据
  res.json(data) //以json格式输出

});
router.get('/restaurant', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goods'); //利用find方法找到MongoDB中的数据
  res.json(data) //以json格式输出

});
router.post('/clientname', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  let data = await find('clienttable', req.body); //利用find方法找到MongoDB中的数据
  console.log(data)
  if (data.length != 1) {
    res.send('false');
    await insert('clienttable', [{
      ...req.body
    }])
  } else {
    res.send('true');
  }
  // res.json(data) //以json格式输出

});
router.get('/shops', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('shops'); //利用find方法找到MongoDB中的数据
  res.json(data) //以json格式输出

});
// router.get('/login', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let key = req.query.token
//   const token = Buffer.from(key, 'base64').toString('utf8')
//   console.log(JSON.parse(token))
//   res.send(token) //以json格式输出

// });

module.exports = router;
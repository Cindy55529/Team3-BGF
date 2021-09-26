//router固定用法
const express = require('express');
const router = express.Router();
const connection = require('../utils/db');

//nodejs內建的
const path = require('path');

//註冊
//4.使用express-validator 做資料驗證
const { body, validationResult } = require('express-validator');
const registerRules = [
  body('username').notEmpty().withMessage('請輸入此欄位'),
  body('username').isLength({ min: 2 }).withMessage('姓名長度至少為2'),
  body('email').notEmpty().withMessage('請輸入此欄位'),
  body('email').isEmail().withMessage('請填寫正確的Email格式'),
  body('password').notEmpty().withMessage('請輸入此欄位'),
  body('password').isLength({ min: 6 }).withMessage('密碼長度至少為6'),
  body('password2').notEmpty().withMessage('請輸入此欄位'),
  body('password2')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('密碼驗證不一致'),
];

const bcrypt = require('bcrypt');

//註冊API
//1.建立好註冊路由
router.post('/register', registerRules, async (req, res, next) => {
  //5.將驗證結果放進路由中間件
  const validateResult = validationResult(req);
  //console.log(validateResult);
  if (!validateResult.isEmpty()) {
    let error = validateResult.array();
    console.log(error);
    let errorParam = error.map((item) => Object.values(item)[2]);
    let errorMsg = error.map((item) => Object.values(item)[1]);
    //console.log(errorMsg);
    //回覆所有錯誤
    return res.status(400).json({ field: errorParam, message: errorMsg });
  }
  //8.檢查帳號(email)有無重複
  let member = await connection.queryAsync(
    'SELECT * FROM member WHERE email = ?;',
    [req.body.email]
  );
  if (member.length > 0) {
    return next({
      status: 400,
      message: '此信箱已註冊過了',
    });
  }
  //2.確認有拿到資料
  console.log(req.body);
  //6.將create_time放進資料庫
  let current = new Date(+new Date() + 8 * 3600 * 1000);
  let currentDateTime = current.toISOString().slice(0, 19).replace('T', ' ');
  //3.將註冊資料存入資料庫
  //7.將密碼加密存進資料庫
  //作法:bcrypt.hash(明文，salt)
  let hashPassword = await bcrypt.hash(req.body.password, 10);
  let result = await connection.queryAsync(
    'INSERT INTO member (username,email,password,create_time) VALUES (?);',
    [[req.body.username, req.body.email, hashPassword, currentDateTime]]
  );
  res.json({});
});

//登入
//登入API
//1.建立登入API
router.post('/login', async (req, res, next) => {
  //2.檢查帳號(email)是否存在
  let member = await connection.queryAsync(
    'SELECT * FROM member WHERE email = ?;',
    [req.body.email]
  );
  console.log(member);
  //console.log(member.create_time)
  if (member.length === 0) {
    return next({
      status: 400,
      message: '找不到帳號',
    });
  }

  //3.密碼比對
  //(1)有找到相符資料一筆 設為變數(註冊時有檢查帳號是否重複 因此正常情況下應只有一筆資料)
  member = member[0];
  //(2)使用bcrypt套件的compare做密碼比對
  let result = await bcrypt.compare(req.body.password, member.password);
  //console.log(req.body.password)
  //(3)判斷密碼正確或錯誤
  if (!result) {
    //如果錯誤
    return next({
      status: 400,
      message: '密碼錯誤',
    });
  }
  res.json({});
});

module.exports = router;

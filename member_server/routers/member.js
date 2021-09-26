//router固定用法
const express = require('express');
const router = express.Router();
const connection = require('../utils/db');

//nodejs內建的
const path = require('path');

//欄位驗證
const { body, validationResult } = require('express-validator');
const memberEditRules = [
  body('username').notEmpty().withMessage('請輸入此欄位'),
  body('username').isLength({ min: 2 }).withMessage('姓名長度至少為2'),
  body('email').notEmpty().withMessage('請輸入此欄位'),
  body('email').isEmail().withMessage('請填寫正確的Email格式'),
  body('birth').notEmpty().withMessage('請輸入此欄位'),
  body('birth').isISO8601().toDate().withMessage('請填寫正確的生日格式'),
  body('phone').notEmpty().withMessage('請輸入此欄位'),
  body('address').notEmpty().withMessage('請輸入此欄位'),
];

//會員資料修改
//為了處理multipart/form-data 所以使用multer
//multer設定儲存位置
const multer = require('multer');
const { dirname } = require('path');
//因為圖片上傳 用formdata 要告訴她上傳檔案存在哪裡(通常存在硬碟 => diskStorage)
const storage = multer.diskStorage({
  //設定儲存目的地 cb是callback
  //三個參數： request 物件、帶有上傳檔案資訊的file 物件、篩選完成後呼叫的cb 函式
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'uploads'));
  },
  //檔案命名
  //2-7改圖片檔名
  filename: function (req, file, cb) {
    console.log('檔案名稱', file);

    //取副檔名
    const ext = file.originalname.split('.').pop();

    //用上傳時間命名
    //cb(error,新名字)
    cb(null, `member-${Date.now()}.${ext}`);
  },
});

//正式開始使用multer
//2-1先設一個變數
const uploader = multer({
  //2-2告訴他存在哪(上面設定過了)
  storage: storage,
  //2-3檔案驗證 限制上傳格式 (非常重要)
  fileFilter: function (req, file, cb) {
    //印出檔案格式
    console.log('檔案格式', file.mimetype);
    if (
      file.mimetype !== 'image/jpg' &&
      file.mimetype !== 'image/jpeg' &&
      file.mimetype !== 'image/png'
    ) {
      cb(new Error('不接受的檔案型態'), false);
    }
    cb(null, true);
  },
  //2-4限制檔案大小 (1M)
  limits: {
    fileSize: 1024 * 1024,
  },
});
//會員資料修改API
//1.建立好會員資料修改路由
//2-5將uploader放進中間件(注意要放在格式驗證前面 因為驗證規則需要解譯過的資料)
//只有一張照片就用single(欄位名稱)
router.post(
  '/memberEdit',
  uploader.single('image'),
  memberEditRules,
  async (req, res, next) => {
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

    //3-1檢查帳號(email)有無重複
    let member = await connection.queryAsync(
      'SELECT * FROM member WHERE email = ?;',
      [req.body.email]
    );
    if (member.length > 0) {
      return next({
        //code: '330002',
        status: 400,
        message: '此信箱已註冊',
      });
    }

    //2.確認有拿到資料
    //console.log(req.body);
    //2-6確認有拿到資料(如果multer有成功的話)
    console.log('最終結果', req.file);

    //先測試有無上傳資料 有=>改檔名 沒有=>空
    //2-8將filename存進資料庫
    let filename = req.file ? '/uploads/' + req.file.filename : '';

    //6.將update_time放進資料庫
    let current = new Date(+new Date() + 8 * 3600 * 1000);
    let currentDateTime = current.toISOString().slice(0, 19).replace('T', ' ');
    //3.將修改資料存入資料庫
    let result = await connection.queryAsync(
      'INSERT INTO member (username,email,birth,phone,address,image,update_time) VALUES (?);',
      [
        [
          req.body.username,
          req.body.email,
          req.body.birth,
          req.body.phone,
          req.body.address,
          filename,
          currentDateTime,
        ],
      ]
    );
    res.json({});
  }
);
module.exports = router;

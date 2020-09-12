const multer  =   require('multer');
let crypto = require('crypto');

const secret = '%^%HKJHhkjh&*&(rsfsf)';
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './img');
  },
  filename: function (req, file, callback) {
    let hash = crypto.createHmac('sha256', secret).update(new Date().toString() + file.originalname).digest('hex');
    hash = hash + ".jpg"
    callback(null, hash);
  }
});
exports.uploads = multer({ storage : storage }).array('filedata',12);

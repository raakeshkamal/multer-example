var express = require('express');
var router = express.Router();
var multer = require("multer");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',[ multer({ dest: './uploads/'}), function(req, res){
    console.log(req.body); // form fields
    console.log(req.files); // form files
    res.status(204).end();
}]);
router.post('/', function(req, res) {
  console.dir(req.files);
});
module.exports = router;

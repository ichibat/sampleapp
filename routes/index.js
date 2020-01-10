var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// hoge get request
router.get('/hoge', (req, res) => {
  res.json({
    name: "hoge"
  })
});

module.exports = router;

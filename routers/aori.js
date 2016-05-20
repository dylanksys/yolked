var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/awio', function(req, res) {
  res.send('Path: /awio');
};

router.get('/oah', function(req, res) {
  res.send('Path: /oah');
};

module.exports = router;

var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/homndpoint', function(req, res) {
  res.send('Path: /homndpoint');
};

router.get('/thent', function(req, res) {
  res.send('Path: /thent');
};

module.exports = router;

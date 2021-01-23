const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/profile', (req, res, next) => {
  res.render('profile');
});

router.get('/main', (req, res, next) => {
  res.render('main');
});

router.get('/private', (req, res, next) => {
  res.render('private');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const fetch = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Nip' });
});
// GET /cats/facts
router.get('/cats/fact', async function(req, res) {
  const response = await fetch('https://catfact.ninja/fact');
  const catFacts = response.data.fact;
  res.render('facts', { catFacts });
})

module.exports = router;

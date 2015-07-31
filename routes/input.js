var express = require('express');
var config = require('config');
var router = express.Router();
var meta = config.meta;
var gtm = config.gtm;
var domain = config.domain;

router.get('/', function(req, res, next) {
  res.render('input', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    robots: meta.robots,
    gtmContainerId: gtm.containerId,
  });
});

module.exports = router;

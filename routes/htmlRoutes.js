/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
var db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/user', function (req, res) {
    console.log("USER:", req.user);
    db.User.findAll({where: {
      auth_id: req.user.id
    }}).then(function (dbExamples) {
      res.render('profile', {
        msg: 'Welcome!',
        ourUser: dbExamples[0].dataValues
      });
    });
  });

  // Get Search Functionality
  app.get('/search', function (req, res) {
    res.render('search');
  });

  app.get('/matches', function (req, res) {
    res.render('matches');
  });

  app.get('/chat/:id', function (req, res) {
    let id = req.params.id;
    db.Chats.findAll({
      where: {
        MatchId: id
      }
    }).then(function (content) {
      console.log(content);
      res.render('chats', {
        content,
        matches: id
      });
    });
  });

  /* GET home page. */
  app.get('/', function (req, res, next) {
    console.log('HELLO!!!');
    res.render('index', { title: 'Fundeed!' });
  });

  // Render 404 page for any unmatched routes
  console.log('404');
  app.get('*', function (req, res) {
    res.render('404');
  });
};

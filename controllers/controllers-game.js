const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').userGame;

module.exports = {
//Create usergame database
    //Create usergame
    RegisterGame: (req,res) => {
        console.log(req.body);
        if (!req.body.email || !req.body.password ){
          res.status(400).send({msg: 'Please pass username and password.'})
        } else {
          User
            .create({
              email: req.body.email,
              password: req.body.password
            })
          //  .then((user) => res.status(201).send(user))
          //.then((user) => res.redirect("post_login"))
          .then(() => res.status(201).send("Successfully user register"))
          .catch((error) => {
              console.log(error);
              res.status(400).send(error);
            });
        }    
    },

    Login: (req,res) => {
        User
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Authentication failed. User not found.',
          });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
          if(isMatch && !err) {
            var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
            jwt.verify(token, 'nodeauthsecret', function(err, data){
              console.log(err, data);
            })
           // res.json({success: true, token: 'JWT ' + token});
           //window.localStorage.setItem('userToken', token) 
           console.log("JWT" + token)
           res.redirect("/playgame")

          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        })
      })
      .catch((error) => res.status(400).send(error));
    }
}

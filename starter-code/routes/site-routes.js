const express = require("express");
const site = express.Router();

site.get("/", (req, res, next) => {
  res.render("auth/secret");
});

site.use((req, res, next) => {
  if (req.session.currentUser) {
    console.log(req.session)
    next();
  } else {
    res.redirect("/login");
  }
});

site.get("/secret", (req, res, next) => {
  console.log(req.session)
  res.render("auth/secret");
});
module.exports = site;
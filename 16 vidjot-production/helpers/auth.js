module.exports = {
  ensureAuthentication: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.flash("error_msg", "You are not autherized");
      res.redirect("/users/login");
    }
  }
}
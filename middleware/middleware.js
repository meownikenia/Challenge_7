function checkFieldsPost(req, res, next) {
    const { username, email, password } = req.body;
  
    if (username && email && password) {
      next();
    } else {
      // res.status(400);
      res.status(400).json({ message: "Form field not can't be empty" });
    }
  }
  module.exports = {
    checkFieldsPost,
  };
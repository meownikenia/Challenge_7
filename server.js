const express = require("express");
const app = express();
const path = require("path");
const port = 3003;
//const bodyParser = require("body-parser");

const adminroute = require("./routes/admin");
const apiroute = require("./routes/api");

//const methodOverride = require("method-override");
const hbs = require("hbs");
const db = require("./models");

//set views file
app.set("views", path.join(__dirname, "views"));
//set view engine
app.set("view engine", "hbs");

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public folder as static folder for static file
app.use(express.static("public"));

app.use("/admin", adminroute);
app.use("/api", apiroute);

db.sequelize
  // .sync().then(() => {
   // console.log("");
    //console.log("Succesfully Resync Database");
    //console.log("");
  // });
  .sync({
    // force: true,
  })
  .then(() => {
    console.log("");
    console.log("Succesfully Drop And Resync Database");
    console.log("");
  });


app.post("/register", (req, res) => {
  //render file form.hbs
 res.render("game", {
    //ambil value dari textname
   name: req.body.nama,
  });
});

app.post("/post_login", (req, res) => {
  //render file form.hbs
  res.render("game", {
    //ambil value dari textname
    name: req.body.nama,
  });
});

app.get("/", (req, res) => {
  //render file index.hbs
  res.render(
    "home" //,{name : "M Fikri"}
  );
});

//app.get("/home", (req, res) => {
  //render file index.hbs
  //res.render(
    //"home" //,{name : "M Fikri"}
  //);
//});
//app.get("/api/v1/datajason", (req, res) => {
  //res.status(200).json(datajason);
//});

//app.get("/api/v1/datajason/:id", (req, res) => {
  //const post = datajason.find((i) => i.id === +req.params.id);
  //res.status(200).json(post);
//});

//route untuk manampilkan form
 app.get('/post',(req, res) => {
  //render file form.hbs
res.render('form');
 });

app.get("/register", (req, res) => {
  res.render("register");
});

//route untuk menampilkan form
app.get("/post_login", (req, res) => {
  //render file form.hbs
  res.render("login");
});

//route untuk menampilkan form
app.get("/playgame", (req, res) => {
  //render file form.hbs
  res.render("game");
});

//port
app.listen(3003, () => {
  console.log("Server is running at port 3003");
});

const express = require("express");
const fileUpload = require("express-fileupload");
const port = 2400;
const path = require("path");
const ejs = require("ejs");
const connectDB = require("./models/config");
const BlogPost = require("./models/blogpost");
connectDB();
const app = new express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
// app.use(fileupload());

// Routes
app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  // res.sendFile(path.resolve(__dirname, "pages/index.html"));
  res.render("index", {
    blogposts,
  });
});

app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/about.html"));`
  res.render("about");
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/contact.html"));
  res.render("contact");
});

app.get("/post/:id", async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  // res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render("post", {
    blogpost,
  });
});

app.get("/posts/new", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render("create");
});

app.post("/posts/store", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/post.html"));
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
    await BlogPost.create(req.body);
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const connectDB = require("./models/config");
const BlogPost = require("./models/blogpost");
connectDB();

BlogPost.create({
  title: "Test1",
  body: "This the test 1 for create",
});

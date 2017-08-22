var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  //RELATIONSHIPS
  //blogId: { type: ObjectId, ref: 'Blog', required: true }
})

var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
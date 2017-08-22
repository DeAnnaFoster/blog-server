var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var blogpostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  //RELATIONSHIPS
  //blogpostId: { type: ObjectId, ref: 'Blogpost', required: true }
  blogId: { type: ObjectId, ref: 'Blog', required: true }
})

var Blogpost = mongoose.model("Blogpost", blogpostSchema);

module.exports = Blogpost;
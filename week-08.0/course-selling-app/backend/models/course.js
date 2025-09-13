const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  adminId: ObjectId
})

const courseModel = mongoose.model("courses", courseSchema);

module.exports = {
  courseModel
}
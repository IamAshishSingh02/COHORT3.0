const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const purchaseSchema = new Schema({
  userId: {type: ObjectId, ref: "users"},
  courseId: {type: ObjectId, ref: "courses"}
})

const purchaseModel = mongoose.model("purchases", purchaseSchema);

module.exports = {
  purchaseModel
}
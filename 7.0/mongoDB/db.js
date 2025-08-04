const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);

const Users = new Schema({
  email: {type: String, unique: true},
  password: String, 
  name: String
})

const Todos = new Schema({
  title: String, 
  done: Boolean,
  userId: ObjectId
})

const UserModel = mongoose.model("users", Users);     
const TodoModel = mongoose.model("todos", Todos);

module.exports = {
  UserModel,
  TodoModel
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
mongoose.connect("mongodb+srv://Son_Goku:Son_Goku_Ash02@cluster0.jdgnvuj.mongodb.net/todo-app-database")

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
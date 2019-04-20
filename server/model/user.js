const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  nickname: String, // 昵称
  age: String, // 年龄
  phone: String, // 电话
})
schema.methods.getDocumentInfo = function() {
  return {
    username: this.username,
    password: this.password,
    age: this.age,
    nickname: this.nickname,
    email: this.email,
    phone: this.phone
  }
}
schema.statics.getInfoByUserName = function(username) {
  // this是Model
  return this.findOne({
    username
  })
}

const Model = mongoose.model('User', schema)

module.exports = Model

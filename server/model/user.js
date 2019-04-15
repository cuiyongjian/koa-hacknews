const schema = mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  getInfoById() {
    return {
      username: this.username,
      password: this.password
    }
  }
})

const Model = mongoose.model('User', schema)

module.exports = Model

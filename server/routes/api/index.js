const login = require('./login')

module.exports = function(app) {
  app.use(login.routes())
}

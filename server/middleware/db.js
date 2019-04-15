const mongoose = require('mongoose')
const config = require('../config')

module.exports = (ctx, next) => {
  mongoose.connect(config.mongodb, { useNewUrlParser: true })
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
    console.log('db链接成功')
  });
  await next()
}

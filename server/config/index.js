const m = {
  'production': 'prod',
  'development': 'dev',
  'test': 'test'
}

const envConfig = require(`./${m[process.env.NODE_ENV || 'production']}`)

// 合并环境配置和基础配置
module.exports = Object.assign({
  port: 3000
}, envConfig)

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// 根据用户名获取用户信息
exports.getUserByUserName = async (ctx) => {
  const username = ctx.params.username
  const UserModel = require('../model/user')
  console.log('username', username)
  let rel = await UserModel.getInfoByUserName(username)
  // rel.set('password', '')
  rel = rel.toJSON()
  delete rel.password
  ctx.body = {
    status: 0,
    data: rel
  }
}

// 添加用户
exports.addUser = async(ctx) => {
  const User = require('../model/user')
  const me = new User({
    username: 'cuiyongjian',
    email: 'cuiyongjian@qq.com',
    age: 18,
    phone: '18124769518',
    nickname: 'sheldon'
  })
  const rel = await me.save()

  ctx.body = {
    status: 0,
    data: rel
  }
}

// 用户登录（不需要校验token）
exports.login = async(ctx) => {
  const userinfo = ctx.request.body
  const User = require('../model/user')
  const dbUserInfo = await User.getInfoByUserName(userinfo.username)
  if (dbUserInfo) {
    // 判断密码是否正确
    if (bcryptjs.compareSync(userinfo.password, dbUserInfo.password)) {
      const token = jwt.sign({
        username: dbUserInfo.username,
        id: dbUserInfo.id
      }, 'cyj')
      ctx.body = {
        status: 0,
        data: token
      }
    }
    else {
      ctx.body = {
        status: -2,
        msg: '密码错误'
      }
    }
  }
  else {
    ctx.body = {
      status: -1,
      msg: 'no username'
    }
  }
}

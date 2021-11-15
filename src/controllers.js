'use strict'
// 系统函数库
// const user = require.main.require('./user')
// const db = require.main.require('../src/database')
// const meta = require.main.require('./meta')
// const utils = require.main.require('../public/src/utils')

// 常用模块
// const async = require.main.require('async')
// const nconf = require.main.require('nconf')
// const winston = require.main.require('winston')
// const path = require.main.require('path')

// 载入依赖模块
// const _ = require('lodash')
// const callbackify = require('../callbackify')

const Controllers = {}
Controllers.renderAdminPage = (req, res, next) => {
  res.render('admin/plugins/banner', {})
  /*
      使用回调方式中的 next(err, data) 方法。
      传递数据:
        return '数据'
      传递错误:
        throw new Error('错误')
    */
}

module.exports = Controllers
module.exports.Controllers = Controllers

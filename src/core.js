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

const meta = require.main.require('./src/meta')
const { Controllers } = require('./controllers')
const { resolve } = require('eslint-plugin-promise/rules/lib/promise-statics')

const Core = {}
Core.init = async (params) => {
  const router = params.router
  const hostMiddleware = params.middleware
  // const hostControllers = params.controllers;
  // 我们需要为每个视图创建路由。 一个 API 路由，以及它自身的路由。 方法可以参考下面的方案
  // 使用 buildHeader 中间件， NodeBB会构建页面，并将你的模板嵌入进去
  router.get(
    '/admin/plugins/banner',
    hostMiddleware.admin.buildHeader,
    Controllers.renderAdminPage
  )
  router.get('/api/admin/plugins/banner', Controllers.renderAdminPage)
}

Core.addAdminNavigation = async (header) => {
  header.plugins.push({
    route: '/plugins/banner',
    icon: 'fa-tint',
    name: 'Banner配置'
  })
  return header
}

Core.getRecentData = async (params) => {
  return new Promise(resolve => {
    // eslint-disable-next-line handle-callback-err
    meta.settings.get('banner', function (err, bannerData) {
      params.templateData = { ...params.templateData, bannerData }
      resolve(params)
    })
  })
}

module.exports = Core
module.exports.Core = Core

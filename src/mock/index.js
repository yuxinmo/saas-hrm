import Mock from 'mockjs'
import TableAPI from './table'
import ProfileAPI from './profile'
import LoginAPI from './login'
import CompanyAPI from './company'

Mock.setup({
  //timeout: '1000'
})

//如果发送请求的API路径匹配，拦截
//第一个参数匹配请求的api路径，第二个参数匹配请求的方式，第三个参数响应数据如何替换
Mock.mock(/\/table\/list\.*/, 'get', TableAPI.list)
Mock.mock(/\/frame\/profile/, 'post', ProfileAPI.profile)
Mock.mock(/\/frame\/login/, 'post', LoginAPI.login)
//配置saas企业模拟数据接口
// Mock.mock(/\/company\/+/, 'get', CompanyAPI.sassDetail)//访问企业详情
// Mock.mock(/\/company/, 'get', CompanyAPI.list)//访问企业列表


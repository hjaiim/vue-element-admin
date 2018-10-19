/**
 * Created by haojun on 2018/5/28.
 */

let web_config = {
  devServer: 'api/rp-mms-web-shop', // 后端本地或者测试
  //  devServer:'http://test.service.xq.mms.yundingdang.com/rp-mms-web-shop/', // 后端本地或者测试
  //  devServer:'http://192.168.16.180:8080/mms-web/', // 后端本地或者测试
  server: 'http://121.41.80.45/rp-mms-web-shop/', //正式
  timeout: 3000,
  successCode: 2000, // 和后端约定的接口正常状态码
  unLoginCode: 4005, // 未登录的接口返回状态码
  globalParameObj: {} // 全局参数
};

export default web_config;

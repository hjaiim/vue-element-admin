/**
 * Created by haojun on 2018/6/1.
 */
import * as API from './';

export default {
  // 登录
  login: params => {
    return API.POST('user/userLogin', params)
  },
  // 登出
  logout: params => {
    return API.POST('user/userLoginOut', params)
  }
}

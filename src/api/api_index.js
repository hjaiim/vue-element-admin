/**
 * Created by haojun on 2018/6/2.
 */
import * as API from './';

export default {
  // 消息列表
  message: params =>
  {
    return API.POST('message/getMessageOverview', params)
  }
}

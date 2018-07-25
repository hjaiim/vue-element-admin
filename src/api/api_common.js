/**
 * Created by haojun on 2018/6/2.
 */
import * as API from './';
import web_config from 'jslib/config/config';
const STATIC_URL = process.env.NODE_ENV === 'development' ? window.location.origin : web_config.server

export default {
  // json
  menu: () =>
  {
    return API.GET(`${STATIC_URL}/static/data/menu.json`)
  }
}

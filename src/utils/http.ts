import axios from 'axios';
import { Notification } from 'element-ui';

const _axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/backtestbusiness/' : '/api',
  timeout: 60 * 1000,
  withCredentials: true,
});

_axios.interceptors.response.use(response => response.data, (error) => {
  console.log(error.response.config.url, error.response.status)
  if ((error.response.config.url === '/api/company/brief' || /\/api\/login\?.*/.test(error.response.config.url)) 
    && error.response.status === 400) {
    return Promise.resolve({data: {}});
  } else if (error.response.status !== 401) {
    // logger and notification;
    Notification.error({
      title: '错误',
      message: error.response.data.message,
    });
  }

  return Promise.reject(error);
});

export default _axios;

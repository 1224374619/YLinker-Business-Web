import axios from 'axios';
import { Notification } from 'element-ui';

const _axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/backtestbusiness/' : '/api',
  timeout: 60 * 1000,
  withCredentials: true,
});

_axios.interceptors.response.use(response => {
  return response.data;
}, (error) => {
  if (typeof error.response === 'undefined') {
    // login;
    return true;
  }
  // logger and notification;
  Notification.error({
    title: '错误',
    message: error.response.data.message,
  });

  return Promise.reject(error);
});

export default _axios;

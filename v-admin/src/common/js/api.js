'use strict';

import axios from 'axios';
import store from '../../store/store';
const vData = require('../../../static/data.json');
import Vue from 'vue'
import router from '../../router'
let _self = new Vue({
  router
});

let httpNumber = 0;

function checkCode(res) {
  return res;
}

axios.interceptors.request.use(config => {
  httpNumber += 1;
  store.commit('LSHOW');
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 202:
        console.log(202);
        break;
      case 302:
        console.log(302);
        break;
      case 404:
        console.log(404);
        break;
      case 500:
        console.log(500);
        break;
    }
  }
  return Promise.resolve(error.response);
});

function checkStatus(response) {
  httpNumber -= 1;
  if (httpNumber <= 0) {
    store.commit('LHIDE');
  }
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data;
  } else {
    let obj = null;
    if (response.status === 202) {
      _self.$router.push('/');
      obj = null;
    } else {
      obj = {
        status: -404,
        desc: '网络异常'
      }
    }
    return obj;
  }
}

export function post(data) {
  return axios({
    method: 'post',
    baseURL: vData.api,
    url: data.url,
    data: data.params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
    timeout: 100000
  }).then((response) => {
    return checkStatus(response)
  }).catch(error => {
    return checkCode(error)
  })
}

export function upLoad(data) {
  return axios({
    method: 'post',
    baseURL: vData.upload,
    url: '/file/uploadImage.json',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
    timeout: 100000
  }).then((response) => {
    return checkStatus(response)
  }).catch(error => {
    return checkCode(error)
  })
}

import axios from "axios";

import {Message} from 'element-ui';
import {Router} from "@/router/router";

// 创建 axios 实例
// 可以通过设置不同的 baseURL 来创建多个实例，从而支持不同的 API 服务器
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
axios.interceptors.request.use((request) => {
    const headers = request.headers;
    if (!headers.Authorization) {
        headers.Authorization = "Bearer " + "token";
    }
    return request;
})
// 响应拦截器
// 通过状态码,做不同的处理
axios.interceptors.response.use((response) => {
    const {code, data, msg} = response.data;
    if (code === 403) {
        // 清除 TODO  token
        // token 过期
        Message.error(msg);
        setTimeout(() => {
            Router.push("/login");
        }, 1500);

    } else if (code === 406) {
        // 清除 TODO token
        Message.error(msg);
        setTimeout(() => {
            Router.push("/login");
        }, 1500);
    } else {
        return response;
    }
})

// 请求核心函数
function request(options) {
    options.method = options.method || 'get';
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    service.defaults.baseURL = process.env.VUE_APP_BASE_API;
    return service(options);
}

export default service;

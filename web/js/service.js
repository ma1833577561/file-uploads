/*
 * @Author: yao2862083081 yaoying9407@163.com
 * @Date: 2022-05-29 18:43:38
 * @LastEditors: yao2862083081 yaoying9407@163.com
 * @LastEditTime: 2023-01-09 10:50:52
 * @FilePath: \uploadMax\web\js\service.js
 * @Description: 请求配置
 */
let service = axios.create();
service.defaults.baseURL = 'http://127.0.0.1:8888';
service.defaults.headers['Content-Type'] = 'multipart/form-data';
service.defaults.transformRequest = (data, headers) => {
    const contentType = headers['Content-Type'];
    if (contentType === "application/x-www-form-urlencoded") return Qs.stringify(data);
    return data;
};
// 响应拦截
service.interceptors.response.use(response => {
    return response.data;
});
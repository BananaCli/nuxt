import {getCookie} from "@/plugins/cookie"
import { error as err,success } from "./message"
import qs from "qs"
// import {state} from '@/store/user'
export default function({ $axios, redirect,app }) {
  // $axios.defaults.baseURL = 'http://caijunduo.free.idcfengye.com/api'
  // $axios.defaults.withCredentials = true
  // 请求拦截器
    $axios.interceptors.request.use(
      
      config => {
        // console.log("用户token：",app.store.state.user.token);
        // var token = app.store.state.user.token
        let token = localStorage.getItem("token")
        if(token)
          config.headers.Authorization = token
        if(config.method === "get"){
          config.paramsSerializer = function(params) {
            return qs.stringify(params, { arrayFormat: "repeat" })
          }
        }
        return config
      },
      error => {
        // do something with request error
        return Promise.reject(error)
      }
    )
    $axios.onRequest(config => {
      // console.log('Making request to ' + config.url)
    })
  
    // 响应拦截器
    $axios.interceptors.response.use(
      response => {
        const code = response.status
        const data = response.data
        if (code === 200) {
          if(response.headers.hasOwnProperty("authorization"))
            data.token =response.headers["authorization"]
          return data
        } else {
          
          // redirect('/404')
          // if the custom code is not 200, it is judged as an error.
        }
        return Promise.reject(new Error(data.msg || "Error"))
      },
      error => {
  
        return Promise.reject(error)
      }
    )
  
    $axios.onError(error => {
      console.log("响应错误：",error.response)
      const code = parseInt(error.response && error.response.data.err_code)
      const msg = error.response.data.err_message?error.response.data.err_message:"服务异常，请稍后重试。"
      switch(code){
        case 10000:err(msg);break;
        case 10001:err(msg);break;
        case 10002:err("请先登录后再执行操作");app.store.commit("ineedlogin",true);break;
        case 10003:err(msg);break;
        case 10004:err(msg);break;
        case 10005:err(msg);break;
        case 10006:app.store.commit("ineedbind",true);break;
      }
      // switch(code){
      //   case 400:err(msg);break;
      //   case 401:err("请先登录后再执行操作");app.store.commit("ineedlogin",true);break;
      //   case 404:err(msg);break;
      //   case 500:err(msg);break;
      // }

    })
  }
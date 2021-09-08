import Vue from "vue"
import {Message,MessageBox} from "element-ui"
import {notification} from "ant-design-vue"




export function success(msg){
    Message.success(msg)
}
export function error(msg){
    Message.error(msg)
}
export function warning(msg){
    Message.warning(msg)
}
export function info(msg){
    Message.info(msg)
}
export function confirmBox(tipsMsg) {
    return new Promise((resolve, reject) => {
        MessageBox.confirm(tipsMsg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
        }).then(() => {
        resolve()
        })
        .catch(()=>{})
    })
}
export function notif(msg){
    notification.success({
        message:"提示",
        description:msg,
        duration:0
    })
}
    
    
Vue.prototype.$confirm = confirmBox
Vue.prototype.$notif = notif
Vue.prototype.$success = success
Vue.prototype.$error = error
Vue.prototype.$warning = warning
Vue.prototype.$info = info
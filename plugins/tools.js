import Vue from "vue"
import Qrcode from "qrcodejs2"
import Myshare from "vue-social-share"


function createQrcode(el,obj){
    new Qrcode(el,obj)
}

Vue.prototype.$qrcode = createQrcode

Vue.component("Myshare",Myshare)
import {checkPc} from '@/utils/common'
const isPc = checkPc()
if (!isPc) {
    window.location.replace(request.mobile)
}

import Vue from 'vue'
import request from '@/axios/request'
import axios from '@/axios'
import lazyload from 'vue-lazyload'
import router from '@/router'
import index from '@/index.vue'
import resize from '@/resize'

if (isPc) {
    Vue.config.productionTip = false
    Vue.prototype.$request = request
    Vue.prototype.$axios = axios
    Vue.use(lazyload, {
        attempt: 1
    })
    new Vue({
        router,
        render: h => h(index)
    }).$mount('#app')
    resize.resetPxWidth(1920)
}

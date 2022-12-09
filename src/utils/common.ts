/**
    校验是否是PC设备
    @param
    @return {Boolean} 是否是PC设备
 */
const checkPc = ()=> {
    const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    for (let i = 0; i < agents.length; i++) {
        if (navigator.userAgent.indexOf(agents[i]) > 0) {
            return false
        }
    }
    return true
}

export {
    checkPc
}
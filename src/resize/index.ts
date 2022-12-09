//自适应布局：动态设置rem与px比例
let pxW = 1920
const resizeFontSize = () => {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / pxW * 100 + 'px'
}
window.addEventListener('resize', resizeFontSize, false)

export default {
    resetPxWidth: (w = 1920) => { //重置设计图基准像素宽度（默认1920px下，1rem=100px）
        pxW = w
        resizeFontSize()
    }
}
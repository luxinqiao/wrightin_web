<template>
    <div id='main'>
        <div id='top'>
            <span id='logo' @click='checkMenu("/home")'></span>
            <ul id='menu'>
                <li :class='activeMenu=="/home"?"home active":"home"' @click='checkMenu("/home")'>
                    <span class='text'>首页</span>
                    <span class='bottomLine'></span>
                </li>
                <li :class='activeMenu.indexOf("/product")==0?"product active":"product"' @click='checkMenu("/product/wrightin")' @mouseenter='enterMenu("product")' @mouseleave='leaveMenu("product")'>
                    <span class='text'>产品</span>
                    <span class='bottomLine'></span>
                </li>
                <li :class='activeMenu=="/app"?"app active":"app"' @click='checkMenu("/app")'>
                    <span class='text'>APP</span>
                    <span class='bottomLine'></span>
                </li>
                <li :class='activeMenu=="/technology"?"technology active":"technology"' @click='checkMenu("/technology")'>
                    <span class='text'>核心技术</span>
                    <span class='bottomLine'></span>
                </li>
                <li :class='activeMenu.indexOf("/about")==0?"about active":"about"' @click='checkMenu("/about/info")' @mouseenter='enterMenu("about")' @mouseleave='leaveMenu("about")'>
                    <span class='text'>关于我们</span>
                    <span class='bottomLine'></span>
                </li>
            </ul>
            <span id='hotLine'>
                <span class='text'>服务热线：400-133-5668</span>
                <span class='img' @click='openUrl("https://lanting.tmall.com")'></span>
            </span>
        </div>
        <div id='topHover' :style='{display:hover.isShow?"block":"none", top:(hover.top/100)+"rem"}'>
            <div id='product-detail' v-if='hover.type=="product"' @mouseenter='enterMenuDetail("product")' @mouseleave='leaveMenuDetail()'>
                <p class='product-detail-item wrightin-two' @click.stop='checkMenu("/product/wrightinTwo")'>
                    <span>盆底肌修复仪</span>
                    <span>改善盆底健康问题</span>
                </p>
                <p class='product-detail-item wrightin' @click.stop='checkMenu("/product/wrightin")'>
                    <span>盆底生物刺激反馈仪</span>
                    <span>治疗盆底肌肉功能障碍</span>
                </p>
                <p class='product-detail-item kegel' @click.stop='checkMenu("/product/kegel")'>
                    <span>盆底肌肉康复器</span>
                    <span>锻炼阴道肌肉</span>
                </p>
                <p class='product-detail-item wireless' @click.stop='checkMenu("/product/wireless")'>
                    <span>无线产后恢复仪</span>
                    <span>改善腹直肌分离</span>
                </p>
            </div>
            <div id='about-detail' v-if='hover.type=="about"' @mouseenter='enterMenuDetail()' @mouseleave='leaveMenuDetail()'>
                <p class='about-detail-item info' @click.stop='checkMenu("/about/info")'>
                    <span>公司简介</span>
                </p>
                <p class='about-detail-item contact' @click.stop='checkMenu("/about/contact")'>
                    <span>联系我们</span>
                </p>
                <p class='about-detail-item join' @click.stop='checkMenu("/about/join")'>
                    <span>加入我们</span>
                </p>
            </div>
        </div>
        <div id='content'>
            <router-view/>
        </div>
        <div id='bottom'>
            <div class='info product'>
                <p class='title'>产品&技术</p>
                <p class='item' @click='checkMenu("/product/wrightinTwo")'>盆底肌修复仪</p>
                <p class='item' @click='checkMenu("/product/wrightin")'>盆底生物刺激反馈仪</p>
                <p class='item' @click='checkMenu("/product/kegel")'>盆底肌肉康复器</p>
                <p class='item' @click='checkMenu("/product/wireless")'>无线产后恢复仪</p>
                <p class='item' @click='checkMenu("/app")'>澜渟App</p>
                <p class='item' @click='checkMenu("/app")'>澜渟医生App</p>
                <p class='item' @click='checkMenu("/technology")'>核心技术</p>
            </div>
            <div class='info about'>
                <p class='title'>关于我们</p>
                <p class='item' @click='checkMenu("/about/info")'>公司简介</p>
                <p class='item' @click='checkMenu("/about/contact")'>联系我们</p>
                <p class='item' @click='checkMenu("/about/join")'>加入我们</p>
            </div>
            <div class='info link'>
                <p class='title'>友情链接</p>
                <p class='item' @click='openUrl("http://www.medlander.com")'>麦澜德</p>
                <p class='item' @click='openUrl("http://www.jialan365.com/")'>佳澜健康</p>
                <p class='item' @click='openUrl("https://www.reseader.com")'>锐诗得</p>
            </div>
            <div class='qrcode wechat'>
                扫描二维码<br/>关注澜渟微信公众号
            </div>
            <div class='qrcode app'>
                扫描二维码<br/>下载澜渟App
            </div>
            <div class='qrcode app-doctor'>
                扫描二维码<br/>下载澜渟医生App
            </div>
            <div class='phone'>
                <p>服务热线：400-133-5668</p>
                <p>周一至周日 9:00-18:00</p>
                <p>商务合作：15805161186</p>
            </div>
            <div class='copyright'>
                <p>互联网药品信息服务资格证书：（苏）-非经营性-2018-0080</p>
                <p @click='openUrl("https://beian.miit.gov.cn/#/Integrated/index")'>Copyright © 2016-2021 南京麦豆健康管理有限公司 版权所有 苏ICP备 17044321 号</p>
                <p>投诉举报电话: 12331</p>
            </div>
        </div>
        <div id='goTop' v-if='goTopShow' @click='goTop()'>
            <img class='img' v-lazy='require("@/assets/img/index/goTop.png")'>
            <img class='img-hover' v-lazy='require("@/assets/img/index/goTop-hover.png")'>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeMenu: '/home',
            hover: {
                isShow: false,
                type: 'product',
                top: -158
            },
            scrollTop: 0,
            goTopShow: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.bindScrollWindow, true)
    },
    methods: {
        /**
            监听页面滚动条
            @param
            @return
         */
        bindScrollWindow() {
            this.scrollTop = window.scrollY
            this.goTopShow = window.scrollY > window.screen.availHeight * .06
        },
        /**
            选中菜单
            @param {string} menu 菜单
            @return
         */
        checkMenu(menu) {
            if (this.activeMenu == menu) {
                this.goTop()
            } else {
                this.jump(menu)
            }
            this.leaveMenuDetail()
        },
        /**
            页面跳转
            @param {string} path 跳转路径
            @return
         */
        jump(path) {
            this.$router.push({path: path})
        },
        /**
            打开链接
            @param {string} url 链接
            @return
         */
        openUrl(url) {
            window.open(url)
        },
        /**
            置顶
            @param
            @return
         */
        goTop() {
            window.scrollTo(0, 0)
        },
        /**
            鼠标移入菜单
            @param {string} menu 菜单
            @return
         */
        enterMenu(menu) {
            this.hover.isShow = true
            this.hover.type = menu
            if (this.hover.top >= 72) {
                return
            }
            this.interval = setInterval(()=>{
                if (this.hover.top >= 72) {
                    clearInterval(this.interval)
                    return
                }
                this.hover.top += 23
            }, 20)
        },
        /**
            鼠标移出菜单
            @param
            @return
         */
        leaveMenu() {
            clearInterval(this.interval)
            this.hover.isShow = false
            this.hover.top = -158
        },
        /**
            鼠标移入菜单详情
            @param
            @return
         */
        enterMenuDetail() {
            this.hover.isShow = true
            this.hover.top = 72
        },
        /**
            鼠标移出菜单详情
            @param
            @return
         */
        leaveMenuDetail() {
            this.hover.isShow = false
            this.hover.top = -158
        }
    },
    watch: {
        $route: {
            handler(newVal, oldVal) {
                this.activeMenu = newVal.path
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
    #main {
        height: 100%;
    }
    #top {
        position: fixed; z-index: 98;
        top: 0; left: 0; right: 0;
        margin: auto;
        height: .72rem;
        background-color: #fff;
        >#logo {
            position: absolute;
            top: .11rem; left: 3.6rem;
            width: 1.23rem; height: .5rem;
            background: url(./assets/img/index/logo.png) no-repeat center center;
            background-size: 100% 100%;
            cursor: pointer;
        }
        >#menu {
            position: absolute;
            top: 0; left: 0; right: 0;
            margin: auto;
            width: 6.6rem; height: .72rem;
            white-space: nowrap;
            background-color: #fff;
            >li {
                position: relative;
                display: inline-block;
                padding-top: .25rem;
                padding-left: .33rem; padding-right: .33rem;
                height: .72rem;
                cursor: pointer;
                >.text {
                    height: .22rem;
                    line-height: .22rem;
                }
                >.bottomLine {
                    display: none;
                    position: absolute;
                    bottom: .1rem; left: 0; right: 0;
                    margin: auto;
                    width: .2rem; height: 0.02rem;
                    background-color: #ff2c79;
                }
            }
            >li:nth-child(1) {
                margin-left: 0;
            }
            >li.active {
                >.text {
                    color: #ff2c79;
                }
                >.bottomLine {
                    display: block;
                }
            }
            >li:hover {
                >.text {
                    color: #ff2c79;
                }
            }
        }
        >#hotLine {
            position: absolute;
            top: .27rem; right: 3.6rem;
            height: .2rem;
            background-color: #fff;
            >.text {
                float: left;
                height: .2rem;
                line-height: .2rem;
                white-space: nowrap;
                font-size: .14rem;
                color: #666;
            }
            >.img {
                float: left;
                margin-left: .26rem;
                width: .16rem; height: .17rem;
                background: url(./assets/img/index/hotline.png) no-repeat center center;
                background-size: 100% 100%;
                cursor: pointer;
            }
        }
    }
    #topHover {
        display: none;
        position: fixed; z-index: 97;
        top: -1.58rem; left: 0; right: 0;
        height: 2.3rem;
        background-color: #fafafa;
        >#product-detail {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            cursor: pointer;
            >.product-detail-item {
                position: absolute;
                top: 0;
                width: 2.5rem; height: 1.8rem;
                >span:nth-child(1) {
                    position: absolute;
                    top: 1.45rem; left: 0; right: 0;
                    text-align: center; line-height: .21rem;
                    font-size: .15rem;
                    color: #444;
                }
                >span:nth-child(2) {
                    position: absolute;
                    top: 1.74rem; left: 0; right: 0;
                    text-align: center; line-height: .17rem;
                    font-size: .12rem;
                    color: #666;
                }
            }
            >.product-detail-item.wrightin-two {
                left: 4.0rem;
                background: url(./assets/img/index/product-wrightinTwo.png) no-repeat center .44rem;
                background-size: 1.3rem .72rem;
            }
            >.product-detail-item.wrightin {
                left: 7.0rem;
                background: url(./assets/img/index/product-wrightin.png) no-repeat center .44rem;
                background-size: 1.28rem .82rem;
            }
            >.product-detail-item.kegel {
                right: 7.0rem;
                margin: auto;
                background: url(./assets/img/index/product-kegel.png) no-repeat center .37rem;
                background-size: 1.33rem .91rem;
            }
            >.product-detail-item.wireless {
                right: 4.0rem;
                background: url(./assets/img/index/product-wireless.png) no-repeat center .6rem;
                background-size: 2.1rem .5rem;
            }
            >.product-detail-item:hover {
                >span:nth-child(1) {
                    color: #ff2c79;
                }
            }
        }
        >#about-detail {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            >.about-detail-item {
                position: absolute;
                top: .38rem;
                width: 1.5rem; height: 1.48rem;
                cursor: pointer;
                >span {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: .21rem;
                    text-align: center; line-height: .21rem;
                    font-size: .15rem;
                    color: #444;
                }
            }
            >.about-detail-item.info {
                left: 5.97rem;
                background: url(./assets/img/index/about-info.png) no-repeat center top;
                background-size: 1.5rem 1.11rem;
            }
            >.about-detail-item.contact {
                left: 0; right: 0;
                margin: auto;
                background: url(./assets/img/index/about-contact.png) no-repeat center top;
                background-size: 1.5rem 1.11rem;
            }
            >.about-detail-item.join {
                right: 61.5rem;
                background: url(./assets/img/index/about-join.png) no-repeat center top;
                background-size: 1.5rem 1.11rem;
            }
            >.about-detail-item:hover {
                >span {
                    color: #ff2c79;;
                }
            }
        }
    }
    #content {
        clear: both;
        position: relative;
        padding-top: .72rem;
        min-height: 100%;
    }
    #bottom {
        position: relative;
        height: 3.9rem;
        background-color: #30293d;
        >.info {
            position: absolute;
            top: .33rem;
            >.title {
                height: .2rem;
                line-height: .2rem;
                font-size: .14rem; letter-spacing: .0108rem;
                color: #fff;
            }
            >.item {
                margin-top: .1rem;
                height: .17rem;
                line-height: .17rem;
                font-size: .12rem; letter-spacing: .0093rem;
                color: #999;
                cursor: pointer;
            }
            >.item:nth-child(2) {
                margin-top: .22rem;
            }
            >.item:hover {
                color: #fff;
            }
        }
        >.info.product {
            left: 3.6rem;
        }
        >.info.about {
            left: 5.77rem;
        }
        >.info.link {
            left: 7.38rem;
        }
        >.qrcode {
            position: absolute;
            top: .36rem; left: 0; right: 0;
            padding-top: 1.07rem;
            width: 1.2rem; height: 1.5rem;
            text-align: center; line-height: .17rem;
            font-size: .12rem; letter-spacing: .0093rem;
            color: #999;
        }
        >.qrcode.wechat {
            left: 8.94rem;
            background: url(./assets/img/index/qrcode-wechat.png) no-repeat center top;
            background-size: 1.0rem 1.0rem;
        }
        >.qrcode.app {
            left: 10.35rem;
            background: url(./assets/img/index/qrcode-app.png) no-repeat center top;
            background-size: 1.0rem 1.0rem;
        }
        >.qrcode.app-doctor {
            left: 11.78rem;
            background: url(./assets/img/index/qrcode-app-doctor.png) no-repeat center top;
            background-size: 1.0rem 1.0rem;
        }
        >.phone {
            position: absolute;
            top: .33rem; right: 3.6rem;
            width: 2.1rem;
            >p {
                height: .2rem;
                line-height: .2rem;
                white-space: nowrap;
                font-size: .14rem; letter-spacing: .0108rem;
                color: #fff;
            }
            >p:nth-child(2) {
                margin-top: .12rem;
            }
            >p:nth-child(3) {
                margin-top: .57rem;
            }
        }
        >.copyright {
            position: absolute;
            bottom: .25rem; left: 0; right: 0;
            >p {
                height: .17rem;
                text-align: center; line-height: .17rem;
                font-size: .12rem;
                color: #666;
            }
            >p:nth-child(2) {
                margin-top: .04rem;
                cursor: pointer;
            }
            >p:nth-child(3) {
                margin-top: .22rem;
            }
        }
    }
    #goTop {
        position: fixed; z-index: 97;
        bottom: 1.0rem; right: .2rem;
        width: .4rem; height: .4rem;
        cursor: pointer;
        >img {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: .4rem; height: .4rem;
        }
        >.img {
            z-index: 2;
        }
        >.img-hover {
            z-index: 1;
        }
    }
    #goTop:hover {
        >.img {
            z-index: 1;
        }
        >.img-hover {
            z-index: 2;
        }
    }
</style>

<style lang='scss'>
@import '@/assets/css/common.scss';
</style>
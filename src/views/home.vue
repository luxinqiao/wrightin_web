<template>
    <div id='main'>
        <div id='banner'>
            <swiper ref='swiper' :datas='banner'></swiper>
        </div>
        <div id='detail'>
            <div class='detail-item wrightin-two'>
                <p class='title'>盆底抗衰神器</p>
                <p class='subTitle'>让宝妈重拾少女紧致</p>
                <p class='desc'>盆底肌修复仪</p>
                <p class='subDesc'>足不出户唤醒盆底肌肉</p>
                <button class='more' @click='goProduct("wrightinTwo")'>了解更多</button>
                <img class='img' :src='require("@/assets/img/home/detail-wrightinTwo.png")'>
            </div>
            <div class='detail-item wrightin'>
                <p class='title'>盆底黑科技</p>
                <p class='subTitle'>只属于你的贴身盆底康复师</p>
                <p class='desc'>盆底生物刺激反馈仪</p>
                <p class='subDesc'>在家治疗盆底肌肉功能障碍</p>
                <button class='more' @click='goProduct("wrightin")'>了解更多</button>
                <img class='img' :src='require("@/assets/img/home/detail-wrightin.png")'>
            </div>
            <div class='detail-item kegel'>
                <p class='title'>5球组合出击</p>
                <p class='subTitle'>感受紧致魅力</p>
                <p class='desc'>盆底肌肉康复器</p>
                <p class='subDesc'>凯格尔球</p>
                <button class='more' @click='goProduct("kegel")'>了解更多</button>
                <img class='img' v-lazy='require("@/assets/img/home/detail-kegel.png")'>
            </div>
            <div class='detail-item wireless'>
                <p class='title'>健康塑形新主张</p>
                <p class='subTitle'>让妈妈大胆炫腹</p>
                <p class='desc'>无线产后恢复仪</p>
                <p class='subDesc'>躺着告别大腹婆</p>
                <button class='more' @click='goProduct("wireless")'>了解更多</button>
                <img class='img' v-lazy='require("@/assets/img/home/detail-wireless.png")'>
            </div>
            <div class='detail-item app'>
                <p class='title'>澜渟智能服务平台</p>
                <p class='subTitle'>家用盆底康复软件</p>
                <p class='desc'>两大盆底App</p>
                <p class='subDesc'>凯格尔训练指导 医生进阶学习</p>
                <button class='more' @click='goApp()'>了解更多</button>
                <p class='user'>
                    <img v-lazy='require("@/assets/img/home/detail-app-user.png")'>
                    <span>澜渟用户版</span>
                </p>
                <p class='doctor'>
                    <img v-lazy='require("@/assets/img/home/detail-app-doctor.png")'>
                    <span>澜渟医生版</span>
                </p>
            </div>
        </div>
        <div id='server'>
            <p class='title'>家庭盆底解决方案服务商</p>
            <p class='server-item province'>
                <img v-lazy='require("@/assets/img/home/server-item-province.png")'>
                <span>产品覆盖31个省<br/>直辖市自治区</span>
            </p>
            <p class='server-item percent'>
                <img v-lazy='require("@/assets/img/home/server-item-percent.png")'>
                <span>市场占有率<br/>超过40%</span>
            </p>
            <p class='server-item appUser'>
                <img v-lazy='require("@/assets/img/home/server-item-appUser.png")'>
                <span>APP终端用户<br/>超100万</span>
            </p>
            <p class='server-item medicalUser'>
                <img v-lazy='require("@/assets/img/home/server-item-medicalUser.png")'>
                <span>全国医疗用户<br/>超过5000家</span>
            </p>
            <p class='server-item org'>
                <img v-lazy='require("@/assets/img/home/server-item-org.png")'>
                <span>院外机构<br/>超过4000家</span>
            </p>
        </div>
        <div id='advantage'>
            <img class='bg' v-lazy='require("@/assets/img/home/advantage-bg.png")'>
            <span class='title'>公司优势</span>
            <div class='content'>
                <div class='item quality' :style='{top: quality.top+"rem"}' @mouseenter='enterAdvantageQuality()' @mouseleave='leaveAdvantageQuality()'>
                    <img class='bg' v-show='quality.hover' :src='require("@/assets/img/home/advantage-quality-bg.png")'>
                    <img class='logo' v-show='!quality.hover' :src='require("@/assets/img/home/advantage-quality-logo.png")'>
                    <img class='logo' v-show='quality.hover' :src='require("@/assets/img/home/advantage-quality-logo-hover.png")'>
                    <span class='text'>品质</span>
                    <span class='subText'>追求一流的产品和服务，对品质把关严苛，经过100万+用户实际考验，品质不凡</span>
                </div>
                <div class='item technology' :style='{top: technology.top+"rem"}' @mouseenter='enterAdvantageTechnology()' @mouseleave='leaveAdvantageTechnology()'>
                    <img class='bg' v-show='technology.hover' :src='require("@/assets/img/home/advantage-technology-bg.png")'>
                    <img class='logo' v-show='!technology.hover' :src='require("@/assets/img/home/advantage-technology-logo.png")'>
                    <img class='logo' v-show='technology.hover' :src='require("@/assets/img/home/advantage-technology-logo-hover.png")'>
                    <span class='text'>技术</span>
                    <span class='subText'>经验丰富的技术研发团队，强大的自主研发实力，持有多项专利</span>
                </div>
                <div class='item service' :style='{top: service.top+"rem"}' @mouseenter='enterAdvantageService()' @mouseleave='leaveAdvantageService()'>
                    <img class='bg' v-show='service.hover' :src='require("@/assets/img/home/advantage-service-bg.png")'>
                    <img class='logo' v-show='!service.hover' :src='require("@/assets/img/home/advantage-service-logo.png")'>
                    <img class='logo' v-show='service.hover' :src='require("@/assets/img/home/advantage-service-logo-hover.png")'>
                    <span class='text'>服务</span>
                    <span class='subText'>拥有一支盆底领域人才团队，造就优质营销培训体系和服务体系</span>
                </div>
                <div class='item trust' :style='{top: trust.top+"rem"}' @mouseenter='enterAdvantageTrust()' @mouseleave='leaveAdvantageTrust()'>
                    <img class='bg' v-show='trust.hover' :src='require("@/assets/img/home/advantage-trust-bg.png")'>
                    <img class='logo' v-show='!trust.hover' :src='require("@/assets/img/home/advantage-trust-logo.png")'>
                    <img class='logo' v-show='trust.hover' :src='require("@/assets/img/home/advantage-trust-logo-hover.png")'>
                    <span class='text'>信誉</span>
                    <span class='subText'>深耕女性盆底市场多年，品牌认知度高，客户信任度高</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {swiper} from '@/components/swiper'

export default {
    data() {
        return {
            banner: [
                require('@/assets/img/home/banner-1.png'),
                require('@/assets/img/home/banner-2.png'),
                require('@/assets/img/home/banner-3.png'),
                require('@/assets/img/home/banner-4.png')
            ],
            quality: {
                hover: false,
                top: 0
            },
            technology: {
                hover: false,
                top: 0
            },
            service: {
                hover: false,
                top: 0
            },
            trust: {
                hover: false,
                top: 0
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        /**
            页面跳转-产品
            @param {String} route 路由
            @return
         */
        goProduct(route) {
            this.$router.push({path: '/product/'+route})
        },
        /**
            页面跳转-app
            @param
            @return
         */
        goApp() {
            this.$router.push({path: '/app'})
        },
        /**
            鼠标移入公司优势-品质
            @param
            @return
         */
        enterAdvantageQuality() {
            this.quality.hover = true
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.quality.top < -.06) {
                    clearInterval(this.interval)
                }
                this.quality.top -= .003
            }, 15)
        },
        /**
            鼠标离开公司优势-品质
            @param
            @return
         */
        leaveAdvantageQuality() {
            this.quality.hover = false
            clearInterval(this.interval)
            this.quality.top = 0
        },
        /**
            鼠标移入公司优势-技术
            @param
            @return
         */
        enterAdvantageTechnology() {
            this.technology.hover = true
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.technology.top < -.06) {
                    clearInterval(this.interval)
                }
                this.technology.top -= .003
            }, 15)
        },
        /**
            鼠标离开公司优势-技术
            @param
            @return
         */
        leaveAdvantageTechnology() {
            this.technology.hover = false
            clearInterval(this.interval)
            this.technology.top = 0
        },
        /**
            鼠标移入公司优势-服务
            @param
            @return
         */
        enterAdvantageService() {
            this.service.hover = true
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.service.top < -.06) {
                    clearInterval(this.interval)
                }
                this.service.top -= .003
            }, 15)
        },
        /**
            鼠标离开公司优势-服务
            @param
            @return
         */
        leaveAdvantageService() {
            this.service.hover = false
            clearInterval(this.interval)
            this.service.top = 0
        },
        /**
            鼠标移入公司优势-信誉
            @param
            @return
         */
        enterAdvantageTrust() {
            this.trust.hover = true
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.trust.top < -.06) {
                    clearInterval(this.interval)
                }
                this.trust.top -= .003
            }, 15)
        },
        /**
            鼠标离开公司优势-信誉
            @param
            @return
         */
        leaveAdvantageTrust() {
            this.trust.hover = false
            clearInterval(this.interval)
            this.trust.top = 0
        }
    },
    components: {
        swiper
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 6.6rem;
    }
    #detail {
        overflow: hidden;
        >.detail-item {
            position: relative;
            margin-top: .08rem;
            height: 7.0rem;
            background-color: #fafafa;
            >.title {
                position: absolute; z-index: 2;
                line-height: .67rem;
                font-size: .48rem; font-weight: bold;
            }
            >.subTitle {
                position: absolute; z-index: 2;
                line-height: .5rem;
                font-size: .36rem;
            }
            >.desc {
                position: absolute; z-index: 2;
                text-align: center; line-height: .33rem;
                font-size: .24rem; font-weight: bold;
            }
            >.subDesc {
                position: absolute; z-index: 2;
                text-align: center; line-height: .22rem;
                color: #999;
            }
            >.more {
                position: absolute; z-index: 2;
                width: 1.1rem; height: .32rem;
                text-align: center; line-height: .32rem;
                border-radius: .22rem;
                font-size: .15rem;
                color: #fff;
                background: linear-gradient(to left, #ff7d98, #fe4369);
                cursor: pointer;
            }
            >.img {
                position: absolute; z-index: 1;
            }
        }
        >.detail-item.wrightin-two {
            >.title {
                top: 1.81rem; left: 11.92rem;
            }
            >.subTitle {
                top: 2.48rem; left: 11.92rem;
            }
            >.desc {
                top: 4.03rem; left: 10.92rem;
                width: 3.68rem;
            }
            >.subDesc {
                top: 4.53rem; left: 10.92rem;
                width: 3.68rem;
            }
            >.more {
                top: 4.86rem; left: 12.21rem;
            }
            >.img {
                top: 1.72rem; left: 3.6rem;
                width: 6.71rem; height: 3.94rem;
            }
        }
        >.detail-item.wrightin {
            >.title {
                top: 1.95rem; left: 4.12rem;
            }
            >.subTitle {
                top: 2.62rem; left: 4.12rem;
            }
            >.desc {
                top: 4.17rem; left: 3.12rem;
                width: 4.16rem;
            }
            >.subDesc {
                top: 4.53rem; left: 3.12rem;
                width: 4.16rem;
            }
            >.more {
                top: 5.0rem; left: 4.65rem;
            }
            >.img {
                top: .4rem; right: 3.4rem;
                width: 7.49rem; height: 6.1rem;
            }
        }
        >.detail-item.kegel {
            >.title {
                top: 1.81rem; left: 11.92rem;
            }
            >.subTitle {
                top: 2.48rem; left: 11.92rem;
            }
            >.desc {
                top: 4.03rem; left: 10.92rem;
                width: 3.68rem;
            }
            >.subDesc {
                top: 4.53rem; left: 10.92rem;
                width: 3.68rem;
            }
            >.more {
                top: 4.86rem; left: 12.21rem;
            }
            >.img {
                top: 1.72rem; left: 4.22rem;
                width: 5.77rem; height: 3.86rem;
            }
        }
        >.detail-item.wireless {
            >.title {
                top: 1.81rem; left: 4.16rem;
            }
            >.subTitle {
                top: 2.48rem; left: 4.16rem;
            }
            >.desc {
                top: 4.03rem; left: 3.16rem;
                width: 3.68rem;
            }
            >.subDesc {
                top: 4.39rem; left: 3.16rem;
                width: 3.68rem;
            }
            >.more {
                top: 5.0rem; left: 4.45rem;
            }
            >.img {
                top: 1.38rem; right: 4.0rem;
                width: 7.16rem; height: 4.69rem;
            }
        }
        >.detail-item.app {
            >.title {
                top: 1.84rem; left: 11.33rem;
            }
            >.subTitle {
                top: 2.51rem; left: 11.33rem;
            }
            >.desc {
                top: 4.0rem; left: 10.33rem;
                width: 4.14rem;
            }
            >.subDesc {
                top: 4.37rem; left: 10.33rem;
                width: 4.14rem;
            }
            >.more {
                top: 5.0rem; left: 11.85rem;
            }
            >.img:nth-child(6) {
                top: 1.38rem; left: 4.49rem;
                width: 2.25rem; height: 4.47rem;
            }
            >.img:nth-child(7) {
                top: 1.38rem; left: 7.33rem;
                width: 2.25rem; height: 4.47rem;
            }
            >.user {
                position: absolute; z-index: 1;
                top: 1.09rem; left: 4.49rem;
                width: 2.26rem; height: 4.81rem;
                >img {
                    position: absolute;
                    top: 0; left: 0;
                    width: 2.26rem; height: 4.48rem;
                }
                >span {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: .22rem;
                    text-align: center; line-height: .22rem;
                }
            }
            >.doctor {
                position: absolute; z-index: 1;
                top: 1.09rem; left: 7.33rem;
                width: 2.26rem; height: 4.81rem;
                >img {
                    position: absolute;
                    top: 0; left: 0;
                    width: 2.26rem; height: 4.48rem;
                }
                >span {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: .22rem;
                    text-align: center; line-height: .22rem;
                }
            }
        }
    }
    #server {
        position: relative;
        margin-top: .08rem;
        height: 4.03rem;
        background: url(../assets/img/home/server-bg.png) no-repeat center center;
        background-size: 100% 100%;
        >.title {
            position: absolute;
            top: .52rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .3rem;
            color: #fff;
        }
        >.server-item {
            position: absolute;
            top: 1.76rem;
            width: 2.0rem; height: 1.28rem;
            >img {
                position: absolute;
                top: 0; left: 0; right: 0;
                margin: auto;
            }
            >span {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                text-align: center; line-height: .22rem;
                color: #fff;
            }
        }
        >.server-item.province {
            left: 3.97rem;
            >img {
                width: .35rem; height: .54rem;
            }
        }
        >.server-item.percent {
            left: 6.26rem;
            >img {
                width: .91rem; height: .6rem;
            }
        }
        >.server-item.appUser {
            left: 8.77rem;
            >img {
                width: 1.06rem; height: .67rem;
            }
        }
        >.server-item.medicalUser {
            left: 11.01rem;
            >img {
                width: .99rem; height: .6rem;
            }
        }
        >.server-item.org {
            left: 13.04rem;
            >img {
                width: .99rem; height: .6rem;
            }
        }
    }
    #advantage {
        position: relative;
        height: 6.17rem;
        >.bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.title {
            position: absolute; z-index: 2;
            top: .78rem; left: 0; right: 0;
            height: .42rem;
            text-align: center; line-height: .42rem;
            font-size: .3rem;
        }
        >.content {
            position: absolute; z-index: 2;
            top: 2.12rem; left: 0; right: 0;
            margin: auto;
            width: 12.0rem; height: 3.0rem;
            >.item {
                position: absolute;
                top: 0;
                width: 2.85rem; height: 3.0rem;
                border-radius: .04rem;
                background-color: #fff;
                cursor: pointer;
                >.bg {
                    position: absolute; z-index: 1;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    border-radius: .04rem;
                }
                >.logo {
                    position: absolute; z-index: 2;
                    top: .43rem; left: .23rem;
                    width: .55rem; height: .55rem;
                }
                >.text {
                    position: absolute; z-index: 2;
                    top: 1.17rem; left: .24rem;
                    height: .37rem;
                    line-height: .37rem;
                    font-size: .26rem; letter-spacing: .0108rem; font-weight: bold;
                }
                >.subText {
                    position: absolute; z-index: 2;
                    top: 1.74rem; left: .24rem; right: .24rem;
                    height: .24rem;
                    line-height: .24rem;
                    color: #666;
                }
            }
            >.item.quality {
                left: 0;
            }
            >.item.technology {
                left: 3.05rem;
            }
            >.item.service {
                right: 3.05rem;
            }
            >.item.trust {
                right: 0;
            }
            >.item:hover {
                >.text {
                    color: #fff;
                }
                >.subText {
                    color: #fff;
                }
            }
        }
    }
</style>
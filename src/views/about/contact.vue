<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/about/contact/banner-bg.png")'>
            <img class='banner-center' v-lazy='require("@/assets/img/about/banner-center.png")'>
            <p class='banner-title'>每一次沟通 都有温度</p>
        </div>
        <div id='detail'>
            <div class='detail-info'>
                <img class='detail-logo' v-lazy='require("@/assets/img/about/contact/logo.png")'>
                <p class='detail-title' style='margin-top: .21rem;'>公司名称</p>
                <p class='detail-subTitle'>南京麦豆健康管理有限公司</p>
                <p class='detail-title'>地址</p>
                <p class='detail-subTitle'>南京市雨花台区凤展路32号A2北栋7层</p>
                <p class='detail-title'>电话</p>
                <p class='detail-subTitle'>服务热线：400-133-5668</p>
                <p class='detail-subTitle' style='margin-top: .1rem;'>商务合作：15805161186</p>
                <p class='detail-title'>邮箱</p>
                <p class='detail-subTitle'>support@medoht.com</p>
                <img class='detail-qrcode' v-lazy='require("@/assets/img/index/qrcode-wechat.png")'>
                <p class='detail-qrcode-desc'>扫描二维码<br/>关注澜渟微信公众号</p>
                <p class='detail-qrcode-wetchat'>微信号：WrightinHealth</p>
            </div>
            <div class='detail-map'>
                <baidu-map class='baiduMap' :center='position' :zoom='15' :scroll-wheel-zoom='true' ak='7sTPX5Pn0xrZpvpXZ6dKG99i8aiK4fG9'>
                    <bm-marker :position='position' :icon='markIcon'>
                        <bm-info-window :show='true'>
                            <p class='map-company'>南京麦豆健康管理有限公司</p>
                            <p class='map-address'>南京市雨花台区凤展路32号A2北栋7层</p>
                        </bm-info-window>
                    </bm-marker>
                </baidu-map>
            </div>
        </div>
    </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'

export default {
    data() {
        return {
            position: {
                lng: 11.8748334,
                lat: 3.1943822
            },
            markIcon: {
                url: require("@/assets/img/about/contact/position.png"),
                size: {
                    width: 1.8,
                    height: 2.4
                }
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    components: {
        BaiduMap,
        BmMarker,
        BmInfoWindow
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 4.0rem;
        >.banner-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.banner-center {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 6.43rem; height: 1.7rem;
        }
        >.banner-title {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            margin: auto;
            width: 6.36rem; height: 1.64rem;
            text-align: center; line-height: 1.64rem;
            font-size: .44rem; font-weight: bold;
            color: #4a384a;
        }
    }
    #detail {
        position: relative;
        margin-top: .6rem; margin-bottom: 1.0rem;
        height: 7.21rem;
        >.detail-info {
            position: absolute;
            top: 0; bottom: 0; left: 3.6rem;
            padding-left: .32rem;
            width: 3.5rem;
            >.detail-logo {
                width: 2.34rem; height: 1.24rem;
            }
            >.detail-title {
                margin-top: .44rem;
                line-height: .28rem;
                font-size: .2rem;
            }
            >.detail-subTitle {
                margin-top: .02rem;
                line-height: .22rem;
            }
            >.detail-qrcode {
                margin: .33rem auto 0 .74rem;
                width: 1.06rem; height: 1.06rem;
            }
            >.detail-qrcode-desc {
                margin-top: .02rem;
                width: 2.53rem;
                text-align: center; line-height: .17rem;
                font-size: .12rem; letter-spacing: .009rem;
                color: #999;
            }
            >.detail-qrcode-wetchat {
                margin-top: .07rem;
                width: 2.54rem;
                text-align: center; line-height: .22rem;
            }
        }
        >.detail-map {
            position: absolute;
            top: 0; bottom: 0; right: 3.6rem;
            width: 8.5rem;
            >.baiduMap {
                height: 100%;
                .map-company {
                    font-weight: bold;
                    color: #dd5555;
                }
                .map-address {
                    margin-top: .05rem;
                    font-size: .14rem;
                }
                /deep/.anchorBL {
                    display: none;
                }
            }
        }
    }
</style>
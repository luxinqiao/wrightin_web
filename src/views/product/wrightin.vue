<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-wrightin' :src='require("@/assets/img/product/wrightin/banner-wrightin.png")'>
            <p class='banner-title'>盆底生物刺激反馈仪</p>
            <p class='banner-subTitle'>改善盆底肌松弛和肌肉健康状态</p>
            <p class='banner-desc'>
                南京麦澜德医疗科技股份有限公司
                <br/>
                医疗器械注册证编号：苏械注准20182260869  广告审查批准文号：苏械广审（文）第 230418-01104 号
                <br/>
                请仔细阅读产品说明书或者在医务人员的指导下购买和使用
                <br/>
                禁忌内容或者注意事项详见说明书
            </p>
        </div>
        <div id='apply'>
            <p class='apply-title'>盆底生物刺激反馈仪</p>
            <p class='apply-subTitle'>治疗盆底肌肉功能障碍</p>
            <p class='apply-desc'>/ 适用于 /</p>
            <p class='apply-item sick'>治疗压力性尿失禁</p>
            <p class='apply-item birth'>治疗盆腔器官脱垂</p>
            <p class='apply-item normal'>缓解慢性盆腔痛</p>
            <p class='apply-item pfd'>增强阴道收缩功能</p>
        </div>
        <div id='programme'>
            <img class='programme-img' v-lazy='require("@/assets/img/product/wrightin/programme.png")'>
            <p class='programme-title'>疗程化对症循序治疗方案</p>
            <p class='programme-desc'>针对每个人不同的肌力损伤、不同程度盆底问题和不同使用敏感程度，匹配不同电刺激频率和输出脉冲宽度，对症选择属于你的治疗方案</p>
        </div>
        <div id='mode'>
            <img class='mode-bg' v-lazy='require("@/assets/img/product/wrightin/mode-bg.png")'>
            <img class='mode-img' v-lazy='require("@/assets/img/product/wrightin/mode.png")'>
            <p class='mode-item stim'>神经肌肉电刺激</p>
            <p class='mode-item ets'>肌电触发电刺激</p>
            <p class='mode-item kegel'>凯格尔模板训练</p>
            <p class='mode-item game'>多媒体游戏训练</p>
        </div>
        <div id='design'>
            <img class='design-img' v-lazy='require("@/assets/img/product/wrightin/design.png")'>
            <p class='design-title'>一体化无线设计<br/>小巧精致</p>
            <p class='design-subTitle'>随时随地轻松训练</p>
        </div>
        <div id='app'>
            <img class='app-circle' v-lazy='require("@/assets/img/product/wrightin/app-circle.gif")'>
            <p class='app-title'>智能App 一键掌控</p>
            <p class='app-subTitle'>产品通过蓝牙连接配套App，所有功能一键操作，让训练简单易用</p>
            <img class='app-train-1' v-lazy='require("@/assets/img/product/wrightin/app-train-1.png")'>
            <img class='app-train-2' v-lazy='require("@/assets/img/product/wrightin/app-train-2.png")'>
            <img class='app-train-3' v-lazy='require("@/assets/img/product/wrightin/app-train-3.png")'>
        </div>
        <div id='record'>
            <img class='record-img' v-lazy='require("@/assets/img/product/record.png")'>
            <p class='record-title'>科学有趣 记录每一次提高</p>
            <p class='record-subTitle'>每日跟随不同模式的科学训练，同步记录训练，助用户坚持达到训练目标</p>
            <p class='record-detail'>
                <span class='record-detail-item person'>
                    <img class='large' v-lazy='require("@/assets/img/product/wrightin/record-person.png")'>
                    <font class='small'>陪你在一起</font>
                </span>
                <span class='record-detail-item count'>
                    <img class='large' v-lazy='require("@/assets/img/product/wrightin/record-count.png")'>
                    <font class='small'>坚持的训练</font>
                </span>
                <span class='record-detail-item hour'>
                    <img class='large' v-lazy='require("@/assets/img/product/wrightin/record-hour.png")'>
                    <font class='small'>做着同样的事</font>
                </span>
            </p>
        </div>
        <div id='authorize'>
            <img class='authorize-bg' v-lazy='require("@/assets/img/product/wrightin/authorize-bg.png")'>
            <p class='authorize-title'>二类医疗器械</p>
            <p class='authorize-subTitle'>匠心研制</p>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>让训练简单又便捷</p>
            <p class='train-subTitle'>不排队、不预约，盆底康复师在线为您服务</p>
            <img class='train-phone' v-lazy='require("@/assets/img/product/wrightin/train-phone.png")'>
        </div>
        <div id='rule'>
            售后问题请查看<font class='red' @click='goRule()'>《盆底生物刺激反馈仪售后管理制度》</font>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        /**
            页面跳转-管理制度
            @param
            @return
         */
        goRule() {
            this.$router.push({path: 'rule?type=wrightin'})
        }
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 6.6rem;
        background: url(../../assets/img/product/banner-bg.png) no-repeat center center;
        background-size: 100% 100%;
        >.banner-wrightin {
            position: absolute;
            top: 1.23rem; left: 3.89rem;
            width: 5.59rem; height: 4.43rem;
        }
        >.banner-title {
            position: absolute;
            top: 2.2rem; right: 3.07rem;
            width: 7.4rem;
            text-align: center; line-height: .84rem;
            font-size: .6rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute;
            top: 3.3rem; right: 3.07rem;
            width: 7.4rem;
            text-align: center; line-height: .53rem;
            font-size: .38rem;
            color: #666;
        }
        >.banner-desc {
            position: absolute;
            top: 5.47rem; left: 0; right: 4.07rem;
            text-align: right; line-height: .17rem;
            font-size: .12rem;
            color: #999;
        }
    }
    #apply {
        position: relative;
        margin-top: .08rem;
        height: 5.0rem;
        background-color: #fafafa;
        >.apply-title {
            position: absolute;
            top: .58rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .22rem;
        }
        >.apply-subTitle {
            position: absolute;
            top: .98rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
            color: #9b8024;
        }
        >.apply-desc {
            position: absolute;
            top: 1.52rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .14rem;
        }
        >.apply-item {
            position: absolute;
            top: 2.52rem;
            padding-top: 1.43rem;
            width: 3.0rem; height: 1.71rem;
            text-align: center; line-height: .28rem;
            font-size: .2rem; font-weight: bold;
        }
        >.apply-item.sick {
            left: 3.6rem;
            background: url(../../assets/img/product/wrightin/apply-sick.png) no-repeat center top;
            background-size: 1.14rem 1.13rem;
        }
        >.apply-item.birth {
            left: 6.6rem;
            background: url(../../assets/img/product/wrightin/apply-birth.png) no-repeat center top;
            background-size: 1.05rem 1.12rem;
        }
        >.apply-item.normal {
            right: 6.6rem;
            background: url(../../assets/img/product/wrightin/apply-normal.png) no-repeat center top;
            background-size: 1.21rem 1.14rem;
        }
        >.apply-item.pfd {
            right: 3.6rem;
            background: url(../../assets/img/product/wrightin/apply-pfd.png) no-repeat center top;
            background-size: 1.12rem 1.15rem;
        }
    }
    #programme {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.programme-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.programme-title {
            position: absolute;
            top: 2.08rem; left: 3.6rem;
            line-height: .42rem;
            font-size: .48rem; font-weight: bold;
            color: #9b8024;
        }
        >.programme-desc {
            position: absolute;
            top: 3.1rem; left: 3.6rem;
            width: 5.28rem;
            line-height: .42rem;
            font-size: .24rem;
        }
    }
    #mode {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.mode-bg {
            position: absolute; z-index: 1;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.mode-img {
            position: absolute; z-index: 2;
            top: .65rem; left: 4.98rem;
            width: 6.32rem; height: 5.15rem;
        }
        >.mode-item {
            position: absolute; z-index: 2;
            padding-left: .66rem;
            height: .55rem;
            line-height: .5rem;
            font-size: .24rem;
            color: #666;
        }
        >.mode-item.stim {
            top: 1.48rem; left: 11.5rem;
            background: url(../../assets/img/product/wrightin/mode-stim.png) no-repeat left center;
            background-size: .55rem .55rem;
        }
        >.mode-item.ets {
            top: 2.49rem; left: 11.85rem;
            background: url(../../assets/img/product/wrightin/mode-ets.png) no-repeat left center;
            background-size: .55rem .55rem;
        }
        >.mode-item.kegel {
            top: 3.5rem; left: 11.85rem;
            background: url(../../assets/img/product/wrightin/mode-kegel.png) no-repeat left center;
            background-size: .55rem .55rem;
        }
        >.mode-item.game {
            top: 4.5rem; left: 11.5rem;
            background: url(../../assets/img/product/wrightin/mode-game.png) no-repeat left center;
            background-size: .55rem .55rem;
        }
    }
    #design {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.design-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.design-title {
            position: absolute;
            top: 1.84rem; left: 10.09rem;
            line-height: .7rem;
            font-size: .5rem;
        }
        >.design-subTitle {
            position: absolute;
            top: 3.7rem; left: 10.09rem;
            line-height: .33rem;
            font-size: .24rem;
        }
    }
    #app {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.app-circle {
            position: absolute;
            top: 0; left: 0; right: 0;
            margin: auto;
            width: 8.0rem; height: 4.0rem;
        }
        >.app-title {
            position: absolute;
            top: .55rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .32rem;
            color: #91730b;
        }
        >.app-subTitle {
            position: absolute;
            top: 1.11rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .2rem;
            color: #666;
        }
        >.app-train-1 {
            position: absolute;
            top: 2.11rem; left: 4.55rem;
            width: 3.56rem; height: 4.34rem;
        }
        >.app-train-2 {
            position: absolute;
            top: 3.43rem; left: 8.39rem;
            width: 2.69rem; height: 3.02rem;
        }
        >.app-train-3 {
            position: absolute;
            top: 2.41rem; right: 4.28rem;
            width: 3.56rem; height: 4.04rem;
        }
    }
    #record {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.record-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.record-title {
            position: absolute;
            top: .76rem; left: 0; right: 0;
            text-align: center; line-height: .45rem;
            font-size: .32rem;
            color: #fff;
        }
        >.record-subTitle {
            position: absolute;
            top: 1.38rem; left: 0; right: 0;
            text-align: center; line-height: .28rem;
            font-size: .2rem;
            color: #999;
        }
        >.record-detail {
            position: absolute;
            top: 2.4rem; left: 0; right: 0;
            margin: auto;
            width: 12.0rem; height: 2.7rem;
            >.record-detail-item {
                position: absolute; z-index: 2;
                top: .81rem;
                width: 2.8rem; height: 1.06rem;
                text-align: center;
                >.large {
                    position: absolute;
                    top: .07rem; left: 0; right: 0;
                    margin: auto;
                }
                >.small {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    text-align: center; line-height: .22rem;
                    color: #fff;
                }
            }
            >.record-detail-item.person {
                left: 1.2rem;
                >.large {
                    width: 1.27rem; height: .36rem;
                }
            }
            >.record-detail-item.count {
                left: 0; right: 0;
                margin: auto;
                >.large {
                    width: 1.47rem; height: .37rem;
                }
            }
            >.record-detail-item.hour {
                right: 1.2rem;
                >.large {
                    width: 1.47rem; height: .37rem;
                }
            }
        }
    }
    #authorize {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.authorize-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.authorize-title {
            position: absolute;
            top: .72rem; left: 0; right: 0;
            text-align: center; line-height: .7rem;
            font-size: .5rem;
        }
        >.authorize-subTitle {
            position: absolute;
            top: 1.48rem; left: 0; right: 0;
            text-align: center; line-height: .4rem;
            font-size: .24rem;
            color: #666;
        }
    }
    #train {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        overflow: hidden;
        >.train-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.train-title {
            position: absolute;
            top: 2.15rem; left: 9.93rem;
            line-height: .7rem;
            font-size: .5rem;
            color: #fff;
        }
        >.train-subTitle {
            position: absolute;
            top: 3.09rem; left: 9.93rem;
            line-height: .4rem;
            font-size: .24rem;
            color: #fff;
        }
        >.train-phone {
            position: absolute;
            top: .65rem; left: 5.22rem;
            width: 3.56rem; height: 7.05rem;
        }
    }
    #rule {
        position: relative;
        height: 1.6rem;
        text-align: center; line-height: 1.6rem;
        >.red {
            color: #ff2c79;
            cursor: pointer;
        }
    }
</style>
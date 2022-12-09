<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-wrightin' :src='require("@/assets/img/product/wrightinTwo/wrightinTwo.png")'>
            <p class='banner-title'>盆底肌修复仪</p>
            <p class='banner-subTitle'>居家私密抗衰 轻松打造健康盆底</p>
        </div>
        <div id='apply'>
            <p class='apply-title'>盆底肌修复仪</p>
            <p class='apply-subTitle'>改善盆底松弛 强健盆底肌</p>
            <p class='apply-desc'>/ 适用于 /</p>
            <div class='apply-item one'>
                <p class='apply-item-tit'>盆底功能保健</p>
                <p class='apply-item-desc'>常规盆底保健、产后盆底保健</p>
            </div>
            <div class='apply-item two'>
                <p class='apply-item-tit'>秘密健康保养</p>
                <p class='apply-item-desc'>私密紧致、私密放松、私密保养</p>
            </div>
            <div class='apply-item three'>
                <p class='apply-item-tit'>盆底肌力强健</p>
                <p class='apply-item-desc'>改善尿频漏尿、促进排尿排便</p>
            </div>
        </div>
        <div id='programme'>
            <img class='programme-img' v-lazy='require("@/assets/img/product/wrightinTwo/programme.png")'>
            <p class='programme-title'>筛查评估定制个性化疗程训练方案</p>
            <p class='programme-desc'>针对每个人盆底肌整体状况、损伤程度、损伤阶段，匹配不同训练方案参数，个性化定制属于您的训练方案</p>
        </div>
        <div id='mode'>
            <img class='mode-img' v-lazy='require("@/assets/img/product/wrightinTwo/mode.png")'>
            <div class='mode-con'>
                <p class='mode-item stim'>神经肌肉电刺激</p>
                <p class='mode-item ets'>肌电触发电刺激</p>
                <p class='mode-item kegel'>凯格尔模板训练</p>
                <p class='mode-item game'>多媒体游戏训练</p>
            </div>
        </div>
        <div id='watch'>
            <img class='watch-img' v-lazy='require("@/assets/img/product/wrightinTwo/watch.png")'>
            <p class='watch-title'>实时监测腹肌活动<br/>保证数据准确</p>
            <p class='watch-desc'>监测腹肌的用力情况和用力程度，识别腹肌"代偿"的问题</p>
            <p class='watch-subDesc'>*腹肌代偿现象：腹部参与收缩，部分代替盆底肌的收缩，是进行盆底评估或训练时的一种错误发力形式。</p>
        </div>
        <div id='texture'>
            <img class='texture-img' v-lazy='require("@/assets/img/product/wrightinTwo/texture.png")'>
            <p class='texture-title'>食品级硅胶材质<br/>舒适亲肤</p>
            <p class='texture-subTitle'>全身包裹硅胶，柔软舒适，富有弹性给人以舒适触感</p>
        </div>
        <div id='passageway'>
            <img class='passageway-img' v-lazy='require("@/assets/img/product/wrightinTwo/passageway.png")'>
            <p class='passageway-title'>智能双通道+参考电极</p>
            <p class='passageway-subTitle'>三管齐下 肌电采集更准确</p>
        </div>
        <div id='wave'>
            <img class='wave-img' v-lazy='require("@/assets/img/product/wrightinTwo/wave.png")'>
            <p class='wave-title'>Bi-directional square wave<br/>双相方波</p>
            <p class='wave-subTitle'>电刺激输出均衡柔和</p>
        </div>
        <div id='design'>
            <img class='design-img' v-lazy='require("@/assets/img/product/wrightinTwo/design.png")'>
            <p class='design-title'>一体式无线设计  治疗不受“线”</p>
            <p class='design-subTitle'>无线探头技术，将所有电路模块一体集成到探头内部，整机无缝衔接，摆脱线材束缚</p>
        </div>
        <div id='upgrade'>
            <img class='upgrade-img' v-lazy='require("@/assets/img/product/wrightinTwo/upgrade.png")'>
            <p class='upgrade-title'>加宽不锈钢片  体验升级</p>
            <p class='upgrade-subTitle'>加大钢片与盆底表面接触面积，提升舒适度</p>
        </div>
        <div id='charge'>
            <img class='charge-img' v-lazy='require("@/assets/img/product/wrightinTwo/charge.png")'>
            <p class='charge-title'>磁吸充电  一触即充</p>
            <p class='charge-subTitle'>采用磁吸充电方式，充电更方便</p>
        </div>
        <div id='clean'>
            <img class='clean-img' v-lazy='require("@/assets/img/product/wrightinTwo/clean.png")'>
            <p class='clean-title'>全身防水 方便清洁</p>
            <p class='clean-subTitle'>防水材质打造，清洗时保护内部配件，不易损坏</p>
        </div>
        <div id='appearance'>
            <img class='appearance-img' v-lazy='require("@/assets/img/product/wrightinTwo/appearance.png")'>
            <p class='appearance-title'>外形精雕细琢</p>
            <p class='appearance-subTitle'>遵循人体生理学曲线，适合亚洲女性</p>
        </div>
        <div id='app'>
            <img class='app-circle' v-lazy='require("@/assets/img/product/circle.gif")'>
            <p class='app-title'>蓝牙连接  智能操作</p>
            <p class='app-subTitle'>产品通过蓝牙连接配套APP，手机操控，让训练轻松又有趣</p>
            <img class='app-train-1' v-lazy='require("@/assets/img/product/wrightinTwo/app-train-1.png")'>
            <img class='app-train-2' v-lazy='require("@/assets/img/product/wrightinTwo/app-train-2.png")'>
        </div>
        <div id='record'>
            <img class='record-img' v-lazy='require("@/assets/img/product/record.png")'>
            <p class='record-title'>在澜渟  科学锻炼  一起进步</p>
            <p class='record-subTitle'>循序渐进闭环式训练，语音图形双指导，精准记录您的盆底训练</p>
            <p class='record-detail'>
                <span class='record-detail-item person'>
                    <img class='large' v-lazy='require("@/assets/img/product/wrightinTwo/record-person.png")'>
                    <font class='small'>陪你在一起</font>
                </span>
                <span class='record-detail-item count'>
                    <img class='large' v-lazy='require("@/assets/img/product/wrightinTwo/record-count.png")'>
                    <font class='small'>坚持的训练</font>
                </span>
                <span class='record-detail-item hour'>
                    <img class='large' v-lazy='require("@/assets/img/product/wrightinTwo/record-hour.png")'>
                    <font class='small'>做着同样的事</font>
                </span>
            </p>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>在线1对1指导</p>
            <p class='train-subTitle'>随时随地，快速开启咨询，盆底康复师将根据您的个人情况提供专属训练指导</p>
            <img class='train-phone' v-lazy='require("@/assets/img/product/wrightinTwo/train-phone.png")'>
        </div>
        <div id='rule'>
            售后问题请查看<font class='red' @click='goRule()'>《盆底肌修复仪售后管理制度》</font>
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
            this.$router.push({path: 'rule?type=wrightinTwo'})
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
            top: 2.3rem; left: 3.5rem;
            width: 6.07rem; height: 2.94rem;
        }
        >.banner-title {
            position: absolute;
            top: 2.2rem; left: 9.65rem;
            line-height: .84rem;
            font-size: .6rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute;
            top: 3.3rem; left: 9.65rem;
            text-align: center; line-height: .53rem;
            font-size: .38rem;
            color: #666;
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
            >.apply-item-tit {
                text-align: center; line-height: .3rem;
                font-size: .22rem; font-weight: bold;
            }
            >.apply-item-desc {
                margin-top: .08rem;
                text-align: center; line-height: .28rem;
                font-size: .2rem; color: #666;
            }
        }
        >.apply-item.one {
            left: 4.25rem;
            background: url(../../assets/img/product/wrightinTwo/apply-one.png) no-repeat center top;
            background-size: 1.14rem 1.13rem;
        }
        >.apply-item.two {
            left: 0; right: 0;
            margin: auto;
            background: url(../../assets/img/product/wrightinTwo/apply-two.png) no-repeat center top;
            background-size: 1.05rem 1.12rem;
        }
        >.apply-item.three {
            right: 4.25rem;
            background: url(../../assets/img/product/wrightinTwo/apply-three.png) no-repeat center top;
            background-size: 1.21rem 1.14rem;
        }
    }
    #mode {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.mode-img {
            position: absolute; 
            top: 0; left: 0;
            width: 100%; height: 100%;
        }
        >.mode-con {
            position: absolute;
            top: 1.34rem; left: 3.67rem;
            height: 3.76rem; width: 6.6rem;
            background: url(../../assets/img/product/wrightinTwo/mode-bg.png) no-repeat center center;
            background-size: 100% 100%;
            >.mode-item {
                position: absolute; 
                padding-top: .66rem;
                line-height: .5rem;
                font-size: .24rem;
                color: #fff;
            }
            >.mode-item.stim {
                top: .69rem; left: 1.29rem;
                background: url(../../assets/img/product/wrightinTwo/mode-stim.png) no-repeat top center;
                background-size: .55rem .55rem;
            }
            >.mode-item.ets {
                top: .69rem; right: 1.23rem;
                background: url(../../assets/img/product/wrightinTwo/mode-ets.png) no-repeat top center;
                background-size: .55rem .55rem;
            }
            >.mode-item.kegel {
                top: 2.19rem; left: 1.29rem;
                background: url(../../assets/img/product/wrightinTwo/mode-kegel.png) no-repeat top center;
                background-size: .55rem .55rem;
            }
            >.mode-item.game {
                top: 2.19rem; right: 1.23rem;
                background: url(../../assets/img/product/wrightinTwo/mode-game.png) no-repeat top center;
                background-size: .55rem .55rem;
            }
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
    #watch {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.watch-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.watch-title {
            position: absolute;
            top: 1.72rem; left: 3.6rem;
            line-height: .62rem;
            font-size: .48rem; font-weight: bold;
            color: #9b8024;
        }
        >.watch-desc {
            position: absolute;
            top: 3.45rem; left: 3.6rem;
            width: 5.28rem;
            line-height: .42rem;
            font-size: .24rem;
        }
        >.watch-subDesc {
            position: absolute;
            top: 4.33rem; left: 3.6rem;
            width: 5.28rem;
            line-height: .36rem;
            font-size: .2rem; color: #666;
        }
    }
    #texture {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.texture-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.texture-title {
            position: absolute;
            top: 2.4rem; left: 10.09rem;
            line-height: .7rem;
            font-size: .5rem;
        }
        >.texture-subTitle {
            position: absolute;
            top: 4.26rem; left: 10.09rem;
            line-height: .33rem;
            font-size: .24rem;
        }
    }
    #passageway {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.passageway-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.passageway-title {
            position: absolute;
            top: .57rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .32rem; color: #91730b; font-weight: bold;
        }
        >.passageway-subTitle {
            position: absolute;
            top: 1.13rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .2rem; color: #666;
        }
    }
    #wave {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.wave-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.wave-title {
            position: absolute;
            top: 2.15rem; left: 3.6rem; 
            line-height: .62rem; 
            font-size: .48rem; color: #fff; font-weight: bold;
        }
        >.wave-subTitle {
            position: absolute;
            top: 3.87rem; left: 3.6rem;
            line-height: .42rem; 
            font-size: .24rem; color: #fff;
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
            top: .57rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .32rem; color: #91730b; font-weight: bold;
        }
        >.design-subTitle {
            position: absolute;
            top: 1.13rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .2rem; color: #666;
        }
    }
    #upgrade {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.upgrade-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.upgrade-title {
            position: absolute;
            top: .57rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .32rem; color: #91730b; font-weight: bold;
        }
        >.upgrade-subTitle {
            position: absolute;
            top: 1.13rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .2rem; color: #666;
        }
    }
    #charge {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.charge-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.charge-title {
            position: absolute;
            top: .57rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .32rem; color: #91730b; font-weight: bold;
        }
        >.charge-subTitle {
            position: absolute;
            top: 1.13rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .2rem; color: #666;
        }
    }
    #clean {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.clean-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.clean-title {
            position: absolute;
            top: .57rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .32rem; color: #fff; font-weight: bold;
        }
        >.clean-subTitle {
            position: absolute;
            top: 1.13rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .2rem; color: #fff;
        }
    }
    #appearance {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        >.appearance-img {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.appearance-title {
            position: absolute;
            top: .57rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .32rem; color: #91730b; font-weight: bold;
        }
        >.appearance-subTitle {
            position: absolute;
            top: 1.13rem; left: 0; right: 0;
            margin: auto;
            line-height: .42rem; text-align: center;
            font-size: .2rem; color: #666;
        }
    }
    #app {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.app-circle {
            position: absolute;
            bottom: 0; right: 0;
            width: 90%; height: 90%;
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
            bottom: 0; left: 6.89rem;
            width: 9.28rem; height: 4.94rem;
        }
        >.app-train-2 {
            position: absolute;
            bottom: 0; left: 5.55rem;
            width: 8.8rem; height: 2.42rem;
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
            width: 4.78rem;
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
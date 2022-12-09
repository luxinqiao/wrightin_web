<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-kegel' :src='require("@/assets/img/product/kegel/banner-kegel.png")'>
            <p class='banner-title'>盆底肌肉康复器</p>
            <p class='banner-subTitle'>阴道哑铃 锻炼阴道肌肉</p>
            <p class='banner-desc'>
                南京麦豆健康管理有限公司
                <br/>
                一类医疗器械备案号：苏宁械备20180019号 广告审查批准文号：苏械广审（文）第 221228-16564 号
                <br/>
                请仔细阅读产品说明书或者在医务人员的指导下购买和使用
                <br/>
                禁忌内容或者注意事项详见说明书
            </p>
        </div>
        <div id='effect'>
            <p class='effect-title'>盆底肌肉康复器</p>
            <p class='effect-subTitle'>提高盆底肌肉收缩能力</p>
            <p class='effect-item incontinet'>缓解压力性尿失禁</p>
            <p class='effect-item down'>缓解阴道子宫等器官膨出或脱垂</p>
            <p class='effect-item pain'>缓解慢性疼痛</p>
            <p class='effect-item shit'>缓解便秘</p>
        </div>
        <div id='practice'>
            <img class='practice-bg' v-lazy='require("@/assets/img/product/kegel/practice.png")'>
            <p class='practice-title'>物理锻炼 收缩阴道肌肉</p>
            <p class='practice-desc'>运动时通过放置体内的球体，促使阴道肌肉自动收缩，通过收缩运动锻炼盆底肌肉</p>
        </div>
        <div id='ball'>
            <p class='ball-title'>五球组合 适应需求</p>
            <p class='ball-subTitle'>不同尺寸，配合不同松弛程度的阴道尺寸，不同时期的训练要求，满足用户需求</p>
            <img class='ball-bg' v-lazy='require("@/assets/img/product/kegel/ball.png")'>
        </div>
        <div id='guide'>
            <p class='guide-title'>智能科技 科学指导</p>
            <p class='guide-subTitle'>使用澜渟App辅助训练，从新手到大神，一步到位，提供完善的盆底肌训练指导</p>
            <img class='guide-kegel' v-lazy='require("@/assets/img/product/kegel/guide-kegel.png")'>
            <img class='guide-phone' v-lazy='require("@/assets/img/product/kegel/guide-phone.png")'>
            <img class='guide-circle' v-lazy='require("@/assets/img/product/circle.gif")'>
        </div>
        <div id='record'>
            <img class='record-img' v-lazy='require("@/assets/img/product/record.png")'>
            <p class='record-title'>在澜渟 你的努力终将美好</p>
            <p class='record-subTitle'>循序渐进的科学课程设计，系统记录训练轨迹，澜渟每天与你共同前进</p>
            <p class='record-detail'>
                <span class='record-detail-item person'>
                    <img class='large' v-lazy='require("@/assets/img/product/kegel/record-person.png")'>
                    <font class='small'>陪你在一起</font>
                </span>
                <span class='record-detail-item count'>
                    <img class='large' v-lazy='require("@/assets/img/product/kegel/record-count.png")'>
                    <font class='small'>坚持的训练</font>
                </span>
                <span class='record-detail-item hour'>
                    <img class='large' v-lazy='require("@/assets/img/product/kegel/record-hour.png")'>
                    <font class='small'>做着同样的事</font>
                </span>
            </p>
        </div>
        <div id='authorize'>
            <img class='authorize-bg' v-lazy='require("@/assets/img/product/authorize-bg.png")'>
            <p class='authorize-title'>一类医疗器械</p>
            <p class='authorize-subTitle'>诚心 精心 用心</p>
            <img class='authorize-paper' v-lazy='require("@/assets/img/product/kegel/authorize-paper.png")'>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>澜渟训练顾问  在线服务</p>
            <p class='train-subTitle'>经验丰富的盆底康复领域从业人员，在线解读筛查报告，推送定制化康复方案，定期跟进康复过程，提供优质的服务</p>
            <img class='train-phone' v-lazy='require("@/assets/img/product/kegel/train-phone.png")'>
        </div>
        <div id='rule'>
            售后问题请查看<font class='red' @click='goRule()'>《盆底肌肉康复器售后管理制度》</font>
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
            this.$router.push({path: 'rule?type=kegel'})
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
        >.banner-kegel {
            position: absolute;
            top: 0; bottom: 0; left: 3.2rem;
            margin: auto;
            width: 6.49rem; height: 4.4rem;
        }
        >.banner-title {
            position: absolute;
            top: 2.2rem; right: 3.19rem;
            width: 6.2rem;
            text-align: center; line-height: .84rem;
            font-size: .6rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute;
            top: 3.3rem; right: 3.19rem;
            width: 6.2rem;
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
    #effect {
        position: relative;
        margin-top: .08rem;
        height: 5.0rem;
        background-color: #fafafa;
        >.effect-title {
            position: absolute;
            top: .58rem; left: 0; right: 0;
            text-align: center; line-height: .35rem;
            font-size: .22rem;
        }
        >.effect-subTitle {
            position: absolute;
            top: .96rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
            color: #9b8024;
        }
        >.effect-item {
            position: absolute;
            top: 2.17rem;
            padding-top: 1.43rem;
            width: 3.0rem; height: 1.71rem;
            text-align: center; line-height: .28rem;
            font-size: .2rem; font-weight: bold;
        }
        >.effect-item.incontinet {
            left: 3.0rem;
            background: url(../../assets/img/product/kegel/effect-incontinet.png) no-repeat center top;
            background-size: 1.19rem 1.14rem;
        }
        >.effect-item.down {
            left: 6.4rem;
            background: url(../../assets/img/product/kegel/effect-down.png) no-repeat center top;
            background-size: 1.14rem 1.12rem;
        }
        >.effect-item.pain {
            right: 6.4rem;
            background: url(../../assets/img/product/kegel/effect-pain.png) no-repeat center top;
            background-size: 1.04rem 1.12rem;
        }
        >.effect-item.shit {
            right: 3.0rem;
            background: url(../../assets/img/product/kegel/effect-shit.png) no-repeat center top;
            background-size: 1.11rem 1.15rem;
        }
    }
    #practice {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background: url(../../assets/img/product/kegel/practice.png) no-repeat center center;
        background-size: 100% 100%;
        >.practice-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.practice-title {
            position: absolute;
            top: 1.8rem; left: 4.61rem;
            line-height: .42rem;
            font-size: .48rem; font-weight: bold;
            color: #9b8024;
        }
        >.practice-desc {
            position: absolute;
            top: 2.57rem; left: 4.61rem;
            width: 4.81rem;
            line-height: .42rem;
            font-size: .24rem;
        }
    }
    #ball {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.ball-title {
            position: absolute;
            top: .8rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .32rem; font-weight: bold;
            color: #91730b;
        }
        >.ball-subTitle {
            position: absolute;
            top: 1.36rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .2rem;
            color: #666;
        }
        >.ball-bg {
            position: absolute;
            top: 2.84rem; left: 0; right: 0;
            margin: auto;
            width: 7.92rem; height: 3.61rem;
        }
    }
    #guide {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.guide-title {
            position: absolute; z-index: 2;
            top: .55rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .32rem; font-weight: bold;
            color: #91730b;
        }
        >.guide-subTitle {
            position: absolute; z-index: 2;
            top: 1.11rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .2rem;
            color: #666;
        }
        >.guide-kegel {
            position: absolute; z-index: 3;
            bottom: 0; left: 4.86rem;
            width: 3.51rem; height: 3.29rem;
        }
        >.guide-phone {
            position: absolute; z-index: 2;
            bottom: 0; right: 4.38rem;
            width: 7.66rem; height: 3.88rem;
        }
        >.guide-circle {
            position: absolute; z-index: 1;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
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
                    width: 1.27rem; height: .37rem;
                }
            }
            >.record-detail-item.count {
                left: 0; right: 0;
                margin: auto;
                >.large {
                    width: 1.67rem; height: .37rem;
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
            top: 2.55rem; left: 3.13rem;
            width: 6.0rem;
            text-align: center; line-height: .7rem;
            font-size: .5rem;
        }
        >.authorize-subTitle {
            position: absolute;
            top: 3.45rem; left: 3.13rem;
            width: 6.0rem;
            text-align: center; line-height: .4rem;
            font-size: .24rem;
            color: #666;
        }
        >.authorize-paper {
            position: absolute;
            top: .45rem; right: 4.26rem;
            width: 4.79rem; height: 5.67rem;
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
            width: 3.56rem; height: 5.8rem;
        }
    }
    #rule {
        height: 1.6rem;
        text-align: center; line-height: 1.6rem;
        >.red {
            color: #ff2c79;
            cursor: pointer;
        }
    }
</style>
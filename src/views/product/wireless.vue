<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-wireless' :src='require("@/assets/img/product/wireless/banner-wireless.png")'>
            <p class='banner-title'>无线产后恢复仪</p>
            <p class='banner-subTitle'>产后塑形 改善腹直肌分离</p>
        </div>
        <div id='secret'>
            <p class='secret-title'>无线产后恢复仪</p>
            <p class='secret-subTitle'>轻松打造健康私密</p>
            <p class='secret-item fzj'>修复腹直肌分离</p>
            <p class='secret-item slim'>多部位塑形</p>
            <p class='secret-item milk'>通乳催乳</p>
            <p class='secret-item health'>保养子宫/卵巢</p>
        </div>
        <div id='stim'>
            <p class='stim-title'>核心科技——低频脉冲电刺激</p>
            <img class='stim-img' v-lazy='require("@/assets/img/product/wireless/stim.png")'>
            <p class='stim-desc-left'>可调节的低频脉冲电流，刺激身体不同部位的肌肉和神经等组织，紧致肌肉</p>
            <p class='stim-desc-right'>电刺激模拟按摩手法，缓解机体不适</p>
        </div>
        <div id='quality'>
            <p class='quality-title'>匠心铸造品质</p>
            <img class='quality-img' v-lazy='require("@/assets/img/product/wireless/quality.png")'>
        </div>
        <div id='auto'>
            <p class='auto-title'>智能模式 对症部位</p>
            <p class='auto-subTitle'>根据身体不同部位的需求，提供个性化合理的训练方案，APP内可选择多种模式和智能方案</p>
            <img class='auto-equipment' v-lazy='require("@/assets/img/product/wireless/auto-equipment.png")'>
            <img class='auto-phone' v-lazy='require("@/assets/img/product/wireless/auto-phone.png")'>
            <img class='auto-circle' v-lazy='require("@/assets/img/product/circle.gif")'>
        </div>
        <div id='record'>
            <img class='record-img' v-lazy='require("@/assets/img/product/record.png")'>
            <p class='record-title'>你的努力 自己看得见</p>
            <p class='record-subTitle'>每天进步一点点，你累计的努力，会成就更好的自己</p>
            <p class='record-detail'>
                <span class='record-detail-item person'>
                    <img class='large' v-lazy='require("@/assets/img/product/wireless/record-person.png")'>
                    <font class='small'>陪你在一起</font>
                </span>
                <span class='record-detail-item count'>
                    <img class='large' v-lazy='require("@/assets/img/product/wireless/record-count.png")'>
                    <font class='small'>坚持的训练</font>
                </span>
                <span class='record-detail-item hour'>
                    <img class='large' v-lazy='require("@/assets/img/product/wireless/record-hour.png")'>
                    <font class='small'>做着同样的事</font>
                </span>
            </p>
        </div>
        <div id='train'>
            <img class='train-bg' v-lazy='require("@/assets/img/product/train-bg.png")'>
            <p class='train-title'>因为服务 所以信赖</p>
            <p class='train-subTitle'>经验丰富的产后康复领域从业人员，用户问题可随时咨询专家，快速为用户进行疑难解答，提升用户体验</p>
            <img class='train-phone' v-lazy='require("@/assets/img/product/wireless/train-phone.png")'>
        </div>
        <div id='rule'>
            售后问题请查看<font class='red' @click='goRule()'>《无线产后恢复仪售后管理制度》</font>
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
            this.$router.push({path: 'rule?type=wireless'})
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
        >.banner-wireless {
            position: absolute;
            top: .14rem; left: 3.17rem;
            width: 8.63rem; height: 5.78rem;
        }
        >.banner-title {
            position: absolute;
            top: 2.2rem; left: 10.99rem;
            line-height: .84rem;
            font-size: .6rem; font-weight: bold;
            color: #bf995b;
        }
        >.banner-subTitle {
            position: absolute;
            top: 3.3rem; left: 10.99rem;
            line-height: .53rem;
            font-size: .38rem;
            color: #666;
        }
    }
    #secret {
        position: relative;
        margin-top: .08rem;
        height: 5.0rem;
        background-color: #fafafa;
        >.secret-title {
            position: absolute;
            top: .58rem; left: 0; right: 0;
            text-align: center; line-height: .35rem;
            font-size: .22rem;
        }
        >.secret-subTitle {
            position: absolute;
            top: .96rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
            color: #9b8024;
        }
        >.secret-item {
            position: absolute;
            top: 2.17rem;
            padding-top: 1.43rem;
            width: 3.0rem; height: 1.71rem;
            text-align: center; line-height: .28rem;
            font-size: .2rem; font-weight: bold;
        }
        >.secret-item.fzj {
            left: 3.0rem;
            background: url(../../assets/img/product/wireless/secret-fzj.png) no-repeat center top;
            background-size: 1.15rem 1.13rem;
        }
        >.secret-item.slim {
            left: 6.4rem;
            background: url(../../assets/img/product/wireless/secret-slim.png) no-repeat center top;
            background-size: 1.05rem 1.12rem;
        }
        >.secret-item.milk {
            right: 6.4rem;
            background: url(../../assets/img/product/wireless/secret-milk.png) no-repeat center top;
            background-size: 1.21rem 1.14rem;
        }
        >.secret-item.health {
            right: 3.0rem;
            background: url(../../assets/img/product/wireless/secret-health.png) no-repeat center top;
            background-size: 1.12rem 1.15rem;
        }
    }
    #stim {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.stim-title {
            position: absolute; z-index: 2;
            top: .57rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .32rem; font-weight: bold;
            color: #91730b;
        }
        >.stim-img {
            position: absolute; z-index: 1;
            top: .29rem; left: 5.04rem;
            width: 9.3rem; height: 6.16rem;
        }
        >.stim-desc-left {
            position: absolute; z-index: 2;
            top: 4.48rem; left: 4.98rem;
            width: 2.12rem;
            line-height: .26rem;
            color: #666;
        }
        >.stim-desc-right {
            position: absolute; z-index: 2;
            top: 5.28rem; left: 12.34rem;
            width: 2.12rem;
            line-height: .26rem;
            color: #666;
        }
    }
    #quality {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.quality-title {
            position: absolute;
            top: .57rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .32rem; font-weight: bold;
            color: #91730b;
        }
        >.quality-img {
            position: absolute;
            top: 1.29rem; left: 6.1rem;
            width: 7.43rem; height: 5.16rem;
        }
    }
    #auto {
        position: relative;
        margin-top: .08rem;
        height: 6.45rem;
        background-color: #fafafa;
        >.auto-title {
            position: absolute; z-index: 3;
            top: .55rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .32rem; font-weight: bold;
            color: #91730b;
        }
        >.auto-subTitle {
            position: absolute; z-index: 3;
            top: 1.11rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .2rem;
            color: #666;
        }
        >.auto-equipment {
            position: absolute; z-index: 2;
            bottom: 0; left: 4.5rem;
            width: 5.22rem; height: 1.94rem;
        }
        >.auto-phone {
            position: absolute; z-index: 2;
            bottom: 0; right: 3.65rem;
            width: 8.49rem; height: 3.93rem;
        }
        >.auto-circle {
            position: absolute; z-index: 1;
            bottom: 0; right: 0;
            width: 90%; height: 90%;
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
                    width: 1.45rem; height: .37rem;
                }
            }
            >.record-detail-item.hour {
                right: 1.2rem;
                >.large {
                    width: 1.6rem; height: .37rem;
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
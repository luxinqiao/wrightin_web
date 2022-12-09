<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/about/info/banner-bg.png")'>
            <p class='banner-title'>让女性更健康 更美丽</p>
            <p class='banner-content'>
                <img class='logo' v-lazy='require("@/assets/img/about/info/banner-building.png")'>
                <span class='title'>南京麦豆健康管理有限公司</span>
                <span class='desc'>南京麦豆健康管理有限公司成立于2017年，是一家集软件平台、智能硬件、专业服务为一体的健康管理公司。公司总部位于六朝古都南京，5A级办公环境，办公面积近千平。公司通过“设备”+“APP”+“服务”的模式，依托智能医疗设备、平台软件APP、健康咨询服务，以及基于大数据构建的智慧云平台，为女性提供个性化健康管理，维护女性身心健康，提高女性生活质量。</span>
            </p>
        </div>
        <div id='team'>
            <p class='team-title'>团队简介</p>
            <p class='team-item technology'>
                <img class='img' v-lazy='require("@/assets/img/about/info/team-technology.png")'>
                <span class='title'>优秀的技术团队</span>
                <span class='desc'>拥有一支专业化分工、高度合作的团队，研发骨干达20人以上，富有强大的软件研发实力和雄厚的技术力量</span>
            </p>
            <p class='team-item business'>
                <img class='img' v-lazy='require("@/assets/img/about/info/team-business.png")'>
                <span class='title'>高素质的运营团队</span>
                <span class='desc'>高素质的多维度运营团队，运用数据化运营手段，搭建新媒体矩阵，用实力助推公司发展</span>
            </p>
            <p class='team-item server'>
                <img class='img' v-lazy='require("@/assets/img/about/info/team-server.png")'>
                <span class='title'>完善的服务团队</span>
                <span class='desc'>特聘请一批经验丰富的盆底领域从业人员作为咨询顾问，以“服务至上”的理念，为用户提供优质的服务，赢得了广泛的认可</span>
            </p>
        </div>
        <div id='culture'>
            <p class='culture-title'>企业文化</p>
            <p class='culture-item mission'>
                <img class='img' v-lazy='require("@/assets/img/about/info/culture-mission.png")'>
                <span class='title'>使命</span>
                <span class='desc'>让女性更健康更美丽</span>
            </p>
            <p class='culture-item vision'>
                <img class='img' v-lazy='require("@/assets/img/about/info/culture-vision.png")'>
                <span class='title'>愿景</span>
                <span class='desc'>家用盆底领域第一品牌</span>
            </p>
            <p class='culture-item value'>
                <img class='img' v-lazy='require("@/assets/img/about/info/culture-value.png")'>
                <span class='title'>价值观</span>
                <span class='desc'>创新 分享 积极 坦诚<br/>开放 协同</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 6.62rem;
        >.banner-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.banner-title {
            position: absolute;
            top: 1.16rem; left: 0; right: 0;
            text-align: center; line-height: .67rem;
            font-size: .48rem; font-weight: bold;
            color: #695649;
        }
        >.banner-content {
            position: absolute;
            bottom: .5rem; left: 0; right: 0;
            margin: auto;
            width: 12.0rem; height: 3.1rem;
            border-radius: .1rem;
            background-color: #fff;
            >.logo {
                position: absolute;
                top: 0; bottom: 0; left: .52rem;
                margin: auto;
                width: 3.59rem; height: 2.14rem;
            }
            >.title {
                position: absolute;
                top: .64rem; left: 4.29rem;
                line-height: .28rem;
                font-size: .2rem;
            }
            >.desc {
                position: absolute;
                top: 1.2rem; left: 4.29rem; right: .43rem;
                line-height: .3rem;
                font-size: .15rem;
            }
        }
    }
    #team {
        position: relative;
        margin-top: .08rem;
        height: 6.6rem;
        >.team-title {
            position: absolute;
            top: .56rem; left: 0; right: 0;
            margin: auto;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
        }
        >.team-item {
            position: absolute;
            top: 1.92rem;
            width: 3.3rem; height: 3.51rem;
            >.img {
                position: absolute;
                top: 0; left: 0; right: 0;
                margin: auto;
                width: 1.9rem; height: 1.9rem;
            }
            >.title {
                position: absolute;
                top: 2.25rem; left: 0; right: 0;
                margin: auto;
                text-align: center; line-height: .28rem;
                font-size: .2rem; font-weight: bold;
            }
            >.desc {
                position: absolute;
                top: 2.79rem; left: 0; right: 0;
                margin: auto;
                text-align: center; line-height: .24rem;
                font-size: .14rem;
                color: #666;
            }
        }
        >.team-item.technology {
            left: 3.7rem;
        }
        >.team-item.business {
            left: 0; right: 0;
            margin: auto;
        }
        >.team-item.server {
            right: 3.7rem;
        }
    }
    #culture {
        position: relative;
        margin: .13rem 0 1.01rem 0;
        height: 6.6rem;
        background: linear-gradient(#fffafa, #fff);
        >.culture-title {
            position: absolute;
            top: .56rem; left: 0; right: 0;
            margin: auto;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
        }
        >.culture-item {
            position: absolute;
            top: 1.55rem;
            width: 2.32rem; height: 4.5rem;
            >.img {
                position: absolute;
                top: 0; bottom: 0; left: 0; right: 0;
                width: 100%; height: 100%;
            }
            >.title {
                position: absolute;
                top: 3.27rem; left: 0; right: 0;
                margin: auto;
                text-align: center; line-height: .56rem;
                font-size: .4rem;
                color: #fff;
            }
            >.desc {
                position: absolute;
                top: 3.88rem; left: 0; right: 0;
                margin: auto;
                text-align: center; line-height: .22rem;
                color: #fff;
            }
        }
        >.culture-item.mission {
            left: 5.93rem;
        }
        >.culture-item.vision {
            left: 0; right: 0;
            margin: auto;
        }
        >.culture-item.value {
            right: 5.93rem;
        }
    }
</style>
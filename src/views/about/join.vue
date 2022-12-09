<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/about/join/banner-bg.png")'>
            <img class='banner-center' v-lazy='require("@/assets/img/about/banner-center.png")'>
            <p class='banner-title'>追梦前行 共创未来</p>
        </div>
        <div id='info'>
            <p class='info-title'>薪酬福利</p>
            <p class='info-item environment'>
                <img class='img' v-lazy='require("@/assets/img/about/join/environment.png")'>
                <span class='title'>优质的办公环境</span>
                <span class='desc'>位于5A级写字楼，宽敞明亮的办公室，办公面积1000多平方。办公设备一应俱全，装修精致，优雅舒适</span>
            </p>
            <p class='info-item culture'>
                <img class='img' v-lazy='require("@/assets/img/about/join/culture.png")'>
                <span class='title'>良好的公司文化</span>
                <span class='desc'>公司将文化理念融入到跑步与读书的活动中，促进公司与个人健康发展，打造幸福企业。日常举办各种丰富的文娱活动，并提供各类培训晋升学习机会</span>
            </p>
            <p class='info-item health'>
                <img class='img' v-lazy='require("@/assets/img/about/join/health.png")'>
                <span class='title'>完善的健康保障</span>
                <span class='desc'>除了法定的五险一金，公司额外提供补充商业保险，每年组织一次健康体检，配备室内健身房，设施齐全，私人教练带教，练出健康体魄</span>
            </p>
            <p class='info-item welfare'>
                <img class='img' v-lazy='require("@/assets/img/about/join/welfare.png")'>
                <span class='title'>健全的福利制度</span>
                <span class='desc'>公司拥有餐补等各项补贴，上下班有班车接送，定期举办生日会，发放节日福利，每年提供旅游、不定期团建机会</span>
            </p>
        </div>
        <div id='work'>
            <p class='work-title'>热招岗位</p>
            <div class='work-item' v-for='(workItem, i) in work' :key='i' @click='expand(workItem)'>
                <p class='work-info'>
                    <span class='work-name'>{{workItem.title}}</span>
                    <span class='work-require'>{{workItem.require}}</span>
                    <span :class='workItem.expand?"work-expand open":"work-expand close"'></span>
                </p>
                <p class='work-duty' v-if='workItem.expand'>
                    <span>岗位职责：</span>
                    <span v-html='workItem.responsibility'></span>
                </p>
                <p class='work-station' v-if='workItem.expand'>
                    <span>岗位要求：</span>
                    <span v-html='workItem.station'></span>
                </p>
            </div>
        </div>
        <div id='contact'>
            <p class='contact-title'>招聘联系方式</p>
            <p class='contact-man'>联系人：汪女士</p>
            <p class='contact-phone'>联系电话：18115468726</p>
            <p class='contact-email'>简历投递邮箱：wangmeimei@medoht.com</p>
            <p class='contact-desc'>欢迎有意向者在前程无忧、智联招聘、BOSS直聘等网站上关注我们的招聘信息，我们将第一时间与您联系</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            work: []
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        this.initWork()
    },
    methods: {
        /**
            初始化热招岗位
            @param
            @return
         */
        initWork() {
            this.$axios.post(`${this.$request.live}/common/pc/recruit`, {}).then(res => {
                for (let i=0; i<res.data.length; i++) {
                    res.data[i].expand = false
                    res.data[i].responsibility = res.data[i].responsibility.replace(/\n/g, '<br>')
                    res.data[i].station = res.data[i].station.replace(/\n/g, '<br>')
                }
                this.work = res.data
            })
        },
        /**
            展开/收缩
            @param {Object} item 岗位
            @return
         */
        expand(item) {
            if (item.expand) {
                item.expand = false
            } else {
                for (let i=0; i<this.work.length; i++) {
                    this.work[i].expand = false
                }
                item.expand = true
            }
        }
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
    #info {
        position: relative;
        height: 11.43rem;
        >.info-title {
            position: absolute;
            top: .55rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
        }
        >.info-item {
            position: absolute;
            width: 6.2rem; height: 2.98rem;
            >.img {
                position: absolute;
                top: 0;
                width: 2.61rem; height: 2.98rem;
            }
            >.title {
                position: absolute;
                top: .22rem;
                width: 3.59rem;
                line-height: .53rem;
                border-bottom: .01rem solid #cecece;
                font-size: .24rem; font-weight: bold;
            }
            >.desc {
                position: absolute;
                top: .9rem;
                width: 3.4rem;
                line-height: .22rem;
            }
        }
        >.info-item.environment {
            top: 1.63rem; left: 4.08rem;
            >.img {
                left: 0;
            }
            >.title {
                right: 0;
                padding-left: .15rem;
            }
            >.desc {
                right: .19rem;
                padding-left: .15rem;
            }
        }
        >.info-item.culture {
            top: 3.52rem; right: 4.02rem;
            >.img {
                right: 0;
            }
            >.title {
                left: 0;
                padding-right: .15rem;
            }
            >.desc {
                left: 0;
                padding-right: .15rem;
            }
        }
        >.info-item.health {
            top: 5.93rem; left: 4.08rem;
            >.img {
                left: 0;
            }
            >.title {
                right: 0;
                padding-left: .15rem;
            }
            >.desc {
                right: .19rem;
                padding-left: .15rem;
            }
        }
        >.info-item.welfare {
            top: 7.18rem; right: 4.02rem;
            >.img {
                right: 0;
            }
            >.title {
                left: 0;
                padding-right: .15rem;
            }
            >.desc {
                left: 0;
                padding-right: .15rem;
            }
        }
    }
    #work {
        padding: .55rem 3.6rem;
        background-color: #fafafa;
        >.work-title {
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
        }
        >.work-item {
            margin-top: .24rem; padding: .4rem .6rem;
            width: 12.0rem;
            border-radius: .08rem;
            background-color: #fff;
            box-shadow: #eee 0 0 .05rem;
            cursor: pointer;
            >.work-info {
                position: relative;
                height: .25rem;
                >.work-name {
                    position: absolute;
                    top: 0; left: 0;
                    font-size: .18rem;
                    line-height: .25rem;
                }
                >.work-require {
                    position: absolute;
                    top: 0; right: .79rem;
                    line-height: .22rem;
                }
                >.work-expand {
                    position: absolute;
                    top: .05rem; right: 0;
                    width: .18rem; height: .11rem;
                }
                >.work-expand.open {
                    background: url(../../assets/img/about/join/arrow-up.png) no-repeat center center;
                    background-size: 100% 100%;
                }
                >.work-expand.close {
                    background: url(../../assets/img/about/join/arrow-bottom.png) no-repeat center center;
                    background-size: 100% 100%;
                }
            }
            >.work-duty {
                margin-top: .16rem;
                >span {
                    display: block;
                    line-height: .24rem;
                }
            }
            >.work-station {
                margin-top: .16rem;
                >span {
                    display: block;
                    line-height: .24rem;
                }
            }
        }
        >.work-item:nth-child(1) {
            margin-top: .36rem;
        }
        >.work-item:hover {
            background-color: #fbfbfb;
        }
    }
    #contact {
        position: relative;
        height: 2.76rem;
        >.contact-title {
            position: absolute;
            top: .53rem; left: 0; right: 0;
            text-align: center; line-height: .42rem;
            font-size: .3rem; font-weight: bold;
        }
        >.contact-man {
            position: absolute;
            top: 1.42rem; left: 4.2rem;
            line-height: .25rem;
            font-size: .18rem;
        }
        >.contact-phone {
            position: absolute;
            top: 1.42rem; left: 6.96rem;
            line-height: .25rem;
            font-size: .18rem;
        }
        >.contact-email {
            position: absolute;
            top: 1.42rem; left: 10.44rem;
            line-height: .25rem;
            font-size: .18rem;
        }
        >.contact-desc {
            position: absolute;
            top: 1.99rem; left: 0; right: 0;
            margin: auto;
            text-align: center; line-height: .2rem;
            font-size: .14rem;
            color: #999;
        }
    }
</style>
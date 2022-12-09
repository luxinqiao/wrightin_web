<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/app/banner-bg.png")'>
            <img class='banner-wrightin' v-lazy='require("@/assets/img/app/banner-wrightin.png")'>
            <img class='banner-doctor' v-lazy='require("@/assets/img/app/banner-doctor.png")'>
            <p class='banner-title'>家用盆底健康服务平台</p>
            <p class='banner-subTitle'>平台型服务软件</p>
            <div class='banner-download wrightin'>
                <button class='btn'>下载澜渟App</button>
                <p class='desc'>澜渟用户版App</p>
                <p class='desc-mini'>凯格尔训练免费指导平台</p>
            </div>
            <div class='banner-download-hover wrightin'>
                <div class='arrow'></div>
                <div class='content'>
                    <button class='ios' @click='downloadUser("ios")'>iOS下载</button>
                    <button class='android' @click='downloadUser("android")'>Android下载</button>
                    <img class='qrcode' :src='require("@/assets/img/index/qrcode-app.png")'>
                    <p class='qrcode-desc'>扫二维码 即刻下载</p>
                </div>
            </div>
            <div class='banner-download doctor'>
                <button class='btn'>下载澜渟医生App</button>
                <p class='desc'>澜渟医生版App</p>
                <p class='desc-mini'>盆底康复医生成长进阶之选</p>
            </div>
            <div class='banner-download-hover doctor'>
                <div class='arrow'></div>
                <div class='content'>
                    <button class='ios' @click='downloadDoctor("ios")'>iOS下载</button>
                    <button class='android' @click='downloadDoctor("android")'>Android下载</button>
                    <img class='qrcode' :src='require("@/assets/img/index/qrcode-app-doctor.png")'>
                    <p class='qrcode-desc'>扫二维码 即刻下载</p>
                </div>
            </div>
        </div>
        <div id='detail'>
            <div class='detail-item trainW' ref='trainW'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-trainW.png")' :style='{left: trainW.img.left+"rem", opacity: trainW.opacity}'>
                <div class='info' :style='{left: trainW.info.left+"rem", opacity: trainW.opacity}'>
                    <p class='title'>训练</p>
                    <p class='subTitle'>
                        <font>澜渟App</font>
                        <span class='w'></span>
                    </p>
                    <p class='desc'>产后康复训练<br/>塑造产后更美的你</p>
                </div>
            </div>
            <div class='detail-item friendW' ref='friendW'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-friendW.png")' :style='{left: friendW.img.left+"rem", opacity: friendW.opacity}'>
                <div class='info' :style='{left: friendW.info.left+"rem", opacity: friendW.opacity}'>
                    <p class='title'>盆友圈</p>
                    <p class='subTitle'>
                        <font>澜渟App</font>
                        <span class='w'></span>
                    </p>
                    <p class='desc'>盆底肌训练圈子<br/>一起战胜懒癌<br/>见证每一天的进步</p>
                </div>
            </div>
            <div class='detail-item college-wrightin' ref='collegeW'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-collegeW.png")' :style='{left: collegeW.img.left+"rem", opacity: collegeW.opacity}'>
                <div class='info' :style='{left: collegeW.info.left+"rem", opacity: collegeW.opacity}'>
                    <p class='title'>极致学院</p>
                    <p class='subTitle'>
                        <font>澜渟App</font>
                        <span class='w'></span>
                    </p>
                    <p class='desc'>科普盆底知识<br/>行业大牛授课</p>
                </div>
            </div>
            <div class='detail-item meeting-doctor' ref='meetingD'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-meetingD.png")' :style='{left: meetingD.img.left+"rem", opacity: meetingD.opacity}'>
                <div class='info' :style='{left: meetingD.info.left+"rem", opacity: meetingD.opacity}'>
                    <p class='title'>会议吧</p>
                    <p class='subTitle'>
                        <font>澜渟医生App</font>
                        <span class='d'></span>
                    </p>
                    <p class='desc'>妇产医生进修学习<br/>参会考证晋升有道</p>
                </div>
            </div>
            <div class='detail-item college-doctor' ref='collegeD'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-collegeD.png")' :style='{left: collegeD.img.left+"rem", opacity: collegeD.opacity}'>
                <div class='info' :style='{left: collegeD.info.left+"rem", opacity: collegeD.opacity}'>
                    <p class='title'>极致学院</p>
                    <p class='subTitle'>
                        <font>澜渟医生App</font>
                        <span class='d'></span>
                    </p>
                    <p class='desc'>海量盆底干货课程学习<br/>盆底学术大咖直播分享</p>
                </div>
            </div>
            <div class='detail-item study-doctor' ref='studyD'>
                <img class='img' v-lazy='require("@/assets/img/app/detail-studyD.png")' :style='{left: studyD.img.left+"rem", opacity: studyD.opacity}'>
                <div class='info' :style='{left: studyD.info.left+"rem", opacity: studyD.opacity}'>
                    <p class='title'>学术圈</p>
                    <p class='subTitle'>
                        <font>澜渟医生App</font>
                        <span class='d'></span>
                    </p>
                    <p class='desc'>盆底精英互动交流<br/>了解最新行业新闻动态</p>
                </div>
            </div>
            <img class='detail-circle' style='top:0;left:0;' v-lazy='require("@/assets/img/app/detail-bg-left.png")'>
            <img class='detail-circle' style='top:9.7rem;right:0;' v-lazy='require("@/assets/img/app/detail-bg-right.png")'>
            <img class='detail-circle' style='top:22.41rem;left:0;' v-lazy='require("@/assets/img/app/detail-bg-left.png")'>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollTop: 0,
            scrollDirection: '',
            interval: {
                time: 15,
                distance: .056,
                opacity: 1/50
            },
            trainW: {
                direction: '',
                img: {start: 1.79, end: 4.59, left: 1.79},
                info: {start: 15.03, end: 12.23, left: 15.03},
                opacity: 0
            },
            friendW: {
                direction: '',
                img: {start: 12.15, end: 9.35, left: 12.15},
                info: {start: 2.59, end: 5.39, left: 2.59},
                opacity: 0
            },
            collegeW: {
                direction: '',
                img: {start: 3.18, end: 5.98, left: 3.18},
                info: {start: 14.43, end: 11.63, left: 14.43},
                opacity: 0
            },
            meetingD: {
                direction: '',
                img: {start: 11.82, end: 9.02, left: 11.82},
                info: {start: 2.59, end: 5.39, left: 2.59},
                opacity: 0
            },
            collegeD: {
                direction: '',
                img: {start: 3.18, end: 5.98, left: 3.18},
                info: {start: 14.43, end: 11.63, left: 14.43},
                opacity: 0
            },
            studyD: {
                direction: '',
                img: {start: 11.69, end: 8.89, left: 11.69},
                info: {start: 2.59, end: 5.39, left: 2.59},
                opacity: 0
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        /**
            监听页面滚动条
            @param
            @return
         */
        bindScrollWindow(scrollTop) {
            if (scrollTop > this.scrollTop) {
                this.scrollDirection = 'down'
            } else {
                this.scrollDirection = 'up'
            }
            this.scrollTop = scrollTop
            this.bindScrollTrainW()
            this.bindScrollFriendW()
            this.bindScrollCollegeW()
            this.bindScrollMeetingD()
            this.bindScrollCollegeD()
            this.bindScrollStudyD()
        },
        /**
            监听页面滚动条-训练澜渟
            @param
            @return
         */
        bindScrollTrainW() {
            if (this.scrollTop > 0) {
                if (this.scrollDirection == 'down') {
                    if (this.trainWInterval == undefined) {
                        this.animationTrainW('down')
                    }
                }
            }
        },
        /**
            监听页面滚动条-盆友圈澜渟
            @param
            @return
         */
        bindScrollFriendW() {
            if (this.scrollTop > this.getAnimationTop('friendW')) {
                if (this.scrollDirection == 'down') {
                    if (this.friendW.direction == 'up') {
                        clearInterval(this.friendWInterval)
                        this.friendWInterval = undefined
                    }
                    if (this.friendWInterval == undefined) {
                        this.animationFriendW('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.friendW.direction == 'down') {
                        clearInterval(this.friendWInterval)
                        this.friendWInterval = undefined
                    }
                    if (this.friendWInterval == undefined) {
                        this.animationFriendW('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-极致学院澜渟
            @param
            @return
         */
        bindScrollCollegeW() {
            if (this.scrollTop > this.getAnimationTop('collegeW')) {
                if (this.scrollDirection == 'down') {
                    if (this.collegeW.direction == 'up') {
                        clearInterval(this.collegeWInterval)
                        this.collegeWInterval = undefined
                    }
                    if (this.collegeWInterval == undefined) {
                        this.animationCollegeW('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.collegeW.direction == 'down') {
                        clearInterval(this.collegeWInterval)
                        this.collegeWInterval = undefined
                    }
                    if (this.collegeWInterval == undefined) {
                        this.animationCollegeW('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-会议吧澜渟医生
            @param
            @return
         */
        bindScrollMeetingD() {
            if (this.scrollTop > this.getAnimationTop('meetingD')) {
                if (this.scrollDirection == 'down') {
                    if (this.meetingD.direction == 'up') {
                        clearInterval(this.meetingDInterval)
                        this.meetingDInterval = undefined
                    }
                    if (this.meetingDInterval == undefined) {
                        this.animationMeetingD('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.meetingD.direction == 'down') {
                        clearInterval(this.meetingDInterval)
                        this.meetingDInterval = undefined
                    }
                    if (this.meetingDInterval == undefined) {
                        this.animationMeetingD('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-极致学院澜渟医生
            @param
            @return
         */
        bindScrollCollegeD() {
            if (this.scrollTop > this.getAnimationTop('collegeD')) {
                if (this.scrollDirection == 'down') {
                    if (this.collegeD.direction == 'up') {
                        clearInterval(this.collegeDInterval)
                        this.collegeDInterval = undefined
                    }
                    if (this.collegeDInterval == undefined) {
                        this.animationCollegeD('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.collegeD.direction == 'down') {
                        clearInterval(this.collegeDInterval)
                        this.collegeDInterval = undefined
                    }
                    if (this.collegeDInterval == undefined) {
                        this.animationCollegeD('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-学术圈澜渟医生
            @param
            @return
         */
        bindScrollStudyD() {
            if (this.scrollTop > this.getAnimationTop('studyD')) {
                if (this.scrollDirection == 'down') {
                    if (this.studyD.direction == 'up') {
                        clearInterval(this.studyDInterval)
                        this.studyDInterval = undefined
                    }
                    if (this.studyDInterval == undefined) {
                        this.animationStudyD('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.studyD.direction == 'down') {
                        clearInterval(this.studyDInterval)
                        this.studyDInterval = undefined
                    }
                    if (this.studyDInterval == undefined) {
                        this.animationStudyD('up')
                    }
                }
            }
        },

        /**
            获取动画距顶距离
            @param {String} type 动画类型
            @return {Number} 动画距顶距离
         */
        getAnimationTop(type) {
            const baseTop = 6.71 * document.documentElement.clientWidth / 1920 * 100 - document.documentElement.clientHeight
            if (type == 'friendW') {
                return baseTop + this.$refs.friendW.offsetTop + this.$refs.friendW.offsetHeight / 2
            } else if (type == 'collegeW') {
                return baseTop + this.$refs.collegeW.offsetTop + this.$refs.collegeW.offsetHeight / 2
            } else if (type == 'meetingD') {
                return baseTop + this.$refs.meetingD.offsetTop + this.$refs.meetingD.offsetHeight / 2
            } else if (type == 'collegeD') {
                return baseTop + this.$refs.collegeD.offsetTop + this.$refs.collegeD.offsetHeight / 2
            } else if (type == 'studyD') {
                return baseTop + this.$refs.studyD.offsetTop + this.$refs.studyD.offsetHeight / 2
            }
            return 0
        },
        
        /**
            执行动画--训练澜渟
            @param {String} direction 页面滚动方向
            @return
         */
        animationTrainW(direction) {
            this.trainW.direction = direction
            if (direction == 'down') {
                this.trainWInterval = setInterval(()=> {
                    if (this.trainW.img.left >= this.trainW.img.end) {
                        clearInterval(this.trainWInterval)
                        return
                    }
                    this.trainW.img.left += this.interval.distance
                    this.trainW.info.left -= this.interval.distance
                    this.trainW.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.trainWInterval = setInterval(()=> {
                    if (this.trainW.img.left <= this.trainW.img.start) {
                        clearInterval(this.trainWInterval)
                        return
                    }
                    this.trainW.img.left -= this.interval.distance
                    this.trainW.info.left += this.interval.distance
                    this.trainW.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--盆友圈澜渟
            @param {String} direction 页面滚动方向
            @return
         */
        animationFriendW(direction) {
            this.friendW.direction = direction
            if (direction == 'down') {
                this.friendWInterval = setInterval(()=> {
                    if (this.friendW.img.left <= this.friendW.img.end) {
                        clearInterval(this.friendWInterval)
                    } else {
                        this.friendW.img.left -= this.interval.distance
                        this.friendW.info.left += this.interval.distance
                        this.friendW.opacity += this.interval.opacity
                    }
                }, this.interval.time)
            } else if (direction == 'up') {
                this.friendWInterval = setInterval(()=> {
                    if (this.friendW.img.left >= this.friendW.img.start) {
                        clearInterval(this.friendWInterval)
                    } else {
                        this.friendW.img.left += this.interval.distance
                        this.friendW.info.left -= this.interval.distance
                        this.friendW.opacity -= this.interval.opacity
                    }
                }, this.interval.time)
            }
        },
        /**
            执行动画--极致学院澜渟
            @param {String} direction 页面滚动方向
            @return
         */
        animationCollegeW(direction) {
            this.collegeW.direction = direction
            if (direction == 'down') {
                this.collegeWInterval = setInterval(()=> {
                    if (this.collegeW.img.left >= this.collegeW.img.end) {
                        clearInterval(this.collegeWInterval)
                        return
                    }
                    this.collegeW.img.left += this.interval.distance
                    this.collegeW.info.left -= this.interval.distance
                    this.collegeW.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.collegeWInterval = setInterval(()=> {
                    if (this.collegeW.img.left <= this.collegeW.img.start) {
                        clearInterval(this.collegeWInterval)
                        return
                    }
                    this.collegeW.img.left -= this.interval.distance
                    this.collegeW.info.left += this.interval.distance
                    this.collegeW.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--会议吧澜渟医生
            @param {String} direction 页面滚动方向
            @return
         */
        animationMeetingD(direction) {
            this.meetingD.direction = direction
            if (direction == 'down') {
                this.meetingDInterval = setInterval(()=> {
                    if (this.meetingD.img.left <= this.meetingD.img.end) {
                        clearInterval(this.meetingDInterval)
                    } else {
                        this.meetingD.img.left -= this.interval.distance
                        this.meetingD.info.left += this.interval.distance
                        this.meetingD.opacity += this.interval.opacity
                    }
                }, this.interval.time)
            } else if (direction == 'up') {
                this.meetingDInterval = setInterval(()=> {
                    if (this.meetingD.img.left >= this.meetingD.img.start) {
                        clearInterval(this.meetingDInterval)
                    } else {
                        this.meetingD.img.left += this.interval.distance
                        this.meetingD.info.left -= this.interval.distance
                        this.meetingD.opacity -= this.interval.opacity
                    }
                }, this.interval.time)
            }
        },
        /**
            执行动画--极致学院澜渟医生
            @param {String} direction 页面滚动方向
            @return
         */
        animationCollegeD(direction) {
            this.collegeD.direction = direction
            if (direction == 'down') {
                this.collegeDInterval = setInterval(()=> {
                    if (this.collegeD.img.left >= this.collegeD.img.end) {
                        clearInterval(this.collegeDInterval)
                        return
                    }
                    this.collegeD.img.left += this.interval.distance
                    this.collegeD.info.left -= this.interval.distance
                    this.collegeD.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.collegeDInterval = setInterval(()=> {
                    if (this.collegeD.img.left <= this.collegeD.img.start) {
                        clearInterval(this.collegeDInterval)
                        return
                    }
                    this.collegeD.img.left -= this.interval.distance
                    this.collegeD.info.left += this.interval.distance
                    this.collegeD.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--学术圈澜渟医生
            @param {String} direction 页面滚动方向
            @return
         */
        animationStudyD(direction) {
            this.studyD.direction = direction
            if (direction == 'down') {
                this.studyDInterval = setInterval(()=> {
                    if (this.studyD.img.left <= this.studyD.img.end) {
                        clearInterval(this.studyDInterval)
                    } else {
                        this.studyD.img.left -= this.interval.distance
                        this.studyD.info.left += this.interval.distance
                        this.studyD.opacity += this.interval.opacity
                    }
                }, this.interval.time)
            } else if (direction == 'up') {
                this.studyDInterval = setInterval(()=> {
                    if (this.studyD.img.left >= this.studyD.img.start) {
                        clearInterval(this.studyDInterval)
                    } else {
                        this.studyD.img.left += this.interval.distance
                        this.studyD.info.left -= this.interval.distance
                        this.studyD.opacity -= this.interval.opacity
                    }
                }, this.interval.time)
            }
        },
        
        /**
            页面跳转-下载澜渟
            @param
            @return
         */
        downloadUser(type) {
            if (type == 'ios') {
                window.open('https://itunes.apple.com/cn/app/id1243415475?mt=8')
            } else if (type == 'android') {
                window.location.href = 'http://m.wrightin.com/apps/Wrightin.apk'
            }
        },
        /**
            页面跳转-下载澜渟医生
            @param
            @return
         */
        downloadDoctor(type) {
            if (type == 'ios') {
                window.open('https://itunes.apple.com/cn/app/id1235934988?mt=8')
            } else if (type == 'android') {
                window.location.href = 'http://m.wrightin.com/apps/WrightinDoctor.apk'
            }
        }
    },
    watch: {
        '$parent.scrollTop': {
            handler(newVal, oldVal) {
                this.bindScrollWindow(newVal)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #banner {
        position: relative;
        height: 5.8rem;
        >.banner-bg {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.banner-wrightin {
            position: absolute;
            top: 1.13rem; left: 9.76rem;
            width: 2.6rem; height: 5.17rem;
        }
        >.banner-doctor {
            position: absolute;
            top: 1.13rem; left: 12.81rem;
            width: 2.6rem; height: 5.17rem;
        }
        >.banner-title {
            position: absolute; z-index: 1;
            top: 1.52rem; left: 3.6rem;
            height: .67rem;
            line-height: .67rem;
            font-size: .48rem;
            color: #fff;
        }
        >.banner-subTitle {
            position: absolute; z-index: 1;
            top: 2.32rem; left: 3.6rem;
            height: .33rem;
            line-height: .33rem;
            font-size: .24rem;
            color: #fff;
        }
        >.banner-download {
            position: absolute; z-index: 1;
            top: 3.46rem;
            width: 2.2rem; height: 1.0rem;
            >.btn {
                position: absolute; z-index: 2;
                top: 0; left: 0;
                width: 1.6rem; height: .44rem;
                line-height: .44rem;
                border-radius: .36rem;
                background-color: #fff; color: #ff2c79;
            }
            >.desc {
                position: absolute; z-index: 2;
                top: .6rem; left: 0;
                height: .2rem;
                line-height: .2rem;
                font-size: .14rem;
                color: #fff;
            }
            >.desc-mini {
                position: absolute; z-index: 2;
                top: .85rem; left: 0;
                height: .17rem;
                line-height: .17rem;
                font-size: .12rem;
                color: #fff;
            }
        }
        >.banner-download-hover {
            display: none;
            position: absolute; z-index: 3;
            top: 3.94rem;
            width: 3.36rem; height: 1.7rem;
            >.arrow {
                position: absolute; z-index: 4;
                top: -.1rem; left: 0; right: 0;
                margin: auto;
                width: 0; height: 0;
                border: .1rem solid;
                border-color: transparent transparent rgba(0, 0, 0, 0.35);
            }
            >.content {
                position: absolute; z-index: 4;
                top: .1rem; left: 0; right: 0;
                height: 1.56rem;
                border-radius: .05rem;
                background-color: rgba(0, 0, 0, 0.35);
                >.ios {
                    position: absolute; z-index: 5;
                    top: .18rem; left: .14rem;
                    padding-left: .63rem;
                    width: 1.89rem; height: .52rem;
                    text-align: left; line-height: .52rem;
                    border: .01rem solid #999; border-radius: .05rem;
                    font-size: .19rem;
                    background: url(../assets/img/app/banner-btn-ios.png) no-repeat .25rem center;
                    background-size: .28rem .33rem;
                    background-color: #363636; color: #fff;
                    cursor: pointer;
                }
                >.android {
                    position: absolute; z-index: 5;
                    top: .87rem; left: .14rem;
                    padding-left: .63rem;
                    width: 1.89rem; height: .52rem;
                    text-align: left; line-height: .52rem;
                    border: .01rem solid #999; border-radius: .05rem;
                    font-size: .19rem;
                    background: url(../assets/img/app/banner-btn-android.png) no-repeat .27rem center;
                    background-size: .25rem .3rem;
                    background-color: #4f945b; color: #fff;
                    cursor: pointer;
                }
                >.qrcode {
                    position: absolute; z-index: 5;
                    top: .18rem; right: .13rem;
                    width: 1.0rem; height: 1.0rem;
                }
                >.qrcode-desc {
                    position: absolute; z-index: 5;
                    bottom: .17rem; right: 0;
                    width: 1.28rem; height: 1.7rem;
                    font-size: .12rem;
                    text-align: center; line-height: .17rem;
                    font-size: .12rem;
                    color: #fff;
                }
            }
        }
        >.banner-download.wrightin {
            left: 3.6rem;
        }
        >.banner-download-hover.wrightin {
            left: 2.71rem;
        }
        >.banner-download.doctor {
            left: 5.52rem;
        }
        >.banner-download-hover.doctor {
            left: 4.63rem;
        }
        >.banner-download:hover + .banner-download-hover{
            display: block;
        }
        >.banner-download-hover:hover{
            display: block;
        }
    }
    #detail {
        position: relative;
        margin: .91rem 0 1.31rem 0;
        overflow: hidden;
        >.detail-item {
            position: relative;
            height: 4.93rem;
            >.img {
                position: absolute;
                top: 0;
                height: auto;
            }
            >.info {
                position: absolute;
                top: 0;
                width: 3.0rem; height: 4.93rem;
                >.title {
                    position: absolute;
                    left: 0;
                    line-height: .42rem;
                    font-size: .4rem; font-weight: bold;
                }
                >.subTitle {
                    position: absolute;
                    left: .03rem;
                    >font {
                        line-height: .42rem;
                        font-size: .12rem;
                    }
                    >span {
                        position: absolute; z-index: -1;
                        top: .22rem; left: 0; right: 0;
                        height: .08rem;
                    }
                    >span.w {
                        left: 0; right: 0;
                        background-color: #ffd5e4;
                    }
                    >span.d {
                        left: 0;
                        width: .48rem;
                        background-color: #d6f4f4;
                    }
                }
                >.desc {
                    position: absolute;
                    left: .03rem;
                    line-height: .36rem;
                    font-size: .2rem;
                }
            }
        }
        >.detail-item.trainW {
            margin-top: 2.54rem;
            >.img {
                width: 4.35rem;
            }
            >.info {
                >.title {
                    top: 1.35rem;
                }
                >.subTitle {
                    top: 1.72rem;
                }
                >.desc {
                    top: 2.26rem;
                }
            }
        }
        >.detail-item.friendW {
            margin-top: 1.3rem;
            >.img {
                width: 4.69rem;
            }
            >.info {
                >.title {
                    top: 1.57rem;
                }
                >.subTitle {
                    top: 1.94rem;
                }
                >.desc {
                    top: 2.48rem;
                }
            }
        }
        >.detail-item.college-wrightin {
            margin-top: 1.3rem;
            >.img {
                width: 3.83rem;
            }
            >.info {
                >.title {
                    top: 1.53rem;
                }
                >.subTitle {
                    top: 1.9rem;
                }
                >.desc {
                    top: 2.44rem;
                }
            }
        }
        >.detail-item.meeting-doctor {
            margin-top: 1.3rem;
            >.img {
                width: 4.13rem;
            }
            >.info {
                >.title {
                    top: 1.46rem;
                }
                >.subTitle {
                    top: 1.83rem;
                }
                >.desc {
                    top: 2.37rem;
                }
            }
        }
        >.detail-item.college-doctor {
            margin-top: 1.3rem;
            >.img {
                width: 4.24rem;
            }
            >.info {
                >.title {
                    top: 1.53rem;
                }
                >.subTitle {
                    top: 1.94rem;
                }
                >.desc {
                    top: 2.48rem;
                }
            }
        }
        >.detail-item.study-doctor {
            margin-top: 1.3rem;
            >.img {
                width: 4.14rem;
            }
            >.info {
                >.title {
                    top: 1.46rem;
                }
                >.subTitle {
                    top: 1.83rem;
                }
                >.desc {
                    top: 2.37rem;
                }
            }
        }
        >.detail-circle {
            position: absolute; z-index: -2;
            width: 10.48rem; height: 8.97rem;
        }
    }
</style>
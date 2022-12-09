<template>
    <div id='main'>
        <div id='banner'>
            <img class='banner-bg' v-lazy='require("@/assets/img/technology/banner-bg.png")'>
            <p class='banner-title'>感受科技与服务<br/>助力女性美丽蝶变</p>
        </div>
        <div id='detail'>
            <div class='detail-item record' ref='record'>
                <img class='bg' v-lazy='require("@/assets/img/technology/record-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/record-img.png")' :style='{left: record.img.left+"rem", opacity: record.opacity}'>
                <div class='info' :style='{left: record.info.left+"rem", opacity: record.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/record-logo.png")'>
                    <p class='title'>自动生成指数化报告</p>
                    <p class='subTitle'>【在家评估 智能报告自动生成】</p>
                    <p class='desc'>医疗团队研发，支持在家进行标准评估，轻松自检，评估后自动生成报告</p>
                </div>
            </div>
            <div class='detail-item signal' ref='signal'>
                <img class='bg' v-lazy='require("@/assets/img/technology/signal-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/signal-img.png")' :style='{right: signal.img.right+"rem", opacity: signal.opacity}'>
                <div class='info' :style='{right: signal.info.right+"rem", opacity: signal.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/signal-logo.png")'>
                    <p class='title'>实时监测腹肌肌电信号</p>
                    <p class='subTitle'>【监测腹肌 精准训练】</p>
                    <p class='desc'>训练同时通过监测腹部肌力，了解腹肌参与度，养成盆底肌训练的正确发力技巧</p>
                </div>
            </div>
            <div class='detail-item programme' ref='programme'>
                <img class='bg' v-lazy='require("@/assets/img/technology/programme-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/programme-img.png")' :style='{left: programme.img.left+"rem", opacity: programme.opacity}'>
                <div class='info' :style='{left: programme.info.left+"rem", opacity: programme.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/programme-logo.png")'>
                    <p class='title'>基于大数据的定制方案</p>
                    <p class='subTitle'>【千人千面 专属方案】</p>
                    <p class='desc'>根据不同的盆底损伤程度，推送定制化方案，在训练中为用户设计好专属的频率，满足每个用户的个性化修复需求</p>
                </div>
            </div>
            <div class='detail-item ota' ref='ota'>
                <img class='bg' v-lazy='require("@/assets/img/technology/ota-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/ota-img.png")' :style='{right: ota.img.right+"rem", opacity: ota.opacity}'>
                <div class='info' :style='{right: ota.info.right+"rem", opacity: ota.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/ota-logo.png")'>
                    <p class='title'>OTA技术</p>
                    <p class='subTitle'>【摆脱空间限制 简单高效远程固件升级】</p>
                    <p class='desc'>将高端新能源汽车升级技术应用于家用设备，通过OTA远程升级方式（Over-the-Air），实现一键功能进化，提供便捷、实用的智能交互体验</p>
                </div>
            </div>
            <div class='detail-item monitor' ref='monitor'>
                <img class='bg' v-lazy='require("@/assets/img/technology/monitor-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/monitor-img.png")' :style='{left: monitor.img.left+"rem", opacity: monitor.opacity}'>
                <div class='info' :style='{left: monitor.info.left+"rem", opacity: monitor.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/monitor-logo.png")'>
                    <p class='title'>电极脱落监测</p>
                    <p class='subTitle'>【安全保护机制】</p>
                    <p class='desc'>监测YD电极的状态，如有脱落App进行智能示警；如有异常启动安全保护机制，停止运行</p>
                </div>
            </div>
            <div class='detail-item stim' ref='stim'>
                <img class='bg' v-lazy='require("@/assets/img/technology/stim-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/stim-img.png")' :style='{right: stim.img.right+"rem", opacity: stim.opacity}'>
                <div class='info' :style='{right: stim.info.right+"rem", opacity: stim.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/stim-logo.png")'>
                    <p class='title'>神经肌肉电刺激</p>
                    <p class='subTitle'>【低频电流 直达神经】</p>
                    <p class='desc'>低频电流通过电刺激作用于盆底肌肉，使神经纤维产生兴奋，传导至肌肉引起收缩，达到功能修复的作用</p>
                </div>
            </div>
            <div class='detail-item ets' ref='ets'>
                <img class='bg' v-lazy='require("@/assets/img/technology/ets-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/ets-img.png")' :style='{left: ets.img.left+"rem", opacity: ets.opacity}'>
                <div class='info' :style='{left: ets.info.left+"rem", opacity: ets.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/ets-logo.png")'>
                    <p class='title'>肌电触发电刺激</p>
                    <p class='subTitle'>【生电联合 主动训练】</p>
                    <p class='desc'>生物反馈联合电刺激，将肌电信号转化为可看见的线条，训练时主动收缩盆底肌，达到设定值方可触发电刺激，形成肌肉记忆</p>
                </div>
            </div>
            <div class='detail-item kegel' ref='kegel'>
                <img class='bg' v-lazy='require("@/assets/img/technology/kegel-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/kegel-img.png")' :style='{right: kegel.img.right+"rem", opacity: kegel.opacity}'>
                <div class='info' :style='{right: kegel.info.right+"rem", opacity: kegel.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/kegel-logo.png")'>
                    <p class='title'>凯格尔模板训练</p>
                    <p class='subTitle'>【模板工具 可视易学】</p>
                    <p class='desc'>设置可视化的凯格尔模板，用户可跟随练习，正确收缩盆底肌，提升盆底机能</p>
                </div>
            </div>
            <div class='detail-item game' ref='game'>
                <img class='bg' v-lazy='require("@/assets/img/technology/game-bg.png")'>
                <img class='img' v-lazy='require("@/assets/img/technology/game-img.png")' :style='{left: game.img.left+"rem", opacity: game.opacity}'>
                <div class='info' :style='{left: game.info.left+"rem", opacity: game.opacity}'>
                    <img class='logo' v-lazy='require("@/assets/img/technology/game-logo.png")'>
                    <p class='title'>多媒体游戏训练</p>
                    <p class='subTitle'>【肌力游戏 科学有趣】</p>
                    <p class='desc'>科学设计的盆底肌力游戏，帮助用户控制盆底力量，富有趣味，让训练不乏味，提高盆底肌肉依从性</p>
                </div>
            </div>
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
                time: 10,
                distance: .05,
                opacity: 1/50
            },
            record: {
                direction: '',
                img: {start: 11.91, end: 9.11, left: 11.91},
                info: {start: .68, end: 3.48, left: .68},
                opacity: 0
            },
            signal: {
                direction: '',
                img: {start: 11.9, end: 9.1, right: 11.9},
                info: {start: .66, end: 3.46, right: .66},
                opacity: 0
            },
            programme: {
                direction: '',
                img: {start: 12.15, end: 9, left: 12.15},
                info: {start: 0.3, end: 2.8, left: 0.3},
                opacity: 0
            },
            ota: {
                direction: '',
                img: {start: 11.9, end: 9.1, right: 11.9},
                info: {start: .66, end: 3.46, right: .66},
                opacity: 0
            },
            monitor: {
                direction: '',
                img: {start: 12.15, end: 8.8, left: 12.15},
                info: {start: 0.3, end: 3.8, left: 0.3},
                opacity: 0
            },
            stim: {
                direction: '',
                img: {start: 11.89, end: 9.09, right: 11.89},
                info: {start: .68, end: 3.48, right: .68},
                opacity: 0
            },
            ets: {
                direction: '',
                img: {start: 11.77, end: 8.97, left: 11.77},
                info: {start: .68, end: 3.48, left: .68},
                opacity: 0
            },
            kegel: {
                direction: '',
                img: {start: 12.16, end: 9.36, right: 12.16},
                info: {start: .68, end: 3.48, right: .68},
                opacity: 0
            },
            game: {
                direction: '',
                img: {start: 12.16, end: 9.36, left: 12.16},
                info: {start: .67, end: 3.47, left: .67},
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
            this.bindScrollRecord()
            this.bindScrollSignal()
            this.bindScrollProgramme()
            this.bindScrollOTA()
            this.bindScrollMonitor()
            this.bindScrollStim()
            this.bindScrollEts()
            this.bindScrollKegel()
            this.bindScrollGame()
        },
        /**
            监听页面滚动条-智能筛查报告
            @param
            @return
         */
        bindScrollRecord() {
            if (this.scrollTop > 0) {
                if (this.scrollDirection == 'down') {
                    if (this.recordInterval == undefined) {
                        this.animationRecord('down')
                    }
                }
            }
        },
        /**
            监听页面滚动条-实时监测腹肌肌电信号
            @param
            @return
         */
        bindScrollSignal() {
            if (this.scrollTop > this.getAnimationTop('signal')) {
                if (this.scrollDirection == 'down') {
                    if (this.signal.direction == 'up') {
                        clearInterval(this.signalInterval)
                        this.signalInterval = undefined
                    }
                    if (this.signalInterval == undefined) {
                        this.animationSignal('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.signal.direction == 'down') {
                        clearInterval(this.signalInterval)
                        this.signalInterval = undefined
                    }
                    if (this.signalInterval == undefined) {
                        this.animationSignal('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-基于大数据的定制方案
            @param
            @return
         */
        bindScrollProgramme() {
            if (this.scrollTop > this.getAnimationTop('programme')) {
                if (this.scrollDirection == 'down') {
                    if (this.programme.direction == 'up') {
                        clearInterval(this.programmeInterval)
                        this.programmeInterval = undefined
                    }
                    if (this.programmeInterval == undefined) {
                        this.animationProgramme('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.programme.direction == 'down') {
                        clearInterval(this.programmeInterval)
                        this.programmeInterval = undefined
                    }
                    if (this.programmeInterval == undefined) {
                        this.animationProgramme('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-OTA技术
            @param
            @return
         */
        bindScrollOTA() {
            if (this.scrollTop > this.getAnimationTop('ota')) {
                if (this.scrollDirection == 'down') {
                    if (this.ota.direction == 'up') {
                        clearInterval(this.otaInterval)
                        this.otaInterval = undefined
                    }
                    if (this.otaInterval == undefined) {
                        this.animationOTA('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.ota.direction == 'down') {
                        clearInterval(this.otaInterval)
                        this.otaInterval = undefined
                    }
                    if (this.otaInterval == undefined) {
                        this.animationOTA('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-电极脱落监测
            @param
            @return
         */
        bindScrollMonitor() {
            if (this.scrollTop > this.getAnimationTop('monitor')) {
                if (this.scrollDirection == 'down') {
                    if (this.monitor.direction == 'up') {
                        clearInterval(this.monitorInterval)
                        this.monitorInterval = undefined
                    }
                    if (this.monitorInterval == undefined) {
                        this.animationMonitor('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.monitor.direction == 'down') {
                        clearInterval(this.monitorInterval)
                        this.monitorInterval = undefined
                    }
                    if (this.monitorInterval == undefined) {
                        this.animationMonitor('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-神经肌肉电刺激
            @param
            @return
         */
        bindScrollStim() {
            if (this.scrollTop > this.getAnimationTop('stim')) {
                if (this.scrollDirection == 'down') {
                    if (this.stim.direction == 'up') {
                        clearInterval(this.stimInterval)
                        this.stimInterval = undefined
                    }
                    if (this.stimInterval == undefined) {
                        this.animationStim('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.stim.direction == 'down') {
                        clearInterval(this.stimInterval)
                        this.stimInterval = undefined
                    }
                    if (this.stimInterval == undefined) {
                        this.animationStim('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-肌电触发电刺激
            @param
            @return
         */
        bindScrollEts() {
            if (this.scrollTop > this.getAnimationTop('ets')) {
                if (this.scrollDirection == 'down') {
                    if (this.ets.direction == 'up') {
                        clearInterval(this.etsInterval)
                        this.etsInterval = undefined
                    }
                    if (this.etsInterval == undefined) {
                        this.animationEts('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.ets.direction == 'down') {
                        clearInterval(this.etsInterval)
                        this.etsInterval = undefined
                    }
                    if (this.etsInterval == undefined) {
                        this.animationEts('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-凯格尔模板训练
            @param
            @return
         */
        bindScrollKegel() {
            if (this.scrollTop > this.getAnimationTop('kegel')) {
                if (this.scrollDirection == 'down') {
                    if (this.kegel.direction == 'up') {
                        clearInterval(this.kegelInterval)
                        this.kegelInterval = undefined
                    }
                    if (this.kegelInterval == undefined) {
                        this.animationKegel('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.kegel.direction == 'down') {
                        clearInterval(this.kegelInterval)
                        this.kegelInterval = undefined
                    }
                    if (this.kegelInterval == undefined) {
                        this.animationKegel('up')
                    }
                }
            }
        },
        /**
            监听页面滚动条-多媒体游戏训练
            @param
            @return
         */
        bindScrollGame() {
            if (this.scrollTop > this.getAnimationTop('game')) {
                if (this.scrollDirection == 'down') {
                    if (this.game.direction == 'up') {
                        clearInterval(this.gameInterval)
                        this.gameInterval = undefined
                    }
                    if (this.gameInterval == undefined) {
                        this.animationGame('down')
                    }
                }
            } else {
                if (this.scrollDirection == 'up') {
                    if (this.game.direction == 'down') {
                        clearInterval(this.gameInterval)
                        this.gameInterval = undefined
                    }
                    if (this.gameInterval == undefined) {
                        this.animationGame('up')
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
            const baseTop = 7.28 * document.documentElement.clientWidth / 1920 * 100 - document.documentElement.clientHeight
            if (type == 'signal') {
                return baseTop + this.$refs.signal.offsetTop + this.$refs.signal.offsetHeight / 2
            } else if (type == 'programme') {
                return baseTop + this.$refs.programme.offsetTop + this.$refs.programme.offsetHeight / 2
            } else if (type == 'ota') {
                return baseTop + this.$refs.ota.offsetTop + this.$refs.ota.offsetHeight / 2
            } else if (type == 'monitor') {
                return baseTop + this.$refs.monitor.offsetTop + this.$refs.monitor.offsetHeight / 2
            } else if (type == 'stim') {
                return baseTop + this.$refs.stim.offsetTop + this.$refs.stim.offsetHeight / 2
            } else if (type == 'ets') {
                return baseTop + this.$refs.ets.offsetTop + this.$refs.ets.offsetHeight / 2
            } else if (type == 'kegel') {
                return baseTop + this.$refs.kegel.offsetTop + this.$refs.kegel.offsetHeight / 2
            } else if (type == 'game') {
                return baseTop + this.$refs.game.offsetTop + this.$refs.game.offsetHeight / 2
            }
            return 0
        },

        /**
            执行动画--智能筛查报告
            @param {String} direction 页面滚动方向
            @return
         */
        animationRecord(direction) {
            this.record.direction = direction
            if (direction == 'down') {
                this.recordInterval = setInterval(()=> {
                    if (this.record.img.left <= this.record.img.end) {
                        clearInterval(this.recordInterval)
                        return
                    }
                    this.record.img.left -= this.interval.distance
                    this.record.info.left += this.interval.distance
                    this.record.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.recordInterval = setInterval(()=> {
                    if (this.record.img.left >= this.record.img.start) {
                        clearInterval(this.recordInterval)
                        return
                    }
                    this.record.img.left += this.interval.distance
                    this.record.info.left -= this.interval.distance
                    this.record.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--实时监测腹肌肌电信号
            @param {String} direction 页面滚动方向
            @return
         */
        animationSignal(direction) {
            this.signal.direction = direction
            if (direction == 'down') {
                this.signalInterval = setInterval(()=> {
                    if (this.signal.img.right <= this.signal.img.end) {
                        clearInterval(this.signalInterval)
                        return
                    }
                    this.signal.img.right -= this.interval.distance
                    this.signal.info.right += this.interval.distance
                    this.signal.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.signalInterval = setInterval(()=> {
                    if (this.signal.img.right >= this.signal.img.start) {
                        clearInterval(this.signalInterval)
                        return
                    }
                    this.signal.img.right += this.interval.distance
                    this.signal.info.right -= this.interval.distance
                    this.signal.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--智能筛查报告
            @param {String} direction 页面滚动方向
            @return
         */
        animationProgramme(direction) {
            this.programme.direction = direction
            if (direction == 'down') {
                this.programmeInterval = setInterval(()=> {
                    if (this.programme.img.left <= this.programme.img.end) {
                        clearInterval(this.programmeInterval)
                        return
                    }
                    this.programme.img.left -= this.interval.distance
                    this.programme.info.left += this.interval.distance
                    this.programme.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.programmeInterval = setInterval(()=> {
                    if (this.programme.img.left >= this.programme.img.start) {
                        clearInterval(this.programmeInterval)
                        return
                    }
                    this.programme.img.left += this.interval.distance
                    this.programme.info.left -= this.interval.distance
                    this.programme.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--OTA技术
            @param {String} direction 页面滚动方向
            @return
         */
        animationOTA(direction) {
            this.ota.direction = direction
            if (direction == 'down') {
                this.otaInterval = setInterval(()=> {
                    if (this.ota.img.right <= this.ota.img.end) {
                        clearInterval(this.otaInterval)
                        return
                    }
                    this.ota.img.right -= this.interval.distance
                    this.ota.info.right += this.interval.distance
                    this.ota.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.otaInterval = setInterval(()=> {
                    if (this.ota.img.right >= this.ota.img.start) {
                        clearInterval(this.otaInterval)
                        return
                    }
                    this.ota.img.right += this.interval.distance
                    this.ota.info.right -= this.interval.distance
                    this.ota.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--电极脱落监测
            @param {String} direction 页面滚动方向
            @return
         */
        animationMonitor(direction) {
            this.monitor.direction = direction
            if (direction == 'down') {
                this.monitorInterval = setInterval(()=> {
                    if (this.monitor.img.left <= this.monitor.img.end) {
                        clearInterval(this.monitorInterval)
                        return
                    }
                    this.monitor.img.left -= this.interval.distance
                    this.monitor.info.left += this.interval.distance
                    this.monitor.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.monitorInterval = setInterval(()=> {
                    if (this.monitor.img.left >= this.monitor.img.start) {
                        clearInterval(this.monitorInterval)
                        return
                    }
                    this.monitor.img.left += this.interval.distance
                    this.monitor.info.left -= this.interval.distance
                    this.monitor.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--神经肌肉电刺激
            @param {String} direction 页面滚动方向
            @return
         */
        animationStim(direction) {
            this.stim.direction = direction
            if (direction == 'down') {
                this.stimInterval = setInterval(()=> {
                    if (this.stim.img.right <= this.stim.img.end) {
                        clearInterval(this.stimInterval)
                        return
                    }
                    this.stim.img.right -= this.interval.distance
                    this.stim.info.right += this.interval.distance
                    this.stim.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.stimInterval = setInterval(()=> {
                    if (this.stim.img.right >= this.stim.img.start) {
                        clearInterval(this.stimInterval)
                        return
                    }
                    this.stim.img.right += this.interval.distance
                    this.stim.info.right -= this.interval.distance
                    this.stim.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--肌电触发电刺激
            @param {String} direction 页面滚动方向
            @return
         */
        animationEts(direction) {
            this.ets.direction = direction
            if (direction == 'down') {
                this.etsInterval = setInterval(()=> {
                    if (this.ets.img.left <= this.ets.img.end) {
                        clearInterval(this.etsInterval)
                        return
                    }
                    this.ets.img.left -= this.interval.distance
                    this.ets.info.left += this.interval.distance
                    this.ets.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.etsInterval = setInterval(()=> {
                    if (this.ets.img.left >= this.ets.img.start) {
                        clearInterval(this.etsInterval)
                        return
                    }
                    this.ets.img.left += this.interval.distance
                    this.ets.info.left -= this.interval.distance
                    this.ets.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--凯格尔模板训练
            @param {String} direction 页面滚动方向
            @return
         */
        animationKegel(direction) {
            this.kegel.direction = direction
            if (direction == 'down') {
                this.kegelInterval = setInterval(()=> {
                    if (this.kegel.img.right <= this.kegel.img.end) {
                        clearInterval(this.kegelInterval)
                        return
                    }
                    this.kegel.img.right -= this.interval.distance
                    this.kegel.info.right += this.interval.distance
                    this.kegel.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.kegelInterval = setInterval(()=> {
                    if (this.kegel.img.right >= this.kegel.img.start) {
                        clearInterval(this.kegelInterval)
                        return
                    }
                    this.kegel.img.right += this.interval.distance
                    this.kegel.info.right -= this.interval.distance
                    this.kegel.opacity -= this.interval.opacity
                }, this.interval.time)
            }
        },
        /**
            执行动画--多媒体游戏训练
            @param {String} direction 页面滚动方向
            @return
         */
        animationGame(direction) {
            this.game.direction = direction
            if (direction == 'down') {
                this.gameInterval = setInterval(()=> {
                    if (this.game.img.left <= this.game.img.end) {
                        clearInterval(this.gameInterval)
                        return
                    }
                    this.game.img.left -= this.interval.distance
                    this.game.info.left += this.interval.distance
                    this.game.opacity += this.interval.opacity
                }, this.interval.time)
            } else if (direction == 'up') {
                this.gameInterval = setInterval(()=> {
                    if (this.game.img.left >= this.game.img.start) {
                        clearInterval(this.gameInterval)
                        return
                    }
                    this.game.img.left += this.interval.distance
                    this.game.info.left -= this.interval.distance
                    this.game.opacity -= this.interval.opacity
                }, this.interval.time)
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
        height: 6.6rem;
        >.banner-bg {
            position: absoulte;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
        }
        >.banner-title {
            position: absolute;
            top: 2.08rem; right: 4.5rem;
            text-align: center; line-height: .71rem;
            font-size: .48rem;
            color: #fff;
        }
    }
    #detail {
        position: relative;
        margin: .68rem 0 1.53rem 0;
        >.detail-item {
            position: relative;
            >.bg {
                position: absolute;
                top: 0;
            }
            >.img {
                position: absolute;
                bottom: 0;
            }
            >.info {
                position: absolute;
                width: 4.9rem;
                >.logo {
                    position: absolute;
                }
                >.title {
                    position: absolute;
                    line-height: .62rem;
                    font-size: .44rem;
                }
                >.subTitle {
                    position: absolute;
                    line-height: .28rem;
                    font-size: .2rem;
                    color: #666;
                }
                >.desc {
                    position: absolute;
                    padding: .18rem .2rem;
                    width: 4.9rem;
                    line-height: .38rem;
                    font-size: .24rem;
                    color: #fff;
                }
            }
        }
        >.detail-item.record {
            height: 5.08rem;
            >.bg {
                right: 0;
                width: 10.63rem; height: 4.16rem;
            }
            >.img {
                width: 6.49rem; height: 3.74rem;
            }
            >.info {
                >.logo {
                    top: .96rem; left: .09rem;
                    width: 1.39rem; height: 1.35rem;
                }
                >.title {
                    top: 1.25rem; left: .12rem;
                }
                >.subTitle {
                    top: 1.99rem; left: 0;
                }
                >.desc {
                    top: 2.69rem; left: .12rem;
                    background-color: #b8c6fa;
                    border-radius: .22rem 0 .22rem .22rem;
                }
            }
        }
        >.detail-item.signal {
            margin-top: 1.54rem;
            height: 5.07rem;
            >.bg {
                left: 0;
                width: 10.33rem; height: 4.15rem;
            }
            >.img {
                width: 6.49rem; height: 3.91rem;
            }
            >.info {
                >.logo {
                    top: .93rem; right: .13rem;
                    width: 1.44rem; height: 1.32rem;
                }
                >.title {
                    top: 1.29rem; right: .15rem;
                }
                >.subTitle {
                    top: 2.03rem; right: 0;
                }
                >.desc {
                    top: 2.72rem; right: .14rem;
                    background-color: #8edccd;
                    border-radius: 0 .22rem .22rem .22rem;
                }
            }
        }
        >.detail-item.programme {
            margin-top: 1.54rem;
            height: 5rem;
            >.bg {
                right: 0;
                width: 10.34rem; height: 4.14rem;
            }
            >.img {
                width: 5.42rem; height: 3.51rem;
            }
            >.info {
                >.logo {
                    top: .67rem; left: .14rem;
                    width: 1.36rem; height: 1.46rem;
                }
                >.title {
                    top: 1.1rem; left: .12rem;
                }
                >.subTitle {
                    top: 1.84rem; left: 0;
                }
                >.desc {
                    top: 2.53rem; left: .12rem;
                    background-color: #f7beb7;
                    border-radius: .22rem 0 .22rem .22rem;
                }
            }
        }
        >.detail-item.ota {
            margin-top: 1.54rem;
            height: 5.07rem;
            >.bg {
                left: 0;
                width: 10.33rem; height: 4.15rem;
            }
            >.img {
                top: 1.86rem;
                width: 5.42rem; height: 3.51rem;
            }
            >.info {
                >.logo {
                    top: .78rem; right: .13rem;
                    width: 1.44rem; height: 1.32rem;
                }
                >.title {
                    top: 1.29rem; right: .15rem;
                }
                >.subTitle {
                    top: 2.03rem; right: 0;
                }
                >.desc {
                    top: 2.72rem; right: .14rem;
                    background-color: #B8C6FA;
                    border-radius: 0 .22rem .22rem .22rem;
                }
            }
        }
        >.detail-item.monitor {
            margin-top: 1.54rem;
            height: 5rem;
            >.bg {
                right: 0;
                width: auto; height: 4.16rem;
            }
            >.img {
                width: 5.42rem; height: 3.51rem;
            }
            >.info {
                >.logo {
                    top: .67rem; left: .14rem;
                    width: 1.13rem; height: 1.36rem;
                }
                >.title {
                    top: 1.1rem; left: .12rem;
                }
                >.subTitle {
                    top: 1.84rem; left: 0;
                }
                >.desc {
                    top: 2.53rem; left: .12rem;
                    background-color: #f7beb7;
                    border-radius: .22rem 0 .22rem .22rem;
                }
            }
        }
        >.detail-item.stim {
            margin-top: 1.55rem;
            height: 5.07rem;
            >.bg {
                left: 0;
                width: 10.64rem; height: 4.14rem;
            }
            >.img {
                width: 6.51rem; height: 3.87rem;
            }
            >.info {
                >.logo {
                    top: .67rem; right: .11rem;
                    width: 1.57rem; height: 1.59rem;
                }
                >.title {
                    top: 1.16rem; right: .13rem;
                }
                >.subTitle {
                    top: 1.9rem; right: 0;
                }
                >.desc {
                    top: 2.6rem; right: .13rem;
                    background-color: #ffca74;
                    border-radius: 0 .22rem .22rem .22rem;
                }
            }
        }
        >.detail-item.ets {
            margin-top: 1.55rem;
            height: 5.06rem;
            >.bg {
                right: 0;
                width: 10.34rem; height: 4.14rem;
            }
            >.img {
                width: 6.49rem; height: 3.87rem;
            }
            >.info {
                >.logo {
                    top: .66rem; left: .11rem;
                    width: 1.57rem; height: 1.58rem;
                }
                >.title {
                    top: 1.16rem; left: .12rem;
                }
                >.subTitle {
                    top: 1.9rem; left: 0;
                }
                >.desc {
                    top: 2.59rem; left: .12rem;
                    background-color: #c7c7be;
                    border-radius: .22rem 0 .22rem .22rem;
                }
            }
        }
        >.detail-item.kegel {
            margin-top: 1.54rem;
            height: 5.07rem;
            >.bg {
                left: 0;
                width: 10.64rem; height: 4.14rem;
            }
            >.img {
                width: 6.49rem; height: 3.87rem;
            }
            >.info {
                >.logo {
                    top: .84rem; right: .11rem;
                    width: 1.57rem; height: 1.58rem;
                }
                >.title {
                    top: 1.32rem; right: .12rem;
                }
                >.subTitle {
                    top: 2.06rem; right: 0;
                }
                >.desc {
                    top: 2.76rem; right: .13rem;
                    background-color: #9eb7b4;
                    border-radius: 0 .22rem .22rem .22rem;
                }
            }
        }
        >.detail-item.game {
            margin-top: 1.54rem;
            height: 5.06rem;
            >.bg {
                right: 0;
                width: 10.34rem; height: 4.14rem;
            }
            >.img {
                width: 6.49rem; height: 3.87rem;
            }
            >.info {
                >.logo {
                    top: .67rem; left: .12rem;
                    width: 1.57rem; height: 1.58rem;
                }
                >.title {
                    top: 1.17rem; left: .13rem;
                }
                >.subTitle {
                    top: 1.91rem; left: 0;
                }
                >.desc {
                    top: 2.6rem; left: .13rem;
                    background-color: #efb2c4;
                    border-radius: .22rem 0 .22rem .22rem;
                }
            }
        }
    }
</style>
<template>
    <div class="login-page">
        <div class="l-header">
            <span class="logo-text">Commerce</span>
        </div>
        <div class="l-content" :style=" { backgroundColor : bgcolor} ">
            <div class="bar-right">
                <img :src="info.settingN" alt="" class="toolbar-icon">
            </div>
            <div class="l-advertising">
                <a href="https://translate.google.cn/m/translate#en/zh-CN/Status%20%26%20Maintenance">
                    <img :src="advertisingImg" alt="">
                </a>
            </div>
            <div class="l-enter-view">
                <div class="head-box">
                    <span class="l-title">sign in</span>
                </div>
                <div class="content-box">
                    <div class="hint-img">
                        <div class="msg-error">
                            <b><img :src="info.btnError" alt=""></b>
                            <span>The user is locked, you can click to forget the password on the page, or 20 minutes to try again.</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-dom">
                            <input type="text" class="account" v-model="info.account" ref="account" :class="{focus: info.selected == 0}" :placeholder="info.defaults"
                                @focus="info.selected = 0" @blur="info.selected = -1" />
                            <span @click="closeBtn()" v-if="info.cdg"><img :src="info.lClose" alt="" class="close"></span>
                        </div>
                        <div class="input-dom">
                            <input type="text" class="password" v-model="info.password" ref="password" :class="{focus: info.active == 0, 'error':info.status }"
                                placeholder="Service Password" @focus="info.active = 0" @blur="info.active = -1" />
                            <!--<span @click="closeBtns()" v-if="info.cdgs" class="close" ></span>-->
                            <span v-if="info.status" class="font-error">Password error !</span>
                        </div>
                        <div class="input-dom code-input-wrap">
                            <input type="text" class="code" v-model="info.code" ref="code" :class="{focus: info.select == 0}" @focus="info.select = 0"
                                @blur="info.select = -1" />
                            <div class="code-wrap">
                                <img :src="info.codeImg" alt="" class="code-img">
                            </div>
                        </div>
                    </div>
                    <button class="l-btn">
                        <router-link tag="div" to="../pc/search-display-page">Sign In</router-link>
                    </button>
                    <div v-if="!info.lay" class="login-contain-inner">
                        <a>Forget Your Password?</a>
                        <a>sign up
                            <img :src="info.rightIcon" alt="" class="rightIcon">
                        </a>
                    </div>
                    <div v-if="!info.lay" class="login-contain-footer">
                        <div class="warper">
                            <div class="line"></div>
                            <div class="title">Other sign-in modes</div>
                            <div class="line"></div>
                        </div>
                        <div class="list-img-wrap">
                            <div class="list-img" @click="change()">
                                <img :src="info.wechatImg" alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="l-footer">
            <div class="copyright">
                <div class="copyright-wrap">
                    <span>BES ©2018,Carrier.com,Inc.or its offiliates</span>
                    <span class="">苏ICP备17040376号-12</span>
                    <span>Term of use</span>
                    <span>Privacy Notice</span>
                </div>
                <div class="lan-select-wrap">
                    <div class="w-common-select w-com-lan-select">
                        <div class="select-default2" @click.stop="optiondisplay=!optiondisplay">
                            <span class="text-val">{{selectvalue}}</span>
                            <img :src="info.downsingle" alt="" class="select-img">
                        </div>
                        <ul class="option-box" v-if="optiondisplay">
                            <li class="option-item" v-for="(st,index) in languageoptions" @click="selHandle(index)">{{st.value}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog">
            <div class="dialog-header">
                <span class="dialog-title">Image Settings</span>
                <i class="dialog-close"><img :src="info.close" alt=""></i>
            </div>
            <div class="dialog-content">
                <div class="dialog-items items1">
                    <div class="sen-title">
                        <span class="title-text">Background Color</span>
                        <i class="icon icon-setting" @click.stop="pickerIsdisplay=!pickerIsdisplay"><img :src="info.u96" alt=""></i>
                        <div class="color-picker-wrap" v-if="pickerIsdisplay" ref="picker">
                            <chrome-picker :value="colors" @input="updateValue"></chrome-picker>
                        </div>
                    </div>
                    <ul class="list-box">
                        <li class="list-item" v-for="cl in colorlists" :style=" { backgroundColor : cl.colorvalue} "></li>
                    </ul>
                </div>
                <div class="dialog-items items2">
                    <div class="sen-title">
                        <span class="title-text">Image</span>
                        <i class="icon icon-setting"><img :src="info.u96" alt=""></i>
                    </div>
                    <div class="adimg-wrap">
                        <img :src="advertisingImg" alt="">
                    </div>
                </div>
                <div class="dialog-items items3">
                    <div class="sen-title">
                        <span class="title-text">Link</span>
                        <i class="icon icon-link"><img :src="info.u51" alt=""></i>
                    </div>
                    <div class="content">
                        Not Connected
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <q-btn color="white" class="text-black" small>Cancel</q-btn>
                <q-btn color="primary" small>Confirm</q-btn>
            </div>
        </div>
    </div>
</template>
    
    <script>
    import {
      QBtn,
    } from 'quasar'
    import {Chrome} from 'vue-color'
    import $ from 'jquery'
    console.log(Chrome)
    export default {
    components: {
        QBtn,
        'chrome-picker':Chrome,
    },
    data () {
      return{
        bgcolor:'#eef7f6',
        optiondisplay:false,
        selectvalue:'English',
        pickerIsdisplay:false,
        advertisingImg:'statics/images/login/advertising-img.png',
        colors:{
            hex: "#ffffff",
            hsl: {
                h: 150,
                s: 0.5,
                l: 0.2,
                a: 1
            },
            hsv: {
                h: 150,
                s: 0.66,
                v: 0.3,
                a: 1
            },
            rgba: {
                r: 25,
                g: 77,
                b: 51,
                a: 1
            },
            a: 1
        },
        info: {
              codeImg: 'statics/images/login/code.png',
              wechatImg: 'statics/images/login/wechat.png',
              settingN:'statics/images/login/setting-n.png',
              btnError:'statics/images/login/btn_errorInfo.png',
              lClose: 'statics/images/login/l-close.png',
              rightIcon: 'statics/images/login/right-icon.png',
              downsingle: 'statics/images/login/downsingle.png',
              u96: 'statics/images/login/u96.png',
              u51: 'statics/images/login/u51.png',
              close: 'statics/images/login/close.png',
              defaults: 'Commerce Account Number',
              account: '',
              password: '',
              code: '',
              rightPassword: '123456',
              selected: -1,
              active: -1,
              select: -1,
              len: 3,
              status: false,
              lay: false,
              drow: false,
              cdg: false,
              cdgs:false,
              list: ['Visit your detailed information', 'Visit your detailed information', 'Visit your detailed information', 'Visit your detailed information', 'Visit your detailed information'],
              selectList: []
            },
        colorlists:[
            {
                colorvalue:'#FFFFFF'
            },
            {
                colorvalue:'#eef7f6'
            },
            {
                colorvalue:'#E8CFC8'
            },
            {
                colorvalue:'#BBD5D6'
            },
            {
                colorvalue:'#D6CFC5'
            },
            {
                colorvalue:'#C8CAD3'
            },
            {
                colorvalue:'#EDEDEE'
            },
            {
                colorvalue:'#D0B0A6'
            },
            {
                colorvalue:'#91ACAD'
            },
            {
                colorvalue:'#999CA6'
            },
            {
                colorvalue:'#8E8E8F'
            },
            {
                colorvalue:'#B97F6D'
            },
            {
                colorvalue:'#688384'
            },
            {
                colorvalue:'#857865'
            },
            {
                colorvalue:'#676B7A'
            },
            {
                colorvalue:'#5F5F5F'
            },
            {
                colorvalue:'#7B5549'
            },
            {
                colorvalue:'#3E5A5B'
            },
            {
                colorvalue:'#595043'
            },
            {
                colorvalue:'#454751'
            },
            {
                colorvalue:'#2F2F30'
            },
            {
                colorvalue:'#3E2A24'
            },
            {
                colorvalue:'#123132'
            },
            {
                colorvalue:'#2C2822'
            },
            {
                colorvalue:'#222429'
            }
        ],
        languageoptions:[
            {
            value:'中'
            },
            {
            value:'English'
            },
        ],
      }
    },
    mounted() {
        document.addEventListener('click', (e) => {   
            this.optiondisplay = false;
     
        });
        document.addEventListener('click', (e) => {
            if (!this.$refs.picker.contains(e.target)) {
                this.pickerIsdisplay = false;
            }  
        });
        function dragPanelMove(downDiv,moveDiv,wrapDiv){
            $(downDiv).mousedown(function (e) {
                    var isMove = true;
                    var wrap_x = $(wrapDiv).offset().left;
                    var wrap_y = $(wrapDiv).offset().top;
                    var div_x = e.pageX - $(moveDiv).offset().left;
                    var div_y = e.pageY - $(moveDiv).offset().top;
                    $(document).mousemove(function (ev) {
                        if (isMove) {
                            var obj = $(moveDiv);
                            var maxtop = $(wrapDiv).height()-obj.outerHeight();
                            var maxleft = $(wrapDiv).width()-obj.outerWidth();
                            var curleft = ev.pageX - div_x - wrap_x;
                            var curtop = ev.pageY - div_y - wrap_y;
                            if (curleft < 0) {
                                curleft = 0
                            };
                            if(curleft > maxleft){
                                curleft = maxleft;
                            };
                            if(curtop > maxtop){
                                curtop = maxtop;
                            }
                            if (curtop < 0) {
                                curtop = 0
                            };
                            obj.css({"left":curleft, "top":curtop});
                        }
                    }).mouseup(
                        function () {
                        isMove = false;
                    });
            });
        }
        dragPanelMove('.dialog-header','.dialog','.login-page');
        
    },
    created () {
        this.info.selectList = this.info.list.slice(0, this.info.len);
    },
    methods: {
        selHandle (index) {
            this.selectvalue = this.languageoptions[index].value
            this.optiondisplay = false
        },
        change () {
        this.info.lay = !this.info.lay
        this.info.defaults = 'Wechat account Number'
        },
        drop () {
        if(this.info.drow){
            this.info.selectList = this.info.list.slice(0, this.info.len)
        }else{
            this.info.selectList = this.info.list
        }
        this.info.drow = !this.info.drow
        },
        closeBtn () {
        this.info.account = ''
        },
        closeBtns () {
        this.info.password = ''
        },
        updateValue () {
            //todo
        },
    
    },
    watch: {
        info: {
        handler (curVal, oldVal) {
            if(curVal.account !== '') {
            curVal.cdg = true
            }else{
            curVal.cdg = false
            }
            if(curVal.password !== '') {
            curVal.cdgs = true
            }else{
            curVal.cdgs = false
            }
            if(curVal.password !== '' && curVal.password !== curVal.rightPassword) {
            curVal.status = true
            }
            if(curVal.password === '') {
            curVal.status = false
            }
            if(curVal.password === curVal.rightPassword) {
            curVal.status = false
            }
    
        },
        deep: true
        }
    }
    }
    </script>
    <style lang="stylus">
        @import '~themes/app.variables'
    </style>
    
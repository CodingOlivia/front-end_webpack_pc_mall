<template>
  <div class="iwinreg-widget-wrap">
    <div class="bg-line"></div>
    <div class="login-widget-box">
      <div class="header-wrap">
        <img :src="desc.iconImg" alt=""/>
        <div class="header-wrap-title">Ecommerce login with WeChat</div>
      </div>
      <div class="content-wrap">
        <div class="content-wrap-nav">
          <div class="content-wrap-item" :class="{selected: desc.active == 'yes'}"  @click="desc.active = 'yes'">Commerce account already exists, Please bundle.</div>
          <div class="content-wrap-item" :class="{selected: desc.active == 'no'}" @click="desc.active = 'no'">No commerce account, Please improve the data.</div>
        </div>
        <div class="content-wrap-list">
<!--      <div class="input-group">
            <input type="text" v-model="desc.account" :class="{focus: desc.s1 == 0}" @focus="desc.s1 = 0" @blur="desc.s1 = -1" placeholder="Account ID/Email/Phone number"/>
            <span @click="closeBtn1()" v-if="desc.y1" class="close" ></span>
          </div>
          <div class="input-group">
            <input type="text" v-model="desc.password" :class="{focus: desc.s2 == 0}" @focus="desc.s2 = 0" @blur="desc.s2 = -1" placeholder="Input Password"/>
            <span @click="closeBtn2()" v-if="desc.y2" class="close" ></span>
          </div>
          <div v-show="desc.active == 'no'" class="input-group">
            <input type="text" v-model="desc.checkpassword" :class="{focus: desc.s3 == 0}" @focus="desc.s3 = 0" @blur="desc.s3 = -1" placeholder="Input  Password Again"/>
            <span @click="closeBtn3()" v-if="desc.y3" class="close" ></span>
          </div>
          <div v-show="desc.active == 'no'" class="input-group">
            <input type="text" v-model="desc.phone" :class="{focus: desc.s4 == 0}" @focus="desc.s4 = 0" @blur="desc.s4 = -1" placeholder="Phone number"/>
            <span @click="closeBtn4()" v-if="desc.y4" class="close" ></span>
          </div>
          <div class="input-group">
            <input type="text" v-model="desc.VCode" :class="{focus: desc.s5 == 0}" @focus="desc.s5 = 0" @blur="desc.s5 = -1" placeholder="Verification Code"/>
            <div class="code"><img :src="desc.codeImg" alt=""/></div>
          </div>
          <div v-show="desc.active == 'no'" class="input-group drg">
            <div class="input-group-left">
              <input type="text" v-model="desc.PCode" :class="{focus: desc.s6 == 0}" @focus="desc.s6 = 0" @blur="desc.s6 = -1" placeholder="Phone Verification Code"/>
            </div>
            <div class="input-group-right" :class="{selected: desc.act == 0 ,font:desc.abt == 0}" @click="Resend($event)">Get Verification Code</div>
          </div> -->
          <div class="iwin-pc-input" :class="{error:desc.validate1==false}">
            <input type="Password" placeholder="Account ID/Email/Phone number" v-model="desc.value1" :class="{focus: desc.s1 == true}" @focus="desc.s1 = true" @blur="desc.s1 = false"/>
            <span  class="close" v-show="desc.value1!=''"  @click="desc.value1=''" ></span>
            <p class="errMessage" v-show="desc.validate1==false">The two passwords should be the same!</p>
          </div>
          <div class="iwin-pc-input " :class="{error:desc.validate2==false}">
            <input type="Password" placeholder="Input Password" autocomplete="off" v-model="desc.value2" :class="{focus: desc.s2 == true}"  @focus="desc.s2 = true" @blur="desc.s2 = false"/>
            <span  class="close" v-show="desc.value2!=''" @click="desc.value2=''; "></span>
            <div class="points" v-if="desc.s2 == true">
              <div class="points-title">Password needs to be included:</div>
              <p :class="{active: desc.passwordValidate1==true}">
                <img :src="desc.iconRightHover" v-if="desc.passwordValidate1==true"/>
                <img :src="desc.iconRight" v-else />
                <span>Betweend 8 and 32 characters</span>
              </p>
              <p :class="{active: desc.passwordValidate2==true}">
                <img :src="desc.iconRightHover" v-if="desc.passwordValidate2==true" />
                <img :src="desc.iconRight" v-else/>
                <span>Capital letters and lowercase letters</span>
              </p>
              <p :class="{active: desc.passwordValidate3==true}">
                <img :src="desc.iconRightHover" v-if="desc.passwordValidate3==true" />
                <img :src="desc.iconRight" v-else/>
                <span>At least one number</span>
              </p>
            </div>
            <p class="errMessage" v-show="desc.validate2==false">Please set the password in accordance with the rules!</p>
          </div>
          <div class="iwin-pc-input " :class="{error:desc.validate3==false}" v-show="desc.active == 'no'">
            <input type="Password" placeholder="Input Password Again" autocomplete="off" v-model="desc.value3" :class="{focus: desc.s3 == true}"  @focus="desc.s3 = true" @blur="desc.s3 = false"/>
            <span  class="close" v-show="desc.value3!=''" @click="desc.value3=''; "></span>
            <div class="points" v-if="desc.s3 == true">
              <div class="points-title">Password needs to be included:</div>
              <p :class="{active: desc.passwordValidate1==true}">
                <img :src="desc.iconRightHover" v-if="desc.passwordValidate1==true"/>
                <img :src="desc.iconRight" v-else />
                <span>Betweend 8 and 32 characters</span>
              </p>
              <p :class="{active: desc.passwordValidate2==true}">
                <img :src="desc.iconRightHover" v-if="desc.passwordValidate2==true" />
                <img :src="desc.iconRight" v-else/>
                <span>Capital letters and lowercase letters</span>
              </p>
              <p :class="{active: desc.passwordValidate3==true}">
                <img :src="desc.iconRightHover" v-if="desc.passwordValidate3==true" />
                <img :src="desc.iconRight" v-else/>
                <span>At least one number</span>
              </p>
            </div>
            <p class="errMessage" v-show="desc.validate3==false">Please set the password in accordance with the rules!</p>
          </div>
          <div class="iwin-pc-input" :class="{error:desc.validate4==false}" v-show="desc.active == 'no'">
            <input type="Password" placeholder="Phone Number" autocomplete="off" v-model="desc.value4" :class="{focus: desc.s4 == true}"  @focus="desc.s4 = true"  @blur="desc.s4 = false"/>
            <span  class="close" v-show="desc.value4!=''"  @click="desc.value4=''" ></span>
            <p class="errMessage" v-show="desc.validate4==false">The two passwords should be the same!</p>
          </div>
          <div class="iwin-pc-input" :class="{error:desc.validate5==false}">
            <input type="text" v-model="desc.value5" :class="{focus: desc.s5 == true}" @focus="desc.s5 = true" @blur="desc.s5 = false" placeholder="Verification Code"/>
            <div class="code"><img :src="desc.codeImg" alt=""/></div>
            <p class="errMessage" v-show="desc.validate5==false">The two passwords should be the same!</p>
          </div>
          <div class="iwin-pc-input" :class="{error:desc.validate6==false}" v-show="desc.active == 'no'">
            <div class="input-item">
              <input type="text" class="pc-input-code" placeholder="Please Enter" :class="{focus: desc.s6 == true}" @focus="desc.s6 = true" @blur="desc.s6 = false" v-model="desc.value6"/>
              <button class="ver-btn" :class="{selected: desc.act == 0 ,font:desc.abt == 0}" @click="Resend($event)" :disabled="!desc.pust">Get Verification Code</button>
            </div>
            <p class="errMessage" v-show="desc.validate6==false">The two passwords should be the same!</p>
          </div>
        </div>
        <div class="foot-wrap">
          <button class="login-btn">Bundle  Now</button>
          <div class="skip">Skip this step</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: {
        active: 'yes',
        tabIndex:1,
        pust: true,
        second: 60,
        iconImg: 'statics/images/login/pc-logo.png',
        codeImg: 'statics/images/login/code.png',
        leftImg:'statics/images/login/reginer-img.png',
        iconRightHover: 'statics/images/login/icon-right-hover.png',
        iconRight: 'statics/images/login/icon-right.png',
        account: '',
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        value5:'',
        value6:'',
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        s5:false,
        s6:false,
        validate1:false,
        validate2:true,
        validate3:true,
        validate4:true,
        validate5:true,
        validate6:true,
        passwordValidate:true,
        passwordValidate1:false,
        passwordValidate2:false,
        passwordValidate3:false,
        act:'',
        abt:'',
      }
    }
  },
  methods: {
    Resend (e) {
      if (this.desc.pust) {
        this.desc.pust = false
        this.desc.act = 0
        this.desc.abt = -1
        e.target.innerHTML = this.desc.second + 's'
        let that = this
        let t = setInterval(function () {
          that.desc.second--
          e.target.innerHTML = that.desc.second + 's'
          if (that.desc.second < 0) {
            e.target.innerHTML = 'Resend'
            that.desc.abt = 0
            that.desc.act = -1
            that.desc.second = 60
            that.desc.pust = true
            clearInterval(t)
          }
        }, 1000)
      }
    },
  },
}
</script>

<style lang="stylus">

</style>

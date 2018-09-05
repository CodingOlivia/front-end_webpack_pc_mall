<template>
  <div class="fotgot-password-iwind">
    <div class="step step-one" v-if="isDisplay1">
      <div class="form-title">Password Assistance</div>
      <div class="input-group-customeA" :class="{error:desc.passwordAgainValidate==false}">
        <input type="Password" placeholder="Account ID/Email/Phone number" autocomplete="off" v-model="desc.passwordAgain" :class="{focus: desc.s5 == true}"  @focus="desc.s5 = true"  @blur="passwordIsEqual()"/>
        <p class="errMessage" v-show="desc.passwordAgainValidate==false">The two passwords should be the same!</p>
      </div>
      <div class="input-group-customeA" :class="{error:desc.passwordAgainValidate==false}">
        <input type="text" v-model="desc.VCode" :class="{focus: desc.s5 == 0}" @focus="desc.s5 = 0" @blur="desc.s5 = -1" placeholder="Verification Code"/>
        <div class="code"><img :src="desc.codeImg" alt=""/></div>
        <p class="errMessage" v-show="desc.passwordAgainValidate==false">The two passwords should be the same!</p>
      </div>
      <div class="btn-wrapper">
            <button  class="btn-forgotpsw" @click="continueStepOne()">Contitune</button>
      </div>
    </div>
    <div class="step step-two" v-if="isDisplay2">
      <div class="form-title">Verifying It's You</div>
      <div class="pc-un-input">
        <span class="input-label">Phone number:</span>
        <span class="input-value">15555555555</span>
      </div>
      <div class="input-group-customeA" :class="{error:desc.passwordAgainValidate==false}">
        <div class="input-item">
          <input type="text" class="pc-input-code" placeholder="Please Enter" :class="{focus: desc.s5 == 0}" @focus="desc.s5 = 0" @blur="desc.s5 = -1"/>
          <button class="ver-btn" :class="{selected: desc.act == 0 ,font:desc.abt == 0}" @click="Resend($event)" :disabled="!desc.pust">Get Verification Code</button>
        </div>
        <p class="errMessage" v-show="desc.passwordAgainValidate==false">The two passwords should be the same!</p>
      </div>
      <div class="btn-wrapper">
        <button  class="btn-forgotpsw" @click="continueStepTwo()">Contitune</button>
      </div>
    </div>
    <div class="step step-three" v-if="isDisplay3">
      <div class="form-title">Creat New Password</div>
      <div class="input-group-customeA " :class="{error:desc.passwordValidate==false}">
        <input type="Password" placeholder="New Password" autocomplete="off" v-model="desc.password" :class="{focus: desc.s4 == true}"  @focus="desc.s4 = true" @blur="desc.s4 = false"/>
        <div class="points" v-if="desc.s4 == true">
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
        <p class="errMessage" v-show="desc.passwordValidate==false">Please set the password in accordance with the rules!</p>
      </div>
      <div class="input-group-customeA " :class="{error:desc.passwordValidate==false}">
        <input type="Password" placeholder="Re-enter Password" autocomplete="off" v-model="desc.password" :class="{focus: desc.s4 == true}"  @focus="desc.s4 = true" @blur="desc.s4 = false"/>
        <p class="errMessage" v-show="desc.passwordValidate==false">Please set the password in accordance with the rules!</p>
      </div>

      <div class="btn-wrapper">
            <button  class="btn-forgotpsw" @click="continueStepThree()">Contitune</button>
      </div>
    </div>
    <div class="step step-three" v-if="isDisplay4">
      <div class="form-desc">密码重置成功，请重新登录，页面将在<span>{{limit}}</span>秒后返回。<a href="">立即登录</a></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        limit: 8,
        isDisplay1:true,
        isDisplay2:false,
        isDisplay3:false,
        isDisplay4:false,
        languagetoggle:false,
        desc: {
          tabIndex:1,
          pust: true,
          second: 60,
          codeImg: '../../statics/images/ForgotPassword/code.png',
          iconRightHover: '../../statics/images/login/icon-right-hover.png',
          iconRight: '../../statics/images/login/icon-right.png',          
          account: '',
          password: '',
          passwordAgain: '',
          email: '',
          emailCode: '',
          phoneCode:'',
          phone:'',
          copyRight:'Copyright © 2017 Huawei Technologies Co., Ltd. ',
          s1:false,
          s2:false,
          s3:false,
          s4:false,
          s5:false,
          s6:false,
          s7:false,
          s7:false,
          passwordAgainValidate:false,
          passwordValidate:true,
          passwordValidate1:true,
          passwordValidate2:false,
          passwordValidate3:false
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
      passwordIsEqual(e){
        this.desc.s5 = false;
        if(this.desc.passwordAgain!=this.desc.password){
          this.desc.passwordAgainValidate=false;
        }else{
          this.desc.passwordAgainValidate=true;
        }
      },
      continueStepOne(){
        this.isDisplay1=false
        this.isDisplay2=true
      },
      continueStepTwo(){
        this.isDisplay2=false
        this.isDisplay3=true
      },
      continueStepThree(){
        this.isDisplay3=false
        this.isDisplay4=true
        var _this= this;
        var sendInterval = setInterval(function () {
          _this.limit--;
          if (_this.limit < 0) {
              clearInterval(sendInterval);
          }
        }, 1000);
      }
    },
    watch: {
      ['desc.password']: {
        handler(curVal,oldVal) {
          var r=/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,32}$/;
          var r1=/^(?=.*[0-9].*)/;
          var r2=/(?=.*[A-Z].*)(?=.*[a-z].*)/;
          if(r.test(curVal)){
            this.desc.passwordValidate=true;

          }else{
            this.desc.passwordValidate=false;
          }
          if(curVal.length>7&&curVal.length<33){
            this.desc.passwordValidate1=true;
          }else{
            this.desc.passwordValidate1=false;
          }
          if(r1.test(curVal)){
            this.desc.passwordValidate3=true;
          }else{
            this.desc.passwordValidate3=false;
          }
          if(r2.test(curVal)){
            this.desc.passwordValidate2=true;
          }else{
            this.desc.passwordValidate2=false;
          }


        }
      },
      ['desc.passwordAgain']: {
        handler(curVal,oldVal) {
          if(curVal!=this.desc.password){
            this.desc.passwordAgainValidate=false;
          }else{
            this.desc.passwordAgainValidate=true;
          }
        }
      }
    }
  }
</script>
<style lang="stylus">
    @import '~themes/app.variables'
                                                     
</style>

<template>
    <div class="register-page">
        <div class="r-header">
            <span class="logo-text">Commerce</span>
            <span class="other">
                <span class="haveAccount">Already have an account?</span>
                <span class="signIn"><span>Sign In</span><span><img :src="desc.arrow" alt=""></span></span>
            </span>            
        </div>
        <div class="r-content">
            <div class="signUpBox">
                <h3>SIGN UP</h3>
                <div class="type">
                    <div class="phone" :class="{selected: desc.tabIndex == 0}" @click="desc.tabIndex=0">Phone Number</div>
                    <div class="email" :class="{selected: desc.tabIndex == 1}" @click="desc.tabIndex=1">Email</div>
                </div>
                <div class="custom">
                    <div class="input-group">
                        <input type="text" placeholder="Phone Number" class="phone">
                    </div>
                    <div class="verifi-wrap">
                        <div class="verificationBox" :class="{error:desc.passwordValidate==true}">
                            <input placeholder="Enter Verification Code" class="verification">
                            <button onfocus="this.blur();" class="sendVerification">Send Verification Code</button>
                        </div>
                        <p class="errMessage">the password is wrong</p>                    
                    </div>
                    <div class="input-group" :class="{error:desc.passwordValidate==true}">
                        <input type="password" placeholder="Password" class="password"  @focus="desc.s4 = true" @blur="desc.s4 = false" />
                        <p class="errMessage">the password is wrong</p>
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
                    </div>
                    <div class="input-group">
                        <input placeholder="Confirm Password" class="confirmPassword">
                    </div>
    
                    <button onfocus="this.blur();" class="signUp">SIGN UP</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                desc: {
                    s4: false,
                    passwordValidate1:true,
                    passwordValidate2:false,
                    passwordValidate3:false,
                    iconRightHover: '../../statics/images/login/icon-right-hover.png',
                    iconRight: '../../statics/images/login/icon-right.png',
                    passwordValidate: true,
                    tabIndex: 0,
                    arrow:'../../statics/images/login/arrow_R.png'

                }
            }
        }
    }
</script>
<style lang="stylus">
    @import '~themes/app.variables'                          
              
</style>
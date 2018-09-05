<template>
    <YTX-Dialog :headerTitle="title" :isDialogShow="isshow">
        <div class="bind-email">
           <div class="bind-email-first" v-if="firstStep">
                <div class="IWin-input-wrap">
                    <input type="text" name="first-name" value="13505164991" class="IWin-input" aria-required="true" aria-invalid="false" disabled> 
                    <span class="help is-danger" >error</span>
                </div>
                <div class="IWin-input-wrap ytx-mt">
                    <input type="text" name="first-name" placeholder="Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
                    <span class="help is-danger" >error</span>
                    <i class="carrier-icon" :class="{'active':carrierActive1}" @click="carrierActive1=!carrierActive1"></i>
                </div>
            </div>
            <div class="bind-email-sec" v-if="!firstStep&&secendStep">
                <div class="IWin-input-wrap">
                    <input type="text" name="first-name"  placeholder="New Email Address" class="IWin-input" aria-required="true" aria-invalid="false"> 
                    <span class="help is-danger" >error</span>
                </div>
                <div class="ytx-verificationBox">
                    <input placeholder="Enter Verification Code" class="verification" >
                    <button class="sendVerification">SEND</button>
                </div>
            </div>
            <div class="bind-email-third" v-if="!secendStep&&!firstStep">
                    <i></i>
                    <div class="text-wrapper">
                        <p class="top">Bind The Email Successfully</p>
                        <p class="down">You can use the email to sign in Commerce directly</p>
                    </div>
            </div>
            <div class="ytx-mt" v-if="firstStep||secendStep">
               <a href="#">Forget password</a>
            </div>
        </div>
        <div class="ytx-dialog-footer">
            <button class="ytx-small-w-btn" v-if="firstStep||secendStep">CANCEL</button>
            <button class="ytx-small-b-btn" v-if="firstStep" @click="firstStep=false">NEXT</button>
            <button class="ytx-small-b-btn" v-if="!firstStep&&secendStep" @click="secendStep=false">SAVE</button>
            <button class="ytx-small-b-btn" v-if="!secendStep&&!firstStep">CLOSE</button>
        </div> 
    </YTX-Dialog> 
</template>

<script>
import YTXDialog from './YTXDialog'
export default {
  components: {
    'YTX-Dialog':YTXDialog
  },
  props: {
    isDialogShow: {
      type: Boolean,
      default: true
    },
    headerTitle: {
      type: String,
      default: 'title'
    },
  },
  data() {
    return {
        title:'Bind Email',
        isshow:true,
        carrierActive1:false,
        carrierActive2:false,
        firstStep:true,
        secendStep:true,
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus">
    @import '~themes/app.variables'
</style>
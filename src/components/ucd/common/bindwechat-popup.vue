<template>
<div>
<YTX-Dialog :headerTitle="title1" :isDialogShow="!isshow">
    <div class="bind-wechat ytx-m-x-tb ytx-m-xxx-lr">
        <div class="">
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
        <div class="ytx-mt" v-if="firstStep||secendStep">
           <a href="#" fontcolor4>Forget password</a>
        </div>
    </div>
    <div class="ytx-dialog-footer">
        <button class="ytx-small-w-btn">CANCEL</button>
        <button class="ytx-small-b-btn">SAVE</button>
    </div> 
</YTX-Dialog>
<YTX-Dialog :headerTitle="title2" :isDialogShow="isshow">
    <div class="wechat-login ytx-m-x-tb ytx-m-xxx-lr">
        <div class="img-wrap ytx-p-all">
            <img src="../../../statics/wechat-login.png" alt="">
        </div>
    </div>
    <div class="wechat-login-footer ytx-p-xxx-lr ytx-p-x-tb size14 ytx-bg5">
        <p class="ytx-m-none ytx-align-center fontcolor3  allcolor3">Please scan QR code to sign in "Commercer Cloud"</p>
    </div> 
</YTX-Dialog>
<YTX-Dialog :headerTitle="title3" :isDialogShow="isshow">
    <div class="unbundled-wechat ytx-m-x-tb ytx-m-xxx-lr">
        <div class="IWin-input-wrap">
            <input type="text" name="first-name" value="13505164991" class="IWin-input" aria-required="true" aria-invalid="false" disabled> 
            <span class="help is-danger" >error</span>
        </div>
        <div class="IWin-input-wrap ytx-mt">
            <input type="text" name="first-name" placeholder="Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
            <span class="help is-danger" >error</span>
            <i class="carrier-icon" :class="{'active':carrierActive1}" @click="carrierActive1=!carrierActive1"></i>
        </div>
        <div class="ytx-mt" v-if="firstStep||secendStep">
            <a href="#" fontcolor4>Forget password</a>
        </div>
    </div>
    <div class="ytx-dialog-footer">
        <button class="ytx-small-w-btn">CANCEL</button>
        <button class="ytx-small-b-btn">Confirm</button>
    </div> 
</YTX-Dialog> 
</div>
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
    title1:'Bind Wechat',
    title2:'Wechat Login',
    title3:'unbundled wechat',
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
<template>
<YTX-Dialog :headerTitle="title" :isDialogShow="isshow">
    <div class="unbundled-email ytx-p-x-tb ytx-p-xxx-lr">
       <div class="ytx-flex-fuc popup-warning-hint" v-if="firstStep">
            <i></i>
            <div class="text-wrapper">
                <p class="top">After unbundling, you will not be able to sign in</p>
                <p class="down">Commerce using the original email.</p>
            </div>
        </div>
        <div class="unbundled-email-sec" v-if="!firstStep&&secendStep">
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
        <div class="ytx-flex-fuc popup-operation-success" v-if="!secendStep&&!firstStep">
                <i></i>
                <div class="text-wrapper">
                    <p class="top">Successfully</p>
                    <p class="down">Unbundled Email Successfully</p>
                </div>
        </div>
        <div class="ytx-mt" v-if="firstStep||secendStep">
           <a href="#">Forget password</a>
        </div>
    </div>
    <div class="ytx-dialog-footer">
        <button class="ytx-small-w-btn" v-if="firstStep||secendStep">CANCEL</button>
        <button class="ytx-small-b-btn" v-if="firstStep" @click="firstStep=false">UNBUNDLED</button>
        <button class="ytx-small-b-btn" v-if="!firstStep&&secendStep" @click="secendStep=false">CONFIRM</button>
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
    title:'Unbundled Email',
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
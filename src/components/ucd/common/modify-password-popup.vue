<template>
<div>
<YTX-Dialog :headerTitle="title1" :isDialogShow="isshow">
    <div class="modify-password ytx-p-x-tb ytx-p-xxx-lr" >
        <div v-if="!stepone">
            <div class="IWin-input-wrap ytx-mt">
                <input type="text" name="first-name" placeholder="Old Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
                <span class="help is-danger" >error</span>
                <i class="carrier-icon" :class="{'active':carrierActive1}" @click="carrierActive1=!carrierActive1"></i>
            </div>
            <div class="IWin-input-wrap ytx-mt">
                <input type="text" name="first-name" placeholder="New Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
                <span class="help is-danger" >error</span>
                <i class="carrier-icon" :class="{'active':carrierActive2}" @click="carrierActive2=!carrierActive2"></i>
            </div>
            <div class="IWin-input-wrap ytx-mt">
                <input type="text" name="first-name" placeholder="Confirm Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
                <span class="help is-danger" >error</span>
            </div>
        </div>
        <div class="ytx-flex-fuc popup-operation-success" v-if="stepone">
            <i></i>
            <div class="text-wrapper">
                <p class="top">Successfully</p>
                <p class="down">Unbundled Email Successfully</p>
            </div>
        </div>
    </div>
    <div class="ytx-dialog-footer">
        <button class="ytx-small-w-btn" v-if="!stepone">CANCEL</button>
        <button class="ytx-small-b-btn" v-if="!stepone" @click="stepone=true">CONFIRM</button>
        <button class="ytx-small-b-btn" v-if="stepone" @click="stepone=true">CLOSE</button>
    </div> 
</YTX-Dialog>
<YTX-Dialog :headerTitle="title2" :isDialogShow="!isshow">
        <div class="modify-password ytx-p-x-tb ytx-p-xxx-lr" >
            <div v-if="!stepone">
                <div class="IWin-input-wrap ytx-mt">
                    <input type="text" name="first-name" placeholder="Email" class="IWin-input" aria-required="true" aria-invalid="false"> 
                    <span class="help is-danger" >error</span>
                </div>
                <div class="ytx-verificationBox">
                    <input placeholder="Code" class="verification" >
                    <button class="sendVerification">SEND</button>
                </div>
                <div class="IWin-input-wrap ytx-mt">
                    <input type="text" name="first-name" placeholder="Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
                    <span class="help is-danger" >error</span>
                    <i class="carrier-icon" :class="{'active':carrierActive1}" @click="carrierActive1=!carrierActive1"></i>
                </div>
                <div class="IWin-input-wrap ytx-mt">
                    <input type="text" name="first-name" placeholder="Confirm Password" class="IWin-input" aria-required="true" aria-invalid="false"> 
                    <span class="help is-danger" >error</span>
                    <i class="carrier-icon" :class="{'active':carrierActive2}" @click="carrierActive2=!carrierActive2"></i>
                </div>
            </div>
        </div>
        <div class="ytx-dialog-footer">
            <button class="ytx-small-w-btn" >CANCEL</button>
            <button class="ytx-small-b-btn" >SAVE</button>
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
data() {
return {
    title1:'Change Password',
    title2:'creat a new account',
    isshow:true,
    carrierActive1:true,
    carrierActive2:false,
    stepone:false,
}
},
methods: {
}
}
</script>
<style lang="stylus">
@import '~themes/app.variables'
</style>
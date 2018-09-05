<template>
<div class="setting">
    <ul class="tab clearfix">
        <li class="tab-item" v-for="(item,index) in tabData" :class="{'active':tabCurrentIndex==index}" @click="tabCurrentIndex=index">{{item.content}}</li>
    </ul>
    <div class="basic-info" v-if="tabCurrentIndex==0">
        <div class="profile">
            <div class="selected-profile">
                <img :src="imgData[curindex].url" alt="">
            </div>
            <ul class="profile-all clearfix" >
                <li class="list-item" v-for="(item,index) in imgData" :class="{'active':curindex==index}" @click="curindex=index">
                    <img :src="item.url" alt="">
                    <!-- <i v-if="curindex==index"></i> -->
                </li>
            </ul>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Nickname">
        </div>
        <button class="save-btn">SAVE</button>
    </div>
    <div class="delivery-address" v-if="tabCurrentIndex==1">
        <div class="address-title ytx-p-tb ytx-border-bottom size14 allcolor3 fontfamilymedium">Shipping Address</div>
        <div class="addressBox ytx-p-tb">
            <div
                class="addressItem"
                v-bind:class="{'default': item.default}"
                v-for="(item, index) in addressInfo"
                @click="selectAddress(index)"
            >
                <div class="addressItem-type">
                    <div class="name">{{item.name}}<img v-if="index === 0" src="statics/images/checkout/star.png" style="display: inline-block; vertical-align: middle; width:20px; height:20px"></div>
                    <div class="address">{{item.address}}</div>
                    <div class="phone">{{item.phone}}</div>
                    <div class="save">Save as Default<img src="statics/images/checkout/edit.png" style="display: inline-block; vertical-align: middle; width:18px; height:18px"></div>
                    <img src="statics/images/checkout/delete.png" class="checkout-delete" v-on:click="removeAddress(index)" />
                </div>
            </div>
            <div class="addAddress">
            <div class="addAddressBtn"></div>
            <div><img src="statics/images/checkout/add.png" style="display: inline-block; vertical-align: middle; width:32px; "></div>
                <span>ADD NEW ADDRESS</span>
            </div>
        </div>
    </div>
    <div class="account-security" v-if="tabCurrentIndex==2">
        <div class="outer-wrapper" v-for="(items,index) in accountData" :key="index">
            <div class="top">{{items.title}}</div>
            <div class="content" v-for="(inneritem,index1) in items.content" :key="index1">
                <div class="left">
                    <div class="img-wrap">
                        <img :src="inneritem.icon" alt="">
                    </div>
                    <div class="info-wrap">
                        <div class="name size14 fontweightbold">{{inneritem.name}}</div>
                        <div class="status size12 ytx-s-mt fontcolor5">{{inneritem.status}}</div>
                    </div>
                </div>
                <div class="right">
                    <span class="ytx-mr cursor-pointer">
                        <span class="operation-icon">
                            <img :src="inneritem.operationicon1" alt="">
                        </span>
                        <span class="operation-text fontcolor4 size14">{{inneritem.operationtext1}}</span>
                    </span>
                    <span class="ytx-xxxx-mr cursor-pointer">
                        <span class="operation-icon">
                            <img :src="inneritem.operationicon2" alt="">
                        </span>
                        <span class="operation-text fontcolor4 size14">{{inneritem.operationtext2}}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {
QScrollArea,
QLayout,
QProgress
} from 'quasar'
export default {
components: {
QScrollArea,
QLayout,
QProgress
},
data () {
return {
curindex:1,
tabCurrentIndex:0,
address: [],
tabData:[
    {
        content:'Basic Info'
    },
    {
        content:'Delivery Addresses'
    },
    {
        content:'Account & Security'
    },
],
imgData:[
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/watch.png"
    },    
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
    {
        url:"../../../statics/360-view-design/user-picture.png"
    },
],

accountData:[
    {
        title:'Account info',
        content:[
            {
                icon:'../../../statics/setting/icon_phone.png',
                name:'Mobile Number',
                status:'13505164991',
                operationicon1:'../../../statics/setting/icon_change.png',
                operationtext1:'Change',
                operationicon2:'../../../statics/setting/icon_unbundled.png',
                operationtext2:'Unbundled',
            },
            {
                icon:'../../../statics/setting/icon_email.png',
                name:'E-Mail',
                status:'jingxg@qq.com',
                operationicon1:'../../../statics/setting/icon_change.png',
                operationtext1:'Change',
                operationicon2:'../../../statics/setting/icon_unbundled.png',
                operationtext2:'Unbundled',
            }
        ]
    },
    {
        title:'Account Binding',
        content:[
            {
                icon:'../../../statics/setting/icon_wechat.png',
                name:'Wechat',
                status:'Bundled',
                operationicon1:'',
                operationtext1:'',
                operationicon2:'../../../statics/setting/icon_unbundled.png',
                operationtext2:'Unbundled',
            },
        ]
    },
    {
        title:'Security',
        content:[
            {
                icon:'../../../statics/setting/icon_password.png',
                name:'Change Password',
                status:'',
                operationicon1:'',
                operationtext1:'',
                operationicon2:'../../../statics/setting/icon_modify.png',
                operationtext2:'Modify',
            },
        ]
    }
]
}
},
methods:{
    selectAddress: function (index) {
        for (var i = 0; i < this.address.length; i++) {
            this.address[i].default = false
        }
        this.address[index].default = true
        }
    },
    removeAddress: function (index) {
      this.address.splice(index, 2)
      console.log(this.check1)
    },
}
</script>
<style lang="stylus">
@import '~themes/app.variables'
.delivery-address
    border 1px solid #e5e5e5
    padding-left 30px
    .address-title
        font-size 14px
        font-weight 600
        letter-spacing 1px
    .addressBox
        display flex
        .addAddress
            min-width 256px
            min-height 130px
            border 1px solid $border-color-1 
            border-radius 4px
            background $all-color-2
            display flex
            align-items center
            justify-content center
            flex-direction column
            line-height 2.2
            font-weight 600
            cursor pointer

</style>

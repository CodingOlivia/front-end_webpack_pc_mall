<template>
  <q-layout ref="layout" view="hHh lpr fff" class="row no-wrap PDbox">
    <div slot="left" style="width: 64vw;height:100%;background: #d8ecf4;" class="row no-wrap justify-between leftSmallItem">
      <div class="smallPic">
        <div style="padding-bottom: calc(10/1920*100vw); margin-top: calc(300/1920*100vw);">
          <img
            :class="smallImg.smImg"
            :style="{opacity:smallImg.activeOpacity}"
            v-for="(smallImg, imgIndex) in smallImgs"
            :src="smallImg.src" class="responsive"
            v-on:mouseover="changeBigImg(imgIndex)"
          />
        </div>
        <div>
          <q-side-link
            class="linkName"
            v-for="link in links"
            :key="link.id"
            :to="link.href"
            v-bind:class="[link.label === 'OVERVIEW' ? 'active' : '']"
          >
            {{link.label}}
          </q-side-link>
        </div>
      </div>
      <div class="bigPic row justify-center items-center" style="overflow: hidden;">
        <img v-bind:src="bigImageSrc" class="responsive" />
      </div>
    </div>
    <div slot="right" class="row right" style="padding-top:calc(125 / 1920 * 100vw);margin-right:calc(30 / 1920 * 100vw); height: 100%; position: relative;">
      <div style="width: calc(516 / 1920 * 100vw);height: calc(100% - 260 / 1920 * 100vw); display: flex; flex-direction: column;">
        <div v-for="productInf in productInfs" style="border-bottom:1px solid #e5e5e5; max-width: 100%; flex-shrink: 0;" class="p-desc">
          <div class="proTitle">
            <div>{{productInf.title}}</div>
            <div><img :src="productInf.discountIcon"/></div>
          </div>
          <p style="max-width: 100%;">{{productInf.discrip}}</p>
          <div class="stars">
            <div>
              <q-rating v-model="ratingModel" readonly :max="5" size="24px" />
              <div>{{productInf.reson}}</div>
            </div>
            <div class="ico">
              <div style="width:calc(200/1920*100vw);">
                <i class="ico_like" @click="icoLike"></i>
                <i class="ico_price" @click="ico_priced"></i>
                <i class="ico_share" @click="ico_shared;shareShow=true">
                    
                </i>
                <div class="model-share " :class="{'model-share-cross':shareData.length>3}" v-if="shareShow==true">
                    <div class="model-share-title">
                        Share to
                        <i class="model-share-close" @click="shareShow=false"></i>
                    </div>
                    <div class="model-share-con">
                          <div class="share-list">
                              <div class="share-item" v-for="(item,index) in shareData">
                                    <div class="share-img">
                                        <img :src="item.url" alt="">
                                    </div>
                                    <div class="share-name">{{item.label}}</div>
                              </div>
                            
                          </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="scroll-box " :class="{'productOff':isOFF==true}" style="height: 100%; width: 100%; overflow-y: hidden;">
          <q-scroll-area style="height:100%;">
            <div class="selectColor">
              <div>{{choiceColorTitle}}</div>
              <div v-for="(item, index) in choice" class="colorChoice" :class="item.activeName" v-on:click="choiceColor(index)">
                <q-btn
                  round
                  :key="item.id"
                  v-bind:color="item.color"
                  v-bind:icon="item.icon"
                  :class="item.avtiveName"  
                  style="width:24px;height:24px;display:flex;justify-content:center;align-items:center;"
                />
              </div>
              
            </div>
            <div class="memoryStyle" v-for="(item, index) in memory">
              <div>{{item.title}}</div>
              <q-btn outline class="memoryBtGroup" v-for="(size, index) in item.size" :class="size.checked" @click="checkMemory(index)" :key="size.id">{{size.sizeNum}} </q-btn>
            </div>
            <div style="margin-bottom: 24px">
               <p style="font-size: 14px; font-weight: 600; letter-spacing: 1px">Primary - 198 Bundle</p>
               <div style="width: calc(580 / 1920 * 100vw); height:calc(52 / 1920 * 100vw);background: #f9f9f9;display:flex;justify-content:flex-start;align-items:center; padding:calc(15 / 1920 * 100vw) 0; font-size: 14px;">
                 <span style="color: #252525; font-size:14px; font-weight:bold; margin:0 calc(30/1920*100vw);">$198 /mo.</span>
                 <span>Voice: 300 min, SMS: unlimited, Data: 20 GB</span>
               </div>
               <div>
                 <q-btn outline class="primaryBtGroup" 
                 style ="text-transform: none"
                 v-for="(item, index) in primaryBtn" :class="item.checked" @click="primaryBtnC(index)" :key="item.id">{{item.sizeNum}} </q-btn>
               </div>
            </div>
            <div class="ProBox6">
              <span class="ProBox6-title">Quantity</span>
              <div class="itemNumber">
                <div name="min" v-on:click="min" class="btn-min" v-bind:class="{'disable':counter<=1}"><i></i></div>
                <input name="ProNumber" v-model="counter" type="text" onFocus="this.value=''" class="ProNumber" onkeyup="value=value.replace(/[^\d]/g,'')">
                <div name="add" v-on:click="add" class="btn-add"><i></i></div>
              </div>
            </div>
          </q-scroll-area>
        </div>
        
      </div>

      <div  :class="{'productOffbottom':isOFF==true}" style="width: calc(516 / 1920 * 100vw); margin-left: calc(48 / 1920 * 100vw); position: relative; left: 0; top: 0;">
          <div class="free row" style="border-top: 1px solid #e5e5e5 ; border-bottom: 1px solid #e5e5e5 ; width: 100%;">
            <div>
              <span>One Time Fee</span>
              <div>
                <span>
                  ${{OneTimeFeeValue.toFixed(2)}}
                </span>
                <span>
                  ${{ OneTimeFeeValueOriginal.toFixed(2) }}
                </span>
              </div>
            </div>
            <div>
              <span style="display: block;line-height: 2; font-weight: bold">Monthly Fee</span>
              <span style="color: #252525; font-size: calc(24/1920*100vw);line-height: calc(40/1920*100vw); font-weight:bold;">${{MonthlyFeeValue.toFixed(2)}}</span>
            </div>
          </div>
          <div style="padding-top: calc(32 / 1920 * 100vw); display: flex;">
            <router-link to="/Market/Shoppingbag">
              <input type="button" class="addTo" value="ADD TO BAG" >
            </router-link>
            <router-link to="/Market/Checkout">
              <input type="button" class="buyNow" value="BUY NOW" >
            </router-link>
          </div>
      </div>
    </div>
    
  </q-layout>
</template>
<script>
import {
  QLayout,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QIcon
} from 'quasar'
export default {
  components: {
    QLayout,
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon
  },
  data () {
    return {
      ratingModel: 4,
      shareShow:false,
      isOFF:true,
      counter:1,
      shareData:[
        {
           label:"Facebook",
           url:'statics/icon-fackbook.png'
        },
        {
           label:"Twitter",
           url:'statics/icon-twiter.png'
        },
        {
           label:"Wechat",
           url:'statics/icon-wechat.png'
        },
        {
           label:"Sina",
           url:'statics/icon-sina.png'
        }
      ],
      smallImgs: [
        {'src': 'statics/images/ProductContent/1.jpg', 'id': 'src1', 'smImg': 'smImg', 'activeOpacity': 1},
        {'src': 'statics/images/ProductContent/2.jpg', 'id': 'src2', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/3.jpg', 'id': 'src3', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/4.jpg', 'id': 'src4', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/5.jpg', 'id': 'src5', 'smImg': 'smImg', 'activeOpacity': 0.5}
      ],
      links: [
        {'href': '/ProductMenu/Overview', 'label': 'OVERVIEW', 'id': '1'},
        {'href': '/ProductMenu/Gallery', 'label': 'GALLERY', 'id': '2'},
        {'href': '/ProductMenu/TechSpec', 'label': 'TECH SPEC', 'id': '3'},
        {'href': '/ProductMenu/Reviews', 'label': 'REVIEWS', 'id': '4'}
      ],
      productInfs: [{
        'title': 'Huawei VR 2 Pro',
        'discountIcon': 'statics/images/ProductContent/tag1.png',
        'discrip': 'ETVR Upgraded 3D VR Glasses for Movies and Games with Stereo Headphone - More Lightweight Virtual Reality Headset with 120 Degree FOV - Fit for 4.7"-6.2" iPhone & Android Smartphones',
        'reson': 'Average based on 1108 reviews'}
      ],
      choiceColorTitle: `Color - Black`,
      choice: [
        {
          'id': '1',
          'color': 'dark',
          'icon': '',
          'activeName': 'activeName'
        },
        {
          'id': '2',
          'color': 'blue-6',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '3',
          'color': 'brown-6',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '4',
          'color': 'grey-8',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '5',
          'color': 'grey-13',
          'icon': '',
          'activeName': ''
        }
      ],
      memory: [
        {
          'title': 'Memory',
          'size': [
            {
              'id': 1,
              'sizeNum': '64 GB',
              'checked': 'checked'
            },
            {
              'id': 2,
              'sizeNum': '256 GB',
              'checked': ''
            }
          ]
        }
      ],
      primary: [
        {
          'title': 'Primary',
          'primary': [
            {
              'id': 1,
              'primaryDec': '222'
            }
          ]
        }
      ],
      OneTimeFeeValue: 1299,
      OneTimeFeeValueOriginal: 1699,
      MonthlyFeeValue: 198,
      num: 0,
      num1: 0,
      num2: 0,
      lickChecked: false,
      priceChecked: false,
      shareChecked: false,
      share1: [
        {'name': 'thumb_up', 'id': '1'},
        {'name': 'ion-heart', 'id': '2'},
        {'name': 'fa-facebook-f', 'id': '3'}
      ],
      share: [
        {'name': 'favorite_border', 'id': '1'},
        {'name': 'swap_vert', 'id': '2'},
        {'name': 'open_in_new', 'id': '3'}
      ],
      bigImageSrc: 'statics/images/ProductContent/big0.jpg',
      primaryBtn: [
        {
          'id': 1,
          'sizeNum': '64 Bundle',
          'checked': 'checked'
        },
        {
          'id': 2,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 3,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 4,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 5,
          'sizeNum': '256 Bundle',
          'checked': ''
        }
      ]
    }
  },
  methods: {
    checkMemory: function (index) {
      var temp = this.memory
      for (var i = temp.length - 1; i >= 0; i--) {
        var tempSize = temp[i].size
      }
      for (var j = tempSize.length - 1; j >= 0; j--) {
        tempSize[this.num].checked = 'checked'
        if (this.num !== index) {
          // console.log(tempSize[j])
          tempSize[this.num].checked = ''
          this.num = index
        }
      }
    },
    choiceColor: function (index) {
      this.choice[index].activeName = 'activeName'
      if (this.num1 !== index) {
        this.choice[this.num1].activeName = ''
        this.num1 = index
      }
    },
    primaryBtnC: function (index) {
      this.primaryBtn[index].checked = 'checked'
      if (this.num2 !== index) {
        this.primaryBtn[this.num2].checked = ''
        this.num2 = index
      }
    },
    changeBigImg: function (imgIndex) {
      this.bigImageSrc = `statics/images/ProductContent/big` + imgIndex + `.jpg`
      for (var i = this.smallImgs.length - 1; i >= 0; i--) {
        this.smallImgs[imgIndex].activeOpacity = 1
        // console.log(this.smallImgs[imgIndex].activeOpacity)
        if (imgIndex !== i) {
          this.smallImgs[i].activeOpacity = 0.5
        }
      }
    },
    icoLike: function (event) {
      if (this.lickChecked) {
        event.target.className = 'ico_like'
        this.lickChecked = false
      }
      else {
        event.target.className = 'ico_liked'
        this.lickChecked = true
      }
    },
    ico_priced: function (event) {
      if (this.priceChecked) {
        event.target.className = 'ico_price'
        this.priceChecked = false
      }
      else {
        event.target.className = 'ico_priced'
        this.priceChecked = true
      }
    },
    ico_shared: function (event) {
      if (this.lickChecked) {
        event.target.className = 'ico_share'
        this.lickChecked = false
      }
      else {
        event.target.className = 'ico_shared'
        this.lickChecked = true
      }
    },
    add: function () {
      this.counter = parseInt(this.counter) + 1
    },
    min: function () {
      if (this.counter > 1) {
        this.counter = parseInt(this.counter) - 1
      }
    },
  }
}
</script>

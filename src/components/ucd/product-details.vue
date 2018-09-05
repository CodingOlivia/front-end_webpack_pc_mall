<template>
     <div class="product-detail-wrap">
        <div class="rateInfo ">
            <div class="rateInfo-inner row">
                <div class="rateInfo-left  ytx-flex-center">
                    <div class="inner-left ytx-align-right">
                        <span class="size14 fontcolor5 fontfamilymedium">User satisfaction</span>
                        <div class="ytx-s-mt">
                            <q-rating
                            v-model="RateNum"
                            :max="5" readonly/>
                        </div>
                    </div>
                    <div class="inner-right fontcolor7">4.0</div>
                </div>
                <div class="rateInfo-right col  row" >
                    <div class="item-wrapper col-md-12 col-xl-4 col-lg-6 flex ytx-align-items-center " v-for="item in summaryData">
                        <span class=" size16 fontcolor5 fontfamilymedium ">{{item.rateLevel}}star</span>
                        <q-progress class=" col ytx-m-lr progress-bar" :percentage="item.progressBuffer" style="height:4px"/>
                        <span class=" size16 fontcolor5 fontfamilymedium">{{item.progressBuffer}}%</span>
                    </div>
                </div>
                </div>
           </div>
           <div class="main">
             
              <div class="row">
                <div style="width:200px;"></div>
                <ul class="tab-box col flex">
                  <li class="nav-tab" v-for="(item,index) in navData" @click="curIndex=index"><span :class="{'active':curIndex==index}">{{item.text}}({{item.num}})</span></li>
                </ul>
              </div>
              <div class="product-detail-list">
                  <div class="product-detail-item row"  v-for="(item,index) in productDetailData">
                      <div class="product-detail-left">
                        <div class="left-wrapper ">
                            <div class="product-detail-img">
                                <span><img :src="item.proImg" alt=""></span>
                            </div>
                            <div class="">
                                
                                <div class="product-detail-title">
                                    {{item.proName}}
                                </div>
                            </div>
                        </div>   
                      </div>
                      <div class="product-detail-right col">
                            <div>
                                <q-rating
                                v-model="item.productRate"
                                :max="5" readonly/>
                            </div>
                            <div class="product-detail-message size14 fontfamilymedium fontcolor5">
                            {{item.proTitle}}
                            </div>
                            <div class="product-detail-pics row items-end" v-if="item.prouploadImg.length>0">
                              <span class="product-detail-pic" v-for="(pic,i) in item.prouploadImg" @click="item.selectImgIndex=i" :class="{'active':item.selectImgIndex==i}">
                                <img :src="pic.url" alt="">
                              </span>
                            </div>
                            <div class="product-big-pic" v-if="item.selectImgIndex!=-1&&item.prouploadImg.length>0">
                                <div class="big-pic-wrap">
                                    <img :src="item.prouploadImg[item.selectImgIndex].url" alt="">
                                    <span class="p-left" @click="swiperLeft(item.selectImgIndex,item.prouploadImg.length,index)"></span>
                                    <span class="p-right" @click="swiperRight(item.selectImgIndex,item.prouploadImg.length,index)"></span>
                                    <span class="p-center" @click="item.selectImgIndex=-1"></span>
                                </div>
                                
                            </div>
                            <div class="product-detail-props">
                                <span class="ytx-mr">2018/4/17</span>
                                <span class="ytx-mr" v-for="p in item.props">{{p.prop}}</span>
                            </div>
                            <div class="svc-text">
                              <span class="label-title size16 fontcolor7 fontfamilymedium">by Customer Service</span>
                              <p class="text-content size16  fontcolor5">jingxiaopg  jksixcn  kihsdjkahd  jsaud  oiasjdfasjdk</p>
                            </div>
                      </div>
                  </div>
              </div>
              <!-- 分页start -->
              <div class="p-wrapper">
                <r-pagination 
                  :display="display" 
                  :currentPage="currentPage" 
                  :total="total"
                  @pagechange='idxHandle'
                  >
                </r-pagination>  
              </div>
           </div>
      </div>
</template>
<script>
import {
  QLayout,
  QRating,
  QProgress
} from 'quasar'
import RPagination from './common/ytx-pagination'
export default {
  components: {
    QLayout,
    QRating,
    QProgress,
    RPagination
  },
  data () {
    return {
    progressBuffer:50,
    curIndex:0,
    RateNum:4,
    // 分页变量
    display: 2,//每页展示多少
    currentPage:1,//当前页
    total:'',//总数据


    navData:[
        {
          text:'All Reviews',
          num:'1123'
        },
        {
          text:'High Reviews',
          num:'1023'
        },
        {
          text:'Middle Reviews',
          num:'123'
        },
        {
          text:'Bad Reviews',
          num:'12'
        },
        {
          text:'Have a picture',
          num:'12'
        },
    ],
    summaryData:[
        {
            rateLevel:1,
            progressBuffer:30, 
        },
        {
            rateLevel:2,
            progressBuffer:30, 
        },
        {
            rateLevel:3,
            progressBuffer:30, 
        },
        {
            rateLevel:4,
            progressBuffer:30, 
        },
        {
            rateLevel:5,
            progressBuffer:30, 
        }
    ],          
    productDetailData:[
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'251824653@qq.com',
               productRate:4,
               proTitle:'Amazing Definitely Real!',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               selectImgIndex:-1,
               prouploadImg:[
                 
               ]
            },
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'251824653@qq.com',
               productRate:4,
               proTitle:'Amazing Definitely Real!',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               selectImgIndex:-1,
               prouploadImg:[
                  {
                      url:'../../statics/images/orderReview/img-pro.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  }
               ]
            },
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               productRate:4,
               proTitle:'Amazing Definitely Real!',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               selectImgIndex:-1,
               prouploadImg:[
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  }
               ]
            },
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               productRate:4,
               proTitle:'Amazing Definitely Real!',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               selectImgIndex:-1,
               prouploadImg:[
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  }
               ]
            },
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               productRate:4,
               proTitle:'Amazing Definitely Real!',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               selectImgIndex:-1,
               prouploadImg:[
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  }
               ]
            },
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               productRate:4,
               proTitle:'Amazing Definitely Real!',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               selectImgIndex:-1,
               prouploadImg:[
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  },
                  {
                      url:'../../statics/images/orderReview/img-pro-upload.png'
                  }
               ]
            }
    ]
  }
},
  methods: {
    idxHandle:function(idx){
      console.log(idx)
    },
    swiperLeft:function(index,length,tIndex){
        if(index!=0){
            index--;
            this.productDetailData[tIndex].selectImgIndex=index;
        }
    },
    swiperRight:function(index,length,tIndex){
        if(index<length-1){
            index++;
            this.productDetailData[tIndex].selectImgIndex=index;
        }
    }
  },
  created () {
    this.total = this.productDetailData.length;
  },
  mounted () {
  }
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/


</style>
    
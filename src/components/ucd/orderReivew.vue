<template>
      <div class="orderReviews-wrap">
           <div class="main">
              <div class="orderInfo row">
                  <div class="orderInfo-left col-3">Order ID: {{orderReviewData.orderId}}</div>
                  <div class=" col-3">
                      <div class="row items-center">
                          <div class="col-auto rate-text">Product Compliance</div>
                            <div>
                                <q-rating
                                v-model="orderReviewData.productRate"
                                :max="5"/>
                            </div>
                      </div>
                  </div>
                  <div class=" col-3">
                      <div class="row items-center">
                          <div class="col-auto rate-text">Service Rating</div>
                            <div>
                                <q-rating
                                v-model="orderReviewData.logisticsRate"
                                :max="5"/>
                            </div>
                      </div>
                  </div>
                    <div class=" col-3">
                      <div class="row items-center">
                          <div class="col-auto rate-text">Logistics Rating</div>
                            <div>
                                <q-rating
                                v-model="orderReviewData.serviceRate"
                                :max="5"/>
                            </div>
                      </div>
                  </div>
              </div>
              <div class="orderReviews-list">
                  <div class="orderReviews-item row"  v-for="(item,index) in orderReviewData.productItem">
                      <div class="orderReviews-left col-3">
                          <div class="orderReviews-img">
                              <img :src="item.proImg" alt="">
                          </div>
                          <div class="orderReviews-title">
                             {{item.proName}}
                          </div>
                          <div class="orderReviews-props">
                              <span v-for="p in item.props">{{p.prop}}</span>
                          </div>
                      </div>
                      <div class="orderReviews-right col">
                            <div class="orderReviews-rate row items-center">
                                <div class="rate-text">Product Rating</div>
                                <div>
                                  <q-rating
                                    v-model="item.proRate"
                                    :max="5"/>
                                </div>
                            </div>
                            <div class="orderReviews-message">
                                <textarea v-model="item.message" maxlength="500" placeholder="Share your shopping experience"></textarea>
                                <div class="message-count">{{item.message.length}}/500</div>
                            </div>
                            <div class="orderReviews-pics row items-end">
                                <span class="orderReviews-pic" v-for="(pic,index) in item.prouploadImg">
                                  <img :src="pic.url" alt="">
                                  <i></i>
                                </span>
                                <span class="orderReviews-pic" v-if="item.prouploadImg.length<4">
                                  <img src="../../statics/images/orderReview/icon-photo.png" alt="">
                                  <input type="file">
                                </span>
                                <span class="message-tip">( Up to 4 pictures )</span>
                            </div>
                      </div>
                  </div>
              </div>
              <div class="orderReviews-btn">
                  <span class="btn">Sumbit</span>
              </div>
           </div>
      </div>
</template>
<script>
import {
  QLayout,
  QRating
} from 'quasar'
export default {
  components: {
    QLayout,
    QRating
  },
  data () {
    return {
    orderReviewData:{
          orderId:'43654664643589',
          productRate:4,
          logisticsRate:4,
          serviceRate:4,
          productItem:[
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               proTitle:'Product Rating',
               proRate:3,
               message:'',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               prouploadImg:[
                 
               ]
            },
            {
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               proTitle:'Product Rating',
               proRate:3,
               message:'',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
               prouploadImg:[
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
               proTitle:'Product Rating',
               proRate:3,
               message:'',
               props:[
                   {
                      prop:'Color: Black'
                   },
                   {
                      prop:'Capacity: 64GB'
                   }
               ],
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
    }
  },
  methods: {
   
  },
  mounted () {

    
  },
  watch: {

  }
}
</script>


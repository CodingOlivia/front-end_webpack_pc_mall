<template>
      <div class="viewReview-wrap">
           <div class="main">
              <div class="orderInfo row">
                  <div class="orderInfo-left col-3">Order ID: {{orderReviewData.orderId}}</div>
                  <div class=" col-3">
                      <div class="row items-center">
                          <div class="col-auto rate-text">Product Compliance</div>
                            <div>
                                <q-rating
                                v-model="orderReviewData.productRate"
                                :max="5" readonly/>
                            </div>
                      </div>
                  </div>
                  <div class=" col-3">
                      <div class="row items-center">
                          <div class="col-auto rate-text">Service Rating</div>
                            <div>
                                <q-rating
                                v-model="orderReviewData.logisticsRate"
                                :max="5" readonly/>
                            </div>
                      </div>
                  </div>
                    <div class=" col-3">
                      <div class="row items-center">
                          <div class="col-auto rate-text">Logistics Rating</div>
                            <div>
                                <q-rating
                                v-model="orderReviewData.serviceRate"
                                :max="5" readonly/>
                            </div>
                      </div>
                  </div>
              </div>
              <div class="viewReview-list">
                  <div class="viewReview-item row"  v-for="(item,index) in orderReviewData.productItem">
                      <div class="viewReview-left col-3">
                          <div class="viewReview-img">
                              <img :src="item.proImg" alt="">
                          </div>
                          <div class="viewReview-title">
                             {{item.proName}}
                          </div>
                          <div class="viewReview-props">
                              <span v-for="p in item.props">{{p.prop}}</span>
                          </div>
                      </div>
                      <div class="viewReview-right col">
                            <i class="status status1" v-if="item.status==0"><em>PASS</em></i>
                            <i class="status status2" v-if="item.status==1"><em>UNRE-VIEWED</em></i>
                            <i class="status status3" v-if="item.status==2"><em>REJECT</em></i>
                            <div class="viewReview-rate row items-center">     
                                <div>
                                  <q-rating
                                    v-model="item.proRate"
                                    :max="5"
                                    readonly
                                    />
                                </div>
                                <div class="rate-text size14 fontcolor5">2018/02/03</div>
                            </div>
                            <div class="viewReview-message size14 fontfamilymedium fontcolor5">
                                asdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa kahsdhjkashdfkjfhiqkajsdhkas  sakjdhkjqwei3wdkjasdhadhwq  jskdhiwqhdd asdiqowdkjsadhkjasd qw dqwdhksdjkasdhqw9dh d as
                            </div>
                            <div class="viewReview-pics row items-end">
                              <span class="viewReview-pic" v-for="(pic,index) in item.prouploadImg">
                                <img :src="pic.url" alt="">
                              </span>
                            </div>
                            <div class="svc-text">
                              <div class='text-title-color' v-if='item.status==2'>
                                <span class="text-title label-title size16 fontcolor7 fontfamilymedium">{{item.customer}}</span>
                              </div>
                              <span class="text-title label-title size16 fontcolor7 fontfamilymedium" v-if='item.status!=2'>{{item.customer}}</span>
                              <p class="text-content size16 fontfamilymedium fontcolor5">{{item.comments}}</p>
                            </div>
                      </div>
                  </div>
              </div>
<!--               <div class="viewReview-btn">
                  <span class="btn">Sumbit</span>
              </div> -->
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
               status:0,
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               proTitle:'Product Rating',
               proRate:5,
               message:'',
               customer:'by Customer Service',
               comments:'sjdhasjkdhjkasdhkjasdhjkashjkhfrjkashdaosidoqwsajkldjaskldjalsjdlaksjdlaksjdlkasjdlasjdalsjdlkasjdklasjd',
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
               status:1,
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               proTitle:'Product Rating',
               proRate:4,
               message:'',
               customer:'',
               comments:'',
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
               status:2,
               proImg:'../../statics/images/orderReview/img-pro.png',
               proName:'iPhone X ',
               proTitle:'Product Rating',
               proRate:3,
               message:'',
               customer:'Comments contain uncivilized content',
               comments:'AD',
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


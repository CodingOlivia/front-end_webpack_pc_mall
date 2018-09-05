<template>
  <q-layout
    ref="layout"
    view="lHh lpr fFf"
    :right-breakpoint="1100"
  >
      <div class="MyCommerce main">
        <div class="user">
          <div class="information">
            <div class="img"><img src="statics/MyCommerce/user.png" /></div>
            <div class="detail">
              <div class="name">Sample Userid<span class="level">LV5</span></div>
              <div class="phone">18688680088</div>
              <div class="EXP">
                <div class="nowEXP">
                </div>
              </div>
            </div>
            <div class="commerce-horizon"></div>
            <div class="renewal">
              <div class="dot"></div>
              <div class="type">Renewal</div>
              <div class="number">198</div>
              <div class="unit">Bundle</div>
              <div class="expiryDate">Expiry Date:  <span class="date">2018/04/01</span></div>
            </div>
          </div>
          <div class="balance">
            <div class="recharge">
              <!-- <div class="block"></div> -->
              <img src="statics/MyCommerce/ico_Shape1.png" />
              <!-- <div class="block"></div> -->
              <span class="recharge-font">Recharge Blance<br /><strong>$100.00</strong></span>
              <!-- <div class="block"></div> -->
            </div>
            <div class="commerce-horizon"></div>
            <div class="promotional">
              <!-- <div class="block"></div> -->
              <img src="statics/MyCommerce/ico_Shape2.png" />
              <!-- <div class="block"></div> -->
              <span>Promotional Blance<br /><strong>$100.00</strong></span>
              <!-- <div class="block"></div> -->
            </div>
            <div class="commerce-horizon"></div>
            <div class="cash">
              <!-- <div class="block"></div> -->
              <img src="statics/MyCommerce/ico_Shape3.png" />
              <!-- <div class="block"></div> -->
              <span>Cash Coupon<br /><strong>$100.00</strong></span>
              <!-- <div class="block"></div> -->
            </div>
          </div>
        </div>
        <table class="order" cellspacing="0" cellpadding="0">
          <thead>
            <tr class="title">
              <td><strong>Uncompleted Order</strong></td>
              <td><span>View All Orders</span></td>
            </tr>
          </thead>
          <tbody class="orderTbody" v-for="(item, index) in order" style="overflow:hidden;">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th colspan="7">
                        <div class="head">
                          <div class="item1-left">
                          <span class="item1-title1">Created At: </span><span class="item1-data">{{item.created}}</span>
                          </div>
                          <div class="item1-left">
                          <span class="item1-title1">Order ID: </span><span class="item1-data">{{item.id}}</span>
                           </div>
                          <div class="item1-online">
                          <img src="~statics/MyCommerce/ico_Online.png" style="display: inline-block; vertical-align: middle; width: calc(20/1920*100vw); height: calc(20/1920*100vw); margin-right:4px " ><span class="item1-data">Online</span>
                          </div>
                          <div @click="deleteOrder(index)" class="item1-cancel">
                            <img src="~statics/MyCommerce/ico_Remove.png" style="display: inline-block; vertical-align: middle; width: calc(20/1920*100vw); height:calc(20/1920*100vw); margin-right:4px "><span class="item1-delete">Cancel</span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="tableMain">
                    <!-- 1 -->
                    <tr class="tableMainTr" v-for="(good, index) in item.goods">
                      <td class="commereTd1">
                        <img :src="good.imgUrl" class="commereTd1Img">
                      </td>
                      <td class="tdBorderBottom tdPd15">
                        <div class="item2-div">
                          <span class="item2-name">{{good.name}}</span><br>
                          <span class="item2-data">{{good.detail1}}</span><br>
                          <span class="item2-data">{{good.detail2}}</span><br>
                          <span class="item2-data">{{good.detail3}}</span>
                        </div>
                      </td>
                      <td class="tdBorderBottom tdPd15">
                        <div class="td3-text" >
                          <span class="td3-text-Upfront">Upfront Price</span><br>
                          <span class="td3-text-price">${{good.upfront.toFixed(2)}}</span>
                        </div>
                      </td>
                      <td class="tdBorderBottom tdPd15">
                        <div class="td4-text">
                          <span class="td4-text-Upfront">Monthly Fee</span><br>
                          <span class="td4-text-price">${{good.monthly.toFixed(2)}}</span>
                        </div>
                      </td>
                      <td class="tdBorderBottom tdPd15">
                        <div class="item2-text4">
                          <span class="item2-Number">× {{good.number}}</span>
                        </div>
                      </td>
                      <td v-if="index < 1" :rowspan="item.goods.length" class="tdBorderLeft">
                        <div class="td6-text">
                          <span class="td6-text-Upfront">Upfront Price</span><br>
                          <span class="td6-text-price">$1149.00</span>
                        </div>
                      </td>
                      <td v-if="index < 1" :rowspan="item.goods.length" class="tdBorderLeft">
                        <div>
                          <div class="third-payment">
                            <span class="third-payment-text">Waiting for payment</span><br>
                            <router-link to="/Market/Checkout">
                              <q-btn class="third-payment-btn">Pay Now</q-btn><br>
                            </router-link>
                            <span class="third-payment-view">View</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <!-- <td>2</td> -->
            </tr>
          </tbody>
        </table>
         <swiperPic :title="title" :swiperData=picsData :view=viewCount></swiperPic>
      </div>
      <router-view />
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QSearch,
  QField,
  QTransition
} from 'quasar'
import Recommendation from 'data/Recommendation.json'
import commerce from 'data/commerce.json'
import swiperPic from '../../../ucd/common/recommendation.vue'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QSearch,
    QField,
    QTransition,
    swiperPic
  },
  data () {
    return {
      picsData:Recommendation.data.items,
      viewCount:5,
      title:'Recommendation',
      user: {
        name: 'Sample Userid',
        level: 5,
        phone: 18688680088,
        exp: 40
      },
      renewal: {
        type: 'Renewal',
        number: 198,
        unit: 'Bundle',
        date: '2018/04/01'
      },
      balance: {
        recharge: 100,
        promotional: 200,
        cash: 300
      },
      order: commerce.order
    }
  },
  methods: {
   
  }
}
</script>

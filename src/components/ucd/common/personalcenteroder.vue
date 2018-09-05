<template>
    <div class="MyCommerce main" >
        <div class="o-nav">
        <span class="nav-button">View All Orders</span>
        <q-tabs v-model="selectedtab">      
            <q-tab slot="title" :count="odrdernum" default name="tab1" label="Awaiting Payment " class="nav-list"/>
            <q-tab slot="title" name="tab2" label="done" class="nav-list"/>
            
            <q-tab-pane  name="tab1" class="y-tab-pane">        
            <table class="order" cellspacing="0" cellpadding="0">
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
                            <td class="tdBorderBottom tdPd15" width="587px">
                            <div class="item2-div">
                                <span class="item2-name">{{good.name}}</span><br>
                                <span class="item2-data">{{good.detail1}}</span><br>
                                <span class="item2-data">{{good.detail2}}</span><br>
                                <span class="item2-data">{{good.detail3}}</span>
                            </div>
                            </td>
                            <!-- <td class="tdBorderBottom tdPd15">
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
                            </td> -->
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
            </q-tab-pane>
            <q-tab-pane  name="tab2" class="y-tab-pane">          
            <table class="order" cellspacing="0" cellpadding="0">
                <!-- <thead>
                <tr class="title">
                    <td><strong>Uncompleted Order</strong></td>
                    <td><span>View All Orders</span></td>
                </tr>
                </thead> -->
                <tbody class="orderTbody" v-for="(item, index) in order" style="overflow:hidden;">
                <tr>
                    <td>
                    <table cellpadding="0" cellspacing="0" class="inner-table">
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
                                <div class="item1-cancel">
                                <span class="item1-delete col-b">Cancelled</span>
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
                                <span class="third-payment-text2">The order has been cancelled</span><br>
                                <span class="third-payment-view2">View</span>
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
            </q-tab-pane>
        </q-tabs>
        </div>
    </div>
</template>

<script>
import {
QLayout,
QToolbar,
QToolbarTitle,
QTabs,
QTab,
QTabPane,
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
export default {
components: {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QTab,
  QTabPane,
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
},
data () {
  return {
    odrdernum:5,
    selectedtab:'tabel-1',
    banner: Recommendation.data,
    recommendationLeft: 0,
    hotPageDisable: 'prev',
    recommendationStyle: {
      left: 'calc((((-270 * 0) / 1920) * 100vw) - (0 * 30px))'
    },
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
  deleteOrder (index) {
    this.order.splice(index, 1)
  },
  HotPageSub () {
    // this.banner.select = this.banner.select - 4 < 0 ? 0 : this.banner.select - 4
    var vw = window.innerWidth / 100
    var boxWidth = (1483 / 1920) * 100 * vw
    var itemWidth = (270 / 1920) * 100 * vw + 30
    var moveTime = Math.floor((boxWidth + 30) / itemWidth)
    if (this.recommendationLeft < moveTime) {
      this.recommendationLeft = 0
      this.hotPageDisable = 'prev'
    }
    else {
      this.recommendationLeft -= moveTime
      this.hotPageDisable = ''
    }
    this.recommendationStyle.left = 'calc((((-270 * ' + this.recommendationLeft + ') / 1920) * 100vw) - (' + this.recommendationLeft + ' * 30px))'
    console.log(this.hotPageDisable)
  },
  HotPageAdd () {
    // box宽度
    // calc(1483 / 1920 * 100vw)
    // 单个的宽度
    // calc((((-270 * time) / 1920) * 100vw) - (time * 30px))
    var vw = window.innerWidth / 100
    var boxWidth = (1483 / 1920) * 100 * vw
    var itemWidth = (270 / 1920) * 100 * vw + 30
    var moveTime = Math.floor((boxWidth + 30) / itemWidth)
    if (this.recommendationLeft + (moveTime * 2) > this.banner.items.length) {
      this.recommendationLeft = this.banner.items.length - moveTime
      this.hotPageDisable = 'next'
    }
    else {
      this.recommendationLeft += moveTime
      this.hotPageDisable = ''
    }
    this.recommendationStyle.left = 'calc((((-270 * ' + this.recommendationLeft + ') / 1920) * 100vw) - (' + this.recommendationLeft + ' * 30px))'
    console.log(this.hotPageDisable)
  }
}
}
</script>
<style lang="stylus">
@import '~themes/app.variables'

</style>


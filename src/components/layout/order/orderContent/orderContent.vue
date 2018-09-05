<template>
  <div class="Allorder-box">
     <table border="0" cellspacing="0" cellpadding="0" class="item" v-if="orderData.length>0" v-for="(orderItem, index) in orderData">
        <tr class="tr-bottom">
          <td class="order-td1"></td>
          <td class="order-td2">
              <table border="0" cellspacing="0" cellpadding="0" style="border-bottom:1px solid $border-color-1 ">
                <tr style="font-weight: 600">
                  <td class="title-td1">
                    <span class="item1-title1">Created At: </span><span class="item1-data">{{orderItem.createTime}}</span>
                  </td>
                  <td class="title-td2">
                    <span class="item1-title1">Order ID: </span><span class="item1-data">{{orderItem.orderId}}</span>
                  </td>
                  <td class="title-td3">
                        <img src="statics/images/Myorder/online.png" style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; margin-right:4px">
                        <span class="item1-data">Online</span>
                  </td>
                  <td class="title-td4">
                    <img src="statics/images/Myorder/ico_del.png" style="cursor: pointer; display: inline-block; vertical-align: middle; width: 20px; height: 20px; margin-right:4px" @click="del(orderItem.orderId)"><span class="item1-delete" @click="del(orderItem.orderId)">Cancel</span>
                  </td>
                </tr>
              </table>
          </td>
          <td class="order-td1"></td>
        </tr>
        <tr>
          <td class="order-td1"></td>
          <td class="order-td2">
            <table class="bodyTable" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td class="products-td0">
                  <table border="0" cellspacing="0" cellpadding="0" v-if="orderItem.packageAll.length>0" v-for="(packageItem, index) in orderItem.packageAll">
                      <tr v-if="packageItem.packageItem.length>0" v-for="item in packageItem.packageItem">
                        <td class="products-td1">
                           <img :src="item.packageItemImgUrl" style="display: inline-block; vertical-align: middle; width: 80px; height: 80px ">     
                        </td>
                        <td class="products-td2">
                            <span class="item2-name">{{item.packageItemName}}</span>
                            <span class="item2-data">{{item.packageItemMemory}}</span>
                            <span class="item2-data">{{item.packageItemPrimary}}</span>
                            <span class="item2-data">{{item.packageItemColor}}</span>
                        </td>
                        <td class="products-td3">
                            <span class="item2-Upfront">Upfront Price</span><br>
                            <span class="item2-price">${{item.packageItemPrice.toFixed(2)}}</span>
                        </td>
                        <td class="products-td4">
                            <span class="item2-Upfront">Monthly Fee</span><br>
                            <span class="item2-price">${{item.packageItemMonthly.toFixed(2)}}</span>
                        </td>
                        <td class="products-td5">
                            <span class="item2-Number">×{{item.packageItemNumber}}</span>
                        </td>
                      </tr>
                  </table>
                  <table border="0" cellspacing="0" cellpadding="0" v-if="orderItem.itemAll.length>0" v-for="(item, index) in orderItem.itemAll">
                      <tr>
                        <td class="products-td1">
                           <img src="statics/images/Myorder/pic3.png" style="display: inline-block; vertical-align: middle; width: 80px; height: 80px ">     
                        </td>
                        <td class="products-td2">
                            <span class="item2-name">{{item.itemName}}</span>
                            <span class="item2-data">{{item.itemMemory}}</span>
                            <span class="item2-data">{{item.itemPrimary}}</span>
                            <span class="item2-data">{{item.itemColor}}</span>
                        </td>
                        <td class="products-td3">
                            <span class="item2-Upfront">Upfront Price</span><br>
                            <span class="item2-price">${{item.itemPrice.toFixed(2)}}</span>
                        </td>
                        <td class="products-td4">
                            <span class="item2-Upfront">Monthly Fee</span><br>
                            <span class="item2-price">${{item.itemMonthly.toFixed(2)}}</span>
                        </td>
                        <td class="products-td5">
                            <span class="item2-Number">×{{item.itemNumber}}</span>
                        </td>
                      </tr>
                  </table>
                </td>
                <td class="products-td6">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="width:calc(60/1920*100vw)"></td>
                      <td style="width:102px">
                        <span class="total-price-text">Total Price</span><br>
                        <span class="total-price-price">${{orderItem.PriceTotal.toFixed(2)}}</span>
                      </td>
                      <td style="width:calc(60/1920*100vw)"></td>
                    </tr>
                  </table>
                </td>
                <td class="products-td7">
                  <span class="third-payment-text">Waiting for payment</span><br>
                  <router-link to="/Market/Checkout">
                    <q-btn class="third-payment-btn">Pay Now</q-btn><br>
                  </router-link>
                  <span class="third-payment-view">View</span>
                </td>
              </tr>
            </table>
          </td>
          <td class="order-td1"></td>
        </tr>
     </table>
     <table border="0" cellspacing="0" cellpadding="0" class="item" v-if="orderAll2.length>0" v-for="(orderItem, index) in orderAll2">
        <tr class="tr-bottom">
          <td class="order-td1"></td>
          <td class="order-td2">
              <table border="0" cellspacing="0" cellpadding="0" style="border-bottom:1px solid $border-color-1 ">
                <tr style="font-weight: 600">
                  <td class="title-td1">
                    <span class="item1-title1">Created At: </span><span class="item1-data">{{orderItem.createTime}}</span>
                  </td>
                  <td class="title-td2">
                    <span class="item1-title1">Order ID: </span><span class="item1-data">{{orderItem.orderId}}</span>
                  </td>
                  <td class="title-td3">
                        <img src="statics/images/Myorder/online.png" style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; margin-right:4px">
                        <span class="item1-data">Online</span>
                  </td>
                  <td class="title-td4">
                    <span class="item1-Cancelled">Cancelled</span>
                  </td>
                </tr>
              </table>
          </td>
          <td class="order-td1"></td>
        </tr>
        <tr>
          <td class="order-td1"></td>
          <td class="order-td2">
            <table class="bodyTable" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td class="products-td0">
                  <table border="0" cellspacing="0" cellpadding="0" v-if="orderItem.packageAll.length>0" v-for="(packageItem, index) in orderItem.packageAll">
                      <tr v-if="packageItem.packageItem.length>0" v-for="item in packageItem.packageItem">
                        <td class="products-td1">
                           <img :src="item.packageItemImgUrl" style="display: inline-block; vertical-align: middle; width: 80px; height: 80px ">     
                        </td>
                        <td class="products-td2">
                            <span class="item2-name">{{item.packageItemName}}</span>
                            <span class="item2-data">{{item.packageItemMemory}}</span>
                            <span class="item2-data">{{item.packageItemPrimary}}</span>
                            <span class="item2-data">{{item.packageItemColor}}</span>
                        </td>
                        <td class="products-td3">
                            <span class="item2-Upfront">Upfront Price</span><br>
                            <span class="item2-price">${{item.packageItemPrice.toFixed(2)}}</span>
                        </td>
                        <td class="products-td4">
                            <span class="item2-Upfront">Monthly Fee</span><br>
                            <span class="item2-price">${{item.packageItemMonthly.toFixed(2)}}</span>
                        </td>
                        <td class="products-td5">
                            <span class="item2-Number">×{{item.packageItemNumber}}</span>
                        </td>
                      </tr>
                  </table>
                  <table border="0" cellspacing="0" cellpadding="0" v-if="orderItem.itemAll.length>0" v-for="(item, index) in orderItem.itemAll">
                      <tr>
                        <td class="products-td1">
                           <img src="statics/images/Myorder/pic3.png" style="display: inline-block; vertical-align: middle; width: 80px; height: 80px ">     
                        </td>
                        <td class="products-td2">
                            <span class="item2-name">{{item.itemName}}</span>
                            <span class="item2-data">{{item.itemMemory}}</span>
                            <span class="item2-data">{{item.itemPrimary}}</span>
                            <span class="item2-data">{{item.itemColor}}</span>
                        </td>
                        <td class="products-td3">
                            <span class="item2-Upfront">Upfront Price</span><br>
                            <span class="item2-price">${{item.itemPrice.toFixed(2)}}</span>
                        </td>
                        <td class="products-td4">
                            <span class="item2-Upfront">Monthly Fee</span><br>
                            <span class="item2-price">${{item.itemMonthly.toFixed(2)}}</span>
                        </td>
                        <td class="products-td5">
                            <span class="item2-Number">×{{item.itemNumber}}</span>
                        </td>
                      </tr>
                  </table>
                </td>
                <td class="products-td6">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="width:calc(60/1920*100vw)"></td>
                      <td style="width:102px">
                        <span class="total-price-text">Total Price</span><br>
                        <span class="total-price-price">${{orderItem.PriceTotal.toFixed(2)}}</span>
                      </td>
                      <td style="width:calc(60/1920*100vw)"></td>
                    </tr>
                  </table>
                </td>
                <td class="products-td7">
                  <span class="third-order-text">The order has been cancelled</span><br>
                  <span class="third-payment-view">View</span>
                </td>
              </tr>
            </table>
          </td>
          <td class="order-td1"></td>
        </tr>
     </table>
  </div>
</template>

<script>
import {
  QLayout,
  QTabs,
  QRouteTab,
  QSearch,
  QBtn
} from 'quasar'
export default {
  components: {
    QLayout,
    QTabs,
    QRouteTab,
    QSearch,
    QBtn
  },
  data () {
    return {
      orderAll: [
        {
          packageAll: [
            {
              packageType: 'Mobile Kit',
              packageUpfrontTotal: 0,
              packageMonthlyTotal: 0,
              packageNumber: 1,
              packagePriceTotal: 1161,
              packageItem: [
                {
                  packageItemImgUrl: './statics/phone.png',
                  packageItemName: 'Apple iPhone X + 198 Bundle',
                  packageItemPrice: 1149,
                  packageItemUpfront: 1149,
                  packageItemMonthly: 0,
                  packageItemNumber: 1,
                  packageItemType: 'Device',
                  packageItemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
                  packageItemDetail2: 'Delivery: In Stock',
                  packageItemMemory: 'Memory: 256 GB',
                  packageItemPrimary: 'Primary: 198 Bundle',
                  packageItemColor: 'Color: Space gray'
                },
                {
                  packageItemImgUrl: './statics/198.png',
                  packageItemName: '198 Bundle',
                  packageItemPrice: 0,
                  packageItemUpfront: 0,
                  packageItemMonthly: 198,
                  packageItemNumber: 1,
                  packageItemType: 'Plan',
                  packageItemDetail1: 'Voice 300 min, SMS: unlimited, Data: 20 GB',
                  packageItemDetail2: '',
                  packageItemMemory: 'Voice: 300 min',
                  packageItemPrimary: 'SMS: unlimited',
                  packageItemColor: 'Data: 20 GB'
                }
              ]
            }
          ],
          itemAll: [
            {
              itemImgUrl: './statics/phone.png',
              itemName: 'Apple iPhone X + 198 Bundle',
              itemPrice: 1149,
              itemUpfront: 1149,
              itemMonthly: 0,
              itemNumber: 2,
              disabled: false,
              itemType: 'Device',
              itemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
              itemDetail2: 'Delivery: In Stock',
              itemMemory: 'Voice: 300 min',
              itemPrimary: 'SMS: unlimited',
              itemColor: 'Data: 20 GB'
            }
          ],
          PriceTotal: 1161,
          createTime: '2018/03/08 05:39:00',
          orderId: '100001600000003'
        }
      ],
      orderData: [],
      filterKey: '',
      orderAll2: [
        {
          packageAll: [
            {
              packageType: 'Mobile Kit',
              packageUpfrontTotal: 0,
              packageMonthlyTotal: 0,
              packageNumber: 1,
              packagePriceTotal: 1161,
              packageItem: [
                {
                  packageItemImgUrl: './statics/phone.png',
                  packageItemName: 'Apple iPhone X + 198 Bundle',
                  packageItemPrice: 1149,
                  packageItemUpfront: 1149,
                  packageItemMonthly: 0,
                  packageItemNumber: 1,
                  packageItemType: 'Device',
                  packageItemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
                  packageItemDetail2: 'Delivery: In Stock',
                  packageItemMemory: 'Memory: 256 GB',
                  packageItemPrimary: 'Primary: 198 Bundle',
                  packageItemColor: 'Color: Space gray'
                },
                {
                  packageItemImgUrl: './statics/198.png',
                  packageItemName: '198 Bundle',
                  packageItemPrice: 0,
                  packageItemUpfront: 0,
                  packageItemMonthly: 198,
                  packageItemNumber: 1,
                  packageItemType: 'Plan',
                  packageItemDetail1: 'Voice 300 min, SMS: unlimited, Data: 20 GB',
                  packageItemDetail2: '',
                  packageItemMemory: 'Voice: 300 min',
                  packageItemPrimary: 'SMS: unlimited',
                  packageItemColor: 'Data: 20 GB'
                }
              ]
            }
          ],
          PriceTotal: 1161,
          createTime: '2018/03/08 05:39:00',
          orderId: '100001600000003'
        }
      ]
    }
  },
  mounted: function () {
    // this.$route
    this.filterKey = this.$route.query.key
    this.filterOrder()
  },
  methods: {
    del (uuid) {
      let data = this.orderData
      let _data = []
      data.map(function (item) {
        if (item.orderId !== uuid) {
          _data.push(item)
        }
      })
      this.orderData = _data
    },
    filterOrder () {
      let orders = []
      let temp = this.orderAll
      if (this.filterKey) {
        temp.map(function (order) {
          let a = false
          if (order.PriceTotal.toString().indexOf(this.filterKey) >= 0) {
            a = true
          }
          if (order.createTime.toString().indexOf(this.filterKey) >= 0) {
            a = true
          }
          if (order.orderId.toString().indexOf(this.filterKey) >= 0) {
            a = true
          }
          order.itemAll.map(function (item) {
            for (let i in item) {
              if (item[i].toString().indexOf(this.filterKey) >= 0) {
                a = true
              }
            }
          }.bind(this))
          order.packageAll.map(function (_package) {
            for (let i in _package) {
              if (i === 'packageItem') {
                _package.packageItem.map(function (packageArray) {
                  for (let p in packageArray) {
                    if (packageArray[p].toString().indexOf(this.filterKey) >= 0) {
                      a = true
                    }
                  }
                }.bind(this))
              }
              else {
                if (_package[i].toString().indexOf(this.filterKey) >= 0) {
                  a = true
                }
              }
            }
          }.bind(this))
          if (a) {
            orders.push(order)
          }
        }.bind(this))
      }
      else {
        orders = this.orderAll
      }
      console.log(orders)
      this.orderData = orders
    }
  },
  watch: {
    $route: function (val) {
      this.filterKey = val.query.key
      this.filterOrder()
    },
    orderData: function (val) {
      this.socket.$emit('orders.length', val.length)
    }
  }
}
</script>

<template>
  <q-layout
      ref="layout"
      view="hHh lpr fFf"
      :right-breakpoint="1100"
    >
    <!-- 主体 -->
    <div class="payment-box">
      <div class="payment-header">
        <div class="payment-title">Payment</div>
      </div>
      <div class="payment-item">
        <div class="Used-Payment-Method" v-if="have.ofterPay.length > 0">
          <div class="Used-Payment-Method-title">
            Used Payment Method
          </div>
          <div class="Used-Payment-Method-Choice">
            <div 
              v-for="(item, index) in pay.selectOptions"
              v-if="item.value==='1'"
              :class="{'active':(item.id === active.pay), 'Used-Payment-Method-img': true}"
              @click="selectOfterPayType(item)"
            >
              <img 
              :src="item.image"
              style="width: 56%">
              <img src="statics/images/Payment/delete.png" class="payment-delete"  @click.stop="clearOfterPayType(item)"> 
            </div>
            
          </div>
        </div>
        <div class="Payment-Method">
          <div class="Payment-Method-title">
            Payment Method
          </div>
          <div class="Payment-Method-Choice">
            <div v-for="(item, index) in pay.selectOptions" v-if="index%5 === 0">
              <div
                :class="{'active':(pay.selectOptions[index].id === active.pay), 'Payment-Method-img': true}"
                @click="selectPayType(pay.selectOptions[index])"
              >
                <img 
                  :src="pay.selectOptions[index].image"
                  style="width: 56%"
                />
              </div>
              <div
                :class="{'active':(pay.selectOptions[index+1].id === active.pay), 'Payment-Method-img': true}"
                @click="selectPayType(pay.selectOptions[index+1])"
              >
                <img 
                  :src="pay.selectOptions[index+1].image"
                  style="width: 56%"
                />
              </div>
              <div
                :class="{'active':(pay.selectOptions[index+2].id === active.pay), 'Payment-Method-img': true}"
                @click="selectPayType(pay.selectOptions[index+2])"
              >
                <img 
                  :src="pay.selectOptions[index+2].image"
                  style="width: 56%"
                />
              </div>
              <div
                :class="{'active':(pay.selectOptions[index+3].id === active.pay), 'Payment-Method-img': true}"
                @click="selectPayType(pay.selectOptions[index+3])"
              >
                <img 
                  :src="pay.selectOptions[index+3].image"
                  style="width: 56%"
                />
              </div>
              <div
                :class="{'active':(pay.selectOptions[index+4].id === active.pay), 'Payment-Method-img': true}"
                @click="selectPayType(pay.selectOptions[index+4])"
              >
                <img 
                  :src="pay.selectOptions[index+4].image"
                  style="width: 56%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>	
  	<!-- 底部 -->
    <q-toolbar slot="footer" class="payment-footer-footer">
      <div class="payment-footer-data">
        <div class="payment-footer">
        <div class="payment-footer1">
          <div class="payment-footer-img">
            <img src="statics/images/Payment/Vector.png" style="width: 30%">
          </div>
          <div class="payment-footer-text">
            <div>
              <span class="payment-footer-text1">The order </span><span class="payment-footer-text2">100001600000005</span><span class="payment-footer-text1"> has been created.</span>
            </div>
            <div>
              <span class="payment-footer-text3">In order to complete the order successfully, please finish payment after check out in 24 hour</span>
            </div>
          </div>
        </div>
        <div class="payment-footer2">
          <div class="Shipping-Free">
            <span class="Shipping-Free-text">Shipping Free</span>
            <span class="Shipping-Free-price">$0.00</span>
          </div>
          <div class="payment-footer-hr"></div>
          <div class="Order-Total">
            <span class="Order-Total-text">Order Total</span>
            <span class="Order-Total-price">$1161.00</span>
          </div>
          <div class="payment-btn">
           <q-btn class="pay-now-btn">PAY NOW</q-btn>
          </div>
        </div>
        </div>
      </div>
    </q-toolbar>
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
  QSelect,
  QField
} from 'quasar'
import payment from 'data/payment.json'
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
    QSelect,
    QField
  },
  data () {
    return {
      pay: payment.data,
      active: {
        pay: 0
      },
      have: {
        ofterPay: payment.data.selectOptions.filter(function (item) {
          if (item.value === '1') {
            return item
          }
        })
      }
    }
  },
  methods: {
    selectPayType (item) {
      // console.log(item)
      this.active.pay = item.id
    },
    selectOfterPayType (item) {
      // console.log(item)
      this.active.pay = item.id
    },
    clearOfterPayType (item) {
      // console.log(this.pay.selectOptions)
      this.pay.selectOptions.map(function (i) {
        if (i.id === item.id) {
          i.value = '0'
        }
      })
      this.have.ofterPay = this.pay.selectOptions.filter(function (i) {
        if (i.value === '1') {
          return i
        }
      })
    }
  }
}
</script>
<style lang="stylus">
@import '~themes/app.variables'
.payment-box
  // height calc(100vh - 120px)
  display flex
  // justify-content flex-end
  flex-direction column
  align-items center
  padding-top 88px
  padding-bottom 152px
  font-weight bold
  >div
    >div
      letter-spacing 1px
      >div
        letter-spacing 1px
  .payment-header
    // width calc(100% - 350px)
    width calc(100% - 350/1920*100vw)
    // min-width 1286px
    height 88px
    display flex
    align-items center
    flex-shrink 0
  .payment-title
    width 100%
    height 24px
    color $all-color-1
    font-size 24px
    font-weight bold
  .payment-item
    // width calc(100% - 350px)
    width calc(100% - 350/1920*100vw)
    // min-width 1286px
    height 100%
    display flex
    // justify-content center
    flex-direction column
    align-items center
    border 1px solid $border-color-1 
  .Used-Payment-Method
    flex-shrink 0
    width 100%
    .Used-Payment-Method-title
      display flex
      align-items center
      // height calc(40/1920*100vw)
      height 47px
      font-size 14px
      color $all-color-3
      margin 0 32px 15px
      border-bottom 1px solid $border-color-1 
    .Used-Payment-Method-Choice
      display flex
      flex-direction row
      flex-wrap wrap
      margin 0 32px
    .Used-Payment-Method-img
      // width calc(290/1920*100vw)
      // height calc(146/1920*100vw)
      width calc(288/1920*100vw)
      height calc(144/1920*100vw)
      // min-width 196px
      // min-height 98px
      border 1px solid $border-color-1 
      border-radius 4px
      background $all-color-2
      display flex
      align-items center
      justify-content center
      margin 16px 0 16px 16px
      cursor pointer
      &.active
        border 1px solid $background-color-4
      &:hover
        .payment-delete
          display flex
    .Used-Payment-Method-img:first-child
      margin-left 0
    .payment-delete
      width calc(32/1920*100vw)
      position absolute
      display none
      align-self flex-start
      margin -1% 0 0 7.2%
  .Payment-Method
    width 100%
    height 100%
    display flex
    flex-direction column
    padding-bottom 16px
    .Payment-Method-title
      flex-shrink 0
      display flex
      align-items center
      height 47px
      font-size 14px
      color $all-color-3
      margin 0 32px 15px
      border-bottom 1px solid $border-color-1 
    .Payment-Method-Choice
      // height 100%
      // overflow auto
      display flex
      // flex-direction row
      flex-wrap wrap
      // justify-content space-evenly
      margin 0 32px
      cursor pointer
      >div
        width 100%
        display flex
    .Payment-Method-img
      width calc(288/1920*100vw)
      height calc(144/1920*100vw)
      // width 288px
      // height 144px
      // min-width 196px
      // min-height 98px
      border 1px solid $border-color-1 
      border-radius 4px
      background $background-color-5
      display flex
      align-items center
      justify-content center
      margin 16px 0 0 16px
      &.active
        background $all-color-2
        border 1px solid $background-color-4
    .Payment-Method-img:nth-child(1), .Payment-Method-img:nth-child(6), .Payment-Method-img:nth-child(11)
      margin-left 0
.payment-footer-footer
  background $all-color-2
  color $all-color-1
  display flex
  justify-content center
  align-items center
  position fixed
  bottom 0px
  font-family Helvetica Neue !important
  .payment-footer-data
    display flex
    // align-items center
    justify-content center
    width 100%
  .payment-footer1
    // width 56%
    // min-width 300px
    display flex
    // align-items center
    font-weight 600
    >div
      >span
        letter-spacing 0px
  .payment-footer2
    // width 44%
    // min-width 200px
    display flex
    // align-items center
    >div
      display flex
      flex-direction column
      justify-content space-between
      >span
        white-space nowrap
  .payment-footer
    width calc(100% - 350 / 1920 * 100vw)
    height 120px
    // min-width 1286px
    display flex
    // align-items center
    justify-content space-between
    .payment-footer-img
      width calc(64/1920*100vw)
      height calc(64/1920*100vw)
      border-radius 50px
      min-width 50px
      min-height 50px
      background $background-color-5
      display flex
      align-items center
      justify-content center
      margin 0 14px 0 0
    .payment-footer-text
      // width calc(786/1920*100vw)
      // min-width 200px
      height calc(64 / 1920 * 100vw)
      color $all-color-1
      margin-right 10px
      >div >span
        letter-spacing 0
      >div:first-child
        height 32px
        line-height 32px
      >div:last-child
        height 32px
        line-height 1
    .payment-footer-text1
      font-size calc(16/1920*100vw)
    .payment-footer-text2
      font-size calc(16/1920*100vw)
      color $font-color-4
    .payment-footer-text3
      font-size calc(14/1920*100vw)
      color $font-color-5
      font-weight 400
    .Shipping-Free
      height calc(64/1920*100vw)
      // min-width 160px
      text-align left
      // border-right 1px solid $border-color-1 
      // padding-right calc(60/1920*100vw)
    .payment-footer-hr
      height calc(48/1920*100vw)
      width 1px
      background $border-color-1 
      margin 8px calc(60/1920*100vw) 8px calc(60/1920*100vw)
      // margin-right calc(24/1920*100vw)
    .Shipping-Free-text
      color $font-color-5
      font-size calc(14/1920*100vw)
      font-weight 600
      line-height 32px
      // line-height 2.4
      letter-spacing 0px
    .Shipping-Free-price
      color $all-color-1
      font-size calc(24/1920*100vw)
      font-weight bold
      letter-spacing 0
    .Order-Total
      height calc(64/1920*100vw)
      // min-width 150px
      text-align left
      // margin-left calc(24/1920*100vw)
      // padding-right calc(60/1920*100vw)
    .Order-Total-text
      color $font-color-5
      font-size calc(14/1920*100vw)
      font-weight 600
      line-height 32px
      // line-height 2.4
      letter-spacing 0px
      // min-width 150px
    .Order-Total-price
      color $all-color-1
      font-size calc(24/1920*100vw)
      font-weight bold
      letter-spacing 0
    .payment-btn
      width calc(320/1920*100vw)
      height calc(64/1920*100vw)
      margin-left calc(60/1920*100vw)
    .pay-now-btn
      width calc(320/1920*100vw)
      min-width 32px
      height calc(64/1920*100vw)
      min-height 32px
      color $all-color-2
      background $background-color-4
      border-radius 50px
      box-shadow 0 0 0 white
      font-size calc(24/1920*100vw)
.layout-footer
  box-shadow 0 0 0 white
.q-toolbar
  padding 0 0 0 0
</style>
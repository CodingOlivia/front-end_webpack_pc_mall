<template>
  <div class="orderDetailWrap">
    <div class="orderStatue-wrap">
       <div class="main">
           <div class="orderStatue-title"> Order Status</div>
           <div class="orderStatue-inner row items-stretch">
               <div class="orderStatue-left">
                   <div class="order-name">Awaiting Payment</div>
                   <div class="order-num">Order No: <span >43654664643589</span></div>
                   <div class="order-action row">
                       <div class="col">
                           <span class="btn primary">PAY NOW</span>
                       </div>
                       <div class="col">
                           <span class="btn">Cancel Order</span>
                       </div>
                       
                       
                   </div>
               </div>
               <div class="orderStatue-right col">
                   <div class="order-process row ">
                       <div class="col order-process-step active">
                            <div>
                                <span class="order-step-img order-step01"></span>
                            </div>
                            <div class="order-process-title">
                                Orders Submit
                            </div>
                            <div class="order-process-date">
                                2016-10-07 16:15:23
                            </div>
                       </div>
                       <div class="order-process-step col active">
                            <div>
                                <span class="order-step-img order-step02"></span>
                            </div>
                            <div class="order-process-title">
                                Payment Successful
                            </div>
                       </div>
                       <div class="order-process-step col">
                            <div>
                                <span class="order-step-img order-step03"></span>
                            </div>
                            <div class="order-process-title">
                                On Process
                            </div>
                       </div>
                       <div class="order-process-step col ">
                            <div>
                                <span class="order-step-img order-step04"></span>
                            </div>
                            <div class="order-process-title">
                                Finished
                            </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
    <div class="delivery-wrap">
      <div class="main">
        <div class="delivery-title">Delivery Info</div>
        <div class="delivery-tabs">
          <span v-for="(item,index) in tabs" :class="{'active':selecIndex==index}" :style="{'z-index':tabs.length-index}" @click="selecIndex=index">{{item.name}}</span>
        </div>
        <div class="delivery-inner-wrapper">
          
          <div class="delivery-con">
              <div class="m-content">
                <div class="delivery-con-wrapper">
                  <div class="delivery-wrapper-left">
                      
                      <div class="">
                        <div class="delivery-pro">
                            <div class="delivery-pro-img">
                                <img src="statics/images/Myorder/pic1.png" alt="" />
                            </div>
                            <div class="delivery-pro-info">
                                <div class="pro-title">Huawei P9 Contract Phone</div>
                                <div class="pro-prop">Memory: 256 GB</div>
                                <div class="pro-prop">Primary: 198 Bundle</div>
                                <div class="pro-prop">Color: Space gray</div>
                                <div class="pro-prop pro-prop-share">Share from: 12******12@Hotmail.com</div>
                            </div>
                            <div class="pro-count"><span>× 1</span></div>
                        </div>
                        <div class="delivery-pro">
                            <div class="delivery-pro-img">
                                <img src="statics/images/Myorder/pic2.png" alt="" />
                            </div>
                            <div class="delivery-pro-info">
                                <div class="pro-title">Huawei P9 Contract Phone</div>
                                <div class="pro-prop">Memory: 256 GB</div>
                                <div class="pro-prop">Primary: 198 Bundle</div>
                                <div class="pro-prop">Color: Space gray</div>
                            </div>
                            <div class="pro-count"><span>× 1</span></div>
                        </div>
                        <div class="delivery-pro">
                            <div class="delivery-pro-img">
                                <img src="statics/images/Myorder/pic1.png" alt="" />
                            </div>
                            <div class="delivery-pro-info">
                                <div class="pro-title">Huawei P9 Contract Phone</div>
                                <div class="pro-prop">Memory: 256 GB</div>
                                <div class="pro-prop">Primary: 198 Bundle</div>
                                <div class="pro-prop">Color: Space gray</div>
                            </div>
                            <div class="pro-count"><span>× 1</span></div>
                        </div>
                      </div>
                  </div>
                  <div class="delivery-wrapper-right col">
                    <div class="info-step" >
                      <div class="info-step-item active">
                        <div class="info-step-icon">
                          <i class="l-t"></i>
                          <div class="info-step-dot"></div>
                        </div>
                        <div class="info-step-text">
                          <div class="tit">Oct,15 2016    16:15:23</div>
                          <div class="desc">
                            <span>Location MISSISSAUGA, ON</span>
                            <span>Items out for delivery</span>
                          </div>
                        </div>
                      </div>
                      <div class="info-step-item">
                        <div class="info-step-icon">
                          <i class="l-t"></i>
                          <div class="info-step-dot"></div>
                        </div>
                        <div class="info-step-text">
                          <div class="tit">Oct,14 2016    00:12:28</div>
                          <div class="desc">
                            <span>Location RICHMOND, BC</span>
                            <span>Items processed at postal facility</span>
                          </div>
                        </div>
                      </div>
                      <div class="info-step-item">
                        <div class="info-step-icon">
                          <i class="l-t"></i>
                          <div class="info-step-dot"></div>
                        </div>
                        <div class="info-step-text">
                          <div class="tit">Oct,13 2016    12:02:09</div>
                          <div class="desc">
                            <span>Location VANCOUVER</span>
                            <span>Items picked up by USPS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
            </div>
          </div>
          <div class="delivery-footer">
                <div class="delivery-footer-inner">
                  <div class="row delivery-text items-center">
                      <div class="col-auto">
                           <img src="~statics/icon-express-circle.png" alt="">
                      </div>
                      <div class="col ytx-pl">
                          <div class="delivery-item"><span class="delivery-desc">Logistics No. <b>471443558851</b></span>Shipping by <b>EMS</b> with <b>Express</b>, During Daytime(9:00~17:00) for All Days.</div>
                          <div class="">
                            <span class="delivery-desc"><b>Haitao Wang</b></span>
                            <span class="delivery-desc">Software Avenue #101,JIangning District, Nanjing, JIangsu  </span>
                            <span class="delivery-desc">18551808810</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feeDetails ">
      <div class="main">
        <h3>Fee Details</h3>
         <div class="feeDetails-con">
           <div>
            <table border="0" cellspacing="0" cellpadding="0" >
              <tr>
                
                <td>
                  <table border="0" style="margin:0;border-spacing:0px;width:calc(1502/1920*100vw);" class="bodyTable">
                    <tr class="table-tr1">
                      <table border="0" cellspacing="0" cellpadding="0" style="margin:0;border-spacing:0px">
                        <tr>
                          <td class="table-td1-2" style="padding-left: 16px;">
                            Item Name
                          </td>
                          <td class="table-td1-1">
                          </td>
                          <td class="table-td2">Unit Price</td>
                          <td class="table-td3">Quantity</td>
                          <td class="table-td4">Tax</td>
                          <td class="table-td5">Discount</td>
                          <td class="table-td6">Mothly Fee</td>
                          <td class="table-td7">Subtotal Price</td>
                          <td class="table-td8"></td>
                        </tr>
                      </table>
                    </tr>
                    <tr v-for="packageItem in checkOut.package">
                      <table border="0" cellspacing="0" cellpadding="0" style="margin:0;border-spacing:0px">
                        <tr v-for="(item,index) in packageItem.packageItem">
                          <td class="table-td1" :class="{'table-td1-2':packageItem.packageItem.length==index+1}">
                            <div class="item2-img">
                              <img :src="item.packageItemImgUrl" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px ">     
                            </div>
                          </td>
                          <td class="table-td1-1">
                            <div class="item2-text">
                              <span class="item2-name">{{item.packageItemName}}</span><br>
                              <span class="item2-data">{{item.packageItemDetail3}}</span><br>
                              <span class="item2-data">{{item.packageItemDetail4}}</span><br>
                              <span class="item2-data">{{item.packageItemDetail5}}</span>
                            </div>
                          </td>
                          <td class="table-td2">${{item.packageItemPriceNumber.toFixed(2)}}</td>
                          <td class="table-td3">× {{item.packageItemNumber}}</td>
                          <td class="table-td4">${{item.packageItemTax.toFixed(2)}}</td>
                          <td class="table-td5">${{item.packageItemDiscount.toFixed(2)}}</td>
                          <td class="table-td6">${{item.packageItemMonthly.toFixed(2)}}</td>
                          <td class="table-td7">${{item.packageItemPriceNumber.toFixed(2)}}</td>
                          <td class="table-td8"></td>
                        </tr>
                      </table>
                    </tr>
                    <tr v-for="item in checkOut.item">
                      <table border="0" cellspacing="0" cellpadding="0" style="margin:0;border-spacing:0px">
                        <tr>
                          <td class="table-td1-2">
                            <div class="item2-img">
                              <img :src="item.itemImgUrl" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px">     
                            </div>
                          </td>
                          <td class="table-td1-1">
                            <div class="item2-text">
                              <span class="item2-name">{{item.itemName}}</span><br>
                              <span class="item2-data">{{item.itemDetail3}}</span><br>
                              <span class="item2-data">{{item.itemDetail4}}</span><br>
                              <span class="item2-data">{{item.itemDetail5}}</span>
                            </div>
                          </td>
                          <td class="table-td2">${{item.itemPrice.toFixed(2)}}</td>
                          <td class="table-td3">× {{item.itemNumber}}</td>
                          <td class="table-td4">${{item.itemTax.toFixed(2)}}</td>
                          <td class="table-td5">${{item.itemDiscount.toFixed(2)}}</td>
                          <td class="table-td6">${{item.itemMonthly.toFixed(2)}}</td>
                          <td class="table-td7">${{item.itemPrice.toFixed(2)}}</td>
                          <td class="table-td8"></td>
                        </tr>
                      </table>
                    </tr>
                  </table>
                </td>
            </tr>
            </table>
          </div>
          <div class="checkout-total">
              <div class="total">
                <div class="decuctedBox">
                  <div class="decucted">Account Decucted:</div>
                  <div class="number">$0.00</div>
                </div>
                <div class="tax">
                  <div class="tax">Tax:</div>
                  <div class="number">$0.00</div>
                </div>
                <div class="fee">
                  <div class="fee">Fee:</div>
                  <div class="number">$0.00</div>
                </div>
                <div class="freight">
                  <div class="freight">Freight:</div>
                  <div class="number">$198.00</div>
                </div>
                <div class="subTotal">
                  <div class="subTotal">Total Recievable:</div>
                  <div class="number">${{total.toFixed(2)}}</div>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
    <div class="info-wrap">
        <div class="main">
            <div class="row">
                <div class="col-6">
                    <div class="info-title">Invoice Info</div>
                    <div class="info-item info-item1">
                        <div><span class="info-prop">Print Method:</span> Print together </div>
                        <div><span class="info-prop">Invoice No.:</span> 021545628 </div>
                        <div><span class="info-prop">Customer Name:</span> Steven .J . George </div>
                    </div>
                </div>
                <div class="col-6">
                    <div  class="info-title pl16">Payment Info</div>
                    <div class="info-item info-item2">
                        <div><span class="info-prop">Payment Time:</span> 2017-01-01</div>
                        <div><span class="info-prop">Payment Status:</span> Finish </div>
                        <div><span class="info-prop">Payment Method:</span> Online payment </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="remark-wrap">
        <div class="main">
             <div class="remark-con">
                 <span class=""><b>remark</b></span>  Please Send  SF Express
             </div>
             
        </div>
       
    </div>
    <div style="width:82%;margin:0 auto;margin-bottom:40px">
       <swiperPic :title="title" :swiperData=picsData :view=viewCount></swiperPic>
    </div>
    
  </div>

</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QField,
  QTabs,
  QRouteTab,
  QItemSide,
  QItemMain,
  QListHeader,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QOptionGroup,
  QIcon,
  QItemTile,
} from 'quasar'
import checkOut from 'data/orderDetail.json'
import Recommendation from 'data/Recommendation.json'
import newProducts from 'data/home-newproducts.json'
import swiperPic from '../ucd/common/recommendation.vue'
export default {
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QField,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition,
    QItemTile,
  },
  data () {
    return {
      picsData:Recommendation.data.items,
      viewCount:5,
      checkOut: checkOut, 
      total: 0,
      selecIndex:0,
      title:'Recommendation',
      tabs:[{
        name:'Pakage1'
      },{
        name:'Pakage2'
      },{
        name:'Pakage13'
      }]
    }
  },
  methods: {
  },
  mounted () {

    
  },
  components:{
    swiperPic
  },
  watch: {

  }
}
</script>


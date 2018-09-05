<template>
  <div class="shoppingbagBox2">
    <div class="shoppingBox2">
      <div class="shoppingBoxTitle">
        <table border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th class="td0" width="6%">
                <div class="shoppingbtn" v-if="orderAll.packageAll.length > 0 || orderAll.contractAll.length > 0 || orderAll.itemAll.length > 0 || orderAll.itemAllSee.length > 0 || orderAll.itemAllOut.length > 0" v-bind:class="{'active':orderAll.check}" @click="checkAll(orderAll.check)">
                  <q-icon name="done"/>
                </div>
                <div class="shoppingbtn" v-else>
                  <q-icon name="done"/>
                </div>
              </th>
              <th class="td1" width="10%">
                <div>Check All</div>
              </th>
              <th class="td2">
                <div>Item</div>
              </th>
              <th class="td3" width="12%">
                <div>Unit</div>
              </th>
              <th class="td4" width="20.6%">
                <div>Subtotal</div>
              </th>
              <th class="td5" width="14.4%">
                <div>Operation</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tableBox">
        <table border="0" cellspacing="0" cellpadding="0" v-for="(packItem, index) in orderAll.packageAll">
          <thead>
            <tr>
              <th class="td0" width="6%"></th>
              <th class="td1" width="10%"></th>
              <th class="td2"></th>
              <th class="td3" width="12%"></th>
              <th class="td4" width="20.6%"></th>
              <th class="td5" width="14.4%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index2) in packItem.packageItem">
              <td class="td0" width="6%">
                <div class="shoppingbtnTransparent">
                  <q-icon name="done"/>
                </div>
              </td>
              <td class="td1" width="10%">
                <div class="td1-img">
                  <img :src="item.packageItemImgUrl" />
                </div>
              </td>
              <td class="td2">
                <div class="td2-text">
                  <span>{{item.packageItemName}}</span>
                  <span>${{item.packageItemPrice.toFixed(2)}}<span v-if="item.packageItemType==='Plan'"> /mo.</span>
                  <span class="productType">{{item.packageItemType}}</span></span>
                  <span>{{item.packageItemDetail}}</span>
                </div>
              </td>
              <td class="td3" width="12%">
                <div class="td3-text">
                  <span>× {{item.packageItemNumber}}</span>
                </div>
              </td>
              <td class="td4" width="20.6%">
                <div class="td4-text">
                  <span>{{item.packageItemPriceType}}</span>
                  <span>${{item.packageItemUpfront.toFixed(2)}}</span>
                </div>
              </td>
              <td v-if="index2===0" class="td5" :rowspan="packItem.packageItem.length" width="14.4%">
                <div class="td5-remove1">
                  <i class="removeIcon" @click="removePackage(index)"></i>
                  <span @click="removePackage(index)">Remove</span>
                </div>
              </td>
            </tr>
            <tr class="trBottom">
              <td class="td0">
                <div class="trBottom-shoppingbtn">
                  <div class="shoppingbtn" v-bind:class="{'active':packItem.check}" @click="packItem.check=!packItem.check,checkEvent()">
                    <q-icon name="done"/>
                  </div>
                </div>
              </td>
              <td class="td1 td-border">
                <div class="td1-text">
                  {{packItem.packageType}}
                </div>
              </td>
              <td class="td2 td-border">
                <div class="blankSpace">
                </div>
              </td>
              <td class="td3 td-border">
                <div class="td3-floor-text">
                  <span>Upfront:</span>
                  <span>${{packItem.packageUpfrontTotal.toFixed(2)}}</span>
                </div>
              </td>
              <td class="td4 td-border">
                <div class="td4-floor-text">
                  <span>Monthly Rental:</span>
                  <span>${{packItem.packageMonthlyTotal.toFixed(2)}}</span>
                </div>
              </td>
              <td class="td5">
              </td>
            </tr>
          </tbody>
        </table>
        <table border="0" cellspacing="0" cellpadding="0" v-for="(contraItem, index) in orderAll.contractAll">
          <thead>
            <tr>
              <th class="td0" width="6%"></th>
              <th class="td1" width="10%"></th>
              <th class="td2"></th>
              <th class="td3" width="12%"></th>
              <th class="td4" width="20.6%"></th>
              <th class="td5" width="14.4%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index2) in contraItem.contractItem">
              <td class="td0" width="6%">
                <div class="shoppingbtn" v-if="index2===0" v-bind:class="{'active':contraItem.check}" @click="contraItem.check=!contraItem.check,checkEvent()">
                  <q-icon name="done"/>
                </div>
                <div class="shoppingbtn" v-else>
                  <q-icon name="done"/>
                </div>
              </td>
              <td class="td1" width="10%">
                <div class="td1-img">
                  <img :src="item.contractItemImgUrl" />
                </div>
              </td>
              <td class="td2">
                <div class="td2-text">
                  <span>{{item.contractItemName}}</span>
                  <span>${{item.contractItemPrice.toFixed(2)}}<span v-if="item.contractItemName==='Monthly Fee'"> /mo.</span>
                  <span class="productType">{{item.contractItemType}}</span></span>
                  <span>{{item.contractItemDetail}}</span>
                </div>
              </td>
              <td class="td3" width="12%">
                <div class="td3-text">
                  <span>× {{item.contractItemNumber}}</span>
                </div>
              </td>
              <td class="td4" width="20.6%">
                <div class="td4-text">
                  <span>{{item.contractItemPriceType}}</span>
                  <span>${{item.contractItemUpfront.toFixed(2)}}</span>
                </div>
              </td>
              <td v-if="index2===0" class="td5" :rowspan="contraItem.contractItem.length" width="14.4%">
                <div class="td5-remove1">
                  <i class="removeIcon" @click="removeContract(index)"></i>
                  <span @click="removeContract(index)">Remove</span>
                </div>
              </td>
            </tr>
            <tr class="trBottom">
              <td class="td0">
                <div class="trBottom-shoppingbtn">
                  <div class="shoppingbtn" v-bind:class="{'active':contraItem.check}" @click="contraItem.check=!contraItem.check,checkEvent()">
                    <q-icon name="done"/>
                  </div>
                </div>
              </td>
              <td class="td1 td-border">
                <div class="td1-text">
                  {{contraItem.contractType}}
                </div>
              </td>
              <td class="td2 td-border">
                <div class="blankSpace">
                </div>
              </td>
              <td class="td3 td-border">
                <div class="td3-floor-text">
                  <span>Upfront:</span>
                  <span>${{contraItem.contractUpfrontTotal.toFixed(2)}}</span>
                </div>
              </td>
              <td class="td4 td-border">
                <div class="td4-floor-text">
                  <span>Monthly Rental:</span>
                  <span>${{contraItem.contractMonthlyTotal.toFixed(2)}}</span>
                </div>
              </td>
              <td class="td5">
              </td>
            </tr>
          </tbody>
        </table>
        <table border="0" cellspacing="0" cellpadding="0" v-for="(item, index) in orderAll.itemAll">
          <thead>
            <tr>
              <th class="td0" width="6%"></th>
              <th class="td1" width="10%"></th>
              <th class="td2"></th>
              <th class="td3" width="12%"></th>
              <th class="td4" width="20.6%"></th>
              <th class="td5" width="14.4%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td0" width="6%">
                <div class="shoppingbtn" v-bind:class="{'active':item.check}" @click="item.check=!item.check,checkEvent()">
                  <q-icon name="done"/>
                </div>
              </td>
              <td class="td1" width="10%">
                <div class="td1-img">
                  <img :src="item.itemImgUrl" />
                </div>
              </td>
              <td class="td2">
                <div class="td2-text">
                  <span>{{item.itemName}}</span>
                  <span>${{item.itemPrice.toFixed(2)}}<span class="productType">{{item.itemType}}</span></span>
                  <span>{{item.itemDetail}}</span>
                </div>
              </td>
              <td class="td3" width="12%">
                <div class="td3-data">
                  <div class="itemNumber">
                    <button  v-on:click="min(index)"><i class="sub"></i></button>
                    <input type="text" v-model="item.itemNumber" 
                      onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"  
                      onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"
                    />
                    <button  v-on:click="add(index)"><i class="add"></i></button>
                  </div>
                </div>
              </td>
              <td class="td4" width="20.6%">
                <div class="td4-text">
                  <span>{{item.itemPriceType}}</span>
                  <span>${{item.itemUpfront.toFixed(2)}}</span>
                </div>
              </td>
              <td class="td5" width="14.4%">
                <div class="td5-remove">
                  <i class="removeIcon" @click="removeItem(index)"></i>
                  <span @click="removeItem(index)">Remove</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table border="0" cellspacing="0" cellpadding="0" v-for="(item, index) in orderAll.itemAllSee">
          <thead>
            <tr>
              <th class="td0" width="6%"></th>
              <th class="td1" width="10%"></th>
              <th class="td2"></th>
              <th class="td3" width="12%"></th>
              <th class="td4" width="20.6%"></th>
              <th class="td5" width="14.4%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td0" width="6%">
                <div class="shoppingbtn2" v-bind:class="{'active':item.check}" @click="item.check=!item.check,checkEvent()">
                  <q-icon name="done"/>
                </div>
              </td>
              <td class="td1" width="10%">
                <div class="td1-img2">
                  <img :src="item.itemImgUrl" />
                </div>
              </td>
              <td class="td2">
                <div class="td2-text">
                  <span>{{item.itemName}}</span>
                  <span>${{item.itemPrice.toFixed(2)}}<span class="productType">{{item.itemType}}</span></span>
                  <span>{{item.itemDetail}}</span>
                </div>
              </td>
              <td class="td3" width="12%">
                <div class="td3-data">
                  <div class="itemNumber">
                    <button  v-on:click="min2(index)"><i class="sub"></i></button>
                    <input type="text" v-model="item.itemNumber" 
                      onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"  
                      onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"
                    />
                    <button  v-on:click="add2(index)"><i class="add"></i></button>
                  </div>
                </div>
              </td>
              <td class="td4" width="20.6%">
                <div class="td4-text">
                  <span>{{item.itemPriceType}}</span>
                  <span>${{item.itemUpfront.toFixed(2)}}</span>
                </div>
              </td>
              <td class="td5" width="14.4%">
                <div class="td5-remove2">
                  <i class="removeIcon" @click="removeItem3(index)"></i>
                  <span @click="removeItem3(index)">Remove</span>
                </div>
              </td>
            </tr>
            <tr class="Installment">
              <td class="td0" width="6%"></td>
              <td class="td1" width="10%">
                <div class="td1-toggle">
                  <q-toggle v-model="check1"/>
                </div>
              </td>
              <td class="td2">
                <div class="td2Text">
                  <span>Payment by Installment</span>
                  <span>Poundage: <span>$351.00</span></span>
                  <span>Surtotal: <span>$1500.00</span></span>
                </div>
              </td>
              <td class="td3" width="12%">
                <div class="selectBox">
                  <div @click="providerToggle" type="text" class="selectInner">× {{providerInner}}<div class="select-icon"><img v-bind:class="[providerShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
                    <ul v-show="providerShow">
                      <li
                        v-for="(item, index) in options"
                        @click="providerSelect(index)"
                      >{{item.label}}</li>
                    </ul>
                  </div>
                </div>
              </td>
              <td class="td4" width="20.6%"></td>
              <td class="td5" width="14.4%"></td>
            </tr>
            <tr class="Installment-bottom">
              <td class="td0" width="6%"></td>
              <td class="td1" width="10%">
              </td>
              <td class="td2">
              </td>
              <td class="td3" width="12%">
              </td>
              <td class="td4" width="20.6%"></td>
              <td class="td5" width="14.4%"></td>
            </tr>
          </tbody>
        </table>
        <table border="0" cellspacing="0" cellpadding="0" v-for="(item, index) in orderAll.itemAllOut">
          <thead>
            <tr>
              <th class="td0" width="6%"></th>
              <th class="td1" width="10%"></th>
              <th class="td2"></th>
              <th class="td3" width="12%"></th>
              <th class="td4" width="20.6%"></th>
              <th class="td5" width="14.4%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td0" width="6%">
                <div class="shoppingbtnOut"  style="cursor: auto;">
                  <q-icon name="done"/>
                </div>
                <div class="littleTips">
                  Sold Out
                </div>
              </td>
              <td class="td1" width="10%">
                <div class="td1-img">
                  <img :src="item.itemImgUrl" />
                </div>
                <div class="shade">
                </div>
              </td>
              <td class="td2">
                <div class="td2-text">
                  <span>{{item.itemName}}</span>
                  <span>${{item.itemPrice.toFixed(2)}}<span class="productType">{{item.itemType}}</span></span>
                  <span>{{item.itemDetail}}</span>
                </div>
                <div class="shade">
                </div>
              </td>
              <td class="td3" width="12%">
                <div class="td3-data">
                  <div class="itemNumber">
                    <button  v-on:click="min(index)"><i class="sub"></i></button>
                    <input type="text" v-model="item.itemNumber" 
                      onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"  
                      onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"
                    />
                    <!-- <i>{{item.itemNumber}}</i> -->
                    <button  v-on:click="add(index)"><i class="add"></i></button>
                  </div>
                </div>
                <div class="shade">
                </div>
              </td>
              <td class="td4" width="20.6%">
                <div class="td4-text">
                  <span>{{item.itemPriceType}}</span>
                  <span>${{item.itemUpfront.toFixed(2)}}</span>
                </div>
                <div class="shade">
                </div>
              </td>
              <td class="td5" width="14.4%">
                <div class="td5-remove" @click="removeItem2(index)">
                  <i class="removeIcon"></i>
                  <span>Remove</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="emptyBox" v-if="orderAll.packageAll.length === 0 && orderAll.contractAll.length === 0 && orderAll.itemAll.length === 0 && orderAll.itemAllSee.length === 0 && orderAll.itemAllOut.length === 0">
        <div class="empty1">
          <span>There are no items in your bag.</span>
        </div>
        <div class="empty2">
          <span>If you are trying to add items to your bag and it remains empty, you may have cookies disabled in your browser settings. If that's the case, please enable acceptance of cookies and try again.</span>
        </div>
        <div class="empty3">
          <i></i>
        </div>
        <div class="empty4">
          <div class="empty4_Btn" @click="jumpSearch()">
            Continue Shopping
          </div>
        </div>
      </div>
      <div class="shoppingBoxFloor"  ref="shoppingBoxFloor" v-if="orderAll.packageAll.length > 0 || orderAll.contractAll.length > 0 || orderAll.itemAll.length > 0 || orderAll.itemAllSee.length > 0 || orderAll.itemAllOut.length > 0">
        <div class="floor-box">
          <div>
            <div class="shoppingbtn" v-bind:class="{'active':orderAll.check}" @click="checkAll(orderAll.check)">
              <q-icon name="done"/>
            </div>
            <span>The Selected ({{orderAll.packageAll.length + orderAll.contractAll.length + orderAll.itemAll.length + orderAll.itemAllSee.length}})</span>
          </div>
          <div>
            <div>
              <span>Upfront</span>
              <span>$1161.00</span>
            </div>
            <div>
              <span>Monthly Rental</span>
              <span>$396.00</span>
            </div>
            <div @click="payment">
              <span>CHENKOUT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QToggle,
  QIcon
} from 'quasar'
// import allData from 'data/allData.json'
export default {
  props: ['searchString'],
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QToggle,
    QIcon
  },
  data () {
    return {
      providerInner: '12',
      providerShow: false,
      check1: true,
      offSetTop:0,
      options: [
        {
          label: '12',
          value: '12'
        },
        {
          label: '24',
          value: '24'
        }
      ],
      // counters: 1,
      // counter: 1,
      trans:true,
      orderAll: {
        packageAll: [
          {
            packageType: 'Mobile Kit',
            packageUpfrontTotal: 1288,
            packageMonthlyTotal: 396,
            packageNumber: 1,
            packagePriceTotal: 1161,
            disabled: false,
            check: true,
            packageItem: [
              {
                packageItemImgUrl: './statics/phone.png',
                packageItemName: 'Apple iPhone X + 198 Bundle Apple iPhone X + 198 Bundle Apple iPhone X + 198 Bundle Apple iPhone X + 198 Bundle',
                packageItemPriceType: 'Upfront',
                packageItemPrice: 1149,
                packageItemUpfront: 1149,
                packageItemMonthly: 0,
                packageItemNumber: 1,
                packageItemType: 'Device',
                packageItemDetail: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray, Delivery: In Stock',
                packageItemMemory: 'Memory: 256 GB',
                packageItemPrimary: 'Primary: 198 Bundle',
                packageItemColor: 'Color: Space gray'
              },
              {
                packageItemImgUrl: './statics/198.png',
                packageItemName: '198 Bundle',
                packageItemPriceType: 'Monthly Rental',
                packageItemPrice: 198,
                packageItemUpfront: 198,
                packageItemMonthly: 198,
                packageItemNumber: 1,
                packageItemType: 'Plan',
                packageItemDetail: 'Voice 300 min, SMS: unlimited, Data: 20 GB',
                packageItemMemory: 'Voice: 300 min',
                packageItemPrimary: 'SMS: unlimited',
                packageItemColor: 'Data: 20 GB'
              }
            ]
          }
        ],
        contractAll: [
          {
            contractType: 'Contract Phone',
            contractUpfrontTotal: 1288,
            contractMonthlyTotal: 396,
            contractNumber: 1,
            contractPriceTotal: 1161,
            disabled: false,
            check: true,
            contractItem: [
              {
                contractItemImgUrl: './statics/phone.png',
                contractItemName: 'Apple iPhone X + 198 Bundle',
                contractItemPriceType: 'Upfront',
                contractItemPrice: 1149,
                contractItemUpfront: 1149,
                contractItemMonthly: 0,
                contractItemNumber: 1,
                contractItemType: 'Device',
                contractItemDetail: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray, Delivery: In Stock'
              },
              {
                contractItemImgUrl: './statics/CashPledge.png',
                contractItemName: 'Cash Pledge',
                contractItemPriceType: 'Upfront',
                contractItemPrice: 50,
                contractItemUpfront: 50,
                contractItemMonthly: 0,
                contractItemNumber: 1,
                contractItemType: '',
                contractItemDetail: 'Return of contract due'
              },
              {
                contractItemImgUrl: './statics/MonthlyFee.png',
                contractItemName: 'Monthly Fee',
                contractItemPriceType: 'Monthly Rental',
                contractItemPrice: 100,
                contractItemUpfront: 100,
                contractItemMonthly: 0,
                contractItemNumber: 1,
                contractItemType: '',
                contractItemDetail: 'The Contract Period: 2018.06.24 ~ 2020.06 24'
              }
            ]
          }
        ],
        itemAll: [
          {
            itemImgUrl: './statics/phone.png',
            itemName: 'Apple iPhone X + 198 Bundle',
            itemPriceType: 'Upfront',
            itemPrice: 1149,
            itemUpfront: 1149,
            itemMonthly: 0,
            itemNumber: 1,
            disabled: false,
            check: true,
            itemType: 'Device',
            itemDetail: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray'
          }
        ],
        itemAllSee: [
          {
            itemImgUrl: './statics/phone.png',
            itemName: 'Apple iPhone X + 198 Bundle',
            itemPriceType: 'Upfront',
            itemPrice: 1149,
            itemUpfront: 1149,
            itemMonthly: 0,
            itemNumber: 1,
            disabled: false,
            check: true,
            itemType: 'Device',
            itemDetail: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray, Delivery: In Stock'
          }
        ],
        itemAllOut: [
          {
            itemImgUrl: './statics/phone.png',
            itemName: 'Apple iPhone X + 198 Bundle',
            itemPriceType: 'Upfront',
            itemPrice: 1149,
            itemUpfront: 1149,
            itemMonthly: 0,
            itemNumber: 1,
            disabled: false,
            check: true,
            itemType: 'Device',
            itemDetail: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray, itemDetail'
          }
        ],
        check: true,
        PriceTotal: 1161,
        createTime: '2018/03/08 05:39:00',
        orderId: '100001600000003'
      }
    }
  },
  methods: {
    jump (to) {
      this.$router.push(to)
    },
    jumpSearch () {
      this.$router.push('/Market/Search')
    },
    providerToggle: function () {
      this.providerShow = !this.providerShow
    },
    providerSelect: function (index) {
      this.providerInner = this.options[index].label
    },
    add2: function (index) {
      this.orderAll.itemAllSee[index].itemNumber = parseInt(this.orderAll.itemAllSee[index].itemNumber) + 1
    },
    min2: function (index) {
      if (this.orderAll.itemAllSee[index].itemNumber > 1) {
        this.orderAll.itemAllSee[index].itemNumber = parseInt(this.orderAll.itemAllSee[index].itemNumber) - 1
      }
    },
    add: function (index) {
      this.orderAll.itemAll[index].itemNumber = parseInt(this.orderAll.itemAll[index].itemNumber) + 1
    },
    min: function (index) {
      if (this.orderAll.itemAll[index].itemNumber > 1) {
        this.orderAll.itemAll[index].itemNumber = parseInt(this.orderAll.itemAll[index].itemNumber) - 1
      }
    },
    adds: function (index) {
      this.orderAll.packageAll[index].packageNumber = parseInt(this.orderAll.packageAll[index].packageNumber) + 1
    },
    mins: function (index) {
      if (this.orderAll.packageAll[index].packageNumber > 1) {
        this.orderAll.packageAll[index].packageNumber = parseInt(this.orderAll.packageAll[index].packageNumber) - 1
      }
    },
    mathTotal () {
      this.upfront = 0
      this.monthly = 0
      for (var pa = 0; pa < this.orderAll.packageAll.length; pa++) {
        this.orderAll.packageAll[pa].packageUpfrontTotal = 0
        this.orderAll.packageAll[pa].packageMonthlyTotal = 0
        for (var pi = 0; pi < this.orderAll.packageAll[pa].packageItem.length; pi++) {
          this.orderAll.packageAll[pa].packageUpfrontTotal += this.orderAll.packageAll[pa].packageItem[pi].packageItemUpfront * this.orderAll.packageAll[pa].packageItem[pi].packageItemNumber
          this.orderAll.packageAll[pa].packageMonthlyTotal += this.orderAll.packageAll[pa].packageItem[pi].packageItemMonthly * this.orderAll.packageAll[pa].packageItem[pi].packageItemNumber
        }
        this.upfront += this.orderAll.packageAll[pa].packageUpfrontTotal
        this.monthly += this.orderAll.packageAll[pa].packageMonthlyTotal
      }
      for (var i = 0; i < this.orderAll.itemAll.length; i++) {
        this.upfront += this.orderAll.itemAll[i].itemUpfront * this.orderAll.itemAll[i].itemNumber
        this.monthly += this.orderAll.itemAll[i].itemMonthly * this.orderAll.itemAll[i].itemNumber
      }
    },
    removePackage (index) {
      this.orderAll.packageAll.splice(index, 1)
      this.mathTotal()
    },
    removeContract (index) {
      this.orderAll.contractAll.splice(index, 1)
      this.mathTotal()
    },
    removeItem (index) {
      this.orderAll.itemAll.splice(index, 1)
      this.mathTotal()
    },
    removeItem2 (index) {
      this.orderAll.itemAllOut.splice(index, 1)
      this.mathTotal()
    },
    removeItem3 (index) {
      this.orderAll.itemAllSee.splice(index, 1)
      this.mathTotal()
    },
    itemNumberChange () {
      this.mathTotal()
    },
    payment () {
      this.$router.push('/Market/Checkout')
    },
    reduceChangeNum (index, realNum, disab) {
      for (var i = this.orderAll.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          realNum = realNum - 1
          if (realNum <= 0) {
            realNum = 0
            this.orderAll.itemAll[i].disabled = true
          }
          else {
            this.orderAll.itemAll[i].disabled = false
          }
          this.orderAll.itemAll[i].itemNumber = realNum
        }
      }
    },
    addChangeNum (index, realNum) {
      for (var i = this.orderAll.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          this.orderAll.itemAll[i].disabled = false
          realNum = realNum + 1
          this.orderAll.itemAll[i].itemNumber = realNum
        }
      }
    },
    checkAll (state) {
      this.orderAll.check = !state
      this.orderAll.packageAll.map(function (item) {
        item.check = !state
      })
      this.orderAll.contractAll.map(function (item) {
        item.check = !state
      })
      this.orderAll.itemAll.map(function (item) {
        item.check = !state
      })
      this.orderAll.itemAllSee.map(function (item) {
        item.check = !state
      })
    },
    checkEvent () {
      let isNoAll = false
      this.orderAll.packageAll.map(function (item) {
        if (!item.check) isNoAll = true
      })
      this.orderAll.contractAll.map(function (item) {
        if (!item.check) isNoAll = true
      })
      this.orderAll.itemAll.map(function (item) {
        if (!item.check) isNoAll = true
      })
      this.orderAll.itemAllSee.map(function (item) {
        if (!item.check) isNoAll = true
      })
      this.orderAll.check = !isNoAll
    },
    handleScroll () {
      if(!this.$refs.shoppingBoxFloor.classList.contains('footer-bottom-fixed')){
          this.offSetTop=this.$refs.shoppingBoxFloor.offsetTop;
      }
      if (document.body.scrollHeight< window.innerHeight) {
         if ( this.$refs.shoppingBoxFloor) {
           this.$refs.shoppingBoxFloor.classList.remove("footer-bottom-fixed");
         }
      }
      else {
         if ( this.$refs.shoppingBoxFloor) {
            if((window.scrollY+ window.innerHeight)-176>this.offSetTop){
                this.$refs.shoppingBoxFloor.classList.remove("footer-bottom-fixed");
            }else{
              this.$refs.shoppingBoxFloor.classList.add("footer-bottom-fixed");
            }
         }
       
      }
    }
  },
  mounted () {
    if (this.trans) {
      this. handleScroll () ;//初始化
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  watch: {
    searchString: {
      handler (curVal, oldVal) {
        console.log(this.$route.query.search)
        if (this.$route.query.search !== '' && this.$route.query.search !== null && this.$route.query.search !== undefined) {
          this.current = 1
          var offerings = this.offeringsInit.filter(function (item) {
            return Object.keys(item).some(function (key) {
              return String(item['name']).toLowerCase().indexOf(curVal.toLowerCase()) > -1
            })
          })
          this.offerings = offerings
        }
        else this.offerings = this.offeringsInit
      },
      deep: true
    },
    transparent: function (val, oldVal) {
      if (val) {
        window.addEventListener('scroll', this.handleScroll)
      }
      else {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<template>
  <q-layout
    ref="layout"
    view="hHh LpR fFf"
    :right-breakpoint="1100"
  >
    <div class="CheckOutBox">
      <div class="main">
        <div class="deliveryDetails">
          <div class="title">
            <h3>Your Delivery Details</h3>
            <span style="display: none">All deliverables must be accepted by an adult</span>
          </div>
          <div class="contain">
            <div class="address">
              <div class="address-title">Shipping Address</div>
              <div class="addressBox">
                  <div
                    class="addressItem"
                    v-bind:class="{'default': item.default}"
                    v-for="(item, index) in address"
                    @click="selectAddress(index)"
                  >
                    <div class="addressItem-type">
                      <div class="name">{{item.name}}<img v-if="index === 0" src="statics/images/checkout/star.png" style="display: inline-block; vertical-align: middle; width:20px; height:20px"></div>
                      <div class="address">{{item.address}}</div>
                      <div class="phone">{{item.phone}}</div>
                      <div class="save">Save as Default<img src="statics/images/checkout/edit.png" style="display: inline-block; vertical-align: middle; width:18px; height:18px"></div>
                      <img src="statics/images/checkout/delete.png" class="checkout-delete" v-on:click="removeAddress(index)" />
                      <!-- <div class="change"></div>
                      <div class="remove"></div>
                      <div class="default"></div> -->
                    </div>
                  </div>
                <div class="addAddress" @click="$refs.basicModal.open()">
                  <div class="addAddressBtn"></div>
                  <div><img src="statics/images/checkout/add.png" style="display: inline-block; vertical-align: middle; width:32px; "></div>
                  <span>ADD NEW ADDRESS</span>
                </div>
              </div>
            </div>
            <div class="other">
              <div class="provider">
                <div class="head">
                  <div class="title">Shipping Provider</div>
                  <div class="price">${{provider.toFixed(2)}}</div>
                </div>
                <div class="selectBox">
                  <div @click="providerToggle" type="text" class="selectInner">{{providerInner}} <div class="select-icon"><img v-bind:class="[providerShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
                    <ul v-show="providerShow">
                      <li
                        v-for="(item, index) in options"
                        @click="providerSelect(index)"
                      >{{item.label}}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="invoice">
                <div class="head">
                  <div class="title">Invoice Info</div>
                  <q-toggle v-model="check1" value='' />
                  <!-- <div class="controller"></div> -->
                </div>
                <div class="footer">
                  <div class="funds-kind">
                    <input
                      name="searchkey"
                      type="text"
                      value="Enter your Phone Number"
                      onFocus="this.value=''"
                      class="kind-input"
                      :disabled="!check1"
                    >
                  </div>
                  <!-- <input class="footer-invoiceTitle" v-model="items.invoiceInput" ref="invoiceInput" /> -->
                  <!-- Funds Kind -->
                  <div class="selectBox">
                    <div @click="invoiceToggle" type="text" class="selectInner" v-bind:class="[check1 ? 'able' : 'disabled']">{{invoiceInner2}}<div class="select-icon"><img v-bind:class="[invoiceShow ? 'up2' : 'down2']" src="statics/search/images/new/down.png"></div>
                      <ul v-show="invoiceShow && check1">
                        <li
                          v-for="(item, index) in options2"
                          @click="invoiceSelect(index)"
                        >{{item.label}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feeDetails">
          <h3>Fee Details</h3>
          <table class="checkOut-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th></th>
                <th width="6%">Unit Price</th>
                <th width="10.8%">Quantity</th>
                <th width="13%">Tax</th>
                <th width="13%">Discount</th>
                <th width="13%">Mothly Fee</th>
                <th width="15.2%">Subtotal Price</th>
                <th width="0"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="packageList in checkOut.package">
                <td class="contract-products" colspan="9">
                  <table class="checkOut-package-table">
                    <tbody>
                      <tr v-for="item in packageList.packageItem">
                        <td width="6%">
                          <div class="item2-img">
                            <img :src="item.packageItemImgUrl" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw);">     
                          </div>
                        </td>
                        <td>
                          <div class="item2-text">
                            <span class="item2-name">{{item.packageItemName}}</span><br>
                            <span class="item2-data">{{item.packageItemDetail3}}</span><br>
                            <span class="item2-data">{{item.packageItemDetail4}}</span><br>
                            <span class="item2-data">{{item.packageItemDetail5}}</span>
                          </div>
                        </td>
                        <td width="6%">${{item.packageItemPrice.toFixed(2)}}</td>
                        <td width="10.8%">× {{item.packageItemNumber}}</td>
                        <td width="13%">${{item.packageItemTax.toFixed(2)}}</td>
                        <td width="13%">${{item.packageItemDiscount.toFixed(2)}}</td>
                        <td width="13%">${{item.packageItemMonthly.toFixed(2)}}</td>
                        <td width="15.2%">${{item.packageItemPrice.toFixed(2)}}</td>
                        <td width="0%"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="uncontract-products" colspan="9">
                  <table class="checkOut-item-table">
                    <tbody>
                      <tr v-for="item in checkOut.item">
                        <td width="6%">
                          <div class="item2-img">
                            <img :src="item.itemImgUrl" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw);">     
                          </div>
                        </td>
                        <td>
                          <div class="item2-text">
                            <span class="item2-name">{{item.itemName}}</span><br>
                            <span class="item2-data">{{item.itemDetail3}}</span><br>
                            <span class="item2-data">{{item.itemDetail4}}</span><br>
                            <span class="item2-data">{{item.itemDetail5}}</span>
                          </div>
                        </td>
                        <td width="6%">${{item.itemPrice.toFixed(2)}}</td>
                        <td width="10.8%">× {{item.itemNumber}}</td>
                        <td width="13%">${{item.itemTax.toFixed(2)}}</td>
                        <td width="13%">${{item.itemDiscount.toFixed(2)}}</td>
                        <td width="13%">${{item.itemMonthly.toFixed(2)}}</td>
                        <td width="15.2%">${{item.itemPrice.toFixed(2)}}</td>
                        <td width="0%"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
<!--                 <td width="5%">
                  <div class="item2-img">
                    <img :src="item.itemImgUrl" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw);">     
                  </div>
                </td>
                <td>
                  <div class="item2-text">
                    <span class="item2-name">{{item.itemName}}</span><br>
                    <span class="item2-data">{{item.itemDetail3}}</span><br>
                    <span class="item2-data">{{item.itemDetail4}}</span><br>
                    <span class="item2-data">{{item.itemDetail5}}</span>
                  </div>
                </td>
                <td>${{item.itemPrice.toFixed(2)}}</td>
                <td>× {{item.itemNumber}}</td>
                <td>${{item.itemTax.toFixed(2)}}</td>
                <td>${{item.itemDiscount.toFixed(2)}}</td>
                <td>${{item.itemMonthly.toFixed(2)}}</td>
                <td>${{item.itemPrice.toFixed(2)}}</td>
                <td></td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <div class="checkout-totalBox">
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
              <div class="subTotal">Bag Subtotal:</div>
              <div class="number">${{total.toFixed(2)}}</div>
            </div>
          </div>
        </div>
        <div class="checkout-message">
          <div class="title">Buyer message</div>
          <div class="content">
            <textarea rows="1" placeholder="Leave a message to the seller"></textarea>
            <span>0 / 200</span>
          </div>
        </div>
      </div>
    </div>
    <q-toolbar slot="footer" class="checkout-footer-footer">
      <div class="checkOutBox-footer">
        <div v-bind:class="[changeColor ? checkoutFooterBtn2 : checkoutFooterBtn]" @click="changeColor = !changeColor">
            <q-icon name="done"/>
        </div>
        <div class="agree">I agree the <span>Tems & Conditions</span></div>
        <div class="vertical"></div>
        <div class="total">Total<br/><span>${{(total + 198).toFixed(2)}}</span></div>
        <div class="checkOut" @click="payment">SUBMIT</div>
      </div>
    </q-toolbar>
    <q-modal class="checkOut-address-modal" ref="basicModal">
      <div class="title"><span>Add New Address</span><i @click="$refs.basicModal.close()">close</i></div>
      <div class="content">
        <div class="checkOut-map">
          <div class="checkOut-check">
            <div>
              <q-toggle v-model="check3"/>
            </div>
            <span>Map</span>
          </div>
          <div v-bind:class="[check3 ? 'map' : 'dismap']">
            <img src="statics/images/checkout/map.png" height="174px" />
          </div>
        </div>
        <div class="checkOut-input">
          <div>
            <div class="select-box" style="width: 288px;">
              <!-- @click.stop="selectBox.sex = !selectBox.sex" -->
              <div @click="sexproviderToggle" type="text">
                <span>{{sexproviderInner}}</span>
                <div class="select-icon"><img v-bind:class="[sexproviderShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
              </div>
              <ul v-show="sexproviderShow">
                <li
                  v-for="(item, index) in sexoptions"
                  @click="sexproviderSelect(index)"
                >{{item.label}}</li>
              </ul>
            </div>
            <div class="input-box" style="width: 288px;">
              <input type="text" placeholder="Last Name">
            </div>
          </div>
          <div>
            <div class="input-box" style="width: 288px;">
              <input type="text" placeholder="First Name">
            </div>
            <div class="input-box" style="width: 288px;">
              <input type="text" placeholder="Middle Name (optional)">
            </div>
          </div>
          <div>
            <div class="input-box" style="width: 100%;">
              <input type="text" placeholder="Mobile Phone">
            </div>
          </div>
          <div>
            <div class="select-box" style="width: 288px;">
              <div @click="CountriesproviderToggle" type="text">
                <span>{{CountriesproviderInner}}</span>
                <div class="select-icon"><img v-bind:class="[CountriesproviderShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
              </div>
              <ul v-show="CountriesproviderShow">
                <li
                  v-for="(item, index) in Countriesoptions"
                  @click="CountriesproviderSelect(index)"
                >{{item.label}}</li>
              </ul>
            </div>
            <div class="select-box" style="width: 288px;">
              <div @click="ProvinceproviderToggle" type="text">
                <span>{{ProvinceproviderInner}}</span>
                <div class="select-icon"><img v-bind:class="[ProvinceproviderShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
              </div>
              <ul v-show="ProvinceproviderShow">
                <li
                  v-for="(item, index) in Provinceoptions"
                  @click="ProvinceproviderSelect(index)"
                >{{item.label}}</li>
              </ul>
            </div>
          </div>
          <div>
            <div class="select-box" style="width: 288px;">
              <div @click="CityproviderToggle" type="text">
                <span>{{CityproviderInner}}</span>
                <div class="select-icon"><img v-bind:class="[CityproviderShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
              </div>
              <ul v-show="CityproviderShow">
                <li
                  v-for="(item, index) in Cityoptions"
                  @click="CityproviderSelect(index)"
                >{{item.label}}</li>
              </ul>
            </div>
            <div class="select-box" style="width: 288px;">
              <div @click="DistrictproviderToggle" type="text">
                <span>{{DistrictproviderInner}}</span>
                <div class="select-icon"><img v-bind:class="[DistrictproviderShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
              </div>
              <ul v-show="DistrictproviderShow">
                <li
                  v-for="(item, index) in Districtoptions"
                  @click="DistrictproviderSelect(index)"
                >{{item.label}}</li>
              </ul>
            </div>
          </div>
          <div>
            <div class="input-box" style="width: 100%;">
              <input type="text" placeholder="Street Address">
            </div>
          </div>
          <div>
            <div class="input-box" style="width: 376px;">
              <input type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)">
            </div>
            <div class="input-box" style="width: 208px;">
              <input type="text" placeholder="ZIP Code (optional)">
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-box">
          <div class="left">
            <!-- <i>chect</i> -->
            <div v-bind:class="[changeColor2 ? checkoutFooterBtnn2 : checkoutFooterBtnn]" @click="changeColor2 = !changeColor2">
              <q-icon name="done"/>
            </div>
            <span>Save as Default address</span>
          </div>
          <div class="right">
            <span @click="$refs.basicModal.close()">CANCEL</span>
            <span>SAVE</span>
          </div>
        </div>
      </div>
    </q-modal>
  </q-layout>
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
  QToggle,
  QModal
} from 'quasar'
import allData from 'data/allData.json'
import checkOut from 'data/checkOut.json'
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
    QToggle,
    QModal
  },
  data () {
    return {
      isShow: true,
      changeColor: false,
      checkoutFooterBtn: 'checkout-footer-btn',
      checkoutFooterBtn2: 'checkout-footer-btn2',
      changeColor2: false,
      checkoutFooterBtnn: 'checkout-footer-btnn',
      checkoutFooterBtnn2: 'checkout-footer-btnn2',
      check3: true,
      check1: false,
      select: 'sf',
      providerShow: false,
      providerInner: 'Shunfeng',
      invoiceShow: false,
      invoiceInner: 'Shunfeng',
      multipleSelect: ['sf', 'yz'],
      addressIsOpen: false,
      selectBox: {
        sex: false,
        countries: false,
        province: false,
        city: false,
        district: false
      },
      options: [
        {
          label: 'Shunfeng',
          value: 'sf'
        },
        {
          label: 'Youzheng',
          value: 'yz'
        }
      ],
      // 2 start
      check2: false,
      select2: 'fk',
      // providerShow2: false,
      // providerInner2: 'Funds Kind',
      invoiceShow2: false,
      invoiceInner2: 'Funds Kind',
      multipleSelect2: ['fk', 'ot'],
      options2: [
        {
          label: 'Funds Kind',
          value: 'fk'
        },
        {
          label: 'others',
          value: 'ot'
        }
      ],
      // 2 end
      // sex start
      sexproviderShow: false,
      sexproviderInner: 'Mr.',
      sexoptions: [
        {
          label: 'Mr.',
          value: 'Mr.'
        },
        {
          label: 'Ms',
          value: 'Ms'
        }
      ],
      // sex end
      // Countries start
      CountriesproviderShow: false,
      CountriesproviderInner: 'Countries',
      Countriesoptions: [
        {
          label: 'China',
          value: 'China'
        },
        {
          label: 'America',
          value: 'America'
        }
      ],
      // Countries end
      // Province start
      ProvinceproviderShow: false,
      ProvinceproviderInner: 'Province',
      Provinceoptions: [
        {
          label: 'Guangdong',
          value: 'Guangdong'
        },
        {
          label: 'Beijing',
          value: 'Beijing'
        }
      ],
      // Province end
      // City start
      CityproviderShow: false,
      CityproviderInner: 'City',
      Cityoptions: [
        {
          label: 'Shenzhen',
          value: 'Shenzhen'
        },
        {
          label: 'Guangzhou',
          value: 'Guangzhou'
        }
      ],
      // City end
      // District start
      DistrictproviderShow: false,
      DistrictproviderInner: 'District',
      Districtoptions: [
        {
          label: 'Shenzhen',
          value: 'Shenzhen'
        },
        {
          label: 'Guangzhou',
          value: 'Guangzhou'
        }
      ],
      // District end
      group: 'opt1',
      items: {
        invoiceInput: 'Enter Invoice Title'
      },
      invoiceTitle: 'Enter Invoice Title',
      provider: 2.99,
      allData: allData,
      checkOut: checkOut,
      itemAll: [],
      packageAll: [],
      address: [],
      total: 0
    }
  },
  methods: {
    // changeMap: function () {
    //   if (check3 = true) {
    //     this.isShow = true
    //   } else {
    //     this.isShow = false
    //   }
    // },
    // sex start
    sexproviderToggle: function () {
      this.sexproviderShow = !this.sexproviderShow
    },
    sexproviderSelect: function (index) {
      this.sexproviderInner = this.sexoptions[index].label
      this.sexproviderShow = !this.sexproviderShow
    },
    // sex end
    // Countries start
    CountriesproviderToggle: function () {
      this.CountriesproviderShow = !this.CountriesproviderShow
    },
    CountriesproviderSelect: function (index) {
      this.CountriesproviderInner = this.Countriesoptions[index].label
      this.CountriesproviderShow = !this.CountriesproviderShow
    },
    // Countries end
    // Province start
    ProvinceproviderToggle: function () {
      this.ProvinceproviderShow = !this.ProvinceproviderShow
    },
    ProvinceproviderSelect: function (index) {
      this.ProvinceproviderInner = this.Provinceoptions[index].label
      this.ProvinceproviderShow = !this.ProvinceproviderShow
    },
    // Province end
    // City start
    CityproviderToggle: function () {
      this.CityproviderShow = !this.CityproviderShow
    },
    CityproviderSelect: function (index) {
      this.CityproviderInner = this.Cityoptions[index].label
      this.CityproviderShow = !this.CityproviderShow
    },
    // City end
    // District start
    DistrictproviderToggle: function () {
      this.DistrictproviderShow = !this.DistrictproviderShow
    },
    DistrictproviderSelect: function (index) {
      this.DistrictproviderInner = this.Districtoptions[index].label
      this.DistrictproviderShow = !this.DistrictproviderShow
    },
    // District end
    payment () {
      this.$router.push('/Market/Payment')
    },
    invoiceTitleChange: function () {
      console.log(123)
    },
    removeAddress: function (index) {
      this.address.splice(index, 2)
      console.log(this.check1)
    },
    providerToggle: function () {
      this.providerShow = !this.providerShow
    },
    providerSelect: function (index) {
      this.providerInner = this.options[index].label
    },
    invoiceToggle: function () {
      if (this.check1) {
        this.invoiceShow = !this.invoiceShow
      }
    },
    invoiceSelect: function (index) {
      this.invoiceInner2 = this.options2[index].label
    },
    selectAddress: function (index) {
      for (var i = 0; i < this.address.length; i++) {
        this.address[i].default = false
      }
      this.address[index].default = true
    }
  },
  mounted () {
    console.log(checkOut)
    this.address = []
    for (var a = 0; a < this.allData.address.length; a++) {
      this.address.push(this.allData.address[a])
    }
    // console.log(this.address)
    var _goods = JSON.parse(sessionStorage.getItem('goods'))
    console.log(_goods)
    if (_goods) {
      this.packageAll = []
      this.itemAll = []
      this.total = 0
      for (var i = 0; i < _goods.item.number; i++) {
        if (this.itemAll[0]) {
          this.itemAll[0].itemNumber++
        }
        else {
          this.itemAll.push(this.allData.item.detail)
        }
        this.total += parseInt(this.allData.item.detail.itemPrice, 10)
      }
      for (var p = 0; p < _goods.package.number; p++) {
        this.packageAll.push(this.allData.package.detail)
      }
      for (var pa = 0; pa < this.packageAll.length; pa++) {
        for (var pi = 0; pi < this.packageAll[pa].packageItem.length; pi++) {
          this.total += parseInt(this.packageAll[pa].packageItem[pi].packageItemPriceNumber, 10)
        }
      }
      console.log(this.packageAll)
      console.log(this.itemAll)
    }
  },
  watch: {
    items: {
      handler: function (val, oldval) {
        console.log(this.$refs.invoiceInput.value)
      },
      deep: true
    },
    check1: {
      handler: function (val, oldval) {
        this.invoiceShow = false
      },
      deep: true
    }
  }
}
</script>

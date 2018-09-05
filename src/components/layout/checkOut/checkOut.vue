<template>
  <q-layout
    ref="layout"
    view="hHh LpR fFf"
    :right-breakpoint="1100"
  >
    <div class="CheckOutBox ">
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
                <div class="provider-head">
                  <div class="title">Shipping Provider</div>
                  <div class="price">${{provider.toFixed(2)}}</div>
                </div>
                <div class="row">
                  <div class="col-5">
                     <div class="IWin-select m-right--small" >
                        <input type="text" :name="options.name"  v-model="options.val" data-vv-as="selected" v-validate="options.initial" :class="{'is-danger': errors.has(options.name) }"
                              class="IWin-input" :placeholder="options.title" @click="options.showItem = !options.showItem">
                        <span v-show="errors.has(options.name)" class="help is-danger">{{ errors.first(options.name) }}</span>
                        <i></i>
                        <ul class="IWin-select-item" v-if="options.showItem">
                          <li v-for="si in options.selectItem" :key="si" @click="options.val = si.val;options.showItem=false">{{si.val}}</li>
                        </ul>
                      </div>
                  </div>
                  <div class="col-7">
                    <div class="IWin-select" >
                        <input type="text" :name="options2.name"  v-model="options2.val" data-vv-as="selected" v-validate="options2.initial" :class="{'is-danger': errors.has(options2.name) }"
                              class="IWin-input" :placeholder="options2.title" @click="options2.showItem = !options2.showItem">
                        <span v-show="errors.has(options2.name)" class="help is-danger">{{ errors.first(options2.name) }}</span>
                        <i></i>
                        <ul class="IWin-select-item" v-if="options2.showItem">
                          <li v-for="si in options2.selectItem" :key="si" @click="options2.val = si.val;options2.showItem=false">{{si.val}}</li>
                        </ul>
                      </div>
                  </div>
                  
                </div>
                <div class="provider-bottom">
                  <div>
                    Urgent express.The express delivery will be delivered on the next day.
                  </div>
                </div>
              </div>
              <div class="invoice">
                <div class="invoice-head">
                  <div class="title">Invoice Info</div>
                  <q-toggle v-model="check1" value='' />
                  <!-- <div class="controller"></div> -->
                </div>
                <div class="row">
                   
                  <div class="col-5">
                    <div class="IWin-input-wrap  m-right--small" >
                      <input type="text" :name="invoiceTitle.name" v-model="invoiceTitle.val" v-validate="invoiceTitle.initial" :class="{'is-danger': errors.has(invoiceTitle.name) }"
                            class="IWin-input" :placeholder="invoiceTitle.title">
                      <span v-show="errors.has(invoiceTitle.name)" class="help is-danger">{{ errors.first(invoiceTitle.name) }}</span>
                      <!-- <q-input v-model="mo.val" @blur="submit(index)" :error="$v.modifyItem[index].val.$error" inverted /> -->
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="IWin-select" >
                        <input type="text" :name="options3.name"  v-model="options3.val" data-vv-as="selected" v-validate="options3.initial" :class="{'is-danger': errors.has(options3.name) }"
                              class="IWin-input" :placeholder="options3.title" @click="options3.showItem = !options3.showItem">
                        <span v-show="errors.has(options3.name)" class="help is-danger">{{ errors.first(options3.name) }}</span>
                        <i></i>
                        <ul class="IWin-select-item" v-if="options3.showItem">
                          <li v-for="si in options3.selectItem" :key="si" @click="options3.val = si.val;options3.showItem=false">{{si.val}}</li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="invoice-bottom">
                </div>
              </div>
            </div>
          </div>
          <div class="shareFrom">
              <div class="shareFrom-inner">
                <div class="share-head">
                  <div class="title">Share From</div>
                </div>
                <div class="row">
                    <div class="col-6">
                      <div class="IWin-input-wrap  m-right--small" v-if="isEditShare" >
                        <input type="text" :name="shareInp.name" v-model="shareInp.val" v-validate="shareInp.initial" :class="{'is-danger': errors.has(shareInp.name) }"
                              class="IWin-input" :placeholder="shareInp.title">
                        <span v-show="errors.has(shareInp.name)" class="help is-danger">{{ errors.first(shareInp.name) }}</span>
                        <!-- <q-input v-model="mo.val" @blur="submit(index)" :error="$v.modifyItem[index].val.$error" inverted /> -->
                      </div>
                      <div class="share-txt" v-else> 158******151</div>
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
                            <div class="item2-title">
                              <span class="item2-name">{{item.packageItemName}}</span>
                              <img :src="item.packageItemIcon">
                            </div>
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
        <div class="checkout-message">
          <div class="title">Buyer message</div>
          <div class="content">
            <textarea rows="1" placeholder="Leave a message to the seller"></textarea>
            <span>0 / 200</span>
          </div>
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
      </div>
    </div>
    <div class="checkout-footer-footer">
      <div class="checkOutBox-footer">
        <div v-bind:class="[changeColor ? checkoutFooterBtn2 : checkoutFooterBtn]" @click="changeColor = !changeColor">
            <q-icon name="done"/>
        </div>
        <div class="agree">I agree the <span>Tems & Conditions</span></div>
        <div class="vertical"></div>
        <div class="total">Total<br/><span>${{(total + 198).toFixed(2)}}</span></div>
        <div class="checkOut" @click="payment">SUBMIT</div>
      </div>
    </div>
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
        <div class="checkOut-list">
            <div class="checkOut-item" v-for="(mo,index) in modifyItem" >
              <!-- <div class="panel-item-title">{{mo.title}}<sub v-if="mo.must">*</sub></div> -->
              <div class="IWin-input-wrap" v-if="!mo.selectItem">
                <input type="text" :name="mo.name" v-model="mo.val" v-validate="mo.initial" :class="{'is-danger': errors.has(mo.name) }"
                      class="IWin-input" :placeholder="mo.title">
                <span v-show="errors.has(mo.name)" class="help is-danger">{{ errors.first(mo.name) }}</span>
                <!-- <q-input v-model="mo.val" @blur="submit(index)" :error="$v.modifyItem[index].val.$error" inverted /> -->
              </div>
              <div class="IWin-select" v-if="mo.selectItem">
                <input type="text" :name="mo.name" v-model="mo.val" data-vv-as="selected" v-validate="mo.initial" :class="{'is-danger': errors.has(mo.name) }"
                      class="IWin-input" :placeholder="mo.title" @click="mo.showItem = !mo.showItem">
                <span v-show="errors.has(mo.name)" class="help is-danger">{{ errors.first(mo.name) }}</span>
                <i></i>
                <ul class="IWin-select-item" v-if="mo.showItem">
                  <li v-for="si in mo.selectItem" :key="si" @click="mo.val = si.val;mo.showItem=false">{{si.val}}</li>
                </ul>
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
  QModal,
  QInput
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
    QModal,
    QInput
  },
  data () {
    return {
      DeliveryInner: 'Delivery Mode',
      DeliveryShow: false,
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
      providerInner: 'Logistics Provider',
      invoiceShow: false,
      invoiceInner: 'Shunfeng',
      multipleSelect: ['sf', 'yz'],
      addressIsOpen: false,
      selection1:'sf',
      selection2:'sf',
      selection3:'sf',
      error1:false,
      error2:false,
      error3:false,
      error4:false,
      invoiceTitle:'',
      isEditShare:true,
      selectBox: {
        sex: false,
        countries: false,
        province: false,
        city: false,
        district: false
      },
      deliveryoptions: [
        {
          label: 'Shunfeng',
          value: 'sf'
        },
        {
          label: 'Youzheng',
          value: 'yz'
        }
      ],
      options:
         {
            name: 'Logistics Provider',
            title: 'Logistics Provider',
            val: 'Shunfeng',
            must: true,
            selectItem: [
              {
                val: 'Shunfeng'
              },
              {
                val: 'Youzheng'
              }
            ],
            showItem: false,
            initial: 'required',
          },
      
      options2: 
      {
            name: 'Delivery Mode ',
            title: 'Logistics Provider',
            val: 'Shunfeng',
            must: true,
            selectItem: [
              {
                val: 'Shunfeng'
              },
              {
                val: 'Youzheng'
              }
            ],
            showItem: false,
            initial: 'required',
      },
      options3: {
         name: 'Funds Kind ',
          title: 'Funds Kind',
          val: 'Shunfeng',
          must: true,
          selectItem: [
            {
              val: 'Shunfeng'
            },
            {
              val: 'Youzheng'
            }
          ],
          showItem: false,
          initial: 'required',
    },
      invoiceTitle: {
          name: 'Enter Invoice Title',
          title: "Enter Invoice Title",
          val: '',
          must: true,
          initial: 'required',
        },
         shareInp: {
          name: "Enter the sharer's mobile number",
          title: "Enter the sharer's mobile number",
          val: '',
          must: true,
          initial: 'required',
        },
      // 2 start
      check2: false,
      select2: 'fk',
      // providerShow2: false,
      // providerInner2: 'Funds Kind',
      invoiceShow2: false,
      invoiceInner2: 'Funds Kind',
      multipleSelect2: ['fk', 'ot'],
      // options2: [
      //   {
      //     label: 'Funds Kind',
      //     value: 'fk'
      //   },
      //   {
      //     label: 'others',
      //     value: 'ot'
      //   }
      // ],
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

      provider: 2.99,
      allData: allData,
      checkOut: checkOut,
      itemAll: [],
      packageAll: [],
      address: [],
      total: 0,
       modifyItem: [
          {
            name: 'first-name',
            title: 'First Name',
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'title',
            title: 'Title',
            val: 'Mr.',
            must: true,
            selectItem: [
              {
                val: 'Mr.'
              },
              {
                val: 'Mrs.'
              }
            ],
            showItem: false,
            initial: 'required',
          },
          {
            name: 'father-last-name',
            title: "Father's Last Name",
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'mother-last-name',
            title: "Mother's Last Name",
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'mobile-number',
            title: "Mobile Number",
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'state',
            title: 'State',
            val: '',
            must: true,
            selectItem: [
              {
                val: 'Mr.'
              },
              {
                val: 'Mrs.'
              }
            ],
            showItem: false,
            initial: 'required',
          },
          {
            name: 'township',
            title: 'Township',
            val: '',
            must: true,
            selectItem: [
              {
                val: 'Mr.'
              },
              {
                val: 'Mrs.'
              }
            ],
            showItem: false,
            initial: 'required',
          },
          {
            name: 'city',
            title: 'City',
            val: '',
            must: true,
            selectItem: [
              {
                val: 'Mr.'
              },
              {
                val: 'Mrs.'
              }
            ],
            showItem: false,
            initial: 'required',
          },
          {
            name: 'community',
            title: 'Community (Colony)',
            val: '',
            must: true,
            selectItem: [
              {
                val: 'Mr.'
              },
              {
                val: 'Mrs.'
              }
            ],
            showItem: false,
            initial: 'required',
          },
          {
            name: 'street',
            title: "Street",
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'other',
            title: "Other",
            val: '',
            must: false,
            initial: 'required',
          },
          {
            name: 'external-number',
            title: "External Number",
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'internal-number',
            title: "Internal Number",
            val: '',
            must: false,
            initial: 'required',
          },
          {
            name: 'postcode',
            title: "Postcode",
            val: '',
            must: true,
            initial: 'required',
          },
          {
            name: 'email',
            title: "Email",
            val: '',
            must: false,
            initial: 'required|email',
          },
        ]
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
    DeliveryToggle: function () {
      this.DeliveryShow = !this.DeliveryShow
    },
    DeliverySelect: function (index) {
      this.DeliveryInner = this.deliveryoptions[index].label
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
    var _goods = JSON.parse(sessionStorage.getItem('goods')) || []
    console.log(_goods)
    if (_goods.item === undefined) return false
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

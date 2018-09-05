<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout :view='view' style="overflow: hidden" class="navTop" position="top">
    <q-tabs slot="navigation" class="q-tabs-logo">
      <q-tab slot="title" hide="label" class="logo">
         <img src="statics/images/Homepage/ico_menu.png" class="responsive">
      </q-tab>
      <div class="all-menu">
        <div v-for="(item, index) in navRouter">
          <q-side-link item :to="item.to">
            <q-item-main :label="item.name" class="myorder-list"/>
          </q-side-link>
        </div>
      </div>
    </q-tabs>
    <!-- Navigation Tabs -->
    <q-tabs slot="navigation" class="q-tabs-left">
        <q-route-tab slot="title" default="true" to="/Home" inline hide="icon"><i class="blackBottom"></i></q-route-tab>
    </q-tabs>
    <q-tabs slot="navigation" class="q-tabs-right nav-right">
      <q-tab slot="title" hide="label" class="search">
        <q-btn flat color="BrightBlack" icon="ion-ios-search-strong" class="tabBtn" @click="search" />
      </q-tab>
      <q-tab slot="title" hide="label">
        <q-btn round color="BrightBlack" class="tabBtn" @click="showPopup('shoppingBag')">
          <img src="statics/images/Homepage/shoppingbag.png" alt="" >
          <div class="hasGood" v-bind:class="[ hasGoods ? 'yes' : 'no']"></div>
        </q-btn>
      </q-tab>
    </q-tabs>
    <q-tabs slot="navigation" class="q-tabs-input nav-search-box" v-show="text" v-search-focus="text" @focus="text=true" @blur="text=false">
      <q-tab slot="title" hide="icon">
        <q-input type="text" v-bind:class="{ 'q-if-focused':text }" color="BrightBlack" v-model="searching" @keyup.enter.native="searchAll" />
      </q-tab>
      <q-tab hide="icon">
        <div class="search-tabs">
          <div class="search-tab" v-for="item in searchData">
            <div class="search-tab-title">
              {{ item.title }}
              <span
                class="clear"
                v-if="item.title === 'History' && item.value.length > 0"
                @click="clearHistory"
              >
                Clear
              </span>
            </div>
            <div class="search-tab-ul">
              <ul color="BrightBlack">
                <li class="search-tab-li" v-for="(value, index) in item.value" v-bind:class="{ 'active':(active.searchState.state==index&&active.searchState.type==item.type) }" @click="searching=value;text=true;isActive('searchState', item.type, index);searchAll(this, value)">{{ value }}</li>
              </ul>
            </div>
          </div>
        </div>
      </q-tab>
    </q-tabs>
    <div class="popupBox" v-if="popup.length > 0">
      <div class="popupShoppingBag" v-if="popup==='shoppingBag'">
        <div class="popupShoppingBagMask" @click="showPopup('close')"></div>
        <div class="popupShoppingBagBox">
          <div class="shoppingBagHead">
            <q-tabs slot="navigation" class="q-tabs-left">
              <q-tab slot="title" class="signOut" label="SIGN OUT" @click="showPopup('signOut')" v-if="usered===true">
                <img src="~statics/shoppingBag/signOut.png">
              </q-tab>
              <q-tab slot="title" class="signIn" label="SIGN IN" @click="showPopup('showSignIn')" v-if="usered===false">
                <img src="~statics/shoppingBag/signOut.png">
              </q-tab>
              <q-tab slot="title" class="myCommerce" label="MY COMMERCE" @click="jump('/Order/Commerce')">
                <img src="~statics/shoppingBag/myCommerce.png">
              </q-tab>
              <q-tab slot="title" class="ShoppingBag" :label="bagNumber + '（'+(packageAll.length+itemAll.length)+'）'" @click="jump('/Market/shoppingBag')">
                <img src="~statics/shoppingBag/bag.png">
              </q-tab>
            </q-tabs>
          </div>
          <div class="littleEmptyBox" v-if="packageAll.length === 0 && itemAll.length === 0 && itemAllOut.length === 0">
            <div class="littleEmpty1">
              <span>Your Bag is empty.</span>
            </div>
            <div class="littleEmpty2">
              <i></i>
            </div>
            <div class="littleEmpty3">
              <div class="littleEmpty3_Btn" @click="jumpSearch()">
                <span>Continue Shopping</span>
              </div>
            </div>
          </div>
          <div class="shoppingBagAllTitle" v-if="packageAll.length > 0 || itemAll.length > 0 || itemAllOut.length > 0">
            <div>
              <div class="shoppingbtn" v-bind:class="{'active':allGoodsCheck}" @click="checkAll(allGoodsCheck)">
                <q-icon name="done"/>
              </div>
              <span>Check All</span>
            </div>
            <span class="seeAll" @click="jumpshoppingBag()">See All</span>
          </div>
          <div class="shoppingBagBody">
            <div class="shoppingBagPackage" v-if="packageAll.length > 0" v-for="(item, index) in packageAll">
              <div class="packageItem">
                <div class="packageItem-left">
                  <div class="shoppingbtn">
                    <q-icon name="done"/>
                  </div>
                  <div class="packageItemImgBox">
                    <img class="packageItemImg" :src="item.image" />
                  </div>
                  <div class="packageItemImformation">
                    <div class="packageItemName">{{item.name}}</div>
                    <div class="itemAttr" v-for="(value, key) in item.attr">{{key}}:{{value}}</div>
                  </div>
                </div>
                <div class="packageItemNumber">×{{item.number}}</div>
                <div class="horizon"></div>
              </div>
              <div class="packageItem">
                <div class="packageItem-left">
                  <div class="shoppingbtn">
                    <q-icon name="done"/>
                  </div>
                  <div class="packageItemImgBox">
                    <img class="packageItemImg" :src="item.setMeal.image" />
                  </div>
                  <div class="packageItemImformation">
                    <div class="packageItemName">{{item.setMeal.name}}</div>
                    <div class="itemAttr" v-for="(value, key) in item.setMeal.attr">{{key}}:{{value}}</div>
                  </div>
                </div>
                <div class="packageItemNumber">×{{item.number}}</div>
                <div class="horizon"></div>
              </div>
              <div class="subTotalBox">
                <div class="subTotalBox-left">
                  <div class="shoppingbtn" v-bind:class="{'active':item.check}" @click="item.check=!item.check,checkEvent()">
                    <q-icon name="done"/>
                  </div>
                  <div class="upfrontBox"><div class="upfront">Upfront:</div><div class="upfrontNumber">${{item.upfront.toFixed(2)}}</div></div>
                  <div class="monthlyBox"><div class="monthly">Monthly:</div><div class="monthlyNumber">${{item.setMeal.price.toFixed(2)}}</div></div>
                </div>
                <div class="remove" @click="removePackageItem(item, index)"><i></i></div>
              </div>
            </div>
            <div class="shoppingBagItem" v-if="itemAll.length > 0" v-for="(item, index) in itemAll">
              <div class="shoppingBagItem-left">
                <div class="shoppingbtn" v-bind:class="{'active':item.check}" @click="item.check=!item.check,checkEvent()">
                  <q-icon name="done"/>
                </div>
                <div class="itemImgBox">
                  <img class="itemImg" :src="item.image" />
                </div>
                <div class="itemImformation">
                  <div class="itemName">{{item.name}}</div>
                  <div class="itemAttr">${{item.price.toFixed(2)}}</div>
                </div>
              </div>
              <div class="shoppingBagItem-right">
                <div class="itemNumber">×{{item.number}}</div>
                <div class="remove" @click="removeItem(item, index)"><i></i></div>
              </div>
              <div class="horizon"></div>
            </div>
            <div class="shoppingBagItem" v-if="itemAllOut.length > 0" v-for="(item, index) in itemAllOut">
              <div class="shoppingBagItem-left">
                <div class="shoppingbtnOut" style="cursor: auto;">
                  <q-icon name="done"/>
                </div>
                <div class="itemImgBox">
                  <img class="itemImg" :src="item.itemImgUrl" />
                  <div class="shade"></div>
                  <div class="littleTips">Sold Out</div>
                </div>
                <div class="itemImformation">
                  <div class="itemName">{{item.itemName}}</div>
                  <div class="itemAttr"><span>Upfront:</span> ${{item.itemPrice.toFixed(2)}}</div>
                  <div class="shade"></div>
                </div>
              </div>
              <div class="shoppingBagItem-right">
                <div class="itemNumber">×{{item.itemNumber}}</div>
                <div class="remove" @click="removeItem2(item, index)"><i></i></div>
              </div>
              <div class="horizon"></div>
            </div>
          </div>
          <div class="shoppingBag-bottom" v-if="packageAll.length > 0 || itemAll.length > 0 || itemAllOut.length > 0">
            <div class="shoppingbtn" v-bind:class="{'active':allGoodsCheck}" @click="checkAll(allGoodsCheck)">
              <q-icon name="done"/>
            </div>
            <span>The Selected（{{allGoodsCheckNumber}}）</span>
          </div>
          <div class="shoppingBagFoot" v-if="packageAll.length > 0 || itemAll.length > 0 || itemAllOut.length > 0">
            <div class="upfrontBox"><div class="upfront">Upfront</div><div class="upfrontNumber">${{upfront.toFixed(2)}}</div></div>
            <div class="vertical"></div>
            <div class="monthlyBox"><div class="monthly">Monthly</div><div class="monthlyNumber">${{monthly.toFixed(2)}}</div></div>
            <div class="checkOut" @click="jumpCheckOut()">CHECK OUT</div>
          </div>
        </div>
        <div class="popupShoppingBagClose" @click="showPopup('close')">
          <img src="~statics/shoppingBag/close.png">
        </div>
      </div>
      <div class="signUpBox" v-if="popup==='signUp'">
        <h3>SIGN UP</h3>
        <div class="close" @click="showPopup('close')"></div>
        <div class="type">
          <div class="phone">Phone Number</div>
          <div class="email">Email</div>
        </div>
        <div class="user-name">
          <input type="text" v-model="userUp.name" placeholder="Account Name" class="account"><i v-if="userUp.name.length>0" @click="userUp.name=''">x</i>
        </div>
        <div class="user-phone">
          <input type="text" v-model="userUp.phone" placeholder="Phone Number" class="phone"><i v-if="userUp.phone.length>0" @click="userUp.phone=''">x</i>
        </div>
        <div class="user-phone">
          <input type="password" v-model="userUp.password" placeholder="Password" class="password"><i v-if="userUp.password.length>0" @click="userUp.password=''">x</i>
        </div>
        <input placeholder="Confirm Password" class="confirmPassword">
        <div class="verificationBox">
          <input placeholder="Enter Verification Code" class="verification">
          <button onfocus="this.blur();" class="sendVerification">SEND</button>
        </div>
        <button onfocus="this.blur();" class="signUp" @click="showPopup('close')">SIGN UP</button>
        <div class="other">
          <span class="haveAccount">Already have an account?</span>
          <span class="signIn" @click="showPopup('showSignIn')">Sign In</span>
        </div>
      </div>
      <div class="signInBox" v-if="popup==='signIn'">
        <h3>SIGN IN</h3>
        <div class="close" @click="showPopup('close')"></div>
        <div class="user-name">
          <input type="text" v-model="userIn.name" placeholder="Account Name /Email /Phone Number" class="account"><i v-if="userIn.name.length>0" @click="userIn.name=''">x</i>
        </div>
        <div class="user-password">
          <input type="password" v-model="userIn.password" placeholder="Password" class="password"><i v-if="userIn.password.length>0" @click="userIn.password=''">x</i>
        </div>
        <div class="verificationBox">
          <input type="text" placeholder="Verification Code" class="verification">
          <button onfocus="this.blur();" class="getVerification"></button>
        </div>
        <button onfocus="this.blur();" class="signIn" @click="showPopup('signInSignIn')">SIGN IN</button>
        <div class="other">
          <span class="forget">Forget Your Password?</span>
          <span class="signUp" @click="showPopup('showSignUp')">Sign UP</span>
        </div>
        <div class="otherSignIn">
          <div class="horizonBox">
            <div class="horizon"></div>
            <span>Or sign in via</span>
            <div class="horizon"></div>
          </div>
          <div class="WeChat"></div>
        </div>
      </div>
      <div class="globalMask" v-if="popup==='signIn' || popup==='signUp'"></div>
    </div>

  </q-layout>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QTabs,
  QTab,
  QRouteTab,
  QInput,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QSideLink,
  QItemMain,
  QIcon
} from 'quasar'
import searchData from 'data/search.json'
import navRouterData from 'data/navRouter.json'
import shoppingbag from 'data/shoppingbag.json'
// import allData from 'data/allData.json'
export default {
  name: 'r-heard',
  props: {
    searchString: {
      type: String,
      default: ''
    }
  },
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QTabs,
    QTab,
    QRouteTab,
    QInput,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QSideLink,
    QItemMain,
    QIcon
  },
  data () {
    return {
      allGoodsCheck: true,
      allGoodsCheckNumber: 0,
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
          itemType: 'Device',
          itemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
          itemDetail2: 'Delivery: In Stock',
          itemMemory: 'Voice: 300 min',
          itemPrimary: 'SMS: unlimited',
          itemColor: 'Data: 20 GB'
        }
      ],
      userUp: {
        name: '',
        password: '',
        twopassword: '',
        phone: '',
        verification: ''
      },
      userIn: {
        name: '',
        password: '',
        verification: ''
      },
      upfront: 0,
      monthly: 0,
      packageAll: [],
      itemAll: [],
      popup: '',
      hasGoods: true,
      usered: false,
      bagNumber: 'SHOPPING BAG',
      searchData: searchData.data,
      shoppingbag: shoppingbag,
      navRouter: navRouterData.router,
      allData: [],
      text: false,
      searching: '',
      // searchString: '',
      active: {
        searchState: {
          type: null,
          state: null
        }
      },
      enter: 'animated fadeInRightBig',
      leave: 'animated fadeOutLeftBig',
      view: 'hhh lpr fff'
    }
  },
  methods: {
    showPopup (type) {
      this.$root.eventHub.$emit('openModel', type)
      // console.log(type)
      switch (type) {
        case 'shoppingBag':
          this.popup = type
          // var _goods = JSON.parse(sessionStorage.getItem('goods'))
          var _goods = this.shoppingbag
          if (_goods) {
            this.allData = []
            this.packageAll = []
            this.itemAll = []
            this.upfront = 0
            this.monthly = 0
            _goods.map((g) => {
              if (g.byStages) {
                this.packageAll.push(g)
              }
              else {
                this.itemAll.push(g)
              }
            })
            // this.allData = JSON.parse(sessionStorage.getItem('goods'))
            this.allData = this.shoppingbag
          }
          let ts = this
          this.allData.map(function (item, index) {
            // console.log(item)
            // if (item.byStages) {
            //   ts.monthly += (parseInt(item.setMeal.price) * item.number)
            // }
            // else {
            //   console.log(item)
            //   ts.upfront += (parseInt(item.upfront) * item.number)
            // }
            ts.monthly += (parseInt(item.setMeal.price) * item.number)
            ts.upfront += (parseInt(item.upfront) * item.number)
          })
          // console.log(this.allData)
          // var _goods = JSON.parse(sessionStorage.getItem('goods'))
          // if (_goods) {
          //   this.packageAll = []
          //   this.itemAll = []
          //   this.upfront = 0
          //   this.monthly = 0
          //   for (var i = 0; i < _goods.item.number; i++) {
          //     if (this.itemAll[0]) {
          //       this.itemAll[0].itemNumber++
          //     }
          //     else {
          //       this.itemAll.push(this.allData.item.detail)
          //     }
          //     this.upfront += 12
          //   }
          //   for (var p = 0; p < _goods.package.number; p++) {
          //     this.packageAll.push(this.allData.package.detail)
          //     this.upfront += 1149
          //     this.monthly += 198
          //   }
          // }
          break
        case 'signOut':
          this.popup = ''
          this.usered = false
          break
        case 'showSignIn':
          this.popup = 'signIn'
          break
        case 'showSignUp':
          this.popup = 'signUp'
          break
        case 'signUpSignIn':
          this.popup = ''
          break
        case 'signInSignIn':
          this.popup = ''
          this.usered = true
          break
        case 'close':
          this.popup = ''
          break
      }
    },
    search (el) {
      // console.log('-----------')
      // console.log(el)
      // console.log(this.searchData)
      this.text = !this.text
      // this.$set(this.text, !this.text)
      // this.$refs['inputSearch'].focus()
    },
    isActive (type, src, value) {
      this.active[type].type = src
      this.active[type].state = value
      // this.$set(this.active[src], value)
    },
    searchAll (el, val) {
      var value = val || el.target.value
      var isExist = false
      this.searchData[1].value.map(function (itme) {
        if (itme.toUpperCase() === value.toUpperCase()) {
          isExist = true
        }
      })
      if (!isExist && value !== '') {
        this.searchData[1].value.push(value)
      }
      // this.searchString = value
      this.$root.eventHub.$emit('setSearchString', value)
      // console.log(this.$router.query)
      if (value !== '') {
        this.$router.push({
          path: '/Market/Search',
          query: {
            search: value
          }
        })
      }
      else {
        this.$router.push({
          path: '/Market/Search',
          query: {}
        })
      }
      this.text = false
    },
    clearHistory () {
      this.searchData[1].value = []
    },
    removeItem2 (index) {
      this.itemAllOut.splice(index, 1)
    },
    removePackageItem (item, index) {
      this.packageAll.splice(index, 1)
      let _goods = JSON.parse(sessionStorage.getItem('goods')) || []
      let array = []
      _goods.map(function (g) {
        if (g.id !== item.id) {
          array.push(g)
        }
      })
      sessionStorage.setItem('goods', JSON.stringify(array))
    },
    removeItem (item, index) {
      this.itemAll.splice(index, 1)
      // console.log(item)
      let _goods = JSON.parse(sessionStorage.getItem('goods')) || []
      let array = []
      _goods.map(function (g) {
        if (g.id !== item.id) {
          array.push(g)
        }
      })
      // console.log(_goods)
      sessionStorage.setItem('goods', JSON.stringify(array))
    },
    jump (to) {
      this.showPopup('close')
      this.$router.push(to)
    },
    jumpSearch () {
      this.showPopup('close')
      this.$router.push('/Market/Search')
    },
    jumpCheckOut () {
      this.showPopup('close')
      this.$router.push('/Market/Checkout')
    },
    jumpshoppingBag () {
      this.showPopup('close')
      this.$router.push('/Market/shoppingBag')
    },
    checkAll (state) {
      this.allGoodsCheck = !state
      this.packageAll.map(function (item) {
        item.check = !state
      })
      this.itemAll.map(function (item) {
        item.check = !state
      })
      if (this.allGoodsCheck) {
        this.allGoodsCheckNumber = this.packageAll.length + this.itemAll.length
      }
      else {
        this.allGoodsCheckNumber = 0
      }
    },
    checkEvent () {
      let isNoAll = false
      this.packageAll.map(function (item) {
        if (!item.check) isNoAll = true
      })
      this.itemAll.map(function (item) {
        if (!item.check) isNoAll = true
      })
      this.allGoodsCheck = !isNoAll
      let _num = 0
      this.packageAll.map((item) => item.check ? _num++ : '')
      this.itemAll.map((item) => item.check ? _num++ : '')
      this.allGoodsCheckNumber = _num
    }
  },
  directives: {
    searchFocus: {
      componentUpdated: function (el, {value}) {
        // console.log(el)
        // console.log(el.querySelector('.search-tab-li'))
        // console.log(value)
        // if (value && !el.querySelector('.search-tab-li')) {
        if (value) {
          el.querySelector('input').focus()
        }
        else el.querySelector('input').blur()
      }
    }
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'fadeOutLeftBig' : 'fadeInRightBig'
      // console.log(to.path.split('/'))
      // console.log(from.path.split('/'))
      const toDepth = to.path.split('/')[1]
      // const fromDepth = from.path.split('/')[1]
      // console.log(toDepth)
      // console.log(fromDepth)
      this.enter = toDepth === 'Home' ? 'animated fadeInLeftBig' : 'animated fadeInRightBig'
      // if (toDepth === 'ProductContent') {
      //   this.enter = 'animated fadeInTopBig'
      // }
      // else if (toDepth === 'Home') {
      //   this.enter = 'animated fadeInLeftBig'
      // }
      // else {
      //   this.enter = 'animated fadeInRightBig'
      // }
      this.leave = toDepth === 'Home' ? 'animated fadeOutRightBig' : 'animated fadeOutLeftBig'
      // this.leave = toDepth === 'ProductContent' ? 'animated fadeOutRightBig' : 'animated fadeOutLeftBig'
      // console.log(to)
      // console.log(from)
      // var routerPath = this.$route.fullPath
      // if (routerPath.indexOf('/ProductContent') >= 0) {
      //   this.view = 'hHh lpr fff'
      // }
      // else {
      //   this.view = 'hhh lpr fff'
      // }
    }
  },
  mounted () {
    // var routerPath = this.$route.fullPath
    // if (routerPath.indexOf('/ProductContent') >= 0) {
    //   this.view = 'hHh lpr fff'
    // }
    // else {
    //   this.view = 'hhh lpr fff'
    // }
    // console.log(this.popup)
    this.socket.$on('toNavSignIn', function () {
      this.popup = 'signIn'
      // console.log(this.popup)
    }.bind(this))
    // this.socket.$on('toNavSearchHide', function () {
    //   console.log('toNavSearchHide')
    //   try {
    //     this.search()
    //   }
    //   catch (err) {
    //     console.log(err)
    //   }
    // }.bind(this))
    // var _goods = JSON.parse(sessionStorage.getItem('goods'))
    var _goods = this.shoppingbag
    // console.log(_goods)
    // if (!_goods) {
    //   _goods = {
    //     item: {
    //       number: 0
    //     },
    //     package: {
    //       number: 0
    //     }
    //   }
    //   sessionStorage.goods = JSON.stringify(_goods)
    // }
    if (_goods) {
      _goods.map((g) => {
        if (g.byStages) {
          this.packageAll.push(g)
        }
        else {
          this.itemAll.push(g)
        }
      })
      // console.log(this.packageAll)
      // console.log(this.itemAll)
      this.allData = JSON.parse(sessionStorage.getItem('goods'))
    }
    // console.log(json.parse(allData));
    // console.log(this.view)
    let _num = 0
    this.packageAll.map((item) => item.check ? _num++ : '')
    this.itemAll.map((item) => item.check ? _num++ : '')
    this.allGoodsCheckNumber = _num
  }
}
</script>
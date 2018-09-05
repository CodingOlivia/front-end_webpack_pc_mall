<template>
  <q-layout
    ref="layout"
    :view="layoutStore.view"
    :left-breakpoint="layoutStore.leftBreakpoint"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"
    class="search-layout search-box"
  >
    <div slot="header">
      <div class="heardTopbg" style="background: url(statics/search/images/banner/banner1.png) top center no-repeat; background-size: cover;">
        <div class="heardToptext">
          <span class="heardToptext-type">/ Accessories</span><br>
          <span class="heardToptext-name">Inspire wrist envy.</span>
        </div>
        <div class="heardTop-search-body">
          <q-search class="heardTop-search" v-model="filterKey" placeholder="Search" @keyup.enter.native="filterAll" @focus="searchAutocompleteBox=true" @blur="searchAutocompleteBox=false">
            <q-autocomplete @search="search" />
          </q-search>
          <div class="search-autocomplete" v-if="searchAutocompleteBox&&filterKey.length>0">
            <div v-if="countries.length>0" v-for="countrie in countries" @click="filterKey=countrie.value;filterAll()"><span v-for="word in countrie.value" v-bind:class="{'active':!filterKey.toUpperCase().indexOf(word.toUpperCase())}">{{word}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索导航条 -->
    <div
      class="navigation searchNavigation"
      slot="navigation"
    >
      <div class="move">
        <div class="products-layout-top">
          <div class="second-filter-title-left">
            <div class="search-filter-Reset">
              <div
                class="filter-filter"
                @click="filterSwitch"
              >
                <img src="statics/search/images/new/ico_fiter.png" style="margin-right:4px;"><span>Filter</span>
              </div>
              <div class="filter-clear" @click="clearType">Reset</div>
            </div>
          </div>
        </div>
        <div class="container-top">
          <div class="second-filter-title-right">
            <div class="second-filter-title-number">
              <span>{{filterOfferings.length}} Results</span>
            </div>
            <div class="second-filter-title-select">
              <div class="selectBox">
                <div @click="providerToggle" type="text" class="selectInner">
                  <span class="tab-right-font">Sort by:</span>
                  <span>{{sortLabel}}<i class="select-icon" v-bind:class="[providerShow ? 'up' : 'down']"></i></span>
                </div>
                 <!-- <div class="select-icon"><img v-bind:class="[providerShow ? 'up' : 'down']" src="statics/search/images/new/down.png"> -->
                  <ul v-show="providerShow">
                    <li
                      v-for="(item, index) in options"
                      @click="typeSelect(item)"
                      v-bind:class="{'selectLi':sortType===item.value}"
                    >{{item.label}}</li>
                  </ul>
                </div>
              </div>
              <!-- <span style="color:$font-color-5">Sort by: </span> -->
              <!-- <q-select
                color="secondary"
                v-model="sortType"
                :options="options"
                @change="typeSelect"
              /> -->
            </div>
          </div>
        </div>
        <div class="search-filter-Reset-hr"></div>
      </div>
    </div>
    <!-- 搜索导航条 -->
    <q-scroll-area slot="left" style="width: 100%; height: 100%;">
      <div class="products-layout filterBox">
        <!-- 左边第1层 -->
        <div class="products-list-title">
          <span class="products-title flex" @click="openFilter(filter.f1.state, 'f1')" style="cursor:pointer">Products</span>
          <q-icon
            :name="filter.f1.name"
            @click="openFilter(filter.f1.state, 'f1')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f1.state">
          <ul class="column">
            <li 
              v-for="(item, index) in products" 
              :key="index" 
              @click="select('products', item[0])"
              v-bind:class="{'active':item[1]===true}"
            >{{item[0]}}</li>
          </ul>  
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第1层 end-->
        <!-- 左边第2层 -->
        <div class="products-list-title">
          <span class="products-title flex" @click="openFilter(filter.f2.state, 'f2')" style="cursor:pointer">Brand</span>
          <q-icon
            :name="filter.f2.name"
            @click="openFilter(filter.f2.state, 'f2')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f2.state">
          <ul class="column">
            <li
              v-for="(item, index) in brand"
              :key="index"
              @click="select('brand', item[0])"
              v-bind:class="{'active':item[1]===true}"
            >{{item[0]}}</li>
          </ul>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第2层 end-->
        <!-- 左边第3层 -->
        <div class="filter-color">
          <div class="products-list-title">
            <span class="products-title flex" @click="openFilter(filter.f3.state, 'f3')" style="cursor:pointer">Color</span>
            <q-icon
             :name="filter.f3.name"
             @click="openFilter(filter.f3.state, 'f3')"
            />
          </div>
          <div class="select-color-body column" v-if="!filter.f3.state">
            <div class="flex">
              <div class="btn-border"
                v-for="(item, index) in color"
                :key="index"
                @click="select('color', item[0])"
                v-bind:class="{'active':item[1]===true}"
              >
                <q-btn
                  round
                  :color="item[0]"
                >
                <span
                >{{item[0]}}</span>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第3层 end-->
        <!-- 左边第4层 -->
        <div class="products-list-title">
          <span class="products-title flex" @click="openFilter(filter.f4.state, 'f4')" style="cursor:pointer">Memory</span>
          <q-icon
            :name="filter.f4.name"
            @click="openFilter(filter.f4.state, 'f4')"
          />
        </div>
        <div class="filter-memory column" v-if="!filter.f4.state">
          <div class="select-memory-body column">
            <ul class="column">
              <li
                v-for="(item, index) in memory"
                :key="index"
                @click="select('memory', item[0])"
                v-bind:class="{'active':item[1]===true}"
              >
                {{item[0]}} GB
               <!--  <q-icon name="ion-android-close" @click.stop="clearMemory" /> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第4层 end-->
        <!-- 左边第5层 -->
        <div class="products-list-title">
          <span class="products-title flex"  @click="openFilter(filter.f5.state, 'f5')" style="cursor:pointer">Connection</span>
          <q-icon
            :name="filter.f5.name"
            @click="openFilter(filter.f5.state, 'f5')"
          />
        </div>
        <div class="filter-type1 column" v-if="!filter.f5.state">
          <ul class="column">
            <li 
              v-for="(item, index) in connection"
              :key="index" 
              @click="select('connection', item[0])"
              v-bind:class="{'active':item[1]===true}"
            >{{item[0]}}</li>
          </ul>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第5层 end-->
        <!-- 左边第6层 -->
        <div class="products-list-title">
          <span class="products-title flex"  @click="openFilter(filter.f6.state, 'f6')" style="cursor:pointer">Products Type</span>
          <q-icon
            :name="filter.f6.name"
            @click="openFilter(filter.f6.state, 'f6')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f6.state">
          <ul class="column">
            <li 
              v-for="(item, index) in productsType"
              :key="index" 
              @click="select('productsType', item[0])"
              v-bind:class="{'active':item[1]===true}"
              v-if="item[2] || more"
            >{{item[0]}}</li>
          </ul>
          <span @click="moreToggle" class="filter-type-more">More</span>  
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第6层 end-->
      </div>
    </q-scroll-area>
    <div class="container">
      <div class="search-offerings">
        <div
          class="offering BrightBlack"
          v-for="(item, index) in filterOfferings"
          v-if="index<current*12&&index>=(current-1)*12"
          @click="jump('/Products')"
        >
        <q-transition
          appear
          enter="fadeIn"
          leave="fadeOut"
        >
          <div class="offering-box text-BrightBlack transition">
            <div class="offering-img">
              <img
                width="100%"
                :src="item.image"
                :title="item.name"
              >
            </div>
            <div class="offering-text">
              <p class="offering-name" :title="item.name">{{ item.name }}</p>
              <p class="offering-price">
                <span style="font-weight: bold;">${{ item.price }}</span><span style="opacity: 0.4;margin-left: 8px;" :title="item.type">{{ item.type }}</span>
              </p>
            </div>
            <div class="tagIcon">
              <img :src="item.discount_icon" />
            </div>
            <div class="twoIcon">
              <a :class="[{'active':item.myClick}, item.contrast ? 'icoContrast' : 'icoContrast3']" v-on:click.stop="contrast(index)"></a>
              <i class="icoLike" v-bind:class="{'active':item.collection}" v-on:click.stop="collection(index)"></i>
            </div>
          </div>
        </q-transition>
        </div>
      </div>
      <center class="no-tip" v-if="filterOfferings.length === 0">
        Sorry, the system has not found the relevant goods !
      </center>
      <div style="height: auto;display: flex; justify-content: center; margin-right: 20px; padding-top: 52px; padding-bottom: 135px">
        <r-pagination
          :total="filterOfferings.length"
          :display="display"
          :current.sync="current"
          class="pagination-font"
        />
      </div>
    </div>
  </q-layout>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QAutocomplete,
  filter
} from 'quasar'
import _ from 'lodash'
import layoutStore from './layout-store'
import searchBanner from 'data/search-banner.json'
import searchOfferings from 'data/offerings-data.json'
import searchAutocomplete from 'data/autocomplete.json'
import RPagination from 'components/pagination'
function getRandomStamp () {
  if (Math.floor(Math.random() * 50) % 3 === 0) {
    return `${Math.floor(Math.random() * 10)} min`
  }
}
function parseCountries () {
  return searchAutocomplete.map(country => {
    return {
      label: country,
      sublabel: '',
      icon: '',
      stamp: getRandomStamp(),
      value: country
    }
  })
}
export default {
  props: ['searchString'],
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QPagination,
    QChip,
    QSelect,
    QTransition,
    RPagination,
    QAutocomplete,
    filter
  },
  data () {
    return {
      providerShow: false,
      providerInner: 'Popularity',
      icoLike: 'icoLike',
      icoLiked: 'icoLiked',
      banner: searchBanner.data,
      offerings: searchOfferings.data,
      offeringsInit: searchOfferings.data,
      layoutStore: layoutStore,
      filterKey: '',
      display: 12,
      current: 1,
      sortLabel: 'Popularity',
      sortType: 'pop',
      more: false,
      searchName: this.$route.query.search,
      filter: {
        f1: {
          state: false,
          name: 'ion-close'
        },
        f2: {
          state: true,
          name: 'ion-plus'
        },
        f3: {
          state: true,
          name: 'ion-plus'
        },
        f4: {
          state: true,
          name: 'ion-plus'
        },
        f5: {
          state: true,
          name: 'ion-plus'
        },
        f6: {
          state: true,
          name: 'ion-plus'
        }
      },
      active: {
        products: [],
        brand: [],
        color: [],
        memory: [],
        connection: [],
        productsType: []
      },
      options: [
        {
          label: 'Popularity',
          value: 'pop'
        },
        {
          label: 'Name A-Z',
          value: 'name'
        },
        {
          label: 'Best Sellers',
          value: 'sales'
        },
        {
          label: 'Newest',
          value: 'shelfTime'
        },
        {
          label: 'Price Low-High',
          value: 'low'
        },
        {
          label: 'Price High-Low',
          value: 'high'
        }
      ],
      products: [
        ['Contract Phone', false],
        ['Phone', false],
        ['Accessories', false],
        ['Plans', false]
      ],
      brand: [
        ['Huawei', false],
        ['Others', false]
      ],
      color: [
        ['dark', false],
        ['blue', false],
        ['deep-purple', false],
        ['teal', false],
        ['faded', false],
        ['Multi-Coloured', false],
        ['orange', false],
        ['pink', false],
        ['negative', false],
        ['white', false],
        ['yellow', false]
      ],
      memory: [
        [16, false],
        [32, false],
        [64, false],
        [128, false],
        [256, false]
      ],
      connection: [
        ['Airplay', false],
        ['Bluetooth', false],
        ['Wireless', false]
      ],
      productsType: [
        ['All Cases', false, true],
        ['Cases & Covers', false, true],
        ['Headphones', false, true],
        ['Sperkers', false, true],
        ['Snap On Cases', false, true],
        ['Charges', false, true],
        ['Batteries', false, true],
        ['1', false, false],
        ['2', false, false],
        ['3', false, false],
        ['4', false, false],
        ['5', false, false],
        ['6', false, false],
        ['7', false, false]
      ],
      searchAutocompleteBox: false,
      countries: []
    }
  },
  methods: {
    contrast (index) {
      console.log('这是个对比方法')
      this.filterOfferings[index].myClick = true
    },
    providerToggle: function () {
      this.providerShow = !this.providerShow
    },
    providerSelect: function (index) {
      this.providerInner = this.options[index].label
    },
    // end
    jump (to) {
      this.$router.push(to)
    },
    collection (index) {
      this.filterOfferings[index].collection = !this.filterOfferings[index].collection
    },
    HotPageSub () {
      this.banner.select = this.banner.select - 2 < 0 ? 0 : this.banner.select - 2
    },
    HotPageAdd () {
      this.banner.select = this.banner.select + 2 >= this.banner.total ? this.banner.total - 2 : this.banner.select + 2
    },
    moreToggle () {
      this.more = !this.more
    },
    selectProducts (products) {
      this.active.products = products
      this.current = 1
    },
    clearType () {
      this.active.products = []
      this.active.brand = []
      this.active.color = []
      this.active.memory = []
      this.active.connection = []
      this.active.productsType = []
      for (var p = 0; p < this.products.length; p++) {
        this.products[p][1] = false
      }
      for (var b = 0; b < this.brand.length; b++) {
        this.brand[b][1] = false
      }
      for (var c = 0; c < this.color.length; c++) {
        this.color[c][1] = false
      }
      for (var m = 0; m < this.memory.length; m++) {
        this.memory[m][1] = false
      }
      for (var con = 0; con < this.connection.length; con++) {
        this.connection[con][1] = false
      }
      for (var pt = 0; pt < this.productsType.length; pt++) {
        this.productsType[pt][1] = false
      }
      this.current = 1
    },
    filterAll () {
      this.offerings = this.offeringsInit.filter(function (item) {
        let e = this.filterKey.length === 0
        for (let i in item) {
          // console.log(item[i])
          console.log(item[i].toString().toLowerCase())
          console.log(this.filterKey.toString().toLowerCase())
          console.log((item[i].toString().toLowerCase()).indexOf(this.filterKey.toString().toLowerCase()) >= 0)
          if ((item[i].toString().toLowerCase()).indexOf(this.filterKey.toString().toLowerCase()) >= 0 && this.filterKey.length > 0) {
            console.log(item[i])
            e = true
          }
        }
        return e
      }.bind(this))
    },
    select (type, item) {
      // console.log(type)
      // console.log(item)
      switch (type) {
        case 'products':
          var productsFlag = true
          for (var P = 0; P < this.products.length; P++) {
            if (this.products[P][0] === item) {
              if (this.products[P][1]) {
                productsFlag = false
              }
              this.products[P][1] = !this.products[P][1]
            }
          }
          console.log(productsFlag)
          for (var p = 0; p < this.active.products.length; p++) {
            if (this.active.products[p] === item) {
              this.active.products.splice(p, 1)
              productsFlag = false
              break
            }
          }
          console.log(productsFlag)
          if (productsFlag) {
            this.active.products.push(item)
          }
          console.log(this.active.products)
          console.log(this.products)
          break
        case 'brand':
          var brandFlag = true
          for (var B = 0; B < this.brand.length; B++) {
            if (this.brand[B][0] === item) {
              if (this.brand[B][1]) {
                brandFlag = false
              }
              this.brand[B][1] = !this.brand[B][1]
            }
          }
          for (var b = 0; b < this.active.brand.length; b++) {
            if (this.active.brand[b] === item) {
              this.active.brand.splice(b, 1)
              brandFlag = false
              break
            }
          }
          if (brandFlag) {
            this.active.brand.push(item)
          }
          console.log(this.active.brand)
          break
        case 'color':
          var colorFlag = true
          for (var C = 0; C < this.color.length; C++) {
            if (this.color[C][0] === item) {
              if (this.color[C][1]) {
                colorFlag = false
              }
              this.color[C][1] = !this.color[C][1]
            }
          }
          for (var c = 0; c < this.active.color.length; c++) {
            if (this.active.color[c] === item) {
              this.active.color.splice(c, 1)
              colorFlag = false
              break
            }
          }
          if (colorFlag) {
            this.active.color.push(item)
          }
          console.log(this.active.color)
          break
        case 'memory':
          var memoryFlag = true
          for (var M = 0; M < this.memory.length; M++) {
            if (this.memory[M][0] === item) {
              if (this.memory[M][1]) {
                memoryFlag = false
              }
              this.memory[M][1] = !this.memory[M][1]
            }
          }
          for (var m = 0; m < this.active.memory.length; m++) {
            if (this.active.memory[m] === item) {
              this.active.memory.splice(m, 1)
              memoryFlag = false
              break
            }
          }
          if (memoryFlag) {
            this.active.memory.push(item)
          }
          console.log(this.active.memory)
          break
        case 'connection':
          var connectionFlag = true
          for (var CON = 0; CON < this.connection.length; CON++) {
            if (this.connection[CON][0] === item) {
              if (this.connection[CON][1]) {
                connectionFlag = false
              }
              this.connection[CON][1] = !this.connection[CON][1]
            }
          }
          for (var con = 0; con < this.active.connection.length; con++) {
            if (this.active.connection[con] === item) {
              this.active.connection.splice(con, 1)
              connectionFlag = false
              break
            }
          }
          if (connectionFlag) {
            this.active.connection.push(item)
          }
          console.log(this.active.connection)
          break
        case 'productsType':
          var productsTypeFlag = true
          for (var PT = 0; PT < this.productsType.length; PT++) {
            if (this.productsType[PT][0] === item) {
              if (this.productsType[PT][1]) {
                productsTypeFlag = false
              }
              this.productsType[PT][1] = !this.productsType[PT][1]
            }
          }
          for (var pt = 0; pt < this.active.productsType.length; pt++) {
            if (this.active.productsType[pt] === item) {
              this.active.productsType.splice(pt, 1)
              productsTypeFlag = false
              break
            }
          }
          if (productsTypeFlag) {
            this.active.productsType.push(item)
          }
          console.log(this.active.productsType)
          break
        default:
      }
    },
    search (terms, done) {
      setTimeout(() => {
        let item = filter(terms, {field: 'value', list: parseCountries()})
        this.countries = item
        done()
      }, 1000)
    },
    pagechange: function (p) {
      this.current = p
      // console.log('pagechange', p)
    },
    typeSelect: function (item) {
      this.sortLabel = item.label
      this.sortType = item.value
      this.current = 1
      this.providerShow = false
    },
    openFilter (state, key) {
      if (state) {
        this.filter[key].state = false
        this.filter[key].name = 'ion-close'
      }
      else {
        this.filter[key].state = true
        this.filter[key].name = 'ion-plus'
      }
    },
    filterSwitch () {
      if (this.layoutStore.leftBreakpoint === 996) {
        this.layoutStore.leftBreakpoint = 10000
      }
      else if (this.layoutStore.leftBreakpoint === 10000) {
        this.layoutStore.leftBreakpoint = 996
      }
    }
  },
  created () {
    this.$root.eventHub.$on('pagechange', (target) => {
      this.pagechange(target)
    })
  },
  mounted () {
    if (this.$route.query.search) {
      this.select('products', this.$route.query.search)
    }
    console.log(this.searchName)
    this.socket.$on('toSearchTypeReset', function () {
      this.clearType()
    }.bind(this))
    this.socket.$on('toSearchSortTypeSelect', function (type) {
      this.sortType = type
    }.bind(this))
    this.socket.$on('toSearchFilterSwitch', function () {
      this.filterSwitch()
    }.bind(this))
  },
  computed: {
    filterOfferings: function () {
      var _data = []
      // 获取数据
      if (this.active.products.length || this.active.brand.length || this.active.color.length || this.active.memory.length || this.active.connection.length || this.active.productsType.length) {
        if (this.active.products.length !== 0) {
          for (var p = 0; p < this.active.products.length; p++) {
            var _products = this.active.products[p]
            var _productsData = this.offerings.filter(function (item) {
              // console.log(item)
              return item.type === _products
            })
            _data = _data.concat(_productsData)
          }
        }
        if (this.active.brand.length !== 0) {
          for (var b = 0; b < this.active.brand.length; b++) {
            var _brand = this.active.brand[b]
            var _brandData = this.offerings.filter(function (item) {
              // console.log(item)
              return item.brand === _brand
            })
            _data = _data.concat(_brandData)
          }
        }
        if (this.active.color.length !== 0) {
          for (var c = 0; c < this.active.color.length; c++) {
            var _color = this.active.color[c]
            var _colorData = this.offerings.filter(function (item) {
              // console.log(item)
              return item.color === _color
            })
            _data = _data.concat(_colorData)
          }
        }
        if (this.active.memory.length !== 0) {
          for (var m = 0; m < this.active.memory.length; m++) {
            var _memory = this.active.memory[m]
            var _memoryData = this.offerings.filter(function (item) {
              // console.log(item)
              return item.memory === _memory
            })
            _data = _data.concat(_memoryData)
          }
        }
        if (this.active.connection.length !== 0) {
          for (var con = 0; con < this.active.connection.length; con++) {
            var _connection = this.active.connection[con]
            var _connectionData = this.offerings.filter(function (item) {
              // console.log(item)
              return item.connection === _connection
            })
            _data = _data.concat(_connectionData)
          }
        }
        if (this.active.productsType.length !== 0) {
          for (var pT = 0; pT < this.active.productsType.length; pT++) {
            var _productsType = this.active.productsType[pT]
            var _productsTypeData = this.offerings.filter(function (item) {
              // console.log(item)
              return item.productsType === _productsType
            })
            _data = _data.concat(_productsTypeData)
          }
        }
        // 去重复
        var _data2 = []
        for (var d1 = 0; d1 < _data.length; d1++) {
          if (_data2.length === 0) {
            _data2.push(_data[d1])
          }
          else {
            var repeatFlag = false
            for (var d2 = 0; d2 < _data2.length; d2++) {
              if (_data[d1].id === _data[d2].id) {
                repeatFlag = true
                break
              }
            }
            if (!repeatFlag) {
              _data2.push(_data[d1])
            }
          }
        }
        _data = _data2
      }
      else {
        _data = this.offerings
      }
      // 排序
      if (this.sortType === 'low') _data = _.orderBy(_data, 'price', 'asc')
      else if (this.sortType === 'high') _data = _.orderBy(_data, 'price', 'desc')
      else if (this.sortType === 'shelfTime') _data = _.orderBy(_data, 'shelfTime', 'desc')
      else _data = _.orderBy(_data, this.sortType)
      this.socket.$emit('toIndexSearchChange', _data.length)
      // this.socket.$emit('toIndexClick')
      return _data
    }
  },
  watch: {
    searchString: {
      handler (curVal, oldVal) {
        if (this.$route.query.search !== '' && this.$route.query.search !== null && this.$route.query.search !== undefined) {
          this.clearType()
          this.current = 1
          console.log(this.offeringsInit)
          var offerings = this.offeringsInit.filter(function (item) {
            return Object.keys(item).some(function (key) {
              // console.log(item[key])
              return String(item['name']).toLowerCase().indexOf(curVal.toLowerCase()) > -1
            })
          })
          console.log(offerings)
          this.offerings = offerings
        }
        else this.offerings = this.offeringsInit
      },
      deep: true
    },
    $route: function (to) {
      if (to.query.type === '1') {
        // this.searchName = this.$route.query.search
        this.clearType()
        this.select('products', to.query.search)
      }
    },
    filterKey: function (val) {
      this.countries = []
    }
  }
}
</script>
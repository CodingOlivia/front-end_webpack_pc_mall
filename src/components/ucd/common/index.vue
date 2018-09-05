<template>
  <div class="marketBox" @mousewheel="paperScroll" @click.stop="allowScroll">
    <div
      v-bind:class="[navSwitch ? 'show' : 'hide']"
      class="marketTop transition"
      ref="marketTop"
    >
      <r-heard :searchString="searchString" />
    </div>
    <div v-bind:class="[productMenuSwitch ? 'show' : 'hide', navSwitch ? 'twoNav' : 'oneNav']" class="productMenuBox">
      <t-product-menu />
    </div>
    <div
      class="marketContent"
      v-bind:class="marketContentClass"
    >
      <transition v-if="routerViewShow" appear :enter-active-class="enter" :leave-active-class="leave" >
        <router-view :searchString="searchString"/>
      </transition>
      <router-view v-if="!routerViewShow" :searchString="searchString"/>
    </div>
    <div
      class="navigation"
      v-bind:class="[navigationSwitch ? 'show' : 'hide', navSwitch ? 'twoNav' : 'oneNav', navigationShow ? 'menuShow' : 'menuHide']"
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
              <div
                class="filter-clear"
                @click="typeReset"
              >Reset</div>
            </div>
          </div>
        </div>
        <div class="container-top">
          <div class="second-filter-title-right">
            <div class="second-filter-title-number">
              <span>{{offeringsLength}} Results</span>
            </div>
            <div class="second-filter-title-select">
              <span style="color:$font-color-5">Sort by: </span>
              <q-select
                color="secondary"
                v-model="sortType"
                :options="options"
                @change="sortTypeSelect"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="search-filter-Reset-hr"></div> -->
    </div>
  </div>
</template>
<script>
import {
  QSelect
} from 'quasar'
import RHeard from 'components/ucd/common/nav'
import TProductMenu from 'components/layout/common/productMenu/productMenu'
import searchOfferings from 'data/offerings-data.json'
export default {
  components: {
    QSelect,
    RHeard,
    TProductMenu
  },
  data () {
    return {
      routerViewShow: true,
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
      active: {
        type: 'All',
        color: '',
        memory: ''
      },
      sortType: 'pop',
      scrollTop: 0,
      offeringsLength: searchOfferings.data.length,
      offeringsInit: searchOfferings.data,
      navigationSwitch: true,
      navigationShow: false,
      navSwitch: true,
      productMenuSwitch: true,
      BGWhite: false,
      scroll: true,
      enter: 'animated fadeInRightBig',
      leave: 'animated fadeOutLeftBig',
      searchString: '',
      openModelState: false
    }
  },
  mounted () {
    this.socket.$on('toIndexSearchChange', function (length) {
      this.offeringsLength = length
    }.bind(this))
    this.socket.$on('toIndexClick', function (length) {
      this.navigationSwitch = false
    }.bind(this))
    this.socket.$on('toIndexSignIn', function () {
      this.socket.$emit('toNavSignIn')
    }.bind(this))
    window.addEventListener('scroll', this.handleScroll)
    var toRoutePath = this.$route.fullPath.toLowerCase()
    if (toRoutePath.indexOf('productmenu') >= 0) {
      this.routerViewShow = false
      this.navSwitch = false
      this.BGWhite = true
      this.productMenuSwitch = true
      this.navigationSwitch = false
    }
    else if (toRoutePath.indexOf('/market/search') >= 0) {
      this.navigationSwitch = false
      this.productMenuSwitch = false
    }
    else {
      this.routerViewShow = true
      this.navigationSwitch = false
      this.BGWhite = false
      this.navSwitch = true
      this.productMenuSwitch = false
    }
  },
  computed: {
    marketContentClass: function () {
      return {
        oneNav: this.$route.fullPath.toLowerCase().indexOf('productmenu') >= 0 && !this.navSwitch,
        twoNav: this.$route.fullPath.toLowerCase().indexOf('productmenu') >= 0 && this.navSwitch,
        noNav: this.$route.fullPath.toLowerCase().indexOf('productmenu') < 0
      }
    // },
    // filterOfferings: function () {
    //   var _data = this.offerings
    //   if (this.sortType === 'low') _data = _.orderBy(_data, 'price', 'asc')
    //   else if (this.sortType === 'high') _data = _.orderBy(_data, 'price', 'desc')
    //   else if (this.sortType === 'shelfTime') _data = _.orderBy(_data, 'shelfTime', 'desc')
    //   else _data = _.orderBy(_data, this.sortType)
    //   if (this.active.type !== '' && this.active.type !== 'All') {
    //     var _type = this.active.type
    //     _data = _data.filter(function (item) {
    //       return item.type === _type
    //     })
    //   }
    //   if (this.active.color !== '') {
    //     var _color = this.active.color
    //     _data = _data.filter(function (item) {
    //       return item.color === _color
    //     })
    //   }
    //   if (this.active.memory !== '') {
    //     var _memory = this.active.memory
    //     _data = _data.filter(function (item) {
    //       return item.memory === _memory
    //     })
    //   }
    //   return _data
    }
  },
  methods: {
    typeReset () {
      this.socket.$emit('toSearchTypeReset')
    },
    sortTypeSelect () {
      console.log(this.select)
      this.socket.$emit('toSearchSortTypeSelect', this.select)
    },
    filterSwitch () {
      this.socket.$emit('toSearchFilterSwitch')
    },
    setValue (val) {
      this.searchString = val
    },
    openModel (val) {
      this.openModelState = val
      // console.log(this.openModelState.length > 0 && this.openModelState !== 'close')
    },
    allowScroll: function () {
      this.scroll = true
    },
    paperScroll: function (event) {
      // var routerPath = this.$route.fullPath
      // console.log(this.$route)
      var _routerPath = this.$route.path.toLowerCase()
      let deltaY = event.deltaY || -(event.wheelDelta)
      let scrollY = window.scrollY || window.pageYOffset
      // console.log(event)
      // this.socket.$emit('toNavSearchHide')
      if (_routerPath === '/home') {
        event.preventDefault()
        if (this.scroll) {
          // 上
          if (deltaY < 0) {
            this.navSwitch = true
            if (scrollY <= window.innerHeight) {
              this.BGWhite = false
              this.scroll = false
              var upHeight = scrollY
              var upMove = setInterval(function () {
                if ((upHeight - 8) <= 0) {
                  upHeight = 0
                  window.scrollTo(0, upHeight)
                  clearInterval(upMove)
                }
                else {
                  upHeight -= 8
                  window.scrollTo(0, upHeight)
                }
              }, 0.1)
            }
            else if (scrollY <= (window.innerHeight + 100)) {
              window.scrollTo(0, window.innerHeight)
            }
            else {
              var upTargetHeight = scrollY - 100
              window.scrollTo(0, upTargetHeight)
            }
          }
          // 下
          else if (deltaY > 0) {
            this.navSwitch = false
            if (scrollY < window.innerHeight) {
              this.BGWhite = true
              this.scroll = false
              var downHeight = scrollY
              var downMove = setInterval(function () {
                if ((downHeight + 8) >= window.innerHeight) {
                  downHeight = window.innerHeight
                  window.scrollTo(0, downHeight)
                  clearInterval(downMove)
                }
                else {
                  downHeight += 8
                  window.scrollTo(0, downHeight)
                }
              }, 0.1)
            }
            else if (scrollY >= window.innerHeight) {
              var downTargetHeight = scrollY + 100
              window.scrollTo(0, downTargetHeight)
            }
          }
        }
        else {
          if (scrollY === window.innerHeight || scrollY === 0) {
            this.scroll = true
          }
        }
      }
      else if (_routerPath === '/productmenu') {
        // 上
        this.BGWhite = true
        if (deltaY < 0) {
          this.navSwitch = true
        }
        // 下
        else if (deltaY > 0) {
          this.navSwitch = false
        }
      }
      else if (_routerPath === '/market/search') {
        // event.preventDefault()
        // 上
        this.BGWhite = true
        if (deltaY < 0) {
          // this.navSwitch = true
          if ((scrollY - 100) < 279) {
            // this.navigationSwitch = false
            if (scrollY <= 100) {
              this.navSwitch = true
              this.BGWhite = false
            }
          }
          else {
            // this.navigationSwitch = true
          }
        }
        // 下
        else if (deltaY > 0) {
          this.navSwitch = false
          if ((scrollY + 100) >= 279) {
            // this.navigationSwitch = true
          }
          else {
            // this.navigationSwitch = false
          }
        }
      }
      else if (_routerPath.indexOf('/order') >= 0) {
        this.BGWhite = true
        console.log('none')
      }
      else if (_routerPath.indexOf('/productmenu') >= 0) {
        console.log('none')
      }
      else if (_routerPath === '/products') {
        this.BGWhite = false
        console.log('none')
      }
      else if (_routerPath.indexOf('/market/payment') >= 0) {
        this.BGWhite = true
        console.log('none')
      }
      else if (_routerPath.indexOf('/market/shoppingbag') >= 0) {
        this.BGWhite = true
        console.log('none')
      }
      else if (_routerPath.indexOf('/market/checkout') >= 0) {
        this.BGWhite = true
        console.log('none')
      }
      else {
        console.log('--------------')
        this.BGWhite = true
        // 上
        if (deltaY < 0) {
          this.navSwitch = true
          if (scrollY <= 100) {
            this.BGWhite = false
          }
        }
        // 下
        else if (deltaY > 0) {
          this.navSwitch = false
          this.BGWhite = true
        }
      }
    },
    handleScroll: function () {
      var _routerPath = this.$route.path.toLowerCase()
      if (_routerPath.indexOf('/market/search') >= 0) {
        var _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var _offsetTop = document.querySelector('.searchNavigation').offsetTop
        let scrollY = window.scrollY || window.pageYOffset
        this.BGWhite = true
        // 上
        if (_scrollTop < this.scrollTop) {
          // this.navSwitch = true
          if (_scrollTop < _offsetTop) {
            this.navigationSwitch = false
            if (_scrollTop === 0) {
              this.BGWhite = false
            }
          }
          else {
            this.navigationSwitch = true
          }
        }
        // 下
        else if (_scrollTop > this.scrollTop) {
          if (_scrollTop > _offsetTop) {
            this.navigationSwitch = true
            this.navigationShow = true
          }
          else {
            this.navigationSwitch = false
          }
        }
        if (scrollY < window.innerHeight) {
          let val = (scrollY / (318 / 1920 * window.innerWidth)).toFixed(3)
          this.$refs.marketTop.style.backgroundColor = `rgba(255, 255, 255, ${val})`
        }
        else {
          this.$refs.marketTop.style.backgroundColor = `rgba(255, 255, 255, 1)`
        }
        this.scrollTop = _scrollTop
      }
      else if (_routerPath === '/products') {
        this.BGWhite = false
        this.$refs.marketTop.style.backgroundColor = ''
        console.log('none')
      }
    }
  },
  created () {
    this.$root.eventHub.$on('setSearchString', (target) => {
      this.setValue(target)
    })
    this.$root.eventHub.$on('openModel', (target) => {
      this.openModel(target)
    })
    if (this.$route.fullPath.indexOf('ProductMenu') >= 0) {
      this.navSwitch = false
      this.BGWhite = true
      this.productMenuSwitch = true
      this.navigationSwitch = false
    }
    else if (this.$route.fullPath.indexOf('/Market/Search') >= 0) {
      this.navigationSwitch = false
      this.navSwitch = true
      this.BGWhite = false
      this.productMenuSwitch = false
    }
    else {
      this.navigationSwitch = false
      this.navSwitch = true
      this.productMenuSwitch = false
    }
  },
  watch: {
    '$route' (to, from) {
      var toRoutePath = to.fullPath.toLowerCase()
      if (toRoutePath.indexOf('productmenu') >= 0) {
        this.routerViewShow = false
        this.navSwitch = false
        this.BGWhite = true
        this.productMenuSwitch = true
        this.navigationSwitch = false
      }
      else if (toRoutePath.indexOf('/market/search') >= 0) {
        this.navigationSwitch = false
        this.productMenuSwitch = false
      }
      else if (toRoutePath.indexOf('/market/shoppingbag') >= 0) {
        this.navigationSwitch = false
        this.productMenuSwitch = false
      }
      else {
        this.routerViewShow = true
        this.navigationSwitch = false
        this.BGWhite = false
        this.navSwitch = true
        this.productMenuSwitch = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<template>
  <div class="box">
  <div class="item1">
  <div class="home-banner">
    <div class="homeBanner" ref="homeBanner">
      <router-link
        :class="`banner-image ${banner.move?'':'transition'}`"
        v-for="(item, index) in banner.items"
        :key="index"
        to="Products"
        tag="a"
        :style="banner.bannerStyle"
        >
        <div :style="{'width':'100%','height':'100%','background': `url(${item.image}) center / cover no-repeat`}"></div>
        <div key="title" class="banner-title">
          <img
          class="banner-name"
          :src="item.name"
          >
          <p><span class="banner-price">{{item.price}}</span> <span class="banner-category">{{item.type}}</span></p>
          <q-btn class="banner-btn">BUY</q-btn>
      </div>
      </router-link>
    </div>  
   <div class="banner-icon">
      <div class="text">
        <span class="text1">0{{ parseInt(bannerSelect)+1>parseInt(banner.total)-1?1:parseInt(bannerSelect)+1}}</span>
        <hr />
        <span class="text2">0{{ Math.ceil(parseInt(banner.total) - 1) }}</span>
      </div>
      <div class="icon-img">
        <i
          class="icon-left"
          @click.stop="HotPageSub"
          /></i>
        <i
          class="icon-right"
          @click.stop="HotPageAdd"
          /></i>
      </div>
  </div>
  </div>
</div>
<div class="item2">
  <div class="products-title">
    <p class="products-title1">New Products</p>
  </div>
  <div class="products-img">
    <router-link
    class="new-products transition"
    v-for="(item, index) in products.items"
    :key="item.id"
    v-if="index >= products.items.length-4"
    to="/Products"
    tag="a"
    >
    <q-transition
    appear
    enter="fadeIn"
    leave="fadeOut"
    >
    <img
    width="100%"
    :src="item.image"
    :title="item.name"
    >
  </q-transition>
  <p class="products-name" :title="item.name">{{ item.name }}</p>
  <p class="price-type">
    <span class="products-price">${{ item.price }}</span>
    <span class="products-type">{{ item.type }}</span>
  </p>
</router-link>
</div>
</div>
<div class="item3">
  <div class="featured-title">
    <p class="featured-title1">Featured Products</p>
  </div>
  <div class="featured">
    <div class="new-featured">
      <router-link
      v-for="(item, index) in featured.items"
      :key="item.id"
      v-if="index==parseInt(featured.select)||index==parseInt(featured.select)+1 || index==parseInt(featured.select)+2"
      to=""
      tag="a"
      class="featuredBox"
      >
      <div class="featured-img">
        <img
        width="100%"
        :src="item.image"
        :title="item.name"
        >
      </div>
      <div class="featured-font" v-bind:class="{'right':index%2===1}">
        <div class="featured-body">
          <p class="featured-name" :title="item.name">{{ item.name }}</p>
          <p class="featuredprice-type">
            <span class="featured-price">${{ item.price }}</span>
            <span class="featured-type">{{ item.type }}</span>
          </p>
          <p class="featured-describe">{{ item.describe }}</p>
          <p><q-btn class="featured-btn1">Explore</q-btn> <q-btn class="featured-btn2" @click="addGoods(item)">BUY</q-btn></p>
        </div>
      </div>
    </router-link>
  </div>
</div>
<div class="see-all">
  <a @click="jupmSearch()"><q-btn class="see-all-btn1">See all products<img src="statics/images/Homepage/add.png" style="padding:0 0 0 8%; width: 14% "></q-btn></a>
</div>
<div class="bottom-hr"><div class="bottom-hr2"></div></div>
</div>
<div class="item4">
  <div class="sign-up">
    <p class="sign-title">
      Join the Commerce Family  
    </p>
    <p class="sign-title2">
      Don’t sleep on all the latest from Commerce.
    </p>
    <div class="signup-input">
      <div class="signup-input2">
        <input name="searchkey" type="text" value="Enter your Phone Number" onFocus="this.value=''" class="sign-input"> 
        <!-- <q-input v-model="text" inverted class="sign-input"/> -->
        <q-btn @click="signIn" class="signup-btn1">Sign up <img src="statics/images/Homepage/right.png" style="padding:0 0 0 8%; width: 12.4% "></q-btn>
      </div>
    </div>
  </div>
</div>
    <q-toolbar slot="footer" class="home-footer">
      <img src="statics/images/Homepage/bottom.png" width="100%"> 
    </q-toolbar>
</div>
</template>

<script>
import {
  QBtn,
  QGallery,
  QGalleryCarousel,
  QTransition,
  QInput,
  QIcon,
  QLayout,
  QToolbar,
  QToggle
} from 'quasar'
import homeBanner from 'data/home-banner.json'
import newProducts from 'data/home-newproducts.json'
import featuredProducts from 'data/home-featured.json'
import 'quasar-extras/animate/fadeIn.css'
import 'quasar-extras/animate/fadeOut.css'
import 'quasar-extras/animate'
// var timer = null
export default {
  components: {
    QBtn,
    QGallery,
    QGalleryCarousel,
    QTransition,
    QInput,
    QIcon,
    QLayout,
    QToolbar,
    QToggle
  },
  data () {
    return {
      banner: {
        select: homeBanner.data.select,
        total: homeBanner.data.total,
        items: homeBanner.data.items,
        turning: false,
        touch: {
          start: {
            x: 0,
            y: 0
          },
          move: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        },
        move: false,
        initStyle: 0,
        bannerStyle: {
          transform: 'translateX(0)'
        },
        timer: ''
      },
      products: newProducts.data,
      featured: featuredProducts.data,
      text: 'Enter your Phone Number',
      num: 5,
      email: 'email',
      password: 'password',
      area: 'Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.',
      texterr: 'Quasar rulz',
      error: true,
      error2: false,
      loading: true,
      bannerSelect: 0,
      i: 0,
      show: true
    }
  },
  methods: {
    bannerClone: function () {
      let e = this.banner.items[0]
      this.banner.total++
      this.banner.items.push(e)
    },
    timerStart () {
      this.banner.timer = setInterval(function () {
        if (this.bannerSelect === this.banner.total - 1) {
          this.bannerSelect = 0
          this.HotPageSub()
        }
        else {
          this.HotPageAdd()
        }
      }.bind(this), 5000)
    },
    timerEnd () {
      clearInterval(this.banner.timer)
    },
    HotPageSub: function () {
      if (this.banner.turning) return
      this.timerEnd()
      this.banner.turning = true
      setTimeout(function () {
        this.banner.turning = false
      }.bind(this), 300)
      if (this.bannerSelect === 0) {
        this.banner.move = true
        this.bannerSelect = this.banner.total - 1
        setTimeout(function () {
          this.banner.turning = false
        }.bind(this), 10)
        setTimeout(function () {
          this.banner.move = false
          this.HotPageSub()
        }.bind(this), 20)
      }
      else {
        this.bannerSelect--
      }
      this.banner.bannerStyle.transform = `translateX(${-(this.$el.clientWidth * this.bannerSelect)}px)`
      this.banner.initStyle = -(this.$el.clientWidth * (this.bannerSelect - 1))
      this.timerStart()
    },
    HotPageAdd: function () {
      if (this.banner.turning) return
      this.timerEnd()
      this.banner.turning = true
      setTimeout(function () {
        this.banner.turning = false
      }.bind(this), 300)
      if (this.bannerSelect === this.banner.total - 1) {
        this.banner.move = true
        this.bannerSelect = 0
        setTimeout(function () {
          this.banner.move = false
        }.bind(this), 20)
      }
      else if (this.bannerSelect === this.banner.total - 2) {
        this.bannerSelect++
        setTimeout(function () {
          this.banner.turning = false
          this.HotPageAdd()
        }.bind(this), 310)
      }
      else {
        this.bannerSelect++
      }
      this.banner.bannerStyle.transform = `translateX(${-this.$el.clientWidth * this.bannerSelect}px)`
      this.banner.initStyle = -(this.$el.clientWidth * (this.bannerSelect - 1))
      this.timerStart()
    },
    setIndex: function (index) {
      this.bannerSelect = index
    },
    addGoods (item) {
      // sessionStorage.setItem('goods', JSON.stringify([]))
      let array = item
      array.number = 1
      if (array.byStages) {
        array.setMeal = array.setMeals[0]
      }
      let buy = JSON.parse(sessionStorage.getItem('goods'))
      let isPut = true
      buy.map((b) => {
        if (b.id === item.id) {
          b.number++
          isPut = false
        }
      })
      if (isPut) {
        buy.push(array)
      }
      sessionStorage.setItem('goods', JSON.stringify(buy))
      // console.log(sessionStorage.getItem('goods'))
      // console.log(JSON.parse(sessionStorage.getItem('goods')))
    },
    jupmSearch () {
      this.$router.push('/Market/Search')
    },
    signIn () {
      this.socket.$emit('toIndexSignIn')
    }
  },
  mounted: function () {
    this.bannerClone()
    this.timerStart()
  }
}
</script>

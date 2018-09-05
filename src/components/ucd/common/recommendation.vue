<!-- 样式在orderDetail.styl -->
<template>
<div  class="recomment-wrap">
    <div class="main">
        <div class="search-hot">
            <div class="hot-top">
              <div class="hot-left">
                  <span>{{title}}</span>
              </div>
              <div class="hot-right">
                  <div class="hot-btn-left"  >
                      <q-icon class="btn btn-left" name="fa-chevron-left"/>
                  </div>
                  <div class="hot-btn-right" >
                    <q-icon
                    class="btn btn-right"
                    name="fa-chevron-right"
                    />
                  </div>
              </div>
          </div>
          <div class="search-hot-main">
              <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in swiperData" :key="index">
                    <div class="search-hot-img">
                        <div>
                            <img :src="item.image" alt="">
                        </div>
                        <span class="search-hot-imgname">{{item.name}}</span>
                        <div class="search-hot-data">
                            <span class="search-hot-imgprice">${{item.price}}</span>
                            <span class="search-hot-imgtype">{{item.type}}</span>
                        </div>
                    </div>
                </swiper-slide>
              </swiper>
          </div>
        </div>
    </div>

</div>

</template>
<script>
import {
  QIcon,
} from 'quasar'
export default {
  components: {
    QIcon,
  },
  props:{
     title:{
       type:String,
       default:'Recommendation'
     },
     swiperData:{
       type:Array
     },
     view:{
       type:Number,
       default:5
     }
  },
  data () {
    return {
      swiperOption: {
          slidesPerView: this.view,
          spaceBetween: 40,
          slidesPerGroup: 1,
          loop: false,
          nextButton: '.hot-btn-right',
          prevButton: '.hot-btn-left',
      }
    }
  },
}
</script>



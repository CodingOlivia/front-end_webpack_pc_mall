<template>
    <div>
        <div class="iwinad-banner-img-popup">
            <div class="popup-head">
            <span class="title">Organize Banner Images</span>
            <i class="close-icon"></i>
            </div>
            <div class="popup-content">
            <div class="content-left">
                <p>Drag and drop your media into position to get your banner nicely orangized.</p>
                <ul class="ul-list-box">
                <draggable v-model="imgs"  @start="drag=true" @end="drag=false" class="list-box">
                <li class="list-item" v-for="(item,index) in imgs" :key="item">
                    <span class="index-sign">{{index+1}}</span>
                    <img :src="item.imgurl" alt="">
                    <div class="del-wrap">
                        <i class="del-icon" @click="delHandle(index)"></i>
                    </div>
                </li>
                <li class="list-item add-item">
                    <div class="add-wrap">
                        <div class="img-add"></div>
                        <div class="text-desc">Add more</div>
                    </div>
                </li>
                </draggable>
                </ul>
            </div>
            <div class="content-right">
                <div class="panel-title">Image Settings</div>
                <div class="layout-title">Preview</div>
                <swiper :options="swiperOption" class="swiper-box">
                <swiper-slide v-for="item in imgs" :key="item" class="swiper-item stop-swiping">
                    <div class="img-wrap">
                    <img :src="item.imgurl" alt="qweqwe">
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev prev-new-d" slot="button-prev"></div>
                <div class="swiper-button-next next-new-d" slot="button-next"></div>
                </swiper>
                <div class="link-func">
                  <span class="link-text">Title</span>
                </div>
                <div class="link-result">Not Connenct Not Connenct Not Connenct Not Connenct</div>
                <div class="link-func">
                  <span class="link-text">Description</span>
                </div>
                <div class="link-result">Not Connenct Not Connenct Not Connenct Not Connenct</div>
                <div class="link-func">
                <span class="link-text">link</span>
                <i class="link-icon"></i>
                </div>
                <div class="link-result">Not Connencted</div>
            </div>
            </div>
            <div class="popup-foot">
                <button class="btn-cancel btn-common">Cancel</button>
                <button class="btn-comfirm btn-common">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import draggable from 'vuedraggable'
export default {
  components:{
    draggable,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup:1,//轮播的个数
        centeredSlides: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        noSwiping : true,
        noSwipingClass : 'stop-swiping'
      },
      imgs:[
        {
          imgurl:'statics/images/contentCarousel/code.png'
        },
        {
          imgurl:'statics/images/contentCarousel/icon_logo.png'
        },
        {
          imgurl:'statics/images/contentCarousel/reginer-img.png'
        },
        {
          imgurl:'statics/images/contentCarousel/icon_logo.png'
        },
        {
          imgurl:'statics/images/contentCarousel/icon_logo.png'
        },
        {
          imgurl:'statics/images/contentCarousel/icon_logo.png'
        },
        {
          imgurl:'statics/images/contentCarousel/icon_logo.png'
        },
      ],     
     }

  },
  methods: {
   delHandle(index){
     this.imgs.splice(index,1)
   }
  },
}
</script>
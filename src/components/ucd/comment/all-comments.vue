<template>
    <div class='allcomments'>
        <div class='allcommentsmain'>
            <cHeader></cHeader>
            <div style="max-width:1488px;margin-bottom:100px">
                <swiperPic :title="title" :swiperData=picsData :view=viewCount></swiperPic>
            </div>
            
        </div>
        <div class='allcommentsfooter'>
          <img src='../../../statics/images/Homepage/bottom.png' />
        </div>
    </div>
</template>
<script>
import {
    QIcon,
  } from 'quasar'
import  cHeader from '../common/commentHeader'
import Recommendation from 'data/Recommendation.json'
import commerce from 'data/commerce.json'
import swiperPic from '../../ucd/common/recommendation.vue'
export default {
  components: {
        QIcon,
        cHeader,
        swiperPic
  },
  data () {
    return {
      picsData:Recommendation.data.items,
      viewCount:5,
      title:'Recommendation',
      commodity:{
            title:'iPhone X',
            describe:'Color: Black,  Capacity:64GB',  
        },    
      user: {
        name: 'Sample Userid',
        level: 5,
        phone: 18688680088,
        exp: 40
      },
      renewal: {
        type: 'Renewal',
        number: 198,
        unit: 'Bundle',
        date: '2018/04/01'
      },
      balance: {
        recharge: 100,
        promotional: 200,
        cash: 300
      },
      order: commerce.order
    }
  },
  methods: {
    deleteOrder (index) {
      this.order.splice(index, 1)
    },
  }
}
</script>
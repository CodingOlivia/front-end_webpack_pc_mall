<template>
      <div class="myBusiness main">
        <div class="Primary-wrap">
           <div class="Primary-inner-wrap row items-center">
              <div class="Primary-img">
                <img src="statics/images/Myorder/pro1.png"/>
              </div>
              <div class="col Primary-content">
                <div class="Primary-title">Prepaid Primary Offer<span class="text-tip">Activate</span></div>
                <div class="Primary-detail">$10.00/mo.<span class="Primary-date">2016/12/10-2026/12/10</span>
                     <div class="Primary-action"><span class="btn positive">Change</span></div>
                </div>
               
              </div>
              
           </div> 
        </div>
        <div class="Supplementary-wrap">
            <div class="Supplementary-h3">Supplementary Offer
              <div class="action-right"><span class="btn positive">Subscription</span></div>
            </div>
            <div class="Supplementary-table">
                <div class="Supplementary-head row">
                    <span class="w30">Offering Name</span>
                    <span class="w30">Effective/Expiration Time</span>
                    <span class="col">Status</span>
                    <span class="w10">Action</span>
                </div>
                <div class="Supplementary-content">
                    <div class="Supplementary-item " v-for="(item,index) in offerData">
                         <div class="row">
                            <div class="w30"><span class="fontfamilymedium ">{{item.name}}</span></div>
                            <div class="w30"><span class="fontfamilymedium ">{{item.date}}</span></div>
                            <div class="col"><span class="text-tip" :class="{'unActive':item.state=='Inactivate'}">{{item.state}}</span></div>
                            <div class="w10"><span class="action-text ">Unsubscribe</span></div>
                         </div>
                         <div class="row " v-for="(item1,i) in item.children">
                            <div class="w30"><span class="fontfamilymedium ">——{{item1.name}}</span></div>
                            <div class="w30"><span class="fontfamilymedium ">{{item1.date}}</span></div>
                            <div class="col"><span class="text-tip" :class="{'unActive':item.state=='Inactivate'}">{{item1.state}}</span></div>
                            <div class="w10"><span class="action-text ">Unsubscribe</span></div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QSearch,
  QField,
  QInput,
  QChipsInput,
  QTransition,
  QModal
} from 'quasar'
// import Recommendation from 'data/Recommendation.json'
// import commerce from 'data/commerce.json'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QSearch,
    QField,
    QInput,
    QChipsInput,
    QTransition,
    QModal
  },
  data () {
    return {
        offerData:[
          {
              name:'DIY Offering ',
              state:'Activate',
              date:'2016/12/10-2026/12/10',
              showAction:false,
              children:[
                  {
                      name:'CMWAP',
                      state:'Activate',
                      date:'2016/12/10-2026/12/10',
                      showAction:false,
                      children:[]
                  },
                  {
                      name:'CMWAP',
                      state:'Activate',
                      date:'2016/12/10-2026/12/10',
                      showAction:false,
                      children:[]
                  }
              ]

          },
          {
              name:'Spodify',
              state:'Inactivate',
              date:'2016/12/10-2026/12/10',
              showAction:false,
              children:[
              ]

          }
      ]
    }
  },
  methods: {
  }
}
</script>



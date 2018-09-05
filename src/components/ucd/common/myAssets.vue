<template>
      <div class="myAssets-box ">
          <div class="main">
              <div class="assetList">
                  <div class="assetTitle">
                      <i>12,334</i> Assets
                      <div class="asset-search field-search"> 
                          <q-input
                            v-model="search1"
                            placeholder="search"
                            :after="[
                              {
                                icon: 'search',
                                handler () {
                                  // do something...
                                }
                              }
                            ]"
                          />
                      </div>
                  </div>
                  <div class="assetItem " v-for="(item,index) in  dataAsset" :class="{'expired':item.type==4}">
                      <div class="row">
                         <div class="col-3">
                              <div class="p-around--small heightFull" :class="{'bg-grey-3':item.type==2,'bg-grey-2':item.type==4}">
                                 <div class="title">
                                    {{item.title}}
                                 </div>
                                 <div class="detail">
                                    {{item.detail}}
                                 </div>
                                 <div class="price">{{item.price}} </div>
                               </div>
                         </div>
                         <div class="col-3">
                            <div class="p-around--small heightFull" :class="{'bg-grey-3':item.type==2,'bg-grey-2':item.type==4}">
                               <div class="title-2">
                                  <span class="icon-dot" :class="item.bgColor"></span>
                                  {{item.tyPeLabel}}
                               </div>
                               <div class="row">
                                  <div class="col-6">
                                      <div class="field-view">
                                         <label>Total</label>
                                         <div class="field-view-con">
                                             <em>{{item.total}}</em>Pictures
                                         </div>
                                      </div>
                                  </div>
                                  <div class="col-6">
                                     <div class="field-view" v-show="item.left!=''">
                                         <label>Left</label>
                                         <div class="field-view-con">
                                             <em :class="item.totalColor">{{item.left}}</em>Pictures
                                         </div>
                                      </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="col-2"> 
                           <div class="p-around--small align-center heightFull" :class="{'bg-grey-3':item.type==2,'bg-grey-2':item.type==4}">
                               <div class="position-center">
                                  <div class="title-3">Asset Resource Code</div>
                                  <div>{{item.code}}</div>
                               </div>
                           </div>
                         </div>
                         <div class="col-4">
                             <div class="p-around--small  heightFull" :class="{'bg-grey-3':item.type==2,'bg-grey-2':item.type==4}">
                                 <div class="row position-center">
                                     <div class="col-6">
                                          <div class="title-3">Effective Date</div>
                                          <div>{{item.effectiveDate}}</div>
                                      </div>
                                      <div class="col-6">
                                          <div class="title-3">Expired  Date</div>
                                          <div>{{item.expiredDate}}</div>
                                      </div>
                                 </div>
                              </div>
                         </div>
                         
                      </div>
                      <div class="row level2" v-for="(i,index) in item.children" v-show="item.children.length>0">
                         <div class="col-3">
                              <div class="p-around--small m-left--small heightFull bg-grey-1">
                                 <div class="title">
                                     {{i.title}}
                                 </div>
                                 <div class="detail">
                                     {{i.detail}}
                                 </div>
                                 <div class="price"> {{i.price}} </div>
                               </div>
                         </div>
                         <div class="col-3">
                            <div class="p-around--small heightFull bg-grey-1">
                               <div class="title-2">
                                  <span class="icon-dot" :class="i.bgColor"></span>
                                  <!-- <span class="icon-dot bg-warning"></span>
                                  <span class="icon-dot bg-positive"></span>
                                  <span class="icon-dot bg-light"></span>
                                  <span class="icon-dot bg-black"></span>
                                  <span class="icon-dot bg-yellow"></span> -->
                                  {{i.tyPeLabel}}
                               </div>
                               <div class="row">
                                  <div class="col-6">
                                      <div class="field-view">
                                         <label>Total</label>
                                         <div class="field-view-con">
                                             <em>{{i.total}}</em>Pictures
                                         </div>
                                      </div>
                                  </div>
                                  <div class="col-6">
                                     <div class="field-view">
                                         <label>Left</label>
                                         <div class="field-view-con">
                                             <em :class="i.totalColor">{{i.left}}</em>Pictures
                                         </div>
                                      </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="col-2">
                           <div class="p-around--small align-center heightFull bg-grey-1">
                               <div class="position-center">
                                  <div class="title-3">Asset Resource Code</div>
                                  <div>{{i.code}}</div>
                               </div>
                           </div>
                         </div>
                         <div class="col-4">
                             <div class="p-around--small heightFull m-right--small bg-grey-1">
                                 <div class="row position-center">
                                     <div class="col-6">
                                          <div class="title-3">Effective Date</div>
                                          <div>{{i.effectiveDate}}</div>
                                      </div>
                                      <div class="col-6">
                                          <div class="title-3">Expired  Date</div>
                                          <div>{{i.expiredDate}}</div>
                                      </div>
                                 </div>
                              </div>
                         </div>
                         
                      </div>
                  </div>
              </div>
              <div class="asset-page">
                  <div>
                      <!-- <span class="icon-action disable">
                         <q-icon name="chevron_left"/>
                      </span>
                      <input v-model="current"/>
                      of {{count}}
                      <span class="icon-action">
                          <q-icon name="chevron_right"/>
                      </span> -->
                      <q-pagination
                      input
                      v-model="page"
                      :min="1"
                      :max="6"
                    />
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
  QPagination
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
    QPagination
  },
  data () {
    return {
      search1:'',
      current:1,
      count:3,
      page:3,
      dataAsset:[
        {
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'0',
          tyPeLabel:"ToUse",
          total:"50",
          left:'',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-warning",
          totalColor:"",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'1',
          tyPeLabel:"InUse",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-positive",
          totalColor:"text-positive",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'2',
          tyPeLabel:"Frozen",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-grey-4",
          totalColor:"text-positive",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'3',
          tyPeLabel:"InMaintenance",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-yellow",
          totalColor:"text-positive",
          children:[]
        },{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'4',
          tyPeLabel:"Expired",
          total:"50",
          left:'30',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-black",
          totalColor:"",
          children:[]
        }
        ,{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'5',
          tyPeLabel:"UseExhausted",
          total:"50",
          left:'0',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-negative",
          totalColor:"text-negative",
          children:[]
        }
        ,{
          title:"Printing photos",
          detail:"Asset description Asset description Asset description",
          price:"Package: $30package",
          type:'5',
          tyPeLabel:"UseExhausted",
          total:"50",
          left:'0',
          code:"12354ASDA21321SDF",
          effectiveDate:"2016-10-10 16:15:23",
          expiredDate:"2016-10-10 16:15:23",
          bgColor:"bg-negative",
          totalColor:"text-negative",
          children:[
            {
              title:"Printing photos",
              detail:"Asset description Asset description Asset description",
              price:"Package: $30package",
              type:'5',
              tyPeLabel:"UseExhausted",
              total:"50",
              left:'0',
              code:"12354ASDA21321SDF",
              effectiveDate:"2016-10-10 16:15:23",
              expiredDate:"2016-10-10 16:15:23",
              bgColor:"bg-negative",
              totalColor:"text-negative",
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>


<template>
<div class="cont">
   <div class="btnGroup row">
      <div class="btnTip">
         <span class="btnTipTittle">
          <div style="letter-spacing:1px; line-height:2; white-space:nowrap;">User  satisfaction</div>
          <div><q-rating readonly v-model="ratingModel" :max="5" /></div>
         </span>
         <span>98<span style="font-size:14px;">%</span></span>
      </div>
      <!-- <div style="height: calc(80/1920*100vw);border-left:1px solid $border-color-1 ;"></div> -->
      <div class="btnChoice">
         <span class="btnTipTittle2" style="white-space:nowrap;">User impression</span>
         <div class="btn">
            <button v-for="item in btn" @click="search(item.btnName)">{{ item.btnName }}&nbsp;&nbsp;&nbsp;<span>{{ item.btnNum }}</span></button>
         </div>
      </div>
   </div>

    <div class="tab">
        <!-- <q-tabs class="qTab">
            <q-tab slot="title" label="All Reviews " />
            <q-tab slot="title" label=" Hightest Rating" />
            <q-tab slot="title" label="Have a Picture" />
        </q-tabs> -->
        <div class="tabBt">
          <button type="button" autofocus="autofocus">All Reviews</button>
          <button type="button">Hightest Rating</button>
          <button type="button">Have a Picture</button>
        </div>
        <div class="tab-right">
          <!-- <q-select 
          v-model="select"
          :options="options"
          class="tabSelect"
         /> -->
         <div class="selectBox">
            <div @click="providerToggle" type="text" class="selectInner"><span class="tab-right-font">Sort by:</span>{{providerInner}} <div class="select-icon"><img v-bind:class="[providerShow ? 'up' : 'down']" src="statics/search/images/new/down.png"></div>
              <ul v-show="providerShow">
                <li
                  v-for="(item, index) in options"
                  @click="providerSelect(index)"
                  v-bind:class="{'selectLi':providerInner===item.label}"
                >{{item.label}}</li>
              </ul>
            </div>
         </div>
        </div>
    </div>

    <div class="details row" v-for="item in details" :key="item.id">

      <q-list highlight inset-separator >

        <q-item multiline v-for="list in item.qlist" :key="list.id">
          <q-item-side v-bind:avatar="list.avatar"/>
          <div class="little-text">
            <q-rating readonly v-model="ratingModel2" :max="5" class="stars2" />
            <q-item-main
            v-bind:label="list.label"
            label-lines="1"
            v-bind:sublabel="list.sublabel"
            sublabel-lines="2"
          />
          </div>
          
        </q-item>
      </q-list>
      <ul class="discuss" v-for=" discuss in item.discuss" :key="discuss.id">
        <li class="discussName">{{discuss.discussName}}</li>
        <li class="describe">{{discuss.describe}}</li>
        <li class="text" v-for="text in discuss.text" :key="text.id">
          <h3>{{text.title}}</h3>
          <p>{{text.ptext}}</p>
        </li>
      </ul>
    </div>

    <div class="paging row">
      <div class="pagingTip">
        <span>All Reviews</span><i>{{detailsCopy.length}}</i>
      </div>
      <div style="margin:0 auto">
        <!-- <q-pagination color="gray" v-model="page" :max="17" /> -->
        <r-pagination
          :total="detailsAll.length"
          :display="display"
          :current.sync="current"
        />
      </div>
    </div>
</div>
</template>
<script>
import {
  QBtn,
  QTabs,
  QTab,
  QSelect,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QPagination,
  QChip,
  QRating
} from 'quasar'
import RPagination from 'components/pagination'
export default {
  components: {
    QBtn,
    QTabs,
    QTab,
    QSelect,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QPagination,
    QChip,
    QRating,
    RPagination
  },
  data () {
    return {
      selectLi: true,
      check1: false,
      providerShow: false,
      providerInner: 'Recommendation',
      btnName: '',
      display: 5,
      current: 1,
      ratingModel: 4,
      ratingModel2: 5,
      page: 1,
      details: [],
      detailsAll: [],
      detailsCopy: [
        {
          'id': '1',
          'qlist': [
            {
              'id': '1',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '1',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.',
              'text': [
                {
                  'id': '1',
                  'title': 'by Customer service',
                  'ptext': 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
                }
              ]
            }
          ]
        },
        {
          'id': '2',
          'qlist': [
            {
              'id': '2',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '2',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.',
              'text': [
                {
                  'id': '2',
                  'title': 'by Customer service',
                  'ptext': 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
                }
              ]
            }
          ]
        },
        {
          'id': '3',
          'qlist': [
            {
              'id': '3',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '3',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Cost-effective',
              'text': [
                {
                  'id': '3',
                  'title': 'by Customer service',
                  'ptext': 'Cost-effective'
                }
              ]
            }
          ]
        },
        {
          'id': '4',
          'qlist': [
            {
              'id': '4',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 12:35'
            }
          ],
          'discuss': [
            {
              'id': '4',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Recommended Buy',
              'text': [
                {
                  'id': '4',
                  'title': 'by Customer service',
                  'ptext': 'Recommended Buy'
                }
              ]
            }
          ]
        },
        {
          'id': '5',
          'qlist': [
            {
              'id': '5',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '5',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Great',
              'text': [
                {
                  'id': '5',
                  'title': 'by Customer service',
                  'ptext': 'Great'
                }
              ]
            }
          ]
        },
        {
          'id': '6',
          'qlist': [
            {
              'id': '6',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '6',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Easy Operation',
              'text': [
                {
                  'id': '6',
                  'title': 'by Customer service',
                  'ptext': 'Easy Operation'
                }
              ]
            }
          ]
        },
        {
          'id': '7',
          'qlist': [
            {
              'id': '7',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '7',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Good Logistics',
              'text': [
                {
                  'id': '7',
                  'title': 'by Customer service',
                  'ptext': 'Good Logistics'
                }
              ]
            }
          ]
        },
        {
          'id': '8',
          'qlist': [
            {
              'id': '8',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '8',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Cost-effective',
              'text': [
                {
                  'id': '8',
                  'title': 'by Customer service',
                  'ptext': 'Cost-effective.'
                }
              ]
            }
          ]
        },
        {
          'id': '9',
          'qlist': [
            {
              'id': '9',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '9',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Cost-effective',
              'text': [
                {
                  'id': '9',
                  'title': 'by Customer service',
                  'ptext': 'Cost-effective.'
                }
              ]
            }
          ]
        },
        {
          'id': '10',
          'qlist': [
            {
              'id': '10',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '10',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Cost-effective',
              'text': [
                {
                  'id': '10',
                  'title': 'by Customer service',
                  'ptext': 'Cost-effective'
                }
              ]
            }
          ]
        },
        {
          'id': '11',
          'qlist': [
            {
              'id': '11',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '11',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Cost-effective',
              'text': [
                {
                  'id': '11',
                  'title': 'by Customer service',
                  'ptext': 'Cost-effective.'
                }
              ]
            }
          ]
        },
        {
          'id': '12',
          'qlist': [
            {
              'id': '12',
              'avatar': 'statics/images/Reviews/avatar1.png',
              'label': 'Sample Userid',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '12',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Good Logistics',
              'text': [
                {
                  'id': '12',
                  'title': 'by Customer service',
                  'ptext': 'Good Logistics.'
                }
              ]
            }
          ]
        }
      ],
      btn: [
        {
          btnName: 'Cost-effective',
          btnNum: ''
        },
        {
          btnName: 'Recommended Buy',
          btnNum: ''
        },
        {
          btnName: 'Great',
          btnNum: ''
        },
        {
          btnName: 'Easy Operation',
          btnNum: ''
        },
        {
          btnName: 'Good Logistics',
          btnNum: ''
        }
      ],
      select: 'rd',
      options: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Recommendation',
          value: 'rd'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ]
    }
  },
  methods: {
    providerToggle: function () {
      this.providerShow = !this.providerShow
    },
    providerSelect: function (index) {
      this.providerInner = this.options[index].label
    },
    // end
    HotPageSub () {
      this.banner.select = this.banner.select - 2 < 0 ? 0 : this.banner.select - 2
    },
    HotPageAdd () {
      this.banner.select = this.banner.select + 2 >= this.banner.total ? this.banner.total - 2 : this.banner.select + 2
    },
    selectType (type) {
      this.active.type = type
      this.current = 1
    },
    selectColor (color) {
      if (color === this.active.color) {
        this.active.color = ''
      }
      else this.active.color = color
      this.current = 1
    },
    selectMemory (memory) {
      this.active.memory = memory
      this.current = 1
    },
    clearMemory () {
      this.active.memory = ''
      this.current = 1
    },
    clearType () {
      this.active.color = ''
      this.active.memory = ''
      this.current = 1
    },
    pagechange: function (p) {
      this.current = p
      // console.log('pagechange', p)
      this.details = []
      for (var i = (this.current - 1) * this.display; i < this.current * this.display && i < this.detailsCopy.length; i++) {
        this.details.push(this.detailsCopy[i])
      }
    },
    typeSelect: function (p) {
      this.current = 1
    },
    search: function (name) {
      if (this.btnName !== name) {
        this.btnName = name
        this.details = []
        this.detailsAll = []
        for (var i = 0; i < this.detailsCopy.length; i++) {
          if (this.detailsCopy[i].discuss[0].describe.indexOf(name) >= 0) {
            this.detailsAll.push(this.detailsCopy[i])
          }
        }
        for (var d = (this.current - 1) * this.display; d < this.current * this.display && d < this.detailsAll.length; d++) {
          this.details.push(this.detailsAll[d])
        }
      }
      else {
        this.current = 1
        this.details = []
        this.detailsAll = []
        this.detailsAll = this.detailsCopy
        for (var a = (this.current - 1) * this.display; a < this.current * this.display && a < this.detailsAll.length; a++) {
          this.details.push(this.detailsAll[a])
        }
      }
    }
  },
  created () {
    this.$root.eventHub.$on('pagechange', (target) => {
      this.pagechange(target)
    })
  },
  mounted () {
    this.details = []
    this.detailsAll = []
    this.detailsAll = this.detailsCopy
    for (var d = (this.current - 1) * this.display; d < this.current * this.display && d < this.detailsAll.length; d++) {
      this.details.push(this.detailsAll[d])
    }
    for (var b = 0; b < this.btn.length; b++) {
      var num = 0
      for (var c = 0; c < this.detailsCopy.length; c++) {
        // if (this.btn[b].btnName.indexOf(this.detailsCopy[c].discuss[0].describe) >= 0) {
        if (this.detailsCopy[c].discuss[0].describe.indexOf(this.btn[b].btnName) >= 0) {
          num++
        }
      }
      this.btn[b].btnNum = num
    }
  }
}
</script>


<template>
<div>
  <div class="fillingBox">
    <div class="main">
      <div class="deliveryDetails">
        <div class="title">
          <h3>Customer Basic Info</h3>
          <span>Add you contract details here,we will use this information to update you on this order or any incomplete order.</span>
        </div>
        <div class="contain">
          <div class="panel">
            <div class="panel-title relative-position">Basic Info
                <span class="absolute-right panel-edit" @click="isEdit=true"></span>
                   
                
            </div>
            <div class="panel-con">
                <div class="row" v-if="isEdit==true">
                    <div class="col-4">
                        <q-field class="field-inp m-right--small"
                          :error="error1"
                          error-label="Please enter!"
                        >
                          <label>First Name<em>*</em></label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[0]" />
                        </q-field>
                    </div>
                    <div class="col-4">
                        <q-field class="field-inp m-right--small"
                          :error="error2"
                          error-label="Please enter!"
                        >
                          <label> Middle Name<em>*</em></label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[1]" />
                        </q-field>
                    </div>
                    <div class="col-4">
                        <q-field class="field-inp m-right--small"
                          :error="error3"
                          error-label="Please enter!"
                        >
                          <label> Last Name<em>*</em></label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[2]" />
                        </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-inp m-right--small"
                          :error="error4"
                          error-label="Please enter!"
                        >
                          <label>Date of Birth <em>*</em></label>
                          <!-- <q-input class="field-view-inp" stack-label="" v-model="baseInfo[3]" /> -->
                          <q-datetime
                            class="field-view-inp"
                            stack-label=""
                            v-model="baseInfo[3]"
                            
                        />
                        </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-inp m-right--small"
                        >
                          <label>Contact Number</label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[4]" />
                        </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-inp m-right--small"
                          :error="error5"
                          error-label="Please enter!"
                        >
                          <label>Email Address<em>*</em></label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[5]" />
                        </q-field>
                    </div>
                  <!-- <div class="col-3"></div> -->
        
               
                  
                </div>
                <div class="row " v-if="isEdit==false">
                    <div class="col-4">
                        <div class="field-view">
                            <label>First Name<em>*</em></label>
                            <div class="field-detail">{{baseInfo[0]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Middle Name<em>*</em></label>
                            <div class="field-detail">{{baseInfo[1]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Last Name<em>*</em></label>
                            <div class="field-detail">{{baseInfo[2]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Date of Birth<em>*</em></label>
                            <div class="field-detail">{{baseInfo[3]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Contact Number</label>
                            <div class="field-detail">{{baseInfo[4]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Email Address<em>*</em></label>
                            <div class="field-detail">{{baseInfo[5]}}</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-title">Address Info</div>
            <div class="panel-con">
                <div class="row " v-if="isEdit==true">
                    <div class="col-4">
                      <q-field class="field-select m-right--small"
                          :error="error6"
                          error-label="Please select!"
                      >   
                          <label>State<em>*</em></label>
                          <q-select
                              class="field-view-select"
                              v-model="selection1"
                              stack-label=""
                              :options="selectListOptions"
                            />
                      </q-field>
                    </div>
                    <div class="col-4">
                        <q-field class="field-select m-right--small"
                          :error="error7"
                          error-label="Please select!"
                      >   
                          <label>Township<em>*</em></label>
                          <q-select
                              class="field-view-select"
                              v-model="selection2"
                              stack-label=""
                              :options="selectListOptions1"
                            />
                      </q-field>
                    </div>
                    
                    <div class="col-4">
                        <q-field class="field-select m-right--small"
                          :error="error8"
                          error-label="Please select!"
                      >   
                          <label>City<em>*</em></label>
                          <q-select
                              class="field-view-select"
                              v-model="selection3"
                              stack-label=""
                              :options="selectListOptions1"
                            />
                      </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-select m-right--small"
                          :error="error9"
                          error-label="Please select!"
                      >   
                          <label>Community (Colony)<em>*</em></label>
                          <q-select
                              class="field-view-select"
                              v-model="selection4"
                              stack-label=""
                              :options="selectListOptions1"
                            />
                      </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-select m-right--small"
                          :error="error10"
                          error-label="Please select!"
                      >   
                          <label>Street<em>*</em></label>
                          <q-select
                              class="field-view-select"
                              v-model="selection5"
                              stack-label=""
                              :options="selectListOptions2"
                            />
                      </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-inp m-right--small"
                          :error="error11"
                          error-label="Please enter!"
                        >
                          <label>Postal Code<em>*</em></label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[6]" />
                        </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-inp m-right--small"
                          :error="error12"
                          error-label="Please enter!"
                        >
                          <label>External Number<em>*</em></label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[7]" />
                        </q-field>
                    </div>
                    <div class="col-4">
                      <q-field class="field-inp m-right--small"
                        >
                          <label>Internal Number</label>
                          <q-input class="field-view-inp" stack-label="" v-model="baseInfo[8]" />
                        </q-field>
                    </div>
                </div>
                <div class="row ytx-mb" v-if="isEdit==false">
                    <div class="col-4">
                        <div class="field-view">
                            <label>State<em>*</em></label>
                            <div class="field-detail">{{baseInfo[10]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Township<em>*</em></label>
                            <div class="field-detail">{{baseInfo[11]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>City<em>*</em></label>
                            <div class="field-detail">{{baseInfo[11]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Community (Colony)<em>*</em></label>
                            <div class="field-detail">{{baseInfo[11]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Street<em>*</em></label>
                            <div class="field-detail">{{baseInfo[12]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Postal Code<em>*</em></label>
                            <div class="field-detail">{{baseInfo[6]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>External Number<em>*</em></label>
                            <div class="field-detail">{{baseInfo[7]}}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="field-view m-right--small">
                            <label>Internal Number</label>
                            <div class="field-detail">{{baseInfo[8]}}</div>
                        </div>
                    </div>
                </div>
                <div class="panel-action-footer" v-if="isEdit==true">
                     <span class="btn" @click="isEdit=false">CANCEL</span>
                     <span class="btn actively" @click="isEdit=false"> SAVE</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="deliveryDetails">
        <div class="title">
          <h3>Bill Info</h3>
          <span>We need your bill info, and can send your billing information as soon as possible.</span>
        </div>
        <div class="contain">
          <div class="panel">
            <div class="panel-title">Bill  Info</div>
            <div class="panel-con">
                <div class="row">
                   <div class="col-3">
                      <q-field class="field-inp m-right--small"
                        :error="error13"
                        error-label="Please enter!"
                      >
                        <label>RFC NO<em>*</em></label>
                        <q-input class="field-view-inp" stack-label="" v-model="baseInfo[9]" />
                      </q-field>
                   </div>
                </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-title">Address Info
                <div class="title-absolute-right">
                   <span>Copy from customer info</span>
                   <span class="invoice"> <q-toggle v-model="check3" value='' /></span>
                </div>
            </div>
            <div class="panel-con">
                <div class="row">
                  <div class="col-9">
                      <div class="row">
                          <div class="col-4">
                            <q-field class="field-select m-right--small"
                                :error="error14"
                                error-label="Please select!"
                            >   
                                <label>State<em>*</em></label>
                                <q-select
                                    class="field-view-select"
                                    v-model="selection6"
                                    stack-label=""
                                    :options="selectListOptions"
                                  />
                            </q-field>
                          </div>
                          <div class="col-4">
                              <q-field class="field-select m-right--small"
                                :error="error15"
                                error-label="Please select!"
                            >   
                                <label>Township<em>*</em></label>
                                <q-select
                                    class="field-view-select"
                                    v-model="selection7"
                                    stack-label=""
                                    :options="selectListOptions1"
                                  />
                            </q-field>
                          </div>
                          
                          <div class="col-4">
                              <q-field class="field-select m-right--small"
                                :error="error16"
                                error-label="Please select!"
                            >   
                                <label>City<em>*</em></label>
                                <q-select
                                    class="field-view-select"
                                    v-model="selection8"
                                    stack-label=""
                                    :options="selectListOptions1"
                                  />
                            </q-field>
                          </div>
                          <div class="col-4">
                            <q-field class="field-select m-right--small"
                                :error="error17"
                                error-label="Please select!"
                            >   
                                <label>Community (Colony)<em>*</em></label>
                                <q-select
                                    class="field-view-select"
                                    v-model="selection9"
                                    stack-label=""
                                    :options="selectListOptions1"
                                  />
                            </q-field>
                          </div>
                          <div class="col-4">
                            <q-field class="field-select m-right--small"
                                :error="error18"
                                error-label="Please select!"
                            >   
                                <label>Street<em>*</em></label>
                                <q-select
                                    class="field-view-select"
                                    v-model="selection10"
                                    stack-label=""
                                    :options="selectListOptions2"
                                  />
                            </q-field>
                          </div>
                          <div class="col-4">
                            <q-field class="field-inp m-right--small"
                                :error="error19"
                                error-label="Please enter!"
                              >
                                <label>Postal Code<em>*</em></label>
                                <q-input class="field-view-inp" stack-label="" v-model="baseInfo[12]" />
                              </q-field>
                          </div>
                          <div class="col-4">
                            <q-field class="field-inp m-right--small"
                                :error="error20"
                                error-label="Please enter!"
                              >
                                <label>External Number<em>*</em></label>
                                <q-input class="field-view-inp" stack-label="" v-model="baseInfo[13]" />
                              </q-field>
                          </div>
                          <div class="col-4">
                            <q-field class="field-inp m-right--small"
                              >
                                <label>Internal Number</label>
                                <q-input class="field-view-inp" stack-label="" v-model="baseInfo[14]" />
                              </q-field>
                          </div>
                      </div>
                  </div>
                  
                </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-title">Bill Medium</div>
            <div class="panel-con">
                <div class="row">
                  <div class="col-12 m-bottom--small">
                      <!-- <q-option-group
                        inline
                        type="radio"
                        v-model="group"
                        :options="[
                          { label: 'SMS Bill', value: 'op1' ,color: 'secondary'},
                          { label: 'Email Bill', value: 'op2', color: 'secondary' },
                          { label: 'Paper Bill', value: 'op3', color: 'secondary' }
                        ]"
                      /> -->
                      <div class="radio-group-default row">
                          <div class="radio-option row-auto" :class="{'active':radioIndex==index}" v-for="(item,index) in radioData" @click="radioIndex=index">
                              <span class="radio-option-icon"><q-icon name="done"/></span>
                              <label>{{item.label}}</label>
                          </div>
                      </div>
                  </div>
                   <div class="col-3">
                      <q-field class="field-inp m-right--small"
                        :error="error21"
                        error-label="Please enter!"
                      >
                        <label>SMS NO (Optional)</label>
                        <q-input class="field-view-inp" stack-label="" v-model="baseInfo[13]" />
                      </q-field>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-toolbar slot="footer" class="filling-footer">
        <div class="filling-footer row">
          <div class="col-auto filling-footer-btn" :class="{'active':isAgree==true}" @click="isAgree=!isAgree">
                <q-icon name="done"/>
            </div>
          <div class="agree col-auto">I agree with the <span>Tems & Conditions</span></div>
          <div class="col-auto align-right"><div class="btn" >SUBMIT</div></div>
      </div>
    </q-toolbar>
  </div>
  <!-- <div>
     <div class="panel">
        <div class="panel-title">
            Customer Information
        </div>
        <div class="panel-con">
            <div class="row p-vertical-x--small">
              <div class="col-4">
              </div>
              <div class="col-8">

              </div>
          </div>
        </div>
    </div>

  </div> -->
  
</div>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QField,
  QTabs,
  QRouteTab,
  QItemSide,
  QItemMain,
  QListHeader,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QOptionGroup,
  QIcon,
  QItemTile,
  QInput,
  QDatetime,
  QRadio,
  QToggle
} from 'quasar'
export default {
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QField,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition,
    QItemTile,
    QInput,
    QDatetime,
    QRadio,
    QToggle
  },
  data () {
    return {
      isAgree: false,
      check3:false,
      group: '',
      baseInfo: ['', '', '', '', '', '', '', '', '' ,'', '', '',''],
      error1: true,
      error2: false,
      error3: false,
      error4: false,
      error5: false,
      error6: false,
      error7: false,
      error8: false,
      error9: false,
      error10: false,
      error11: false,
      error12: false,
      error13: false,
      error14: false,
      error15: false,
      error16: false,
      error17: false,
      error18: false,
      error19: false,
      error20: false,
      error21: false,
      selection1 :'1',
      selection2 :'1',
      selection3 :'1',
      selection4 :'1',
      selection5 :'1',
      selection6 :'',
      selection7 :'',
      selection8 :'',
      selection9 :'',
      selection10 :'',
      radioIndex:0,
      isEdit:false,
      radioData:[{
        label:'SMS Bill'
      },{
        label:'Email Bill'
      },{
        label:'Paper Bill'
      }],
      selectListOptions: [
      {
          label: 'United States',
          value: '1'
      }],
      selectListOptions1: [
      {
          label: 'New York',
          value: '1'
      }],
      selectListOptions2: [
      {
          label: '1000 5th Ave',
          value: '1'
      }],
      baseInfo:['Steven','Paul','Jobs','1955-02-24','1856552214','asdasdjkj@gmail.com','122544','18004687386','18006623397','23125167575','United States','New York','1000 5th Ave']
    }
  },
  methods: {
  },
  mounted () {

  },
  watch: {
  }
}
</script>
<style lang="stylus">
@import '~themes/app.variables'

</style>

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
            <div class="form-warning">
                <span class="row items-start"><i></i><label>Please fill in the information.</label></span>
            </div>
            <div class="panel-title relative-position">Basic Info
               
            </div>
            <div class="panel-con">
                <div class="row supplement" >
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
            </div>
          </div>
          <div class="panel">
            <div class="panel-title">Address Info</div>
            <div class="panel-con">
                <div class="row supplement" >
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
                <div class="panel-action-footer" >
                     <span class="btn" @click="isEdit=false">CANCEL</span>
                     <span class="btn actively" @click="isEdit=false"> SAVE</span>
                </div>
            </div>
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
      error1: false,
      error2: false,
      error3: false,
      error4: false,
      error5: false,
      error6: true,
      error7: true,
      error8: true,
      error9: true,
      error10: true,
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
      selection1 :'',
      selection2 :'',
      selection3 :'',
      selection4 :'',
      selection5 :'',
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

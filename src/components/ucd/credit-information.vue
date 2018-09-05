<template>
  <q-layout
    ref="layout"
    view="hHh LpR fFf"
    :right-breakpoint="1100"
  >
    <q-modal v-model="opened1" content-classes="model-inner"  :content-css="{width: '510px', height: '80vh',overflow:'hidden'}">
        <div class="model-title">
           CREDIT INFORMATION BUREAU
           <span class="model-close" @click="opened1=false"></span>
        </div>
        <div class="credit-wrap">
            <div class="panel">
                <div class="panel-title">
                   Dear 5547354112：
                </div>
                <div class="panel-con">
                    You will be asked 2 questions in order to make the Credit Buro validation, and the answer is required to be Yes or No. Do you agree? Do you authorize Pegaso PCS S.A de C.V. to query your credit history for this only time from the Societies of Credit Information that will be convenient; stating that you have knowledge of the nature, scope and use that Pegaso PCS S.A. de C.V. will give to this information?
                </div>
            </div>
            <div class="panel">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Authorize Telefonica to verify the credit bureau?
                </div>
                <div class="panel-con ">
                   <div class="invoice"> <q-toggle v-model="check1" value='' /></div>
                </div>
            </div>
            <div class="panel" v-show="check1">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Do you currently own a credit card?
                </div>
                <div class="panel-con ">
                    <div class="invoice"> <q-toggle v-model="check2" value='' /></div>
                     <q-field class="field-select"
                        :error="selection==''"
                        error-label="We need a valid email"
                     >   
                         <label><em>*</em>Bank Name</label>
                         <q-select
                            class="field-view-select"
                            v-model="selection"
                            stack-label=""
                            :options="selectListOptions"
                          />
                     </q-field>
                     <q-field class="field-border">
                        <q-input stack-label="Last 4 digits of Credit Card"  color="amber" v-model="Credit" />
                    </q-field>
                     

                </div>
            </div>
            
            <div class="panel" v-show="check1&&check2">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Do you have a current house Mortgage?
                </div>
                <div class="panel-con ">
                    <div class="invoice"> <q-toggle v-model="check3" value='' /></div>
                     <q-field class="field-select"
                        :error="selection1==''"
                        error-label="We need a valid email"
                     >   
                         <label><em>*</em>Bank Name</label>
                         <q-select
                            class="field-view-select"
                            v-model="selection1"
                            stack-label=""
                            :options="selectListOptions"
                          />
                     </q-field>
                </div>
            </div>
            <div class="panel" v-show="check1&&check2">
                <div class="panel-title m-bottom--small">
                    <em>*</em>Have you requested credit for a car purchase within the last 24 months?
                </div>
                <div class="panel-con ">
                    <div class="invoice"> <q-toggle v-model="check4" value='' /></div>
                     <q-field class="field-select"
                        :error="selection2==''"
                        error-label="We need a valid email"
                     >   
                         <label><em>*</em>Bank Name</label>
                         <q-select
                            class="field-view-select"
                            v-model="selection2"
                            stack-label=""
                            :options="selectListOptions"
                          />
                     </q-field>
                </div>
            </div>

        </div>
        <div class="model-footer">
            <div class="model-footer-inner align-right">
               <div class="model-footer-action static">
                   <span class="btn negative m-right--small">CANCEL</span>
                   <span class="btn ">OK</span>
               </div>
            </div>
        </div>
    </q-modal>
 
</q-layout>
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
  QToggle,
  QInput,
  QModal
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
    QToggle,
    QInput,
    QModal
  },
  data () {
    return {
      opened1: true,
      isAgree: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      selection: '1',
      selection1: '1',
      selection2: '1',
      Credit: '12',
      mailHasError: false,
      selectListOptions: [
      {
          label: 'ICBC',
          value: '1'
      }]
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

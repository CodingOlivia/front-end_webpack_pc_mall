<template>
  <q-layout
    ref="layout"
  >
   <!-- 导航 -->
    <div class="box orderTopBox">
      <div class="nav">
        <q-tabs slot="navigation" calss="myorder-navigation">
          <q-route-tab slot="title" to="/Order/MyOrder/AllOrders" replace label="All Orders " class="navigation-list"/>
          <q-route-tab slot="title" to="/Order/MyOrder/AllOrders#2" replace label="Awaiting Payment" class="navigation-list"><i v-if="number>0">{{number}}</i></q-route-tab>
          <q-route-tab slot="title" to="/Order/MyOrder/AllOrders#3" replace label="Ready for Delivery" class="navigation-list"/>
          <q-route-tab slot="title" to="/Order/MyOrder/AllOrders#4" replace label="Delivering" class="navigation-list"/>
          <q-route-tab slot="title" to="/Order/MyOrder/AllOrders#5" replace label="Awaiting Evaluation" class="navigation-list"/>
        </q-tabs>
      </div>
      <div class="search">
        <q-search class="myorder-search" @keyup.enter="jump" v-model="search" />
      </div>
    </div>
    <!-- 子路由在此注入 -->
  <router-view />
  </q-layout>

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
  QField
} from 'quasar'
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
    QField
  },
  data () {
    return {
      search: '',
      number: 0
    }
  },
  mounted () {
    this.socket.$on('orders.length', function (length) {
      this.number = length
    }.bind(this))
  },
  methods: {
    jump () {
      this.$router.push({
        path: '/Order/MyOrder/AllOrders',
        query: {
          key: this.search
        }
      })
    }
  }
}
</script>
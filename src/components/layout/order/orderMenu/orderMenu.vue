<template>
  <q-layout ref="layout" class="myorder-layout-left">
    <q-scroll-area slot="left" style="width: 100%; height: 100%" class="myorder-left">
    <q-list-header class="myorder-title">{{orderMenuHead}}</q-list-header>
    <div v-for="(item, index) in orderMenu" >
      <q-side-link item :to="item.to" :class="openInit===item.uuid?'active':''" @click="openInit=item.uuid">
        <q-item-main :label="item.name" class="myorder-list"/>
      </q-side-link>
    </div>
    </q-scroll-area>
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
import orderMenuData from 'data/orderMenuData.json'
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
      openInit: null,
      orderMenu: orderMenuData.orderMenuData,
      orderMenuHead: 'My order'
    }
  },
  mounted () {
    var routerPath = this.$route.fullPath.toLowerCase()
    console.log(routerPath)
    for (var m = 0; m < this.orderMenu.length; m++) {
      if (routerPath.indexOf(this.orderMenu[m].to.toLowerCase()) >= 0) {
        console.log(this.orderMenu[m].to)
        this.orderMenuHead = this.orderMenu[m].name
        break
      }
    }
    if (this.$route.path.toLowerCase() === '/order/commerce') {
      this.openInit = 1
    }
    else if (this.$route.path.toLowerCase() === '/order/myorder/allorders') {
      this.openInit = 3
    }
  },
  watch: {
    '$route' (to, from) {
      var routerPath = to.fullPath.toLowerCase()
      console.log('-------------------')
      console.log(routerPath)
      for (var m = 0; m < this.orderMenu.length; m++) {
        console.log(this.orderMenu[m].to)
        if (routerPath.indexOf(this.orderMenu[m].to.toLowerCase()) >= 0) {
          console.log(this.orderMenu[m].to)
          this.orderMenuHead = this.orderMenu[m].name
          break
        }
      }
      if (to.path.toLowerCase() === '/order/commerce') {
        this.openInit = 1
      }
      else if (to.path.toLowerCase() === '/order/myorder/allorders') {
        this.openInit = 3
      }
    }
  }
}
</script>



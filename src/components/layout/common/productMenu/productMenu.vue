<template>
  <div class="productMenu">
    <q-toolbar inverted color="dark" class="column">
      <div class="row items-center" style="width: 100%;height: 64px;border-bottom: 1px solid $border-color-1 ;">
        <q-toolbar-title class="productMenuTitle">
          HUAWEI VR 2 + 198 Bundle
        </q-toolbar-title>
        <q-tabs slot="navigation" class="productMenuTabBar">
            <q-route-tab style="font-weight:bold;" slot="title" :to="item.to" replace hide="icon" :label="item.tabName" v-for="(item, index) in tab" :key="item.id" v-bind:class="{'active':item.id===activeTab}" @click="activeClick(item.id)"><span class="bottomLine"></span></q-route-tab>
        </q-tabs>
        <div>
          <router-link class="buy" to="/Market/shoppingBag">BUY</router-link>
        </div>
      </div>
    </q-toolbar>
  </div>
</template>

<script>
import {
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QRouteTab,
  QTabs,
  QSideLink
} from 'quasar'
export default {
  name: 't-productMenu',
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QRouteTab,
    QTabs,
    QSideLink
  },
  data () {
    return {
      num: 0,
      activeTab: null,
      tab: [
        {
          id: 1,
          tabName: 'OVERVIEW',
          checked1: 'checkedTitle',
          checkedline: 'bottomLined',
          to: `/ProductMenu/Overview`
        },
        {
          id: 2,
          tabName: 'GALLERY',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/ProductMenu/Gallery`
        },
        {
          id: 3,
          tabName: 'TECHSPEC',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/ProductMenu/TechSpec`
        },
        {
          id: 4,
          tabName: 'REVIEWS',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/ProductMenu/Reviews`
        }
      ]
    }
  },
  mounted () {
    var routerPath = this.$route.path
    console.log(routerPath)
    if (routerPath.toLowerCase() === '/productmenu/overview') {
      // this.activeTab = 1
      this.activeClick(1)
    }
    else if (routerPath.toLowerCase() === '/productmenu/gallery') {
      // this.activeTab = 2
      this.activeClick(2)
    }
    else if (routerPath.toLowerCase() === '/productmenu/techspec') {
      // this.activeTab = 3
      this.activeClick(3)
    }
    else if (routerPath.toLowerCase() === '/productmenu/reviews') {
      // this.activeTab = 4
      this.activeClick(4)
    }
  },
  methods: {
    activeClick (id) {
      this.activeTab = id
    }
  },
  watch: {
    $route: function (to) {
      var routerPath = to.path
      console.log(routerPath)
      if (routerPath.toLowerCase() === '/productmenu/overview') {
        // this.activeTab = 1
        this.activeClick(1)
      }
      else if (routerPath.toLowerCase() === '/productmenu/gallery') {
        // this.activeTab = 2
        this.activeClick(2)
      }
      else if (routerPath.toLowerCase() === '/productmenu/techspec') {
        // this.activeTab = 3
        this.activeClick(3)
      }
      else if (routerPath.toLowerCase() === '/productmenu/reviews') {
        // this.activeTab = 4
        this.activeClick(4)
      }
    }
  }
}
</script>
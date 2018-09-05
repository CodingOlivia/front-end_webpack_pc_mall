<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" @mousewheel.stop="paperScroll">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  data () {
    return {
      prevRouter: ''
    }
  },
  methods: {
    paperScroll: function (event) {
      let deltaY = event.deltaY || -(event.wheelDelta)
      let scrollY = window.scrollY || window.pageYOffset
      var routerPath = this.$route.fullPath.toLowerCase()
      if (routerPath.indexOf('/products') >= 0 && deltaY > 10) {
        var productsFlag = true
        var productsTarget = event.target
        for (var p = 0; p < 100; p++) {
          if (productsTarget.className === 'scroll-box') {
            productsFlag = false
            break
          }
          else {
            if (productsTarget.parentNode) {
              productsTarget = productsTarget.parentNode
            }
            else {
              break
            }
          }
        }
        if (productsFlag) {
          if (this.prevRouter === '') {
            this.$router.push({
              path: '/ProductMenu/Overview'
            })
          }
          else {
            this.$router.push({
              path: this.prevRouter
            })
          }
        }
      }
      else if (routerPath === '/productmenu/overview' || routerPath === '/productmenu/gallery' || routerPath === '/productmenu/techspec' || routerPath === '/productmenu/reviews') {
        console.log(event)
        if (scrollY === 0 && deltaY < -10) {
          this.prevRouter = routerPath
          this.$router.push({
            path: '/Products'
          })
        }
      }
      else if (routerPath.indexOf('/market/search') >= 0) {
        var searchFlag = false
        var searchTarget = event.target
        for (var s = 0; s < 100; s++) {
          if (searchTarget.className === 'filterBox') {
            searchFlag = true
            break
          }
          else {
            if (searchTarget.parentNode) {
              searchTarget = searchTarget.parentNode
            }
            else {
              break
            }
          }
        }
        if (searchFlag) {
          event.preventDefault()
        }
      }
    }
  }
}
</script>

<style></style>

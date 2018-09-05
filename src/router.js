import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/', // 首页
      redirect: '/Home',
      component: load('layout/common/index/index'),
      children: [
        { path: 'Home', component: load('layout/home/home') }
      ]
    },
    {
      path: '/Market',
      redirect: '/Market/Search',
      component: load('layout/common/index/index'),
      children: [
        { path: 'Search', component: load('layout/search/search') }, // 搜索页
        { path: 'Shoppingbag', component: load('layout/shoppingBag/shoppingBag') }, // 购物车页
        { path: 'Shoppingbag', component: load('layout/shoppingBag/shoppingBag2') }, // 购物车页
        { path: 'Checkout', component: load('layout/checkOut/checkOut') }, // 商品确认页
        { path: 'Checkout2', component: load('layout/checkOut/checkOut2') }, // 商品确认页
        { path: 'Payment', component: load('layout/payment/payment') } // 支付页
      ]
    },
    {
      path: '/', // 个人订单页
      redirect: '/Order',
      component: load('layout/common/index/index'),
      children: [
        {
          path: 'Order',
          redirect: '/Order/MyOrder',
          component: load('layout/order/orderMenu/orderMenu'),
          children: [
            {
              path: 'MyOrder',
              redirect: '/Order/MyOrder/AllOrders',
              component: load('layout/order/orderTop/orderTop'),
              children: [
                { path: 'AllOrders', component: load('layout/order/orderContent/orderContent') }
              ]
            },
            { path: 'Commerce', component: load('layout/order/commerce/commerce') }, // 个人中心页
            { path: 'Favorites', component: load('ucd/myfavorite/myfavorite') },
            { path: 'Mybrowsinghistorypage', component: load('ucd/mybrowsinghistorypage/mybrowsinghistorypage') },// 浏览历史
          ]
        }
      ]
    },
    {
      path: '/', // 商品详情页
      redirect: '/Products',
      component: load('layout/common/index/index'),
      children: [
        { path: 'Products', component: load('layout/products/productContent/productContent') }
      ]
    },
    {
      path: '/ProductMenu', // 商品菜单页
      redirect: '/ProductMenu/Overview',
      component: load('layout/common/index/index'),
      children: [
        { path: 'Overview', component: load('layout/products/overview/overview') },
        { path: 'Gallery', component: load('layout/products/gallery/gallery') },
        { path: 'Techspec', component: load('layout/products/techSpec/techSpec') },
        { path: 'Reviews', component: load('layout/products/reviews/reviews') }
      ]
    },
    // ucd 的路由配置
    { path: '/wishlist', component: load('ucd/common/wishlist') },
    { path: '/Rechange', component: load('ucd/common/Rechange') },
    { path: '/mybrowsinghistory', component: load('ucd/common/mybrowsinghistory') },//浏览历史组件路由
    { path: '/leftMenu', component: load('ucd/common/leftMenu') },
    { path: '/userinfo', component: load('ucd/common/userinfo') },
    { path: '/personalcenteroder', component: load('ucd/common/personalcenteroder') },
    { path: '/setting', component: load('ucd/common/setting') },
    

    { path: '/login', component: load('ucd/login/login') },
    { path: '/register', component: load('ucd/register/register') },
    { path: '/third-register', component: load('ucd/register/third-register') },
    { path: '/forgotPassword', component: load('ucd/forgotPassword/forgotPassword') },
    { path: '/commonLink', component: load('ucd/common/commonLink/commonLink') }, 
    { path: '/page', component: load('ucd/common/commonLink/page') },
    { path: '/contentCarousel', component: load('ucd/contentCarousel/contentCarousel') },
    { path: '/pc-banner-img', component: load('ucd/contentCarousel/pc-banner-img') },
    { path: '/recommendation', component: load('ucd/common/recommendation') },
    { path: '/myBusiness', component: load('ucd/common/myBusiness') },
    { path: '/myAssets', component: load('ucd/common/myAssets') },
    { path: '/confirm-information', component: load('ucd/confirm-information') },
    { path: '/credit-information', component: load('ucd/credit-information') },
    { path: '/filling-info', component: load('ucd/filling-info/filling-info') },
    { path: '/filling-info-supplement', component: load('ucd/filling-info/filling-info-supplement') },
    { path: '/orderDetail', component: load('ucd/orderDetail') },
    { path: '/myfavorite', component: load('ucd/myfavorite/myfavorite') },
    { path: '/ytxdialog', component: load('ucd/common/YTXDialog') },
    { path: '/bindemail', component: load('ucd/common/bindemail-popup') },
    { path: '/unbundledemail', component: load('ucd/common/unbundledemail-popup') },
    { path: '/bindwechat', component: load('ucd/common/bindwechat-popup') },
    { path: '/modifypassword', component: load('ucd/common/modify-password-popup') },
    { path: '/productCompare', component: load('ucd/common/productCompare/product-compare') },
    { path: '/some-comments', component: load('ucd/comment/some-comments') },
    { path: '/all-comments', component: load('ucd/comment/all-comments') },
    { path: '/orderReivew', component: load('ucd/orderReivew') },
    { path: '/viewreivew', component: load('ucd/view-review') },
    { path: '/productdetails', component: load('ucd/product-details') },
    { path: '/ytxpagination', component: load('ucd/common/ytx-pagination') },
    { path: '/better-scroll-page2', component: load('ucd/common/better-scroll-page2') },
    { path: '/better-scroll-horizontal', component: load('ucd/common/better-scroll-horizontal') },
    { path: '/better-scroll-vertical', component: load('ucd/common/better-scroll-vertical') },
    {
      path: '/', // 商品详情页
      redirect: '/cloud-detail',
      component: load('ucd/common/index'),
      children: [
        { path: 'cloud-detail', component: load('ucd/cloud-detail') }
      ]
    },

    
   

   
    

    // {
    //   path: '/Products', // 商品详情页
    //   component: load('layout/products/productMenu/productMenu'),
    //   children: [
    //     { path: 'Overview', component: load('layout/products/overview/overview') },
    //     { path: 'Gallery', component: load('layout/products/gallery/gallery') },
    //     { path: 'Techspec', component: load('layout/products/techSpec/techSpec') },
    //     { path: 'Reviews', component: load('layout/products/reviews/reviews') }
    //   ]
    // },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})

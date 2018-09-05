<template>
  <div class="class-layout">
    <!-- S 内容区域 -->
      <div class="content1">

        <!-- S 左侧边栏 -->
          <div class="menu-wrapper" ref="menuWrapper">
            <ul>
              <li v-for="(item, index) in goodList" class="menu-item border-1px" :class="{'current':currentIndex === index}"
                  @click="selectMenu(index, $event)" :key="index">
                <span class="text">
                  {{item.name}}
                </span>
              </li>
            </ul>
          </div>
        
        <!-- S 右侧边栏 -->
          <div class="foods-wrapper" ref="foodWrapper">
            <div>
              <div v-for="(item,call) in goodList" class="food-list food-list-hook" :key="call">
                <div class="title-wrap">
                    <div class="line"></div>
                    <div class="title">{{item.name}}</div>
                    <div class="line"></div>
                </div>
                <div v-if="switch1Col">
                  <div v-for="(food,inl) in item.foods" class="food-item b-line" :key="inl">
                    <div class="icon">
                      <img :src="food.icon" alt="">
                    </div>
                    <div class="content">
                      <h2 class="name">{{food.name}}</h2>
                      <p class="desc">{{food.description}}</p>
                      <!--
                      <div class="extra">
                        <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>
                      </div>-->
                      <div class="price">
                        <span class="now">￥{{food.price}}</span>
                        <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                      </div>
                      <div class="add-cart"><i></i></div>
                    </div>
                  </div>
                </div>

                <div v-if="switch2Col" class="two-col-wrap">
                    <div v-for="(food,inl) in item.foods" class="food-item2 b-line" :key="inl">
                      <div class="icon">
                        <img :src="food.icon" alt="">
                      </div>
                      <div class="content">
                        <h2 class="name">{{food.name}}</h2>
                        <p class="desc">{{food.description}}</p>
                        <!--<div class="extra">
                          <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>
                        </div>-->
                        <div class="price">
                          <span class="now">￥{{food.price}}</span>
                          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                        </div>
                        <div class="add-cart"><i></i></div>
                      </div>
                    </div>
                </div>

                <div v-if="switch3Col" class="three-col-wrap">
                    <div v-for="(food,inl) in item.foods" class="food-item3" :key="inl">
                      <div class="icon">
                        <img :src="food.icon" alt="">
                      </div>
                      <div class="content">
                        <h2 class="name">{{food.name}}</h2>
                      </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        <!-- E 右侧边栏 -->

      </div>
    <!-- E 内容区域 -->
  </div>
</template>

<script>
import BScroll from 'better-scroll' // 使用better-scrol实现滑动
  export default {
    data () {
      return {
        switch1Col: true,
        switch2Col: false,
        switch3Col: false,
        listHeight: [],
        scrolly: 0, // 滚动处始值
        goodList: [
          {
            "name": "热销榜",
            "type": -1,
            "foods": [
              {
                "name": "皮蛋瘦肉粥皮蛋瘦肉粥皮蛋瘦肉粥皮蛋瘦肉粥皮蛋瘦肉粥皮蛋瘦肉粥皮蛋瘦肉粥",
                "price": 10,
                "oldPrice": "5",
                "description": "咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥咸粥",
                "sellCount": 229,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "红豆薏米美肤粥",
                "price": 12,
                "oldPrice": "11",
                "description": "甜粥",
                "sellCount": 86,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "八宝酱菜",
                "price": 4,
                "oldPrice": "",
                "description": "",
                "sellCount": 84,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "红枣山药糙米粥",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 81,
                "rating": 91,
                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "糊塌子",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 80,
                "rating": 93,
                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "单人精彩套餐",
            "type": 2,
            "foods": [
              {
                "name": "红枣山药粥套餐",
                "price": 29,
                "oldPrice": 36,
                "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                "sellCount": 17,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "冰爽饮品限时特惠",
            "type": 1,
            "foods": [
              {
                "name": "VC无限橙果汁",
                "price": 8,
                "oldPrice": 10,
                "description": "",
                "sellCount": 15,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "精选热菜",
            "type": -1,
            "foods": [
              {
                "name": "娃娃菜炖豆腐",
                "price": 17,
                "oldPrice": "",
                "description": "",
                "sellCount": 43,
                "rating": 92,
                "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "手撕包菜",
                "price": 16,
                "oldPrice": "",
                "description": "",
                "sellCount": 29,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "香酥黄金鱼/3条",
                "price": 11,
                "oldPrice": "",
                "description": "",
                "sellCount": 15,
                "rating": 100,
                "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          }
        ] // 模拟一些假数据
      }
    },
    created () {
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染

      this.$nextTick(function(){
        this._initScroll()
        this._calculateHeight()
      })

      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    computed: {
      currentIndex () { //计算到达哪个区域的区间的时候的对应的索引值
        debugger;
        for(var i = 0; i < this.listHeight.length; i++) { 
          var height = this.listHeight[i] //当前menu子块的高度
          var height2 = this.listHeight[i+1] //下一个menu子块的高度
          //滚动到底部的时候,height2为undefined,需要考虑这种情况
          //需要确定是在两个menu子块的高度区间
          if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
            return i //返回这个menu子块的索引
          }
        }
        return 0
      }
    },
    methods: {
      //初始化scroll区域
      _initScroll () {
        var _this = this;
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true //结合BScroll的接口使用,是否将click事件传递,默认被拦截了
        })
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3, //结合BScroll的接口使用,3实时派发scroll事件，探针的作用
          click: true
        })
        //结合BScroll的接口使用,监听scroll事件(实时派发的),并获取鼠标坐标，当滚动时能实时暴露出scroll
        this.foodScroll.on('scroll', function(pos) {
            debugger;
          _this.scrolly = Math.abs(Math.round(pos.y))  //滚动坐标会出现负的,并且是小数,所以需要处理一下，实时取得scrollY
        })
      },
      _calculateHeight() {
        debugger;
        var foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')  //获取每一个food的dom对象
        var height = 0;
        this.listHeight.push(height)  //初始化第一个高度为0
        for (var i = 0; i < foodList.length; i++) {
          var item = foodList[i] //每一个item都是刚才获取的food的每一个dom
          height += item.clientHeight //主要是为了获取每一个foods内部块的高度
          this.listHeight.push(height)
        }
      },
      selectMenu (index, event) {
          debugger;
         if (!event._constructed) { //去掉自带的click事件点击，即pc端直接返回
          return;
        }
        // debugger;
        var foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        var el = foodList[index];
         //类似jump to的功能,通过这个方法,跳转到指定的dom
        this.foodScroll.scrollToElement(el, 300);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .class-layout {
    width: 100%;
    .tab {
      width: 100%;
      height: 40px;
      display: flex;
      background-color: skyblue;
      .tab-item {
        flex: 1;
        align-self: center; // 弹性子元素剧中
        text-align: center;
        a {
          color: black;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 去除a标签点击时高亮背景
          &.link {
            color: red;
          }
        }
      }
    }
    .content1 {
      display: flex;
      position: absolute;
      top: 0px;
      bottom: 0px;
      width: 100%;
      overflow: hidden;
      .menu-wrapper {
        flex: 0 0 85px;
        width: 85px;
        background: #f3f5f7;
        .menu-item {
          display: table;
          height: 55px;
          line-height: 14px;
          padding: 6px;
          width: 100%;
          &.current {
            position: relative;
            z-index: 10;
            margin-top: -1px;
            background: #fff;
            font-weight: 700;
            .text {
              &:after {
                display: none
              }
            }
          }
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            vertical-align: top;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=594559231,2167829292&fm=27&gp=0.jpg);
            }
            &.discount {
              background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3044191397,2911599132&fm=27&gp=0.jpg);
            }
            &.guarantee {
              background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1944805937,3724010146&fm=27&gp=0.jpg);
            }
            &.invoice {
              background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=147015573,3182587356&fm=27&gp=0.jpg);
            }
            &.special {
              background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1046983545,2051560208&fm=27&gp=0.jpg);
            }
          }
          .text {
            display: table-cell;
            width: 100%;
            vertical-align: middle;
            position: relative;
            font-size: 12px;
            text-align: center;
          }
        }
      }
      .foods-wrapper {
        flex: 1;
        .food-list {
          .title-wrap {
            display: flex;
            align-items: center;
            -webkit-box-align: center;
            height: 55px;
            margin: 0 20px;
            .line {
              height: 1px;
              flex: 1px;
              border-bottom: 1px solid #e5e5e5;
              -webkit-box-flex: 1;
            }
            .title {
              color: #666;
              line-height: 16px;
              height: 16px;
              text-align: center;
              padding: 0 8px;
              font-size: 16px;
              font-weight: 900;
            }
          }
          .food-item {
            display: flex;
            padding: 18px;
            margin: 0 10px;
            padding-left: 0px;
            &:last-child {
              &:after {
                display: none
              }
            }
            .icon {
              flex: 0 0 64px;
              margin-right: 10px;
              width: 64px;
              height: 64px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .content {
              flex: 1;
              .name {
                margin: 0 0 8px 0;
                font-size: 14px;
                line-height: 14px;
                color: #07111b;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                /* autoprefixer: off */
                -webkit-box-orient: vertical;
                /* autoprefixer: on */
              }
              .desc,
              .extra {
                font-size: 10px;
                line-height: 10px;
                color: rgb(147, 153, 159);
              }
              .desc {
                margin-bottom: 8px;
                line-height: 13px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                /* autoprefixer: off */
                -webkit-box-orient: vertical;
                /* autoprefixer: on */
              }
              .extra {
                .count {
                  margin-right: 12px;
                }
              }
              .price {
                font-weight: 700;
                line-height: 24px;
                .now {
                  margin-right: 8px;
                  font-size: 14px;
                  color: #252525;
                }
                .old {
                  font-size: 10px;
                  color: rgb(147, 153, 159);
                  text-decoration: line-through;
                }
              }
              .add-cart {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-start;
                i {
                  background: url('https://s3-ap-southeast-1.amazonaws.com/commercecloudhw/赢天下/首页/del-ico.png') no-repeat;
                  width: 20px;
                  height: 22px;
                }
              }
              .cartControl-wrapper {
                position: absolute;
                right: 0;
                bottom: 12px;
              }
            }
          }
          .b-line:not(:last-child){
            border-bottom: 1px solid #e5e5e5;             
          }           
          .two-col-wrap{
            display: flex;
            flex-wrap: wrap;
            .food-item2 {
              padding: 15px;
              width: 50%;
              &:last-child {
                &:after {
                  display: none
                }
              }
              .icon {
                flex: 0 0 100px;
                width: 100px;
                height: 100px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .content {
                flex: 1;
                .name {
                  margin: 8px 0;
                  font-size: 14px;
                  line-height: 14px;
                  color: #07111b;
                  height: 28px;
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  /* autoprefixer: off */
                  -webkit-box-orient: vertical;
                  /* autoprefixer: on */
                }
                .desc,
                .extra {
                  font-size: 10px;
                  line-height: 10px;
                  color: rgb(147, 153, 159);
                }
                .desc {
                  margin-bottom: 8px;
                  line-height: 14px;
                  height: 26px;
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  /* autoprefixer: off */
                  -webkit-box-orient: vertical;
                  /* autoprefixer: on */
                }
                .extra {
                  .count {
                    margin-right: 12px;
                  }
                }
                .price {
                  font-weight: 700;
                  line-height: 24px;
                  .now {
                    margin-right: 8px;
                    font-size: 14px;
                    color: #252525;
                  }
                  .old {
                    font-size: 10px;
                    color: rgb(147, 153, 159);
                    text-decoration: line-through;
                  }
                }
                .add-cart {
                  display: flex;
                  flex-direction: row-reverse;
                  justify-content: flex-start;
                  i {
                    background: url('https://s3-ap-southeast-1.amazonaws.com/commercecloudhw/赢天下/首页/del-ico.png') no-repeat;
                    width: 20px;
                    height: 22px;
                  }
                }
                .cartControl-wrapper {
                  position: absolute;
                  right: 0;
                  bottom: 12px;
                }
              }
            } 
          } 
          .three-col-wrap{
            display: flex;
            flex-wrap: wrap;
            .food-item3 {
              padding: 15px;
              padding-top: 0px;
              width: 33.3%;
              &:last-child {
                &:after {
                  display: none
                }
              }
              .icon {
                flex: 0 0 64px;
                width: 64px;
                height: 64px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .content {
                flex: 1;
                .name {
                  margin: 8px 0;
                  font-size: 14px;
                  line-height: 14px;
                  color: #07111b;
                  height: 28px;
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  /* autoprefixer: off */
                  -webkit-box-orient: vertical;
                  /* autoprefixer: on */
                }
              }
            }  
          }                 
        }
      }
    }
  }
</style>

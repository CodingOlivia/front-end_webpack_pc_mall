<template>
    <div>
        <div class="y-card">
            <ul class="list-box row">
                <li class="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 " v-for="(item,index) in listData">
                    <div class="item-wrap" :class="{'active':curIndex==index}">
                        <i class="del-btn" @click="curIndex=index"></i>
                        <div class="img-wrap">
                            <img :src="item.imgurl" alt="">
                        </div>
                        <div class="proinfo">
                            <h3 class="protitle">{{item.title}}</h3>
                            <p ><span class="proprice">{{item.price}}</span><span class="pro-category">{{item.category}}</span></p>
                            <div class="off-btn" v-if="item.offShelfVar">OFF THE SHELF</div>
                        </div>
                        <div class="card-mask" v-if="curIndex==index">
                            <p>Are you sure to delete?</p>
                            <div class="btn-wrap">
                                <span class="btn btn-ok"></span>
                                <span class="btn btn-cancel"></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="no-data" v-if="listData.lenghth==0">
            <div class="img-wrap">
                <img src="../../../statics/no-data.png" alt="">
                <p>You have not left your footprint yet</p> 
            </div> 
        </div>
    </div>
</template>
<script>
export default {
data () {
  return{
    curIndex:-1,
    listData:[
        {
            imgurl:'../../../statics/wishlist/pc1.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:false
        },
        {
            imgurl:'../../../statics/wishlist/pic2.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:false
        },
        {
            imgurl:'../../../statics/wishlist/pc1.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:false
        },
        {
            imgurl:'../../../statics/wishlist/pc1.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:true
        },
        {
            imgurl:'../../../statics/wishlist/pc1.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:false
        },
        {
            imgurl:'../../../statics/wishlist/pc1.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:false
        },
                {
            imgurl:'../../../statics/wishlist/pc1.png',
            title:'Honor 10',
            price:'$28.80',
            category:'Phone',
            offShelfVar:false
        },
    ]
  }
},
}
</script>
<style lang="stylus">
    @import '~themes/app.variables'

</style>

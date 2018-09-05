<template>
<div class="c-mybrowsinghistory">
     <!-- card样式在wishlist中 -->
    <div class="y-card">
        <ul class="list-box row">
            <li class="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 " v-for="(item,index) in listData">
                <span class="date-sign" v-if="listData.length>0&&index==0">Today 2018-6-18</span>
                <span class="date-sign date-sign1" v-if="index==splitindex">Earlier</span>       
                <div class="item-wrap" :class="{'active':curIndex==index}">
                    <i class="del-btn" @click="curIndex=index;curIndex2=-1"></i>
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
</div>
</template>
<script>
export default {
data () {
return{
curIndex:-1,
splitindex:'',
listData:[
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor 10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-18'
    },
    {
        imgurl:'../../../statics/wishlist/pic2.png',
        title:'Honor 10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-18'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor 10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-18'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor wqe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:true,
        brotime:'2018-6-18'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor weq10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-18'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor qweqwe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-18'
    },
            {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor qweqwe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-19'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor qweqwe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-19'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor weq10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-19'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor qweqwe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-19'
    },
            {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor qweqwe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-19'
    },
    {
        imgurl:'../../../statics/wishlist/pc1.png',
        title:'Honor qweqwe10',
        price:'$28.80',
        category:'Phone',
        offShelfVar:false,
        brotime:'2018-6-19'
    },
]
}
},
mounted:function(){
    for(var i=0,len=this.listData.length;i<len;i++){
        if(this.listData[i].brotime=="2018-6-18"&&this.listData[i+1].brotime!="2018-6-18"){
         this.splitindex=i+1;
    }
}
}
}
</script>
<style lang="stylus">
@import '~themes/app.variables'
</style>

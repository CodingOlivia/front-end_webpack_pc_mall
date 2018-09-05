<template>
<div class="ytx-compare-popup">
  <div class="tab-header">
    <ul class="tab-label">
      <li class="tab-label-item label-item" :class="{'active':isShow==index}" v-for="(val,index) in tabLable" @click="isShow=index">{{val}}</li>
    </ul>
    <div class="hint-btn">隐藏</div>
  </div>
  <div class="tab-content" v-if="isShow===1">
    <ul class="content-box">
      <li class="content-item" v-for="(li,index) in listItem" ref="li">
         <div class="img-wrap">
           <img :src="li.imgUrl" alt=''>
         </div>
         <div class="item-right">
           <div class="item-title"  :class="{'defult-text':li.isDisplay,}">{{li.itemTtile}}</div>
           <div class="item-desc" v-if="!li.isDisplay">
             <span class="item-price" >{{li.itemDes}}</span>
             <a class="btn-del" @click="delItem(index)">delete</a>
           </div>
         </div>
      </li>
    </ul>
    <div class="btn-wrap">
      <div class="btn-container">
        <span class="btn-compare" :class="{'btn-compare-active':listItem.length>=2}">compare</span>
      </div>
      <div class="btn-clear" @click="clearItem()">清空对比栏</div>
    </div>
  </div>
  <div class="tab-content" v-if="isShow===0">
    123123123123123213123
  </div>
</div>
</template>
<style lang="stylus">
/*@import '../../assets/style.styl'*/
</style>
<script>
export default {
  data() {
    return {
      isShow:1,
      tabLable:['最近浏览','对比栏'],
      listItem:[
        {
          defultImgUrl:'../../statics/goods/1.png',
          imgUrl:'../../statics/phone.png',
          itemTtile:'vivo2.0wqqqqqweqw',
          itemDes:'$299.0000',
          isDisplay:false
        },
        {
          defultImgUrl:'../../statics/goods/2.png',
          imgUrl:'../../statics/phone.png',
          itemTtile:'vivo2.0',
          itemDes:'$2998',
          isDisplay:false
        },
        {
          defultImgUrl:'../../statics/goods/3.png',
          imgUrl:'../../statics/phone.png',
          itemTtile:'vivo2.0',
          itemDes:'$2998',
          isDisplay:false
        },
        {
          defultImgUrl:'../../statics/goods/4.png',
          imgUrl:'../../statics/phone.png',
          itemTtile:'vivo2.0',
          itemDes:'$2998',
          isDisplay:false
        },
      ]
    }
  },
  methods:{
    delItem(index){
      this.listItem[index].itemTtile = '您还可以继续添加'
      this.listItem[index].imgUrl = this.listItem[index].defultImgUrl
      this.listItem[index].isDisplay = true
    },
    clearItem(){
      var listItems=this.listItem
      for(var i=0;i<listItems.length;i++){
        listItems[i].itemTtile='您还可以继续添加'
        this.listItem[i].imgUrl=this.listItem[i].defultImgUrl
        this.listItem[i].isDisplay = true
      }
    }
  }
}
</script>
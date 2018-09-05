<template>
    <div class="ytx-pagination">
      <button class="btn-pre round-btn " :class="{'disable':current==1}" @click="GoToPage(current==1?1:current-1)"></button>
      <ul class="pagination-box"> 
        <li class="ytx-input">
          <input type="text" :value="current" disabled>
        </li>
        <li><span>of</span></li>
        <li><span>{{totalPage}}</span></li>
      </ul>
      <button class="btn-next round-btn" :class="{'disable':current==totalPage}" @click="GoToPage(current==totalPage?totalPage:current+1)"></button>
    </div>
</template>
<script>
export default {
  data () {
    return {
    // 分页变量
    current: '',
    totalPage:'',
    }
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    display: {
      type: Number,
      default: 3
    },
    currentPage: {
      type: Number,
      default: 1
    },
  },
  methods: { 
    init:function(){
      this.current=this.currentPage;
      this.totalPage=Math.ceil(this.total / this.display)
    },
    GoToPage:function(curpage){
      this.current=curpage
      this.$emit('pagechange', curpage)
    },
  },
  created () {
    this.init()//初始化
  },
}
</script>

<style lang='stylus'>
/*@import '../../assets/style.styl'*/
</style>
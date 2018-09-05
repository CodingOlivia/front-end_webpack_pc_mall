<template>
  <nav class="pagination-nav">
    <!-- xrl -->

    <!-- <ul class="pagination"> -->
      <!-- <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li> -->
      <!-- <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)">&lt;</a></li>  -->
      <!-- <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;" @click="setCurrent(p.val)">{{ p.text }}</a></li> -->
      <!-- <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)">&gt;</a></li> -->
      <!-- <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li> -->
    <!-- </ul> -->

<!--     <ul class="pagination pull-right">
      <li><span> 共 {{ total }}  条数据 </span></li>            
      <li><span> 每页显示 {{ display }}  条数据 </span></li>
      <li><span> 共 {{ page }} 页 </span></li>
      <li><span> 当前第 {{ current }} 页 </span></li>
    </ul> -->


  <!--   <div class="pagination pull-right">
      <input ref='pageNumber' type="text" :value="current" @keyup.enter.native="changePageNumber">
      <button @click="changePageNumber">GO</button>
    </div> -->
 <!-- xrl -->

<!-- lzj -->
    <ul class="pagination">
      <li :class="{'disabled': current == 1}" class="btnLt"><a class="round ltLogo" href="javascript:;" @click="setCurrent(current - 1)"></a></li> 
      <li>
        <input ref='pageNumber' type="text" :value="current" @keyup.enter.native="changePageNumber">
      </li>
      <li><span>of</span></li>
      <li><span>{{page}}</span></li>
      <li :class="{'disabled': current == page}" class="btnGt"><a class="round gtLogo" href="javascript:;" @click="setCurrent(current + 1)"></a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'r-pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    display: {
      type: Number,
      default: 10
    },
    current: {
      type: Number,
      default: 1
    },
    pagegroup: {
      type: Number,
      default: 5,
      coerce: function (v) {
        v = v > 0 ? v : 5
        return v % 2 === 1 ? v : v + 1
      }
    }
  },
  computed: {
    page: function () {
      return Math.ceil(this.total / this.display)
    },
    grouplist: function () {
      var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current
      if (len <= this.pagegroup) {
        while (len--) temp.push({text: this.page - len, val: this.page - len})
        return temp
      }
      while (len--) temp.push(this.page - len)
      var idx = temp.indexOf(center);
      (idx < count) && (center = center + count - idx);
      (this.current > this.page - count) && (center = this.page - count)
      temp = temp.splice(center - count - 1, this.pagegroup)
      do {
        var t = temp.shift()
        list.push({
          text: t,
          val: t
        })
      } while (temp.length)
      if (this.page > this.pagegroup) {
        (this.current > count + 1) && list.unshift({
          text: '...',
          val: list[0].val - 1
        });
        (this.current < this.page - count) && list.push({
          text: '...',
          val: list[list.length - 1].val + 1
        })
      }
      return list
    }
  },
  methods: {
    setCurrent: function (idx) {
      if (this.current !== idx && idx > 0 && idx < this.page + 1) {
        this.$root.eventHub.$emit('pagechange', idx)
      }
    },
    changePageNumber: function () {
      this.$root.eventHub.$emit('pagechange', parseInt(this.$refs.pageNumber.value))
    }
  }
}
</script>

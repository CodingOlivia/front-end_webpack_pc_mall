<template>
  <nav class="pagination">
    <ul>
      <!--<li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>-->
      <li :class="{'disabled': current == 1}"><a @click="setCurrent(current - 1)" class="pagepre"></a></li>
      <li v-for="p in grouplist" :class="{'active': current == p.val}"><a @click="setCurrent(p.val)"> {{ p.text }} </a></li>
      <li :class="{'disabled': current == page}"><a @click="setCurrent(current + 1)" class="pagepnext"></a></li>
      <!--<li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>-->
    </ul>
    <div class="goto">
      <input type="text" v-model="changePage" class="jumpinp">
      <span class="go" @click="jumpPage(changePage)">GO</span>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      total: {            // 数据总条数
        type: Number,
        default: 0
      },
      display: {            // 每页显示条数
        type: Number,
        default: 8
      },
      currentPage: {
        type: Number
      },
      pagegroup: {        // 分页条数 -- 奇数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5
          return v % 2 === 1 ? v : v + 1
        }
      }
    },
    data () {
      return {
        current: this.currentPage,
        changePage: 1,
        grouplist: [],
        page: ''
      }
    },
    created () {
      this.page = Math.ceil(this.total / this.display)   //总页数
      this.grouplist = this.grouplists
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current !== idx && idx > 0 && idx < this.page + 1) {
          this.current = idx
          this.changePage = this.current
          this.$emit('pagechange', idx)
          this.grouplist = this.grouplists
        }
      },
      jumpPage (id) {
        this.current = id
        this.$emit('pagechange', this.current)
        this.page = Math.ceil(this.total / this.display)   //总页数
        this.grouplist = this.grouplists
        
      }
    },
    computed: {
      grouplists: function () { // 获取分页页码

        let len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = parseInt(this.current);
        if (len <= this.pagegroup) {
          while (len--) { temp.push({text: this.page - len, val: this.page - len}) }
          return temp
        }

        while (len--) { temp.push(this.page - len) }
        let idx = temp.indexOf(center);
        (idx < count) && (center = center + count - idx);
        (this.current > this.page - count) && (center = this.page - count)
        temp = temp.splice(center - count - 1, this.pagegroup)
        do {
          let t = temp.shift()
          list.push({
            text: t,
            val: t
          })
        } while (temp.length)
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({ text: 1, val: 1 },{ text: '...', val: list[0].val - 1 });
          (this.current < this.page - count) && list.push({ text: '...', val: list[list.length - 1].val + 1 },{ text: this.page, val: this.page })
        }

        return list
      }
    },
    watch: {
      currentPage(val, oldVal) {
        this.setCurrent(val)
      },
    }
  }
</script>

<style lang="stylus">
@import '~themes/app.variables'

</style>

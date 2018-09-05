<template>
  <div class="wrapper" ref="wrapper">
      <ul>
        <li v-for="item in 8">{{item}}</li>
      </ul>
  </div>
</template>
<script>
  /* import BScroll from 'better-scroll'; */
    export default {
      /* mounted() {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper);
        });
      } */
    };
</script>
<style lang="stylus" scoped>
  .wrapper {
    overflow:hidden;
    height:100vh;
    ul {
			li {
				height:400px;
			}
		} 
  }
</style>

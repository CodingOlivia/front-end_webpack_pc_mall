<template>
<div class="ytx-dialog-bg" v-if="isDialogShow">
  <div class="ytx-dialog"  ref="dialogbox">
    <div class="ytx-dialog-header">
        <span class="dialog-title">{{headerTitle}}</span>
        <i class="close-icon" @click="closeDialog"></i>  
    </div>
    <div class="ytx-dialog-body">
      <slot></slot>
    </div> 
  </div>
</div>
</template>

<script>
import {
  QModal
} from 'quasar'
export default {
  components: {
    QModal
  },
  props: {
    isDialogShow: {
      type: Boolean,
      default: true
    },
    headerTitle: {
      type: String,
      default: 'title'
    },
  },
  data() {
    return {
    }
  },
  methods: {
    closeDialog() {
      this.isDialogShow=false;
    },
  }
}
</script>
<style lang="stylus">
    @import '~themes/app.variables'
</style>    
    

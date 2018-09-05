<template>
        <div class="sidebar-tip">
            <div class="user-avatar">
                <img class="pic-img" src="../../../statics/360-view-design/user-picture.png" alt="">
            </div>
            <div class="user-call"> 
                <span class="user-name">Sample Userid</span>
                <span class="level">LV 5</span>
            </div>
            <div class="user-level">
                <q-progress class="progress-bar" :percentage="progress"></q-progress>
            </div>
            <div class="user-phone">
                <i class="phone-icon"></i>
                <span class="phone-num">15895993343</span>
            </div>
        </div>
</template>
<script>
import {
    QScrollArea,
    QLayout,
    QProgress
} from 'quasar'
export default {
components: {
    QScrollArea,
    QLayout,
    QProgress
},
data () {
return {
    progress: 60,
}
},
}
</script>
<style lang="stylus">
    @import '~themes/app.variables'
</style>

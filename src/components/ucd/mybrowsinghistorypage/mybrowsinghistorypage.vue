<template>
<div class="myfavorite" style="width:calc(1536 / 1920 * 100vw);">
    <my-browsinghistory></my-browsinghistory>
    <my-recommendation></my-recommendation>
</div>
</template>
<script>
import Mybrowsinghistory from "../common/mybrowsinghistory"
import Recommendation from "../common/recommendation"
export default {
components: {
    'my-browsinghistory':Mybrowsinghistory,
    'my-recommendation':Recommendation,
},
data(){
    return{
       
    }
}
}
</script>
<style lang="stylus">
@import '~themes/app.variables'                          
</style>
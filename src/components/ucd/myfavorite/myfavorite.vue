<template>
    <div class="myfavorite" style="width:calc(1536 / 1920 * 100vw);">
        <my-ishlist></my-ishlist>
        <my-recommendation></my-recommendation>
    </div>
</template>
<script>
    import Wishlist from "../common/wishlist"
    import Recommendation from "../common/recommendation"
export default {
    components: {
        'my-ishlist':Wishlist,
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
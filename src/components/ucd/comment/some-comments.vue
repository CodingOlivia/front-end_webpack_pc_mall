<template>
    <div class='zlsomecomments'>
        <div class='commentcontent'>
            <cHeader></cHeader>
            <div class='writecomment'>
                <div class='left'>
                    <div class='commodityimg'>
                        <img src='../../../statics/images/Myorder/pic1.png' />
                    </div>
                    <h6 class='commodityname' v-text='commodity.title'></h6>
                    <p class='commoditydescribe' v-text='commodity.describe'></p>
                </div>
                <div class='right'>
                    <div class='productrating'>
                        <div class='rating'>Product Rating</div>
                        <div>
                            <q-rating
                            v-model="proRate"
                            :max="5"/>
                        </div>
                    </div>
                    <div class='productcomment'>
                        <textarea placeholder='share your shopping experience'></textarea>
                    </div>
                    <div class='productupload'>
                        <i class='icon_camera'>
                            <input type='file' />
                        </i>
                        <span>Up to 5 pictures</span>
                    </div>                   
                </div>
            </div>
            <div class='somecomments-btn'>
                <span class='btn'>SUMBIT</span>
            </div>
        </div>
        <div class='footer'>
            <img src='../../../statics/images/Homepage/bottom.png' />
        </div>
    </div>
</template>
<script>
import  commentHeader from '../common/commentHeader'
import {QRating} from 'quasar'
export default {
    data(){
        return{
            commodity:{
                title:'iPhone X',
                describe:'Color: Black,  Capacity:64GB', 
            },
            proRate:5 
        }
    },
    components:{
        cHeader:commentHeader,
        QRating:QRating
    }
} 
</script>
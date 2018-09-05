<template>
    <div>
        <button @click="isdisplay1=true;isdisplay2=false">link</button>
        <button @click="isdisplay2=true;isdisplay1=false;">table</button>
        <div class="l-e-popup-wrap" v-if="isdisplay1">
            <div class="link-popup">
                <div class="popup-head">
                    <div class="popup-title">Link to</div>
                    <a href="javascript:;" class="popup-close" @click='model.linkEdit = false'></a>
                </div>
                <div class="p-popup-main">
                    <div class="p-panel-content">
                        <!-- <div class="p-link-item p-name-item">
                            <div class="p-link-edit-subtitle">Name</div>
                            <div class="p-link-input">
                                <input type="p-text">
                            </div>
                        </div> -->
                        <div class="p-link-item p-catalog-item">
                            <div class="p-catalog-left">
                                <div class="p-radio-wrap">
                                <q-radio v-for="(list,index) in radiolist" :key="list" class="p-g-radio" v-model="modelValue" :val="list.val" :label="list.label"  />
                                </div>
                            </div>
                            <div class="p-catalog-right" >
                                <div class="p-right-content" v-if="modelValue == 'none'">
                                    <div class="p-no-link"></div>
                                    <p style="text-align:center;" class="p-no-link-text">wsdasdsadasdsad</p>
                                </div>
                                <div class="p-right-content" v-if="modelValue =='page'">
                                    <div class="p-link-edit-subtitle">Name</div>
                                    <div class="p-link-input">
                                        <div class="w-common-select">
                                            <div class="select-default" @click.stop="optiondisplay=!optiondisplay"><span>{{selectvalue}}</span></div>
                                            <ul class="option-box" v-if="optiondisplay">
                                                <li class="option-item" v-for="(st,index) in selectoptions" @click="selHandleOne(index)">{{st.option}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-right-content" v-if="modelValue == 'url'">
                                    <div class="p-link-edit-subtitle">Name</div>
                                    <div class="p-link-input">
                                        <input type="p-text" v-model="title1">
                                    </div>
                                </div>
                                <div class="p-right-content" v-if="modelValue == 'email'">
                                    <div class="p-link-edit-subtitle">Name</div>
                                    <div class="p-link-input">
                                        <input type="p-text" v-model="title2">
                                    </div>
                                </div>
                                <div class="p-right-content" v-if="modelValue == 'catalog'">
                                    <div class="p-link-edit-subtitle">Name</div>
                                    <div class="p-link-input">
                                        <div class="w-common-select">
                                            <div class="select-default" @click.stop="optiondisplay=!optiondisplay"><span>{{selectvalue1}}</span></div>
                                            <ul class="option-box" v-if="optiondisplay">
                                                <li class="option-item" v-for="(st,index) in selectoptions1" @click="selHandleTwo(index)">{{st.option}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-right-content" v-if="modelValue == 'offering'">
                                <div class="p-link-edit-subtitle">LInk</div>
                                <div class="p-link-input">
                                    <div class="link-input-wrap">
                                        <input type="p-text" v-model="title2">
                                        <i class="add-icon"></i>  
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <button class="btn-md-primary btn-change btn-size">Cancel</button>
                        <button class="btn-md-blue btn-size">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pop-framework" v-show="isdisplay2" >
            <div class="pop-header">Select Offering</div>
            <div class="pop-content">
                <div class="table-search">
                    <div class="search-wrap">
                        <input type="text" class="search-input">
                        <i class="search-icon"></i>
                    </div>
                </div>
                <table class="table-box tab-select-offering">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>CLassification</th>
                            <th>Create Time</th>
                        </tr>
                    </thead>
                    <tbody style="height:100px;">
                    <tr v-for="tl in tablelist">
                        <td>
                            <div class="td-cell">
                                <q-radio class="t-radio" v-model="modelValue" :val="tl.val" />
                                <div class="img-wrap">
                                    <img :src="tl.imgurl" alt="">
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="td-cell">
                                    {{tl.name}}
                            </div>
                        </td>
                        <td>
                            <div class="td-cell">
                                    {{tl.cLassification}}
                            </div>
                        </td>
                        <td>
                            <div class="td-cell">
                                    {{tl.time}}time
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class='pagination'>
                <v-page :total="total" :display="display" :current-page='current' @pagechange="handleChange"></v-page>
            </div>

            <div class="pop-footer">
                <button class="btn-md-primary btn-change btn-size">Cancel</button>
                <button class="btn-md-blue btn-size">Ok</button>
            </div>
        </div>
    </div>
</template>

<script>
import {QSlider, QRadio, QCheckbox, QBtn, QInput, QAutocomplete, filter,QSelect,QSearch} from "quasar"
import page from './page.vue'
console.log(page)
import $ from 'jquery'
export default {
  data() {
    return {
        total: 71,
        display: 8,
        current: 1,
        linkto:0,
        selectvalue:'option1',
        selectvalue1:'option1',
        modelValue:"none",
        modelValue1:"vlaue",
        isdisplay1:false,
        isdisplay2:false,
        search:'',
        select:'fb',
        title1:'1',
        title2:'2',
        optiondisplay:false,
        
        options:[
            {
                label:'Google',
                value:'goog',
            },
            {
                label:'facebook',
                value:'fb',
            }
        ],
        selectoptions:[
            {
                option:'option1'
            },
            {
                option:'option2'
            },
            {
                option:'option3'
            },
        ],
        selectoptions1:[
            {
                option:'option'
            },
            {
                option:'option'
            },
            {
                option:'option'
            },
        ],
        radiolist:[
            {
                label:"None",
                val:"none"
            },
            {
                label:"Page",
                val:"page"
            },
            {
                label:"URL",
                val:"url"
            },
            {
                label:"Email",
                val:"email"
            },
            {
                label:"Catalog",
                val:"catalog"
            },
            {
                label:"offering",
                val:"offering"
            }
        ],
        tablelist:[
            {
                val:'1',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
            {
                val:'2',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
            {
                val:'3',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
            {
                val:'4',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
            {
                val:'5',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
            {
                val:'6',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
            {
                val:'7',
                name:'Huaweip10',                
                imgurl:'../../statics/images/common/1.png',
                cLassification:'CLassification',
                time:'2018-04-04 10:40:01',

            },
        ]
    }
},
components: {
    QSlider,
    QRadio,
    QCheckbox,
    QBtn,
    QInput,
    QSelect,
    QSearch,
    'v-page': page
},
mounted () {
    //点击空白处，弹框消失
    document.addEventListener('click', (e) => {   
        this.optiondisplay = false
    });
//拖拽的实现
    function dragPanelMove(downDiv,moveDiv){
        $(downDiv).mousedown(function (e) {
                var isMove = true;
                var div_x = e.pageX - $(moveDiv).offset().left;
                var div_y = e.pageY - $(moveDiv).offset().top;
                $(document).mousemove(function (ev) {
                    if (isMove) {
                        var obj = $(moveDiv);
                        var maxtop = $(window).height()-obj.outerHeight();
                        var maxleft = $(window).width()-obj.outerWidth();
                        var curleft = ev.pageX - div_x;
                        var curtop = ev.pageY - div_y;
                        if (curleft < 0) {
                            curleft = 0
                        };
                        if(curleft > maxleft){
                            curleft = maxleft;
                        };
                        if(curtop > maxtop){
                            curtop = maxtop;
                        }
                        if (curtop < 0) {
                            curtop = 0
                        };
                        obj.css({"left":curleft, "top":curtop});
                    }
                }).mouseup(
                    function () {
                    isMove = false;
                });
        });
    }
    dragPanelMove('.pop-header','.pop-framework');
    dragPanelMove('.pop-head','.l-e-popup-wrap');
    
},
methods: {
    selHandleOne (index) {
        this.selectvalue = this.selectoptions[index].option
        this.optiondisplay = false
    },
    selHandleTwo(index) {
        this.selectvalue1 = this.selectoptions1[index].option
        this.optiondisplay = false
    },
    handleChange (idx) {
        console.log(idx)
      }
},


}
</script>

<style lang="stylus">
@import '~themes/app.variables'

</style>
<template>
    <div>
    <div style="height:130px" ref="header">hsadhashdkashdkjashkdaskjdhaksjdhkashdkashdjkasdhjkashdkjsadh</div>
    <div class="ytx-product-compare">
        <div class="main-left relative-position">
            <div class="setting-operation">
                <div class="dropdown-toggle-wrapper">
                    <i></i><i></i>
                </div>
                <ul class="menu ytx-x-mt">
                    <li class="menu-item size14" :class="{'active':btnActive1}"><span class="item-text" @click="compareHandle('hightLight')">Hightlight different items</span></li>
                    <li class="menu-item size14" :class="{'active':btnActive2}"><span class="item-text" @click="compareHandle('hide')">Hide the same item</span></li>
                </ul>
            </div>
            <div class="ytx-nav fixed" v-if="!picIsDisplay">
                <div class="nav-item clearfix " v-for="(item,index) in productAttrData" :class="{'active':index===navactive}">
                    <div class="item-left float-left column ytx-align-items-center">
                        <div class="dot"></div>
                        <div class="line"></div>     
                    </div>
                    <div class="item-right float-left size12 allcolor3 fontweightbold">{{item.title}}</div>
                </div>
            </div>
        </div>
        <div class="main-right relative-position ytx-flex-1" ref="rightdiv">
            <div class="right-row ytx-border-all  ytx-bg5"  :class="{'header-fixed':!picIsDisplay}" ref="productHeader">
                <div class="row-cell ytx-p-xx-tb  ytx-border-bottom-none" v-for="(item,index1) in compareGoods">
                    <div class="cell-data cell-wrapper ytx-div-width70 ytx-orient-center" v-if="item.isdisplay">
                        <i class="close_icon absolute" @click="clearProductData(index1)"></i>
                        <div class="product-name size24 fontweightbold ytx-flex-center">{{item.productName}}</div>
                        <div class="product-pic ytx-xx-pt flex" v-if="picIsDisplay" ref="picHeight">
                            <!-- <div v-for="ipp in item.productPics" class="img-wrapper ytx-flex-center " v-if="item.productSelected==ipp.id">
                                <img :src="ipp.imgurl" alt="">
                            </div>
                            <ul class="ytx-align-center ytx-xx-mt clearfix ytx-flex-center">
                                <li class="color-dot ytx-mr cursor-pointer"  v-for="(ipc,index2) in item.productColors" :class="{'active':item.productSelected==index2}" @click="changeColorHandle(index1,index2)"><span :style="{'background-color':ipc.color}"></span></li>
                            </ul> -->
                            <div>
                                <div class="img-wrapper ytx-flex-center">
                                    <img :src="item.currentpic">
                                </div>
                                <div class="changepic ytx-s-mt">
                                    <div class="prev cursor-pointer" @click="preview(item,index1)" ></div>
                                    <div class="next cursor-pointer" @click="nextview(item,index1)"></div>
                                    <div class="picthumbs" style="position:relative">
                                        <ul class="picinner" :style="ruleForm[index1]">
                                            <li class="picthumbitem" v-for="(td,index) in item.pcslider" :key="index"  @mouseover="showItem(item,td,index,index1)" :class="{'activeitem':item.initialPicIndex==index}">
                                                <img :src="td.img">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="size14 allcolor3 ytx-align-center ytx-xx-mt text-desc"><p class="text-ellipsis ytx-m-none">{{item.desc}}</p></div>
                        <div class="ytx-align-center ytx-x-mt">
                            <span class="ytx-block size24 fontfamilymedium allcolor1">{{item.price}}</span>
                        </div>
                        <button class="ytx-small-btn full-width ytx-xx-mt ytx-bg6 allcolor2 cursor-pointer">VIEW DETAILS </button>
                    </div>
                    <div class="cell-nodata cell-wrapper ytx-div-width70 ytx-orient-center" v-if="!item.isdisplay">
                        <div class="product-name product-name size24 fontweightbold ytx-flex-center fontcolor6">{{item.occuoyingName}}</div>
                        <div class="product-pic" v-if="picIsDisplay">
                            <div class="nodata-pic img-wrapper ytx-flex-center ytx-xx-mt">
                            </div>    
                            <p class="no-text-desc size14 ytx-align-center fontweightbold fontcolor6 ytx-m-none  ytx-s-mt">you have not add simiar products</p>
                        </div>
                        <div class="ytx-xx-pt">
                            <i class="more-icon"></i>
                        </div>
                        <button class="cursor-pointer ytx-small-btn ytx-xx-mt size24 full-width ytx-bg6 allcolor2">ADD simiar products</button>
                    </div>
                </div>
            </div>
            <div class="ytx-flex-1 ytx-border-all ytx-border-bottom-none"  ref="attrs">
                <div class="flex relative-position ytx-p-xxx-tb  ytx-border-bottom right-down-row" ref="attrsItem" v-for="(itemcell,index) in productAttrData" >
                    <div class="absolute title-position ytx-p-x-lr ytx-bg5 siz16 fontfamilymedium allcolor3">{{itemcell.title}}</div>
                    <div class="ytx-flex-1 " v-for="ic in itemcell.content">
                        <div class="ytx-div-width70 ytx-orient-center">
                            <div class="attr-wrapper ytx-x-mt" v-for="ia in ic.attr" v-if="ia.isdisplay || highLight" :class="{'active':!ia.isdisplay&&highLight}">
                                <label class="size14 fontfamilymedium fontcolor5 block">{{ia.label}}</label>
                                <span class="block size14 $all-color-1 fontweightbold ytx-s-mt">{{ia.value}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            picIsDisplay:true,
            navactive:0,
            highLight:false,
            btnActive1:false,
            btnActive2:false,
            num: ['0','0','0','0'],
            ruleForm:['left:0px','left:0px','left:0px','left:0px'],
            compareGoods:[
            {
                productName:'HuaweiP20',
                occuoyingName:'product1',
                productSelected:0,
                initialPicIndex:0,
                isdisplay:true,
                currentpic: '../../statics/images/techspec/1.png',
                pcslider:[
                    {
                        img:'../../statics/images/techspec/1.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/1.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    }
                ],
                desc:'jing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xg',
                price:'$139',
            },
            {
                productName:'HuaweiP20',
                occuoyingName:'product1',
                productSelected:0,
                initialPicIndex:0,
                isdisplay:true,
                currentpic: '../../statics/images/techspec/1.png',
                pcslider:[
                    {
                        img:'../../statics/images/techspec/1.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/1.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    }
                ],
                desc:'jing xgjing xgjing xgjing xg',
                price:'$139',
            },
            {
                productName:'HuaweiP20',
                occuoyingName:'product1',
                productSelected:0,
                initialPicIndex:0,
                isdisplay:true,
                currentpic: '../../statics/images/techspec/1.png',
                pcslider:[
                    {
                        img:'../../statics/images/techspec/1.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/1.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    },
                    {
                        img:'../../statics/images/techspec/2.png',
                    }
                ],
                desc:'jing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xgjing xg',
                price:'$139',
            },
            ],
            productAttrData:[
                {
                    title:'techinical specification 1111',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                },
                {
                    title:'Dimensions',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                },
                {
                    title:'jingxg',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                }, 
                {
                    title:'jingxg1',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                },  
                {
                    title:'jingxg2',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                },  
                {
                    title:'jingxg3',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                },  
                {
                    title:'jingxg',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                }, 
                {
                    title:'jingxg4',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                }, 
                {
                    title:'jingxg5',
                    content:[
                        {
                            attr:[
                                    {
                                        label:'Dimensions',
                                        value:'176*165',
                                        isdisplay:true
                                    },
                                    {
                                        label:'weight',
                                        value:'34324',
                                        isdisplay:true
                                    },
                                    {
                                        label:'color',
                                        value:'red',
                                        isdisplay:true
                                    },
                                ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'34324',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'red',
                                    isdisplay:true
                                },
                            ]
                        },
                        {
                            attr:[
                                {
                                    label:'Dimensions',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'weight',
                                    value:'176*165',
                                    isdisplay:true
                                },
                                {
                                    label:'color',
                                    value:'yellow',
                                    isdisplay:true
                                },
                            ]
                        },
                    ]
                },        
            ],
        }
    },
    created(){
      this.len = 4-this.compareGoods.length
    },
    methods:{
         // 侧边栏导航
        scrollTop(){
            var scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
            if(scrollTop>this.topDom){
                this.LightSideBar();
                if(this.picIsDisplay){ 
                    this.picIsDisplay=false;
                    let headerHeight=this.$refs.productHeader.offsetHeight-this.picHeight;
                    this.$refs.attrs.style.marginTop = headerHeight + 'px';
                }
            }else{
                this.picIsDisplay=true;
                this.$refs.attrs.style.marginTop = 0 + 'px';
            }
        },
        // 侧边栏导航
        LightSideBar(){
            var scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
            var attrsItem=this.$refs.attrsItem;
            var len = attrsItem.length;
            for(var i=0;i<len;i++){
                if(attrsItem[i].offsetTop+130<scrollTop){//130是头部的距离
                    this.navactive=i
                }
            }
        } ,

        // 清楚数据
        clearProductData(index){
            this.compareGoods[index].isdisplay=false;
            for(let i=0; i<this.productAttrData.length;i++){
                this.productAttrData[i].content[index].attr.length=0
            }
        },
        // 比较处理
        compareHandle(flag){
            for(var i=0; i<this.productAttrData.length;i++){
                var curcontent=this.productAttrData[i].content;
                if(curcontent.length){
                    for(var j=0;j<curcontent[0].attr.length;j++){
                        var rowitem=true;
                        for(var k=0;k<curcontent.length-1;k++){
                            if(JSON.stringify(curcontent[k].attr[j])!=JSON.stringify(curcontent[k+1].attr[j])){
                                rowitem=false;
                                break;
                            }
                        }
                        if(flag=='hide'){
                            this.highLight=false;
                            this.btnActive1=false;
                            this.btnActive2=true;
                            for(var k=0;k<curcontent.length;k++){
                                curcontent[k].attr[j].isdisplay=rowitem ? false : true;
                            }
                        }else{
                            this.highLight=true;
                            this.btnActive2=false;
                            this.btnActive1=true; 
                            for(var k=0;k<curcontent.length;k++){
                                curcontent[k].attr[j].isdisplay=rowitem ? true : false;
                            }
                        }

                    }
                }
            }
        },

        showItem(c,item,i,s) {
            c.currentpic =  item.img
            c.initialPicIndex = i
            this.num[s] = i
            if(this.num[s]>2){
            this.ruleForm[s] = 'left:'+(-(this.num[s] -3 ) * 40) + 'px'
            }
        },
        preview(c,n){
            console.log(n);
            if(this.num[n]>0){
            this.num[n]--
            c.initialPicIndex = this.num[n]
            c.currentpic =  c.pcslider[this.num[n]].img
            if(this.num[n]>2){
                this.ruleForm[n] = 'left:'+(-(this.num[n] -3 ) * 40) + 'px'
            }
            }
        },
        nextview(c,n){
            console.log(n);
            if(this.num[n]<(c.pcslider.length-1)){
            this.num[n]++
            c.initialPicIndex = this.num[n]
            c.currentpic =  c.pcslider[this.num[n]].img
            if(this.num[n]>2){
                this.ruleForm[n] = 'left:'+(-(this.num[n] -3 ) * 40) + 'px'
            }
            }
        },
    },
    mounted(){
        this.topDom = this.$refs.rightdiv.offsetTop;
        this.picHeight = this.$refs.picHeight[0].offsetHeight;
        window.addEventListener("scroll",this.scrollTop);
    }
}
</script>
<style lang="stylus">
    @import '~themes/app.variables'
</style>
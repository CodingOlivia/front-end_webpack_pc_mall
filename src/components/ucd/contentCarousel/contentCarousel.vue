<template>
  <div class="display-wrap-iwinad banner-wrap">
    <div class="display-box-panel">
      <div class="toolbar-right">
        <a href="javascript:;" v-show='!isEditing' class="toolbar-icon t-grid icon1" @click='addDom()'></a>
        <a href="javascript:;" class="toolbar-icon t-grid icon2" @click='addDom()'></a>
      </div>
      <div class="display-box" id='displayBox' ref='displayBox' style="width: 100%; height: 100%;">
        <div class="banner-show" style="width: 100%;height: 100%;" v-for='(i,index) in domImage' ref='imgpanel' :key="i.id" @click='editingImg = i;selectImg = index'>
          <!-- <span @click="Deletes(index)" style="width: 30px;height: 30px;color:#ccc;cursor: pointer;text-align:center;line-height:30px;display: inline-block;background:#fff;position: absolute;right:-15px; top:-15px;border-radius:30px;border:1px solid #ccc">X</span> -->
          <div class="swiper" style="width: 100%;height: 100%;" ondragstart="return false;">
            <swiper :options="swiperOption" :not-next-tick="true" :style="swiperInfo.style" class="gallery-top" ref="swiperTop" v-if="swiperRefresh">
              <swiper-slide v-for="(slide,index) in imglist" :key="slide.id">
                <!---->
                <!-- <div style="font-size:48px;font-weight:blod;position:absolute; top:70px;left:130px;z-index: 100" v-if="imgText[index].mianTitle">HUAWEI MATE 10</div>
                      <div style="font-size:30px;position:absolute; top:130px;left:130px;z-index: 100" v-if="imgText[index].subtitle">Pro Has Dual Leica Lenses and AI <br/>Photo Features</div>
                      <div style="font-size:14px;position:absolute; top:250px;left:130px;line-height:1.3rem;z-index: 100" v-if="imgText[index].descriptions">
                        The Huawei Mate 10 will be available in Europe starting in late <br/>
                        October for €699 (~$824), and the Huawei Mate 10 Pro will be <br/>
                        available in mid-November for €799 (~$942). US pricing and <br/>
                        availability will be announced at a later date.
                      </div> -->
                <div :class="{'selected-dom': slide.mainTitle === selectText && selectTextItem === index}" :style="slide.mainTitle.style"
                  ref="mainTitle" @click="selectText = slide.mainTitle;selectTextItem = index;editingText=slide.mainTitle"
                  v-if="slide.mainTitle.isShow">
                  <quill-editor class="editor-example" ref="myTextEditor" :content="slide.mainTitle.content" :options="editorOption">
                  </quill-editor>
                  <span class="move-top" @mousedown="domDrag($refs.mainTitle, $event)"></span>
                  <span class="move-left" @mousedown="domDrag($refs.mainTitle, $event)"></span>
                  <span class="move-right" @mousedown="resizeLeft"></span>
                  <span class="move-bottom" @mousedown="resizeTop"></span>
                </div>
                <div :class="{'selected-dom': slide.subtitle === selectText && selectTextItem === index}" :style="slide.subtitle.style" ref="subtitle"
                  @click="selectText = slide.subtitle;selectTextItem = index;editingText=slide.subtitle" v-if="slide.subtitle.isShow">
                  <quill-editor class="editor-example" ref="myTextEditor" :content="slide.subtitle.content" :options="editorOption">
                  </quill-editor>
                  <span class="move-top" @mousedown="domDrag($refs.subtitle[index], $event)"></span>
                  <span class="move-left" @mousedown="domDrag($refs.subtitle[index], $event)"></span>
                  <span class="move-right" @mousedown="resizeLeft"></span>
                  <span class="move-bottom" @mousedown="resizeTop"></span>
                </div>
                <div :class="{'selected-dom': slide.description === selectText && selectTextItem === index}" :style="slide.description.style"
                  ref="description" @click="selectText = slide.description;selectTextItem = index;editingText=slide.description"
                  v-if="slide.description.isShow">
                  <quill-editor class="editor-example" ref="myTextEditor" :content="slide.description.content" :options="editorOption">
                  </quill-editor>
                  <span class="move-top" @mousedown="domDrag($refs.description[index], $event)"></span>
                  <span class="move-left" @mousedown="domDrag($refs.description[index], $event)"></span>
                  <span class="move-right" @mousedown="resizeLeft"></span>
                  <span class="move-bottom" @mousedown="resizeTop"></span>
                </div>
                <button style="position:absolute; left:130px;top:380px;z-index: 100" class="swiper-button" v-if="slide.button.isButton">{{slide.button.text}}</button>
                <span style="position:absolute;left:130px;top:330px;z-index: 100" class="swiper-link" v-if="slide.link.isLink">{{slide.link.text}}</span>
                <!---->
                <img :src='slide.src' class="swiper-img-right" />
                <!--数目-->
                <div class="banner-icon">
                    <div class="swiper-text">
                        <span class="text1">0{{index+1}}</span>
                        <hr/>
                        <span class="text2">0{{imglist.length}}</span>
                    </div>
                </div>
              </swiper-slide>
              <!-- <div class="swiper-pagination" slot="pagination" :class="markSet=='Line' ? 'swiper-pagination-line' : '' "></div> -->
              <div class="swiper-button-prev" slot="button-prev" :class="directionSet=='vertical' ? 'swiper-button-prev-v' : '' "></div>
              <div class="swiper-button-next" slot="button-next" :class="directionSet=='vertical' ? 'swiper-button-next-v' : '' "></div>
            </swiper>
          </div>
        </div>
      </div>
      <div class="popup-wrap-iwinad" v-if="isShow === 'pop'">
        <div class="popup-header">
          <div class="popup-title">{{title}}</div>
          <i class="popup-close-btn" @click="isShow = 'def'"></i>
        </div>
        <div class="popup-content-wrap">
          <div class="popup-prompt">
            <i class="popup-prompt-icon"></i>
            <span>{{promptcontent}}</span>
          </div>
          <div class="popup-content-imglist">
            <ul class="imglist-wrap">
              <li v-for="(item,index) in imgListes" :key="item" @mouseover="select = index" @mouseout="select = -1" :class="{'selected':select === index}">
                <div class="single-img">
                  <img :src="item.file.src" width="100%" height="100%" />
                </div>
                <div class="img-sort">{{index+1}}/{{imgListes.length}}</div>
                <div class="mask" :class="{'active': del === index}">
                  <div class="mask-close" @click="del = index"></div>
                  <div class="mask-wrap">
                    <div class="mask-text">sure to delete this banner?</div>
                    <div class="mask-btn-wrap">
                      <q-btn color="white" small class="text-black mask-btn" @click="del = -1">NO</q-btn>
                      <q-btn class="mask-btn" color="red-14" small @click="fileDel(index)">YES</q-btn>
                    </div>
                  </div>
                </div>
              </li>
              <div class="img-add" @click="fileClick">
                <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" />
              </div>
            </ul>
          </div>
          <div class="popup-btn">
            <div class="popup-btn-wrap">
              <q-btn color="white" small class="text-black popup-page-btn">Cancel</q-btn>
              <q-btn color="white" small class="text-black popup-page-btn" @click="Reset()">Reset</q-btn>
              <q-btn class="popup-page-btn" color="red-14" small @click="ok()">OK</q-btn>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div class="editor-panel banner-panel-iwinad" :style='epanelStyle' ref='epanel' v-show='isEditing'>
        <div class="panel-head" @mousedown="DragStart($refs.epanel, $event)">
          <div class="panel-title">Content carousel setting</div>
          <a href="javascript:;" class="panel-close" @click='isEditing = false'></a>
        </div>
        <div class="panel-main-iwinad">
          <div class="panel-content banner">
            <div class="general-panel customize-panel drp" style="margin-bottom: 0.9rem">
              <div class="img-title">The number of Images</div>
              <div class="customize mark">
                <a href="javascript:;" class="minus"></a>
                <q-slider class="c-slider" v-model="imgNum" :min="1" :max="24"></q-slider>
                <a href="javascript:;" class="plus"></a>
                <span class="result">
                  <input type="text" v-model="imgNum" class="input-number" /> 
                  <!--<span>images</span>-->                
                  </span>
                  <q-select class="custom-select"
                  v-model="valSelect"
                  :options="selectOptions"
                  />                    
              </div>
            </div>

            <div class="nav-item">
              <div class="nav-item-head">
                </span>Switch direction
                <a class="reset">Reset</a>
              </div>
              <div class="nav-list">
                <ul class="direction dir">
                  <li v-for="(i, index) in direction" :key="i" class="direction-list" @click="directionStuts = index;refresh()" :class="{'seleced': directionStuts === index}">
                    <img :src='i.img'>
                    <div>{{i.text}}</div>
                    <span class="icon-red"></span>
                  </li>
                </ul>
                <div class="tit">
                  Autoplays on loading
                  <div class="switch">
                    <q-toggle v-model="check1" />
                  </div>
                </div>
                <div v-show="check1" class="general-panel customize-panel drp">
                  <!-- <div class="img-title">How long between images? ( ≤ 24 secs)</div> -->
                  <div class="tips">The number of grids(no more than 24)</div>
                  <div class="customize mark">
                    <a href="javascript:;" class="minus"></a>
                    <q-slider class="c-slider" v-model="gridNum" :min="0" :max="24"></q-slider>
                    <a href="javascript:;" class="plus"></a>
                    <span class="result">
                      <input type="text" v-model="gridNum" class="input-number" /> SECS</span>
                  </div>
                </div>
                <div class="tit">
                  Toggle
                </div>
                <ul class="toggle">
                  <li v-for="(i, index) in toggle" :key="i" class="toggle-list" @click="toggleStuts = index;refresh()" :class="{'seleced': toggleStuts === index}">
                    <div class="imgbox">
                      <img :src='i.img'>
                    </div>
                    <div>{{i.text}}</div>
                    <span class="icon-red"></span>
                  </li>
                </ul>
                <div class="tit">
                  Positioning mark
                  <div class="switch">
                    <q-toggle v-model="check2" />
                  </div>
                </div>
                <ul v-show="check2" class="direction mrk">
                  <li v-for="(i, index) in mark" :key="i" class="direction-list" @click="markStuts = index;refresh()" :class="{'seleced': markStuts === index}">
                    <img :src='i.img'>
                    <div>{{i.text}}</div>
                    <span class="icon-red"></span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- <div class="nav-item">
                    <div class="nav-item-head">CUSTOMIZE</div>
                    <div class="nav-list">
                      <div class="setting">
                        <span class="same">Same setting for other Image?</span>
                        <span class="s-btn" @click="synchro()">Synchronize</span>
                      </div>
                      <div class="tit" style="margin-bottom: 0">
                        Tittle
                      </div>
                      <div class="general-panel drp">
                        <div class="g-setting">
                          <q-checkbox class="g-checkbox" v-model="imglist[$refs.swiperTop[0].swiper.activeIndex].mainTitle.isShow" label="Main title"></q-checkbox>
                          <q-checkbox class="g-checkbox" v-model="imglist[$refs.swiperTop[0].swiper.activeIndex].subtitle.isShow" label="Subtitle"></q-checkbox>
                          <q-checkbox class="g-checkbox" v-model="imglist[$refs.swiperTop[0].swiper.activeIndex].description.isShow" label="Description for recommendation"></q-checkbox>
                        </div>
                      </div>
                      <div class="tit">
                        Button & Link
                        <div class="switch">
                          <q-toggle v-model="check3" />
                        </div>
                      </div>
                      <ul v-show="check3" class="direction mrk">
                        <li class="direction-list"
                            @click="imglist[$refs.swiperTop[0].swiper.activeIndex].button.isButton = !imglist[$refs.swiperTop[0].swiper.activeIndex].button.isButton"
                            :class="{'seleced': imglist[$refs.swiperTop[0].swiper.activeIndex].button.isButton}">
                          <img src='statics/images/contentCarousel/b_19.png'>
                          <div>Button</div>
                          <span class="icon-red"></span>
                        </li>
                        <li class="direction-list"
                            @click="imglist[$refs.swiperTop[0].swiper.activeIndex].link.isLink = !imglist[$refs.swiperTop[0].swiper.activeIndex].link.isLink"
                            :class="{'seleced': imglist[$refs.swiperTop[0].swiper.activeIndex].link.isLink}">
                          <img src='statics/images/contentCarousel/b_20.png'>
                          <div>Link</div>
                          <span class="icon-red"></span>
                        </li>
                      </ul>
                    </div>
                  </div> -->
            <div class="popup-foot">
              <button class="btn-cancel btn-common">Cancel</button>
              <button class="btn-comfirm btn-common">Confirm</button>
            </div>
          </div>
          <!-- <div style="width:100px;height:30px;background:red;text-align: center;line-height: 30px;color:#fff" @click="addDom()">添加</div> -->
        </div>
      </div>
    </div>
    <div class="upload-wrap" v-if="imgUpload">
      <div class="upload-title">
        <h1>Picture loading</h1>
        <a href="javascript:;" class="close-cross" @click='imgUpload = false;imgSrc= "";'></a>
      </div>
      <div class="upload-main">
        <div class="notice-wrap">
          <i class="notice-icon"></i>
          <span class="notice-content">Please select the image you want to uoload.The picture format can be JPG,PNG,JWF...which will not more than 5M</span>
        </div>
        <div class="upload-panel">
          <div class="url-wrap">
            <input type="text" placeholder="URL" v-model='imgSrc'>
            <!-- <a href="javascript:;" @click='editingImg.src = imgSrc'>Add</a> -->
            <a href="javascript:;" @click='addImage(icon)'>Add</a>
          </div>
          <div class="url-wrap">
            <input type="text" placeholder="BOC ID">
            <a href="javascript:;">Browse</a>
          </div>
          <a href="javascript:;" class="upload-btn">Local Upload
            <i></i>
          </a>
        </div>
        <!-- <div class="upload-detail-wrap">
                          <div class="detail-title">Added Image</div>
                          <div class="detail-item-wrap">
                              <div class="detail-item"></div>
                              <div class="detail-item"></div>
                              <div class="detail-item"></div>
                              <div class="detail-item"></div>
                          </div>
                      </div> -->
      </div>
    </div>
    <button @click='save'>保存</button>
    <button @click="refresh">刷新</button>

  </div>
</template>

<script>
  import {
    QSlider,
    QRadio,
    QCheckbox,
    QToggle,
    QBtn,
    QIcon,
    QSelect
  } from "quasar";
  export default {
    data() {
      return {
          selectOptions:[
          {
            label: 'px',
            value: 'v_px'
          },
          {
            label: 'vh',
            value: 'v_vh'
          }
        ],
        valSelect: 'v_vh',
        notNextTick: true,
        swiperInfo: {
          style: "width:100%;height:100%; border:1px solid #ccc;",
          items: [{

          }, {

          }, {

          }]
        },
        imgListes: [],
        size: 0,
        check1: true,
        check2: true,
        check3: true,
        epanelStyle: {
          left: "",
          top: ""
        },
        imgNum: 5,
        gridNum: 0,
        time: '',
        defaustImg: 'statics/images/contentCarousel/b_01.png',
        icon: 1, //当前banner的下标
        edit: false,
        editing: false,
        directionStuts: 0,
        directionSet: 'horizontal', //方向
        toggleStuts: 1,
        toggleSet: 'slide', //切换状态
        markStuts: 0,
        markSet: 'Dots',
        linkStuts: '',
        linkSet: '',
        boxleft: "0",
        direction: [{
          img: 'statics/images/contentCarousel/b_08.png',
          text: 'One'
        },{
          img: 'statics/images/contentCarousel/b_09.png',
          text: 'Two'
        },{
          img: 'statics/images/contentCarousel/b_08(2).png',
          text: 'Three'
        }],
        toggle: [{
          img: 'statics/images/contentCarousel/b_11.png',
          text: 'Fade out'
        }, {
          img: 'statics/images/contentCarousel/b_12.png',
          text: 'Push'
        }, {
          img: 'statics/images/contentCarousel/b_13.png',
          text: 'Bars'
        }, {
          img: 'statics/images/contentCarousel/b_14.png',
          text: 'Uncover'
        }],
        mark: [{
          img: 'statics/images/contentCarousel/b_15.png',
          text: 'Dots'
        }, {
          img: 'statics/images/contentCarousel/b_16.png',
          text: 'Line'
        },{
          img: 'statics/images/contentCarousel/b_17.png',
          text: 'Serial number-1'
        }, {
          img: 'statics/images/contentCarousel/b_18.png',
          text: 'Serial number-2'
        }],
        // link: [
        //   {
        //     img: 'statics/images/contentCarousel/b_19.png',
        //     text: 'Button'
        //   }, {
        //     img: 'statics/images/contentCarousel/b_20.png',
        //     text: 'Link'
        //   }
        // ],
        isEditing: false, //是否处于可编辑状态
        isEditorDrag: false, //编辑框是否可拖拽
        isImgDrag: false, //图片是否可拖拽
        isResizeTop: false, //是否可改变高度
        isResizeLeft: false, //是否可改变宽度
        startX: null, //鼠标开始坐标
        startY: null, //鼠标开始坐标
        domStartX: null, //拖放dom坐标
        domStartY: null, //拖放dom坐标
        hoverVisible: "hv", //悬浮出现辅助线
        // mianTitle: false,
        // subtitle: false,
        // descriptions: false,
        domImage: [], //插入图片
        editorMode: "default-setting", //
        selectImg: '',
        editingImg: {
          src: "",
          style: {
            position: "",
            width: "0",
            height: "0",
            left: "0",
            top: "0",
            background: ''
          }
        },
        imglist: [],
        slideItem: {
          src: 'statics/images/contentCarousel/b_01.png',
          mainTitle: {
            style: {
              position: "absolute",
              top: "70px",
              left: "130px",
              width: "",
              height: "",
              zIndex: '900'
            },
            content: `HUAWEI MATE 10`,
            isShow: false,
          },
          subtitle: {
            style: {
              position: "absolute",
              top: "130px",
              left: "130px",
              width: "",
              height: "",
              zIndex: '800'
            },
            content: `Pro Has Dual Leica Lenses and AI Photo Features`,
            isShow: false,
          },
          description: {
            style: {
              position: "absolute",
              top: "250px",
              left: "130px",
              width: "525px",
              height: "",
              zIndex: '700'
            },
            content: `The Huawei Mate 10 will be available in Europe starting in late
                        October for €699 (~$824), and the Huawei Mate 10 Pro will be
                        available in mid-November for €799 (~$942). US pricing and
                        availability will be announced at a later date.`,
            isShow: false,
          },
          button: {
            text: 'BUY NOW',
            isButton: false,
          },
          link: {
            text: 'details',
            url: '',
            isLink: false
          }
        },
        imgText: [],
        del: '',
        isShow: 'def',
        select: '',
        title: 'Sort Management',
        promptcontent: 'Drag the picture to the desired position, and the image at the current position will move back in sequence .',
        images: [{
            content: 'statics/images/contentCarousel/image01.png',
            sort: '1',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '2',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '3',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '4',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '5',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '6',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '7',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '8',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '9',
            allcount: '10'
          },
          {
            content: 'statics/images/contentCarousel/image01.png',
            sort: '10',
            allcount: '10'
          }
        ],
        imgUpload: false,
        imgSrc: '',
        swiperRefresh: true,
        content: '<h2>You text here.</h2>',
        editorOption: {
          theme: 'bubble',
          placeholder: "输入任何内容，支持html",
          modules: {
            toolbar: [
              [{
                'font': []
              }, {
                'size': []
              }],
              ['bold', 'italic', 'underline', 'strike', {
                'script': 'sub'
              }, {
                'script': 'super'
              }],
              [{
                'color': []
              }, {
                'background': []
              }],
              [{
                'align': ""
              }, {
                'align': "center"
              }, {
                'align': "right"
              }, {
                'align': "justify"
              }],
              [{
                'list': 'ordered'
              }, {
                'list': 'bullet'
              }, {
                'indent': '-1'
              }, {
                'indent': '+1'
              }],
              [{
                'direction': "rtl"
              }],
            ]
          }
        },
        selectText: null,
        selectTextItem: null,
        isTextDrag: false,
        editingText: {
          style: {
            position: "absolute",
            top: "",
            left: "",
            width: "",
            height: "",
          },
          content: '',
          isShow: true,
        }
      }
    },
    components: {
      QSlider,
      QRadio,
      QCheckbox,
      QToggle,
      QBtn,
      QIcon,
      QSelect
    },
    mounted() {
      let _this = this
      window.addEventListener("mousemove", function () {
        _this.Draging(window.event)
      })
      window.addEventListener("mouseup", function () {
        _this.DragEnd(window.event)
      })

      for (let i = 0; i < this.imgNum; i++) {
        this.imglist.push(JSON.parse(JSON.stringify(this.slideItem)))
      }
    },
    created() {

    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
      getWidth() {
        let all = ''
        all = this.imgNum * 398 + 'px'
        return {
          width: all,
          left: this.boxleft
        }
      },
      swiperOption() {
        return {
          pagination: '.swiper-pagination',
          effect: this.toggleSet,
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: this.time,
          simulateTouch: false,
          slidesPerView: this.toggleSet === 'flip' ? 3 : 'auto',
          direction: this.directionSet,
          paginationType: this.markSet === 'Dots' || this.markSet === 'Line' ? "bullets" : this.markSet ===
            "Serial number" ? "fraction" : "",
          paginationFractionRender: function (swiper, currentClassName, totalClassName) {
            return '<span class="' + currentClassName + '"></span>' +
              ' / ' +
              '<span class="' + totalClassName + '"></span>';
          }
        }
      }
    },
    methods: {
      Deletes(i) {
        this.domImage.splice(i, 1)
      },
      Reset() {
        this.imgListes = []
      },
      ok() {
        this.isShow = 'def'
        for (let i = 0; i < this.imgListes.length; i++) {
          this.imglist[i].src = this.imgListes[i].file.src
        }
        this.imgListes = []
      },
      pret() {
        if (this.icon > 1) {
          this.icon--
            this.boxleft = parseInt(this.boxleft) + 398 + 'px'
          this.mianTitle = false
          this.subtitle = false
          this.descriptions = false
          this.linkStuts = ''
          this.$refs.swiperTop[0].swiper.slideTo(this.icon - 1)
        }
      },
      nexts() {
        if (this.icon >= 1 && this.icon < this.imgNum) {
          this.icon++
            this.boxleft = parseInt(this.boxleft) - 398 + 'px'
          this.mianTitle = false
          this.subtitle = false
          this.descriptions = false
          this.linkStuts = ''
          this.$refs.swiperTop[0].swiper.slideTo(this.icon - 1)
        }
      },
      // slidePrev(){
      //   this.icon = this.$refs.swiperTop[0].swiper.activeIndex
      // },
      // slideNext(){
      //   this.icon = this.$refs.swiperTop[0].swiper.activeIndex + 2
      // },
      addImage(i) {
        this.imglist[i - 1].src = this.imgSrc
      },
      fileClick() {
        document.getElementById('upload_file').click()
      },
      fileChange(el) {
        if (!el.target.files[0].size) {
          return
        }
        this.fileList(el.target);
        el.target.value = ''
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type !== '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
      },
      fileAdd(file) {
        if (this.limit !== undefined) this.limit--;
        if (this.limit !== undefined && this.limit < 0) return;
        //总大小
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') === -1) {
          file.src = 'wenjian.png';
          this.imgListes.push({
            file
          });
        } else {
          let reader = new FileReader();
          reader.vue = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            this.vue.imgListes.push({
              file
            })
          }
        }
      },
      fileDel(index) {
        this.size = this.size - this.imgListes[index].file.size; //总大小
        this.imgListes.splice(index, 1);
        if (this.limit !== undefined) this.limit = this.imgListes.length;
      },
      delet(i) {
        this.imglist[i - 1].src = this.defaustImg
      },
      synchro() {
        this.imgText = []
        if (this.linkStuts === 0) {
          this.linkSet = 'button'
        }
        if (this.linkStuts === 1) {
          this.linkSet = 'link'
        }
        for (let i = 0; i < this.imgNum; i++) {
          this.imgText.push({
            mianTitle: this.mianTitle,
            subtitle: this.subtitle,
            descriptions: this.descriptions,
            link: this.linkSet
          })
        }
        console.log(this.imgText)
      },
      DragStart(dom, e) {
        //编辑面板开始拖拽事件
        e.stopPropagation();
        this.domStartX = parseInt(dom.offsetLeft)
        this.domStartY = parseInt(dom.offsetTop)
        this.startX =
          e.clientX + document.body.scrollLeft - document.body.clientLeft
        this.startY =
          e.clientY + document.body.scrollTop - document.body.clientTop
        this.isEditorDrag = true
      },
      Draging(e) {
        //鼠标拖拽事件
        let tempX =
          e.clientX + document.body.scrollLeft - document.body.clientLeft
        let tempY =
          e.clientY + document.body.scrollTop - document.body.clientTop
        if (this.isEditorDrag) {
          this.epanelStyle.left = this.domStartX + (tempX - this.startX) + "px";
          this.epanelStyle.top = this.domStartY + (tempY - this.startY) + "px";
        } else if (this.isTextDrag) {
          let left = this.domStartX + (tempX - this.startX);
          let top = this.domStartY + (tempY - this.startY);
          if (left >= 0) {
            this.editingText.style.left =
              this.domStartX + (tempX - this.startX) + "px";
          }
          if (top >= 0) {
            this.editingText.style.top =
              this.domStartY + (tempY - this.startY) + "px";
          }
        } else if (this.isResizeTop) {
          this.editingText.style.height = tempY - this.domStartY + "px";
        } else if (this.isResizeLeft) {
          this.editingText.style.width = tempX - this.domStartX + "px";
        }
      },
      domDrag(dom, e) {
        //添加元素拖拽事件
        e.stopPropagation();
        this.domStartX = parseInt(this.editingText.style.left)
        this.domStartY = parseInt(this.editingText.style.top)
        this.startX =
          e.clientX + document.body.scrollLeft - document.body.clientLeft
        this.startY =
          e.clientY + document.body.scrollTop - document.body.clientTop
        this.isTextDrag = true
        // console.log(this.imglist[this.$refs.swiperTop[0].swiper.activeIndex].mainTitle.isShow)
      },
      DragEnd() {
        //鼠标松开事件
        this.isEditorDrag = false
        this.isTextDrag = false
        this.isResizeTop = false
        this.isResizeLeft = false
        this.startX = null
        this.startY = null
        this.domStartX = null
        this.domStartY = null
      },
      addDom() {
          debugger;
        //添加元素事件
        this.isEditing = true
        let img = {}
        img.src = "statics/images/contentCarousel/default-img.png";
        img.style = {
          position: "absolute",
          width: "500px",
          height: "350px",
          left: "0px",
          top: "0px",
          background: ''
        }
        if (this.domImage.length === 0) {
          this.domImage.push(img)
        }
      },
      resizeTop() {
        //垂直方向改变大小事件
        this.domStartY = parseInt(this.editingText.style.top);
        this.isResizeTop = true
      },
      resizeLeft() {
        //水平方向改变大小事件
        this.domStartX = parseInt(this.editingText.style.left);
        this.isResizeLeft = true
      },
      // editImg(type, style) {
      //   //图片编辑事件
      //   if (type === "border") {
      //     this.editingImg.style.border = style;
      //   } else if (type === "boxshadow") {
      //     this.editingImg.style.boxShadow = style;
      //   }
      // },
      //text editor methods
      onEditorBlur(editor) {
        console.log(this.isEditorDrag)
        this.isEditorDrag = true
        console.log(this.isEditorDrag)
      },
      onEditorFocus(editor) {
        console.log(this.isEditorDrag)
        this.isEditorDrag = false
        console.log(this.isEditorDrag)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({
        editor,
        html,
        text
      }) {
        this.content = html
      },
      save() {
        this.isEditing = false;
        let storage = window.localStorage
        let html = document.getElementsByClassName("display-box")
        let options = JSON.stringify(this.swiperOption)
        storage.setItem("banner", html[0].outerHTML)
        storage.setItem("option", options)
      },
      refresh() {
        let self = this
        this.swiperRefresh = !this.swiperRefresh
        setTimeout(function () {
          self.swiperRefresh = !self.swiperRefresh
        }, 50)
      }
    },
    watch: {
      gridNum(curVal, oldVal) {
        this.time = curVal * 1000
        this.refresh()
      },
      directionStuts(curVal, oldVal) {
        if (curVal === 0) {
          this.directionSet = 'horizontal'
        }
        if (curVal === 1) {
          this.directionSet = 'vertical'
        }

        // this.$refs.swiperTop[0].swiper.destroy(true,true)
      },
      toggleStuts(curVal, oldVal) {
        if (curVal === 0) {
          this.toggleSet = 'fade'
        }
        if (curVal === 1) {
          this.toggleSet = 'slide'
        }
        if (curVal === 2) {
          this.toggleSet = 'flip'
        }
        if (curVal === 3) {
          this.toggleSet = 'coverflow'
        }
      },
      markStuts(curVal, oldVal) {
        if (curVal === 0) {
          this.markSet = 'Dots'
        }
        if (curVal === 1) {
          this.markSet = 'Line'
        }
        if (curVal === 2) {
          this.markSet = 'Serial number-1'
        }
        if (curVal === 3) {
          this.markSet = 'Serial number-2'
        }        
      },
      mianTitle(curVal, oldVal) {
        this.imgText[this.icon - 1].mianTitle = curVal
      },
      subtitle(curVal, oldVal) {
        this.imgText[this.icon - 1].subtitle = curVal
      },
      descriptions(curVal, oldVal) {
        this.imgText[this.icon - 1].descriptions = curVal
      },
      linkStuts(curVal, oldVal) {
        if (curVal === 0) {
          this.linkSet = 'button'
        }
        if (curVal === 1) {
          this.linkSet = 'link'
        }
        this.imgText[this.icon - 1].link = this.linkSet
      },
      imgNum(curVal, oldVal) {
        for (let i = 0; i < this.imgNum; i++) {
          this.imglist.push(JSON.parse(JSON.stringify(this.slideItem)))
        }
      }
    }
  };

</script>

<style>
  /*@import "../../assets/style.styl";*/

</style>

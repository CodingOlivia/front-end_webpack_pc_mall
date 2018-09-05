<template>
    <!-- <q-layout ref="layout" class="myorder-layout-left">
        <q-scroll-area slot="left" style="width: 100%; height: 100%" class="myorder-left"> -->
            <div class="view-leftbar-wrap">
            <ul class="v-tree">
                <li class="v-tree-item " v-for="(tm,index) in treeModel"  :key="index">
                <q-side-link  :to="tm.to">
                    <div class="item-wrap" @click="toggle(index);lightShow=index;childLightShow=-1">
                        <span class="p-text" :class="{'active':lightShow==index}">{{tm.title}}</span>
                    </div>
                </q-side-link>
                <ul class="child-tree" v-if="tm.expanded">
                    <li class="child-tree-item" v-for="(tmc,cindex) in tm.children" :key="cindex">
                        <q-side-link  :to="tmc.to" @click.stop="">
                            <div class="child-item-wrap"  @click.stop="childLightShow=cindex;lightShow=-1">
                                <span class="child-text" :class="{'active':childLightShow==cindex}">{{tmc.title}}</span>
                            </div>
                        </q-side-link>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
        <!-- </q-scroll-area>
    </q-layout> -->
    
</template>
<script>
import {
    QScrollArea,
    QLayout,
    QSideLink,
    Dialog,
    Toast,
    QModal
  } from 'quasar'
export default {
components: {
    QScrollArea,
    QLayout,
    QSideLink,
    Dialog,
    Toast,
    QModal
    },
  data () {
    return {
      lightShow:-1,
      childLightShow:-1,
      currentindex:'',
      treeModel:[
        {
            title: 'Personal Center',
            expanded: false,
            "to": "/Order/commerce",
            children:[
            ]
        },
        {
            title: 'Notification',
            expanded: true,
            "to": "/Order/Commerce#2",
            children:[
            ]
        },
        {
            title: 'My Order',
            expanded: true,
            "to": "/Order/MyOrder/AllOrders",
            children:[
            ]
        },
        {
            title: 'My Account',
            expanded: true,
            "to": "/Order/Commerce#3",
            children:[
            ]
        },
        {
            title: 'Favorites',
            expanded: true,
            "to": "/Order/Commerce#4",
            children:[
                {
                title: 'Basic Info',
                "to": "/Order/Commerce#100",
                },
            ]
        },
        {
            title: 'Browsing History',
            expanded: true,
            "to": "/Order/Commerce#5",
            children:[
            ]
        },
        {
            title: 'My Comments',
            expanded: false,
            "to": "/Order/Commerce#6",
            children: [
            ]
        },
        {
            title: 'Customer Service',
            expanded: false,
            "to": "/Order/Commerce#7",
            children:[
            ]
        },
        {
            title: 'Recharge',
            expanded: true,
            "to": "/Order/Exchange",
            children:[
            ]
        },
      ],
    }
  },
  methods:{
    toggle: function (index) {

      for(var i=0;i<this.treeModel.length;i++){
        this.treeModel[i].expanded = false;
      }
      this.treeModel[index].expanded=true;
    },

    // common 提示框
    handler: function() {
        Dialog.create({
            title: 'Confirm',
            message: 'Customized buttons.',
            buttons: [
                {
                label: 'Yes',
                raised: true,
                color: 'primary',
                },
                {
                label: 'No',
                outline: true,
                color: 'primary',
                }
            ]
        })
    },
    handlerL: function() {
        Toast.create({
            html: 'Message to display',
            icon: 'alarm_add',
            timeout: 2000,
        })
      }
  },
}
</script>
<style lang="stylus">
@import '~themes/app.variables'
</style>

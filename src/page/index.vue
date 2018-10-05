<template>
  <div class="main">
    <view-box ref="viewBox">
      <x-header title="标题" :left-options="{showBack: false}"></x-header>
      <router-view />
      <tabbar class="mian_tabbar">
        <tabbar-item selected @on-item-click="pageGo({path:'/resources'})">
          <img slot="icon" src="../assets/resources.png">
          <img slot="icon-active" src="../assets/resources_a.png">
          <span slot="label" class="main_label"> 资源 </span>
        </tabbar-item>
        <tabbar-item @on-item-click="pageGo({path:'/near'})">
          <img slot="icon" src="../assets/near.png">
          <img slot="icon-active" src="../assets/near_a.png">
          <span slot="label" class="main_label"> 发现 </span>
        </tabbar-item>
        <tabbar-item @on-item-click="pageGo({path:'/me'})">
          <img slot="icon" src="../assets/me.png">
          <img slot="icon-active" src="../assets/me_a.png">
          <span slot="label" class="main_label"> 我的 </span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem,ViewBox,XHeader } from "vux";
export default {
    name: "index",
    components: {
        Tabbar,
        TabbarItem,
        ViewBox,
        XHeader
    },
    methods: {
        pageGo({ path }) {
            this.$router.push({
                path: path,
                query: {}
            });
        }
    }
};
</script>

<style scoped lang='less'>
@import "../less/common.less";
.main {
    width: 100%;
    height: 100%;
    .vux-header{
      background: @backgroundColor;
    }
    .mian_tabbar {
        background: @backgroundColor;
        .main_label {
            color: @whiteColor;
        }
        .weui-bar__item_on {
            .main_label {
                color: @activeColor;
            }
        }
    }
}
</style>
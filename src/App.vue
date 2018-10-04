<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    <router-view/>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux';
export default {
  data(){
    return{

    }
  },
  components:{
    Tabbar,
    TabbarItem,
  }
}
</script>

<style>

</style>

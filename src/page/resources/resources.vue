<template>
  <div class="resources">
    
    <grid :cols="cols"  >
      <grid-item :label="item.name" v-for="(item,index) in subjectList" :key="index">
        <img slot="icon" :src="item.logo">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem,Search } from "vux";
export default {
  data(){
    return{
      cols:3,
      autoFixed:true,
      subjectList:[
        { name:"计算机",logo:require('../../assets/1.png') },
        { name:"数学",logo:require('../../assets/2.png') },
        { name:"心理学",logo:require('../../assets/3.png') },
        { name:"教育",logo:require('../../assets/4.png') },
        { name:"会计",logo:require('../../assets/5.png') },
        { name:"医学",logo:require('../../assets/6.png') },
        { name:"文学",logo:require('../../assets/7.png') },
        { name:"历史",logo:require('../../assets/8.png') },
        { name:"生物",logo:require('../../assets/9.png') },
        { name:"管理学",logo:require('../../assets/10.png') },
        { name:"哲学",logo:require('../../assets/11.png') },
        { name:"法律",logo:require('../../assets/12.png') },
        { name:"社会学",logo:require('../../assets/13.png') },
        { name:"经济学",logo:require('../../assets/14.png') },
        { name:"其他",logo:require('../../assets/15.png') }
      ]
    }
  },
  components: {
    Grid,
    GridItem,
    Search
  }
};
</script>

<style scoped lang='less'>
@import "../../less/common.less";
.resources{
  .weui-search-bar{
     background: @backgroundColor;
  }
}
</style>
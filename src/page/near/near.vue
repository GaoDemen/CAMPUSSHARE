<template>
  <div class="near">
     <ul>
      <li class="near_list" v-for="i in 9"> 
        <div class="user_url">
          <img src="../../assets/test.jpg" alt="">
        </div>
        <div class="user_say">
          <h3> 源计划_溜 <span> 2018/07/05 13:28 </span> </h3>
          <p> 发现最近好多人啊  好多人啊 傻逼吧发现最近好多人啊   傻逼吧 发现最近好多人人啊  好多人啊 傻逼吧 发现最近好多人啊  好多人啊 傻逼吧  </p>
          <img src="../../assets/test.jpg" alt="">
        </div>
      </li>
     </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang='less'>
@import "../../less/common.less";
.near{
  padding: 0.15rem;
  .near_list{
    display: flex;
    margin-bottom: 0.15rem;
    border-bottom: 0.01rem solid #f1f1ff; 
    .user_url{
      margin-right: 0.15rem;
      img{
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    .user_say{
      h3{
        font-size: 0.16rem;
        font-weight: normal;
        margin-bottom: 0.05rem;
        span{
          float: right;
          color: @wordColor; 
          font-size: 0.14rem;
          line-height: 0.21rem;
        }
      }
      p{
        color: @wordColor;
        font-size: 0.14rem;
      }
      img{
        margin-top: 0.05rem;
        width: 100%;
        margin-bottom: 0.15rem;
      }
    }
  }
}

</style>
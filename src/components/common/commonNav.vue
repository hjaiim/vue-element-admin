<template>
  <div class="nav-contain">
    <el-button @click="personInfo">账户信息</el-button>
    <el-button @click="loginOut">登出</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
  import API from 'api/api_login';
  import * as g from 'jslib/global';
  export default{
    created(){
    },
    data(){
      return {}
    },
    components: {},
    watch: {},
    methods: {
      loginOut()
      {
        this.updateLogin()

        API.logout().then(()=>
        {
          this.$message({
            message: '登出成功',
            type: 'success'
          });

          this.$router.push({
            path: '/login'
          });
        })
      },
      personInfo()
      {

      },
      updateLogin()
      {
        //更新sessionStorage登录状态(登出)
        g.utils.setSessionData('isLogin', false);
      }
    }
  }

</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .nav-contain {
    background-color: cornflowerblue;
    height: 50px;
  }
</style>

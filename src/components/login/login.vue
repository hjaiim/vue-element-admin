<template>
  <div>
    <p>登录页</p>
    <el-input v-model="account" placeholder="请输入账号"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
  import sha256 from 'sha256';
  import API from 'api/api_login';
  export default{
    created(){
      console.log(this.$route.query.redirect)
    },
    data(){
      return {
        account: '红包',
        password: '123456liu'
      }
    },
    components: {},
    watch: {},
    methods: {
      handleLogin()
      {
        let loginParams = {
          logon: this.account,
          password: sha256(this.password)
        }

        API.login(loginParams).then((result)=>
        {
          console.log('登录成功');
          //更新sessionStorage登录状态(登录)
          this.$utils.setSessionData('isLogin', true,'ses');

          //回调页面
          this.$router.push({
            path: this.$route.query.redirect || '/'
          });

        }).catch((error)=>
        {
          console.log('登录失败');
          console.log(error);
        })
      }
    }
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>

</style>

<template>
  <div >
    <div class="box">
      <img src="../assets/logo1.png" @click="imgClick()"/>
    </div>
    <input class="phone" type="tel" value="手机号"> 
    <input class="duanxin" type="tel" value="短信验证码"> 
    <a  class="off" href="" >获取验证码</a>
     <a class="logo" href="#" @click="handleClick()">登录</a>
  </div>
</template>
<script>
  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{

      }
      
    },
    methods:{
      imgClick(){
        location.href="/";
      },
      handleClick(){
        alert("登录成功")
      }
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin:0;
  }
  div{

   padding: 0px 40px;
  }
  .box{
    margin-top:100px;
    text-align: center;
    height: 97px;
    position: relative;
    display: block;    
    
  }
  img{
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display:inline-block;
    width: 170px;
  }
  .phone{
  
    
    margin-bottom: 20px;
    width: 240px;
    font-size: 12px;
    color: #2c3038;
    border-radius: 8px;
    border: 2px solid #bdc0c5;
    padding: 10px 10px;
  }
  .duanxin{  
    
    margin-bottom: 20px;
    width: 140px;
    font-size: 12px;
    color: #2c3038;
    border-radius: 8px;
    border: 2px solid #bdc0c5;
    padding: 10px 10px;
  }
  .off{
    padding: 6px 6px;
    color: #e0e0e0;
    margin-left: 10px;
    width: 100px;
    border: 2px solid #e0e0e0;
    text-decoration: none;
  }
  .logo{
        text-decoration: none;
        display: block;
        width: 100%;
        height: 5px;
        line-height: 5px;
        padding: 23px 0;
        background-color: #1a1a1a;                
        color: #e5e5e5;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
  }
</style>
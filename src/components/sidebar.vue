<template>
  <aside>
    <slot></slot>
  </aside>
</template>

<script>
  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{

      }
      
    }
  }
</script>

<style scoped lang="scss">
aside{
  position: fixed;
  top: 40px;
  left: 0px;
  
  width: 100%;
  height: 100%;
  color:black;
  z-index: 11;
  background: #fff

}
ul{

}
li{
  /*float: left;
  width: 30px;
  border: 1px solid;
  margin:5px;*/
}
  
</style>
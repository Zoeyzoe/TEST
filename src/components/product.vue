<template>
  <div>
    product组件
    
  </div>
</template>
<script>
  import axios from "axios";
  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{

      }
      
    },
    mounted(){
      // console.log(this.$route.params);
      // axios.get(`/product/info/product_detail.json?product_id=1024077&sub_product_id=5048449`).then(res=>{
      //   console.log(res.data)
      // })
    }
  }
</script>

<style scoped>
  
</style>
<template>
  <div v-if="info">
    <div class="basic">
      <h2>{{info.basic.name}}</h2>
    <p>{{info.basic.description}}</p>
    <span>{{info.basic.price}}</span>/<span>{{info.basic.origin_price}}</span>|随时退
    </div>
    <div v-for="data in info.modules">
      {{data.id}}
    </div>
    
  </div>
</template>
<script>
  import axios from "axios";
  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{
        info:null
      }
      
    },
    mounted(){
      console.log(this.$route.params);
      // product/info/product_detail.json?
      axios.get(`/product/info/product_detail.json?product_id=${this.$route.params.myfirstId}&sub_product_id=${this.$route.params.mysecondId}`).then(res=>{
        console.log(res.data)
        this.info = res.data
      })
    }
  }
</script>

<style scoped>
  
</style>
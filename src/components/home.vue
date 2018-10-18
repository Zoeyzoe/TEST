<template>
  <div>
    home组件
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
      console.log(this.$route.params.myid);
      axios.get(`/hub/home/v1/web/week_choice.json?city_id=${this.$route.params.myid}&page=0`).then(res=>{
        console.log(res.data)
      })
    }
  }
</script>

<style scoped>
  
</style>
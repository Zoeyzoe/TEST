<template>
  <div>

      <ul v-for="data in list">
          <div class="sortname">{{data.name}}</div>
          <li v-for="fooddata in data.sub_category_list" class="body" @click="send()">
            {{fooddata.name}}
          </li>
      </ul>

  </div>
</template>


<script type="text/javascript">
  import axios from "axios";
  
  export default{

    data(){
      return{
        list:[]
      }
    },

    mounted(){
      axios.get("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTA0JmlzX25ld19sb2NhbD1mYWxzZSZtZDU9MTY3YTY2MzA1OGQ3OGY4MmU5MGUwMDc3ZDIyNTlmNjMmMjAxODEwMTcxMDAw.json").then(res=>{
        console.log(res.data);
        this.list=res.data;

        this.$store.commit("changetitle", "首页" )


      }).catch(err=>{
        console.log('error');
      })
    },
    methods:{
      send(){
        
        location.href="/#/category/detail"
      }
    }





  }

</script>


<style type="text/css" scoped>
*{
  margin: 0;
  padding: 0;
}
  ul{
    list-style: none;
    width: 100%;
    overflow: hidden;
  }
  .sortname{
    width: 100%;
    float: left;
    font-size: 15px;
    box-sizing: border-box;
    background-color: #f6f6f6;
    padding: 9px 20px;
    color: #1b1b20;
    text-align: left;
  }
  li{
    width: 33%;
    box-sizing: border-box;
    text-align: center;
    color: #2c3038;
    border: 1px solid #e4e5e7;
    float: left;
    font-size: 14px;
    padding: 15px 0;
    }

</style>
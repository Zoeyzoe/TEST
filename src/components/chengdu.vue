<template>
  <div>
    <ul>
      <li v-for="data in chengdulist">
        <h2>{{data.group_section.title}}</h2>
        <p>{{data.group_section.desc}}</p>
        <ul>
          <li v-for="next in data.tabs" @click="check(next.enjoy_url)">
            <img :src="next.url" alt="">
            <h3>{{next.title}}</h3>
            <p>{{next.desc}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from "vuex";
  import router from "../router"
  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{

      }
      
    },
    computed:{
      ...mapState(["chengdulist"]),


    },
    mounted(){
      if(this.$store.state.chengdulist.length===0){

        this.$store.dispatch("getchengdulist")

      }
    },
    methods:{
      check(id){
        console.log(id);
        // var arr = id.split('?')
        // console.log(arr[1])
        // var b = arr[1].split('&')
        // console.log(b)
        // console.log(b[0].split('='))
        var firstid = ((id.split('?')[1]).split('&')[0]).split('=')[1];
        console.log(firstid)
        var secondid = ((id.split('?')[1]).split('&')[1]).split('=')[1];
        console.log(secondid)
        router.push(`/product/${firstid}/${secondid}`)
        
      }
    }
  }

</script>

<style scoped lang="scss">
div{
  ul{
    list-style: none;
    padding:0;
    ul{
      li{
        padding:10px;
        border-bottom: 1px solid #ccc;
        img{
          width: 100%
        }
      }
    }
  }
}
  
</style>
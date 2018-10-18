<template>
  <div>
    <ul>
      <li v-for="data in shanghailist">
        <h2>{{data.group_section.title}}</h2>
        <p>{{data.group_section.desc}}</p>
        <ul>
          <li v-for="next in data.tabs">
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
  import {mapState} from "vuex"
  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{

      }
      
    },
    computed:{
      ...mapState(["shanghailist"]),
      ...mapState(["shanghaitabslist"])

    },
    mounted(){
      if(this.$store.state.shanghailist.length===0){

        this.$store.dispatch("getshanghailist")

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
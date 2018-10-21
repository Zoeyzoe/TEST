<template>
	
	<div class="who" >
			
			<ul class="city"  v-infinite-scroll="loadMore"
   	  infinite-scroll-disabled="loading"
   	  infinite-scroll-immediate-check	="false"
   	  infinite-scroll-distance="0">

				<li v-for="city in arr">
					<h2>{{city.group_section.title}}</h2>
					<p>{{city.group_section.desc}}</p>

					

					<ul>

					    <li v-for="next in city.tabs" @click="check(next.enjoy_url)">
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
	import axios from "axios";
	import router from "../router";
	export default {
		  data(){
		    return{
		    	arr:[],
		    	loading:false ,
		    	current:1,
		    }
		  },
		  mounted(){
		  	console.log("aaa")
		  	axios.get(`/hub/home/v1/web/week_choice.json?city_id=${this.$route.params.cityid}&page=0`).then(res=>{
		  		console.log(res.data);
		  		this.arr = res.data;
  		        this.$store.commit("changecitytitle", this.$route.params.cityid)

		  	})
		  },
		  methods:{
		  	check(id){
		  		location.href="/#/product";
		  		var firstid = ((id.split('?')[1]).split('&')[0]).split('=')[1];
		  		var fid = parseInt(firstid)
		  		console.log(fid)
		  		var secondid = ((id.split('?')[1]).split('&')[1]).split('=')[1];
		  		var sid = parseInt(secondid)
		  		console.log(sid)
		  		router.push(`/product/${fid}/${sid}`)
		  		
		  	},
		  	loadMore(){
		  		console.log("到底了");
		  		this.current++;
		  		if(this.current>7){
		  			this.loading = true;
		  			return
		  		}
		  		axios.get(`/hub/home/v1/web/week_choice.json?city_id=${this.$route.params.cityid}&page=${this.current}`).then(res=>{
		  		console.log(res.data)
		  		this.arr = [...this.arr,...res.data]
		  		})

		  	}
		  }
		}  
  


</script>
<style scoped lang="scss">
	
div.who{
	ul.city{
		margin: 0;
		padding:0;
		list-style: none;
		li{
			padding:10px;
			ul{
			list-style: none;
			overflow: hidden;
			padding:0;

	    	li{
				width: 100%;
		        padding:10px 0;
		        border-bottom: 1px solid #ccc;
	        	img{
	          		width: 100%
        		}
      		}
    	}
		}
		
	}
	
}
	
</style>
<template>
	<div>
		<navbar class="navbar">

<!-- 			<router-link tag="div" to="/category" activeClass="active">{{$store.state.title}}</router-link> -->
			<button @click="changerouter()">
				{{$store.state.title}}
			</button>

			<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

			<div @click="isShow=!isShow" style="display: flex">
				<img src="./assets/logo.png" style="height: 30px">
				<p>
					城市
					<i class="iconfont icon-moreunfold"></i>
				</p>
			</div>

		</navbar>

		<sidebar v-show="isShow" class="sidebar">
			<div>
				<ul @click="isShow=!isShow">
					<p>本地服务开通城市</p>
					<li v-for="data in citylist" @click="handleClick(data.id)">
						{{data.name}}
					</li>
				</ul>
			</div>
		</sidebar>

		<section class="view">
			<router-view></router-view>
		</section>


		<section class="who">
			<ul class="city">
				<li v-for="city in arr">
					<h2>{{city.group_section.title}}</h2>
					<p>{{city.group_section.desc}}</p>
					<ul >
						<!-- <router-link tag="li" to="/product" activeClass="active" v-for="next in city.tabs" @click="check()">
							<img :src="next.url" alt="">
						    <h3>{{next.title}}</h3>
						    <p>{{next.desc}}</p>
						</router-link> -->
					    <li v-for="next in city.tabs" @click="check()">
						    <img :src="next.url" alt="">
						    <h3>{{next.title}}</h3>
						    <p>{{next.desc}}</p>
					    </li>
					</ul>
				</li>
			</ul>
		</section>

		

		

	</div>
</template>
	

<script>
  import navbar from "./components/navbar";
  import sidebar from "./components/sidebar";
  import sort from "./components/sort";
  import router from "./router";

  import axios from "axios";
  import {mapState} from "vuex";

  


export default {
  data(){
    return{
    	isShow:false,
    	show:true,
    	citylist:[
    		{
    			name:'上海',
    			id:104
    		},
    		{
    			name:'北京',
    			id:140
    		},
    		{
    			name:'南京',
    			id:144
    		},
    		{
    			name:'天津',
    			id:185
    		},
    		{
    			name:'广州',
    			id:216
    		},
    		{
    			name:'成都',
    			id:235
    		},

    	],
    	arr:[]
    }
  },
  components:{
    navbar,
    sidebar,
    sort
  },

  computed:{
  	...mapState(["title"])
  },

  methods:{
  	handleClick(id){
  		console.log(id);
  		router.push(`/home/${id}`)

  		

  	},
  	check(){
  		location.href="/#/product"
  	},

  	changerouter(){

  		if(window.location.hash == '#/category/list'){
  			location.href="/"
	  		// this.$router.push({path:'#/'});
  		}else{
		  	this.$router.push({path:'/category/list'});
/*	  		this.$router.push({path:'#/category/list'});
	  		location.href="/category/list"*/

  		}
  	}




  	}
  	

  }
  

</script>

<style scoped lang="scss">
*{
	padding: 0;
	margin:0;
}
html,body{
  height: 100%;
}

.navbar{
	button{
		background:none;
		font-size:16px;
		color:white;
		border:none;
		outline:none;
	}
	div{
		p{
			font-size:8px;
			display:flex;
			align-items:flex-end;
		}
	}
}

.sidebar{
	ul{
		list-style: none;
		p{
			text-align: center;
		}
		li{
			width: 30%;
			float: left;
			text-align: center;
			padding: 10px 0;
		}
	}
}


.view{
	position: relative;
    top: 40px;
    
}
	

section.who{
	margin-top: 40px;
	ul{
		overflow: hidden;
    	li{
			width: 100%;
        	border-bottom: 1px solid #ccc;
			img{
				width: 100%
			}
		}
	}
}

</style>

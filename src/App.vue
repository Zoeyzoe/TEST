<template>
	<div>
		<navbar>
			<router-link tag="li" to="/category" activeClass="active">分类</router-link>

			<div @click="isShow=!isShow"><img src="./assets/logo.png"><p>城市</p><i class="iconfont icon-moreunfold"></i></div>
		</navbar>

		<sidebar v-show="isShow">
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

export default {
  data(){
    return{
    	isShow:false,
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
  methods:{
  	handleClick(id){
  		console.log(id);
  		axios.get(`/hub/home/v1/web/week_choice.json?city_id=${id}&page=0`).then(res=>{
        console.log(res.data);
        this.arr=res.data;

      }).catch(err=>{
        console.log('error');
      })
  		
  	},
  	check(){
  		location.href="/#/product"
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
li.m{
	div{
	display: flex;
	justify-content: center;
	align-items: center;
	img{
		height: 30px;
	}
}
}


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

	

section{
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

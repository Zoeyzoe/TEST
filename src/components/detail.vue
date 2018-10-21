<template>
	<div>

		<ul class="header">
			<li>全部</li>
			<li @click="showHandleClick()">智能排序</li>
		</ul>

		<ul class="smalllist" v-show="showClick">
			<li @click="colorHandleClick()" v-for="data in headerlist">{{data.sort_name}}</li>
		</ul>

		<ul class="body">
			<li v-for="data in foodlist" @click="handleClick()">
				<img class="l" :src="data.product_image">
				<div class="r">
					<h3>{{data.name}}</h3>
					<p>
						<span>{{data.price/100+"元"}}/</span><span>{{data.show_entity_name}}</span>&nbsp;&nbsp;<span>￥{{data.original_price/100}}</span>
					</p>
				</div>
			</li>
		</ul>

	</div>
</template>

<script type="text/javascript">
	import axios from "axios";

	export default{

		data(){
			return{
				headerlist:[],
				foodlist:[],
				showClick:false,
				cityid:140,
				parentsid:14
			}
		},

		mounted(){
			axios.get("/4/tab/sub_category.json?category_id=161&city_id=401&from_id=0").then(
				res=>{
					// console.log(res.data.sort);
					this.headerlist = res.data.sort;
					console.log(this.cityid=res.data.sub_category_list[0].parent_id)

				}),
			axios.get("/4/tab/category_product_list.json?category_id=31&sort=1&from_id=0&city_id=388&page=0").then(res=>{
				this.foodlist=res.data
				console.log(this.foodlist);
			}),
			axios.get("/4/tab/category_product_list.json?category_id=31&sort=1&from_id=0&city_id=388&page=0").then(res=>{
				this.foodlist=res.data
				console.log(this.foodlist);
			})
		},

		methods:{
			showHandleClick(){
				this.showClick=!this.showClick;
			},
			colorHandleClick(){


			},
			handleClick(){
				
			}
		}

	}	


</script>


<style type="text/css" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.header{
		display: flex;
		list-style: none;
		height: 50px;
		line-height: 50px;
		width: 100%;
		border-bottom: 1px solid #909090;
		align-items: center;
		position: relative;
	}
	.header li{
		flex: 1;
		width: 50%;
		height: 25px;
		line-height: 25px;
		text-align: center;
	}
	.header li:first-child{
		border-right: 1px solid #909090;
	}


	.smalllist{
		background-color: white;
		z-index: 10;
		width: 100%;
		position: absolute;
		top: 52px;
	}	
	.smalllist li{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-bottom: 1px solid #909090;
	}

	.body{
		width: 100%;
	}
	.body li{
		display: flex;
		height: 100px;
		margin: 10px;
	}
	.l{
		flex: 1;
		width: 50%;
		margin-right: 10px;
	}
	.r{
		flex: 1;
	}
	.r h3{
		font-size: 14px;
		font-weight: 100;
		margin-bottom: 20px;
	}

	.r span{
		color: red;
		font-size: 14px;
	}	
	.r span:nth-of-type(3){
		color: #909090;
		text-decoration: line-through;
	}

</style>
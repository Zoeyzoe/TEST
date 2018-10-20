<template>
	<div>
		<input type="text" placeholder="搜索本地精选/快递到家" v-model="mytext" @input="inputchange()">
		<button>搜索</button>	
	</div>
</template>


<script type="text/javascript">
	export default{
		data(){
			return{
				mytext:""
			}
		},
		methods:{
			inputchange(){
				console.log("change",this.mytext)
			}
		}

		
	}

</script>

<style type="text/css" scoped >
	body{
		position: relative;
	}
	div{
		
		position: absolute;
		top:50px;
		z-index: 10;
	}
	input{
		background: #ccc;
		width: 270px;
		border: none;
		padding: 10px 20px;
		background-color: #f2f3f4
	}
	button{
		border: none;
		background: white;
		height: 35px;
	}
</style>
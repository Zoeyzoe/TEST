<template>
	<nav>
		
		<slot></slot>
		<router-link tag="div" to="/login" activeClass="active">登录</router-link>
		<i class="iconfont icon-search"></i>

	</nav>
</template>

<script>
	export default{

	}
</script>

<style scoped lang="scss">
	*{
		margin:0;
		padding: 0;
	};
	nav{
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 40px;
		background: black;
		color: white;
		display:flex;
		align-items:center;
		justify-content:space-between;
		padding:0 15px;
		box-sizing:border-box;
		z-index: 10;
	};
	

	
	
</style>
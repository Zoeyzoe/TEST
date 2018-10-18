<template>
	<nav>
		
		<ul>
			<li class="m">
			<slot></slot>
			</li>
			<li class="r">
				<router-link tag="li" to="/login" activeClass="active">登录</router-link>
				<i class="iconfont icon-search"></i>
			</li>
				
			
		</ul>
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
		z-index: 10;
		ul{

			height: 40px;
			line-height: 40px;
			list-style: none;
			display: flex;
			text-align: center;

		li.l{
			width: 50px
		};
		li.m{
			flex: 1;
			
		}
		li.r{
			width: 100px;
			display: flex;
			li{
				flex: 1
			}
			i{
				flex: 1
			}
		}

	}
	};
	

	
	
</style>
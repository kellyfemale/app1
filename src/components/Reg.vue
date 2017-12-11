<template>
	<div class="reg">
		<div class="type-header">
	  		<span class="jiantou"></span>
	  		<span class="typename">注册</span>
	  	</div>
	  	<div class="reg-content">
	  		<form action="#">
	  			<div class="imgyan">
	  			    <input type="text" placeholder="请输入图片验证码">
	  			    <span>19+7=</span>
	  			</div>
	  			<div class="phone">
	  				<input type="text" placeholder="请输入手机验证码">
	  				<span>获取验证码</span>
	  			</div>
	  			<div class="phoreg">
	  				<input type="text" placeholder="请输入手机验证码">
	  			</div>
	  			<div class="password">
	  				<input type="text" placeholder="密码：6-16位字母，数字，特殊字符">

	  			</div>
	  			<p class="server">
	  				<span class="left">注册账号即表示同意遵守</span><span class="right">《VANCL凡客服务条款》</span>
	  			</p>
	  			<button>点击注册</button>
	  		</form>
	  	</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'Reg',
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss">
*{
	padding:0;
	margin:0;
}
ul,ol,a{
	list-style: none;
	text-decoration: none;
}
.reg{
	overflow: hidden;
	.type-header{
		width:100%;
		height:60px;
		line-height: 60px;
		background-color: #b81c22;
		span{
			display: inline-block;
		}
		.jiantou{
			width:17.5px;
			height:17.5px;
			border-top:2px solid #fff;
			border-left:2px solid #fff;
			transform:rotate(-45deg);
			cursor: pointer;
			margin-left:25px;
			margin-right:130px;
		}
		.typename{
			font-size:22px;
			color:#fff;
			line-height: 50px;
		}
	}
	.reg-content{
		padding:30px 25px;
		input{
			background-color:rgb(245,245,245);
			border:none;
		}
		.imgyan{
			padding-bottom:12px;
			input{
				padding:9.6px;
				text-align:left;
				width:168px;
			}
			span{
				width:72px;
				color:rgb(0,0,238);
				float:right;
				height:100%;
				line-height: 40px;
				text-align: center;
				font-size:18px;
				margin-right:50px;
			}
		}
		.phone{
			padding-bottom:12px;
			clear:both;
			input{
				padding:9.6px;
				width:168px;
				// float:left;
				color:rgb(181,181,181);
			}
			span{
				float:right;
				padding:9px 14.4px;
				text-align: center;
				margin-right:30px;
				border:2px solid #ddd;
			}
		}
		.phoreg,.password{
			padding-bottom: 12px;
			clear:both;
			width:320px;
			input{
				padding:9.6px;
				width:100%;
			}
		}
		.server{
			margin-top:36px;
			margin-bottom:18px;
			color:rgb(179,179,179);
			.right{
				color:rgb(76,76,76);
			}

		}
		button{
			padding:8px 0;
			color:#fff;
			background-color: rgb(184,27,34);
			border-radius:3px;
			width:320px;
			height:52px;
			line-height: 40px;
			text-align: center;
			border:none;
		}
	}
	
}
</style>
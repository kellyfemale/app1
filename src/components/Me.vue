<template> 
  <div class="me">
  	<div class="me-header">
  		<span class="jiantou"></span>
  		<span class="mename">个人中心</span>
  	</div>
  	<div class="big-set">
  		<div class="set-header">
  			<a href="#"></a>
  		</div>
  		<div class="set-center">
  			<img src="../assets/H5-V0.jpg" alt="">
  			<p>15110048573</p>
  			<a href="#"></a>
  		</div>
  		<div class="set-footer">
  			<ul>
  				<li>积分:0</li>
  				<li>余额:0:00</li>
  				<li>成长值:0</li>
  			</ul>
  		</div>
  	</div>
  	<div class="progress">
  		<div class="pro-header">
  			<a href="#">
  				<span class="all">全部订单</span>
  				<span class="jian"></span>
  			</a>
  		</div>
  		<div class="pro-content">
  			<ul>
  				<li>
  					<a href="#">
  						<span class="jin"></span>
  						<span class="all">进行中</span>
  					</a>
  				</li>
  				<li>
  					<a href="#">
  						<span class="wan"></span>
  						<span class="all">已完成</span>
  					</a>
  				</li>
  				<li>
  					<a href="#">
  						<span class="pin"></span>
  						<span class="all">待评价</span>
  					</a>
  				</li>
  				<li>
  					<a href="#">
  						<span class="wu"></span>
  						<span class="all">无效</span>
  					</a>
  				</li>
  			</ul>
  		</div>
  	</div>
  	<div class="types">
  		<ul>
  			<li>
  				<a href="#">
  					<span class="one"></span>
  					<span class="all">充值返现</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="two"></span>
  					<span class="all">我的私人定制</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="three"></span>
  					<span class="all">物流查询</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="four"></span>
  					<span class="all">退换货记录</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="five"></span>
  					<span class="all">地址管理</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="six"></span>
  					<span class="all">我的礼品卡</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="seven"></span>
  					<span class="all">我的优惠券</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="eight"></span>
  					<span class="all">我的积分</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="nine"></span>
  					<span class="all">我的评论</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="ten"></span>
  					<span class="all">我的提问</span>
  				</a>
  			</li>
  			<li>
  				<a href="#">
  					<span class="eleven"></span>
  					<span class="all">投诉建议</span>
  				</a>
  			</li>
  		</ul>
  	</div>
  	<div style="height:65px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
    
    }
  },
  create(){
  	this.$router.push('/me');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
*{
	padding:0;
	margin:0;
}
ul,ol,a{
	list-style: none;
	text-decoration: none;
}
.me{
	.me-header{
		width:100%;
		height:50px;
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
		.mename{
			font-size:19px;
			color:#fff;
			line-height: 50px;
		}
	}
	.big-set{
		width:414px;
		height:222.5px;
		background: url('../assets/mebg.png') center top no-repeat;
		background-size: cover;
		.set-header{
			width:100%;
			height:35px;
			text-align: right;
			a{
				margin:8px 8px;
				display: inline-block;
				height:25px;
				width:22.5px;
				background:url('../assets/order-icon.png') 0 0 no-repeat;
				background-size: 22.5px 100px;
			}
		}
		.set-center{
			width:100%;
			text-align: center;
			img{
				width:81.25px;
				height:81.25px;
				border-radius:50%;			}
			p{
				width:100%;
				font-size: 12.5px;
				height:22px;
				line-height: 22.5px;
				text-align: center;
				color:#fff;
			}
			a{
				display: block;
				width:62.5px;
				height:18.75px;
				background:url('../assets/H5-NewV0.png') center center no-repeat;
				background-size:cover;
				margin: 5px 175px;
			}
		}
		.set-footer{
			width:100%;
			height:22px;
			li{
				float:left;
				width:132.4px;
				text-align: center;
				line-height: 22.5px;
				color:#fff;
			}
		}
	}
	.progress{
		width:414px;
		height:115.5px;
		font-size:12px;
		border-top:10px solid #f2f2f2;
		border-bottom:10px solid #f2f2f2;
		.pro-header{
			width:100%;
			height:43.5px;
			border-bottom:1px solid #f2f2f2;
			a {
				color:#000;
				span{
					display: inline-block;
					height: 100%;
					line-height: 43.5px;
					margin-left:10px;
				}
				.jian{
					width:8px;
					height:8px;
					border-top:1px solid #000;
					border-right:1px solid #000;
					transform:rotate(45deg);
					margin-left:300px;
				}
			}
		}
		.pro-content{
			width:100%;
			ul{
				li{
					height:47px;
					width:103.5px;
					float: left;
					text-align: center;
					a{
						// display: block;
						text-align: center;
						color:#000;
						span{
							display: block;
							height:25px;
							width:22.5px;
							text-align: center;
							margin:10px 40px;
						}
						.all{
							width:50px;
							margin:10px 25px;
						}
						.jin{
							
							background:url('../assets/uc-order-icon.png') 0px -25px no-repeat;
							background-size: 22.5px 125px;
						}
						.wan{
							
							background:url('../assets/uc-order-icon.png') center -50px no-repeat;
							background-size: 22.5px 125px;
						}
						.pin{
							
							background:url('../assets/uc-order-icon.png') 0 -75px no-repeat;
							background-size: 22.5px 125px;
						}
						.wu{
							
							background:url('../assets/uc-order-icon.png') 0 -100px no-repeat;
							background-size: 22.5px 125px;
						}
					}
				}
			}
		}
	}
	.types{
		width: 414px;
	    height: 280px;
	    background-color: #fff;
	    ul{
	    	margin-left: -1px;
	    	li{
				float: left;
		        width: 102px;
		        height: 93px;
		        text-align: center;
		        border-bottom: 1px solid #f0eff5;
				a{
					display: inline-block;
			        border-left: 1px solid #f0eff5;
			        width: 100%;
			        height: 55.5px;
			        margin: 18.75px 0;
					color:#000;
					span{
						display: block;
						width: 37.5px;
			            height: 37.5px;
			            margin: 0 33.125px;
					}
					.all{
						width:100%;
						margin:3px 0px;
					}
					.one{
			            background: url('../assets/uc-section-icon.png') 0 0 no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .two{
			            background: url('../assets/uc-section-icon.png') 0 -37.5px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .three{
			            background: url('../assets/uc-section-icon.png') 0 -450px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .four{
			            background: url('../assets/uc-section-icon.png') 0 -487.5px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .five{
			            background: url('../assets/uc-section-icon.png') 0 -150px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .six{
			            background: url('../assets/uc-section-icon.png') 0 -75px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .seven{
			            background: url('../assets/uc-section-icon.png') 0 -112.5px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .eight{
			            background: url('../assets/uc-section-icon.png') 0 -262.5px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .nine{
			            background: url('../assets/uc-section-icon.png') 0 -37.5px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .ten{
			            background: url('../assets/uc-section-icon.png') 0 -225px no-repeat;
			            background-size: 37.5px 525px;
			          }
			          .eleven{
			            background: url('../assets/uc-section-icon.png') 0 -300px no-repeat;
			            background-size: 37.5px 525px;
			          }
				}
			}
	    }
		
	}
}


</style>

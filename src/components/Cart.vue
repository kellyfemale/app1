<template>
  <div class="cart">
  	<my-title :title="cartTitle"></my-title>
  	<div class="area">
  		<div class="area-content">
  			<img src="../assets/null-car.png" alt="">
  		</div>
  		<div class="selects">
  			<span class="collect"><a href="#">我的收藏</a></span>
  			<span class="goshoping"><a href="#">去逛逛</a></span>
  		</div>
  	</div>
  	<div class="pointer">
  		<div class="content">
  			<p>
  			<a style="font-size:16px;" href="#">151****</a>
  			<i> | </i>
  			<a href="#">退出</a>
  			</p>
  		</div>
  	</div>
  	<div class="helpfriend">
      <ul>
        <li>
          <a href="#"><img src="../assets/help1.png" height="104" width="70" alt=""></a>
        </li>
        <li><a href="#"><img src="../assets/download1.png" height="104" width="70" alt=""></a></li>
        <li><a href="#"><img src="../assets/weixin1.png" height="104" width="70" alt=""></a></li>
        <li><a href="#"><img src="../assets/pcsite1.png" height="104" width="70" alt=""></a></li>
      </ul>
      <div class="footer">
        <span>京IPC证100557号</span>
      </div>
    </div>
  </div>
</template>

<script>
	import Title from './Title'
export default {
  name: 'Cart',
  data () {
    return {
    	cartTitle:'购物车'
    }
  },
  components:{
  	"myTitle":Title
  },
  create(){
  	this.$router.push('/cart');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cart{
	.area{
		width:364px;
		height:304px;
		padding:25px;
		.area-content{
			width:100%;
			height:250px;
			text-align: center;
			line-height: 270px;
			border:2px solid #f2f2f2;
			img{
				height:59px;
			}
		}
		.selects{
			width:100%;
			height:37.5px;
			margin-top:12.5px;
			span{
				display: inline-block;
				float:left;
				width:174.7px;
				height:36.7px;
				line-height: 37.5px;
				font-weight: bold;
				text-align: center;
				border-radius: 3px;
				background-color: rgb(245,245,245);
				a{
					color:rgb(77,77,77);
				}
			}
			.collect{
				margin-right:14.5px;
			}

		}

	}
	.pointer{
		width:414px;
		height:38px;
		padding:43.75px 0;
		.content{
			padding:9.3px 9px;
			height:19px;
			line-height: 19px;
			margin-left:150px;
			p{
				font-size: 16px;
				i{
					padding:0 2px;
					color:rgb(76,76,76);
				}
				a{
					color:rgb(76,76,76);
				}
			}
		}
	}
	.helpfriend{
      width:414px;
      padding-bottom:68px;
      ul{
        height:70px;
        padding:17px 0;
        margin:0 60px;
        border-top:1px solid #999;
        border-bottom:1px solid #999;
        li{
          float:left;
          width:43px;
          height:65px;
          padding:0 14px;

          a img{
            width:43px;
            height:65px;
          }
        }
      }
      .footer{
        width:100%;
        text-align: center;
        color:#4c4c4c;
      }
    }
 }
</style>

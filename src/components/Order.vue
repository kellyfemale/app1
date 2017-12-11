<template>
  <div class="order">
    <my-title :title="orderTitle"></my-title>
  	<div class="lunbo">
      <swiper :options="swiperOption1" :not-next-tick="notNextTick" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../assets/order1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/order2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/order3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/order4.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="shoparea1">
    	<img src="../assets/order2-1.jpg" alt="">
    </div>
    <div class="shoparea2">
    	<img src="../assets/newshop.jpg" alt="">
    </div>
    <div class="carousel1">
    	<swiper :options="swiperOption2" ref="mySwiper">
      <!-- slides -->
        <swiper-slide class="slide"><img src="../assets/carousel1-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-4.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-5.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        
      </swiper>
    </div>
    <div class="shoparea2">
    	<img src="../assets/typical.jpg" alt="">
    </div>
    <div class="newstyle">
    	<img src="../assets/typical2.jpg" alt="">
    </div>
     <div class="carousel1">
    	<swiper :options="swiperOption2" ref="mySwiper">
      <!-- slides -->
        <swiper-slide class="slide"><img src="../assets/carousel1-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-4.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-5.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        
      </swiper>
    </div>
    <div class="newstyle">
    	<img src="../assets/typical3.jpg" alt="">
    </div>
     <div class="carousel1">
    	<swiper :options="swiperOption2" ref="mySwiper">
      <!-- slides -->
        <swiper-slide class="slide"><img src="../assets/carousel1-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-4.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-5.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        
      </swiper>
    </div>
    <div class="newstyle">
    	<img src="../assets/typical3.jpg" alt="">
    </div>
     <div class="carousel1">
    	<swiper :options="swiperOption2" ref="mySwiper">
      <!-- slides -->
        <swiper-slide class="slide"><img src="../assets/carousel1-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-4.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-5.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        
      </swiper>
    </div>
    <div class="newstyle">
    	<img src="../assets/typical3.jpg" alt="">
    </div>
     <div class="carousel1">
    	<swiper :options="swiperOption2" ref="mySwiper">
      <!-- slides -->
        <swiper-slide class="slide"><img src="../assets/carousel1-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-4.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/carousel1-5.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        
      </swiper>
    </div>
    <div class="shoparea2">
    	<img src="../assets/chengshan.jpg" alt="">
    </div>
    <div class="cheng">
    	<ul>
    		<li>
    			<a href="#"><img src="../assets/cheng1.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/cheng2.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/cheng3.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/cheng4.jpg" alt=""></a>
    		</li>
    	</ul>
    </div>
    <div class="shoparea2">
    	<img src="../assets/westyi.jpg" alt="">
    </div>
    <div class="cheng">
    	<ul>
    		<li>
    			<a href="#"><img src="../assets/westyi1.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/westyi2.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/westyi3.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/westyi4.jpg" alt=""></a>
    		</li>
    	</ul>
    </div>
    <div class="shoparea2">
    	<img src="../assets/ku.jpg" alt="">
    </div>
    <div class="cheng ku">
    	<ul>
    		<li>
    			<a href="#"><img src="../assets/ku1.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/ku2.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/ku3.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/ku4.jpg" alt=""></a>
    		</li>
    	</ul>
    </div>
    <div class="shoparea2">
    	<img src="../assets/xishang.jpg" alt="">
    </div>
    <div class="cheng">
    	<ul>
    		<li>
    			<a href="#"><img src="../assets/westyi1.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/westyi2.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/westyi3.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/westyi4.jpg" alt=""></a>
    		</li>
    	</ul>
    </div>
    <div class="shoparea2">
    	<img src="../assets/yang.jpg" alt="">
    </div>
    <div class="cheng">
    	<ul>
    		<li>
    			<a href="#"><img src="../assets/yang1.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/yang2.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/yang3.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/yang4.jpg" alt=""></a>
    		</li>
    	</ul>
    </div>
    <div class="shoparea2">
    	<img src="../assets/tip.jpg" alt="">
    </div>
    <div class="cheng">
    	<ul>
    		<li>
    			<a href="#"><img src="../assets/tip1.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/tip2.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/tip3.jpg" alt=""></a>
    		</li>
    		<li>
    			<a href="#"><img src="../assets/tip4.jpg" alt=""></a>
    		</li>
    	</ul>
    </div>
    <div style="height:60px;"></div>
    <div class="side">
    	<a href="#">立即预约</a>
    	<a href="#">looklook</a>
    </div>
  </div>
</template>

<script>
import Title from './Title'
import '../css/swiper.min.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Order',
  data () {
    return {
        orderTitle:'私人订制',
        notNextTick: true,
    	swiperOption1:{
	      autoplay: 3000,
          loop:true,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          mousewheelControl: true, 
          observeParents: true
      	},
      	swiperOption2:{
      	  slidesPerView: 3.3,
	      spaceBetween: 4
      	}
    
 	}

  },
  components:{
    swiper,
    swiperSlide,
    "myTitle":Title
   },
  beforeCreate(){
        console.log(this.$store.state.isLogin)
        if(this.$store.state.isLogin){
            this.$router.push('/order')
        }
    },
  create(){
    this.$router.push('/order');
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
.order{
	.order-header{
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
		.ordername{
			font-size:19px;
			color:#fff;
			line-height: 50px;
		}
	}
	.lunbo{
      width:414px;
        height:260px;
        .swiper-container{
          height:260px;
          .swiper-slide{
            float:left;
            height:260px;
            font-size:22px;
            text-align: center;
            img{
              display: inline-block;
              height: 260px;
              width:414px;
            }
          }
        }
     
    }
    .shoparea1{
    	width:414px;
    	height:40.8px;
    	img{
    		width:100%;
    		height:100%;
    	}
    }
    .shoparea2{
    	width:414px;
    	height:58px;
    	img{
    		width:100%;
    		height:49px;
    	}
    }
    .carousel1{
    	overflow: hidden;
        z-index:1;
    	.slide{
    		width:124px;
    		height:261px;
    		img{
    			width: 100%;
    			height: 100%;
    		}
    	}
    }
    .newstyle{
    	width:414px;
    	height:146px;
    	img{
    		width:100%;
    		height:138px;
    	}
    }
    .cheng{
    	width:414px;
    	overflow: hidden;
    	ul{
    		li{
    			float:left;
    			a img{
    				width:207px;
					height:220.7px;
    			}
    		}
    	}
    }
    .ku{
    	ul li{
    		a img{
    			height:331px;
    		}
    	}
    }
    .side{
    	position:fixed;
    	bottom:80px;
    	right:10px;
    	width:62.5px;
		height:71px;
		text-align: center;
		background-color: #ba323b;
		border:1.5px solid #fff;
		border-radius:25px;
		z-index:2;
        overflow: hidden;
		a{
			display: block;
			height:35px;
			line-height: 35px;
			width:100%;
			text-align: center;
			border-bottom:1px solid #fff;
			color:#fff;
		}
    }
}
</style>

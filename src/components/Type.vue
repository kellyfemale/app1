<template>
  <div class="type">
  	<my-title :title="typeTitle"></my-title>
  	<div class="type-container">
  		<div class="type-content">
  			<ul>
  				<li @click="showItem(key)" :class="{active:key===currentIndex}" v-for="(item,key) in list" :key="key">{{item}}</li>
  			</ul>
  		</div>
  		<div class="content">
  			<ul>
  				<li v-for="(item,key) in typeList" :key="key">
  					<img :src="'http://101.132.171.105:3000/images/'+item.logo"  alt="">
  					<span>{{ item.typeName }}</span>
  				</li>
  			</ul>
  		</div>
  	</div>

  </div>
</template>

<script>
import Title from './Title'
export default {
  name: 'Type',
  data () {
    return {
      typeTitle:'分类',
      level:0,
      currentIndex:0,
      list:['推荐','男装','女装','男鞋','女鞋','袜品','家居','童装','内衣'],
      typeList:[]
    }
  },
  components:{
  	"myTitle":Title
  },
  created(){
    this.getType()
  },
  methods:{
      showItem(key){
          this.currentIndex=this.level=key,
          this.getType()
      },
      getType(){
        this.$axios.get("http://101.132.171.105:3000/typeList?level="+this.level).then((res)=>{
        	console.log(res.data);
          this.typeList = res.data.result;
        })
      }
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

.type{
	width:414px;
	height:680px;
	.type-container{
		background-color:#f2f2f2;
		height:100%;
		.type-content{
			float:left; 
			ul{
				font-size:13px;
				li{
					width:103.5px;
					height:37.5px;
					line-height: 37.5px;
					text-align: center;
					border-bottom:1px solid #fff;
					a{
						color:#000;
					}
				}
        .active{
          background-color: #fff;
        }
			}
		}
		.content{
			float:right;
			width:75%;
			height:100%;
			background-color: #fff;
			ul{
				// display: none;
				li{
					float:left;
					text-align: center;
					img{
						width:76px;
						height:76px;
						margin:6px 12.5px;
					}
					span{
						display: block;
						color:#999;
						font-size:12.5px;
						height:18px;
					}
				}
			}
			.active{
				display: block;
			}
		}
	}
}
</style>

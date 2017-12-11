<template>
  <div class="home">
    <div class="search">
      <form action="#">
        <input type="text" placeholder="熊本熊">
      </form>
      <div class="message">
        <img src="../assets/msg3.png" alt="">
        <span></span>
      </div>
    </div>
    <div class="lunbo">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../assets/swiper1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/swiper2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/swiper3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/swiper4.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="good-active">
      <div class="left">
        <a href="#"><img src="../assets/goodleft.jpg" alt=""></a>
      </div>
      <div class="right">
        <a href="#"><img src="../assets/goodright.jpg" alt=""></a>
      </div>
    </div>
    <div class="activity">
      <a href="#">
        <div class="header">
          <img src="../assets/clock.png" height="14" width="14" alt="">
          <span>每日秒杀</span>
        </div>
        <div class="starttime">
          <span style="color:#000;font-weight:600;">20点场</span>
          <span style="color:#000;">即将开始</span>
          <div class="enter">
            <span>进入会场</span>
            <img src="../assets/right-arrow.png" height="14" width="14" alt="">
          </div>
        </div>
      </a>
    </div>
    <div class="SKcontent">
      <ul>
        <li>
            <a href="#"><img src="../assets/shop1.jpg" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/shop2.jpg" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/shop3.jpg" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/shop4.jpg" alt=""></a>
        </li>
      </ul>
    </div>
    <div class="shoparea2">
      <a href="#">
        <img src="../assets/shoparea2.jpg" height="55" width="414" alt="">
      </a>
    </div>
    <div class="areacontent2">
      <ul>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area2-1.jpg" height="427" width="320" alt=""></a>
          <a href=""><img src="../assets/area2-2.jpg" height="427" width="320" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area2-3.jpg" height="427" width="320" alt=""></a>
          <a href=""><img src="../assets/area2-4.jpg" height="427" width="320" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area2-5.jpg" height="427" width="320" alt=""></a>
          <a href=""><img src="../assets/area2-6.jpg" height="427" width="320" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area2-7.jpg" height="427" width="320" alt=""></a>
          <a href=""><img src="../assets/area2-8.jpg" height="427" width="320" alt=""></a>
        </li>
      </ul>
    </div>
    <div class="shoparea2">
      <a href="#">
        <img src="../assets/shoparea3.jpg" height="55" width="414" alt="">
      </a>
    </div>
    <div class="areacontent2">
      <ul>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area3-1.jpg" alt=""></a>
          <a href=""><img src="../assets/area3-2.jpg" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area3-3.jpg" alt=""></a>
          <a href=""><img src="../assets/area3-4.jpg" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area3-5.jpg" alt=""></a>
          <a href=""><img src="../assets/area3-6.jpg" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area3-7.jpg" alt=""></a>
          <a href=""><img src="../assets/area3-8.jpg" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area3-9.jpg" alt=""></a>
          <a href=""><img src="../assets/area3-10.jpg" alt=""></a>
        </li>
        <li>
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area3-11.jpg" alt=""></a>
          <a href=""><img src="../assets/area3-12.jpg" alt=""></a>
        </li>
      </ul>
    </div>
    <div class="areacontent3">
      <ul>
        <li class="single">
          <a href="#"><img src="../assets/area4-1.jpg" height="229" width="414" alt=""></a>
        </li>
        <li class="double">
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area4-2.jpg" alt=""></a>
          <a href=""><img src="../assets/area4-3.jpg" alt=""></a>
        </li>
        <li class="double">
          <a href="#" style="border-right:1px solid #ddd;"><img src="../assets/area4-4.jpg" alt=""></a>
          <a href=""><img src="../assets/area4-5.jpg" alt=""></a>
        </li>
      </ul>
    </div>
    <div class="areacontent5">
      <ul>
        <li>
          <a href="#"><img src="../assets/area5-1.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="../assets/area5-2.jpg" alt=""></a></li>
        <li><a href="#"><img src="../assets/area5-3.jpg" alt=""></a></li>
        <li><a href="#"><img src="../assets/area5-4.jpg" alt=""></a></li>
      </ul>
    </div>
    <div class="btn">
      <a href="#"><img src="../assets/see-all.jpg" alt=""></a>
      <a href="#"><img src="../assets/ret-top.jpg" alt=""></a>
    </div>
    <div class="login" v-show="isLogin">
      <div class="login-btn">
        <a href="#">{{ username }}</a>
      </div>
      <div class="reg-btn">
        <a href="#" @click="out">退出</a>
      </div>
    </div>
    <div class="login" v-show="!isLogin">
      <div class="login-btn">
        <router-link to="/login">登陆</router-link>
      </div>
      <div class="reg-btn">
        <router-link to="/reg">注册</router-link>
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
import '../css/swiper.min.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Home',
  data () {
    return {
      notNextTick: true,
      swiperOption: {
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
      }
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  beforeCreate(){
        console.log(this.$store.state.isLogin)
        if(this.$store.state.isLogin){
            this.$router.push('/')
        }
  },
  created(){
    var username=window.localStorage.getItem("username");
    if(username){
      this.$store.commit("login",{nickName:username})
    }
    this.$router.push('/')
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    isLogin(){
      return this.$store.state.isLogin
    }
  },
  methods:{
    out(){
      this.$store.state.username='';
      this.$store.state.isLogin=false;
      window.localStorage.setItem("username",'')
      this.$router.push('/');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '../css/swiper.min.css';
*{
  padding:0;
  margin:0;
}
html,body{
  background-color:#f2f2f2;
}
a,img,div,ul,li,span{
  padding:0;
  margin:0;
  text-decoration: none;
}
ul{
  list-style:none;
}
.home{
    width:414px;
    overflow: hidden;
    .search{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:50px;
      background-color: #b81c22;
      z-index:2;
      form{
        position:absolute;
        top:11px;
        left:11px;
        width:347px;
        height:28px;
        background-color: #fff;
        input{
          width:100%;
          height:28px;
          padding : 2px 40px;
          border:none;
          background:url('../assets/search2.png') 10px 5px no-repeat;
          background-size: 18px 18px;
        }
      }
      .message{
        position:absolute;
        top:17px;
        right:10px;
        width:22px;
        height:16px;
        img{
          display: inline-block;
          width:100%;
          height:100%;
        }
        span{
          position:absolute;
          top:-5px;
          right:-5px;
          display: inline-block;
          width:5px;
          height:5px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
   .lunbo{
      width:414px;
        height:260px;
        margin-top:50px;
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
    .good-active{
      margin-top:5px;
      div{
        width:49.5%;
        height:32px;
        float:left;
        a{
            width:100%;
           img{
            width:100%;
            height:32px;
           }
        }
      }
      .left{
        margin-right:3px;
      }
    }
    .activity{
      position:relative;
      width: 100%;
      overflow: hidden;
      background:url('../assets/activity.png');
      background-size: 413px 60px;
      a{
        width:100%;
        font-size:14px;
        .header{
          width:100%;
          padding:5px 0;
          color:#b81c22;
          font-weight: 600;
          text-align: center;
        }
        .starttime{
          width:100%;
          padding:5px 0;
          text-align: center;
          margin-left:70px;
          .enter{
            color:#b81c22;
            font-weight: 600;
            margin-left:45px;
            display: inline-block;
          }
        }
      }
    }
    .SKcontent{
      border-bottom:1px solid #999;
      ul{
        li{
          width:207px;
          height:322px;
          float:left;
          a img{
            width:100%;
            height:100%;
          }
        }
      }
    }
    .shoparea2{
      width:414px;
      height:55px;
      border-top:1px solid #999;
      overflow: hidden;
    }
    .areacontent2{
      ul{
        li{
            a{
              float:left;
              img{
                width:206px;
                height:276px;
              }
            }
        }
      }
      
    }
    .areacontent3{
          ul {
            .double{
              a{
                float:left;
                img{
                  width:206px;
                  height:276px;
                }
              }
            }
            .single{
              a img{
                width:414px;
                height:229px;
              }
            }
          }
    }
    .areacontent5{
      li a{
        img{
          width:414px;
          height:118px;
        }
      }
    }
    .btn{
      width:414px;
      padding-bottom: 40px;
      a{
        float:left;
        width:50%;
        height:48px;
        img{
          width:100%;
          height:48px;
        }
      }
    }
    .login{
      width:336px;
      font-size:15px;
      padding:60px 40px;
      padding-top:80px;
      text-align: center;
      background-color:#f2f2f2;
      div{
        float:left;
        padding:5px 30px;
        background-color: #fff;

        border-radius: 2px;
        a{
          color:#333;
        }
      }
      .login-btn{
        margin-right:20px;
        margin-left:60px;
      }
    }

    .helpfriend{
      width:414px;
      padding-bottom:68px;
      background-color:#f2f2f2; 
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

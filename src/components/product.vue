<template>
  <div v-if="info">
    <div class="basic">
      <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="pic in info.basic.product_images">
        <img :src="pic.img_url" alt="">
      </div>
      
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
      <h2>{{info.basic.name}} <i class="iconfont icon-favorites"></i> -{{info.basic.spec}}</h2>
      <p>{{info.basic.description}}</p>
      <p>
        <span class="price">{{info.basic.price/100}}元/位</span> &nbsp;&nbsp; <span class="origin">￥{{info.basic.origin_price/100}}</span> &nbsp;| &nbsp;随时退
      </p>
    </div>
    <div class="store-info">
      <h3>-商户信息-</h3>
      <h2>{{info.modules[0].data.restaurants[0].restaurant_name}}</h2>
      <div class="address">
        <p><i class="iconfont icon-map"></i> <span>{{info.modules[0].data.restaurants[0].restaurant_address}}</span><i class="iconfont icon-more"></i></p>
      </div>
      <div class="tel">
        <p><i class="iconfont icon-phone"></i> <span>{{info.modules[0].data.restaurants[0].restaurant_phone_numbers[0]}}</span><i class="iconfont icon-more"></i></p>
      </div>
    </div>
    <div class="user-talking">
      <h3>-用户评价-</h3>
      
        <div class="user">
          <img :src="info.modules[1].data.avatar" alt=""> <span>{{info.modules[1].data.nick_name}}</span>
        </div>
        <ul>
          <li v-for="scores in info.modules[1].data.scores" >
            <span>{{scores.name}}</span><span>{{scores.score}}.0</span> &nbsp;&nbsp;| &nbsp;
          </li>
        </ul>
        
        <div class="tag">
          <span v-for="tag in info.modules[1].data.tags">{{tag.name}}</span>
        </div>
        <p>{{info.modules[1].data.text}}</p>
        <div class="img">
          <!-- <div v-for="img in info.modules[1].data.images" class="imgs"> -->
            <img :src="img" alt="" v-for="img in info.modules[1].data.images">
          <!-- </div> -->
        </div>
        <p>查看全部评价<i class="iconfont icon-more"></i></p>
      </div>
    <div class="menu">
      <h3>-MENU-</h3>
      <h4>-{{info.modules[2].data.contents[0].sub_title}}-</h4>
      <p v-for="text in info.modules[2].data.contents[0].text">{{text}}</p>
    </div>
    <div class="light">
      <h3>-亮点-</h3>
      <div v-for="light in info.modules[3].data.lights">
        
        <img :src="light.img_url" alt="">
        <h2>{{light.title}}</h2>
        <p>{{light.content}}</p>
      </div>
      
    </div>
    <div class="info">
      <h3>-使用提示-</h3>
      <ul>
        <li v-for="more in info.modules[4].data.contents">{{more.text}}</li>
      </ul>
      <div>
        <button><i class="iconfont icon-service"></i> 联系客服</button>
      </div>
      
    </div>
    <div class="love">
      <h3>-猜你喜欢-</h3>
      <ul>
        <li v-for="like in info.modules[5].data.recommend">
          <img :src="like.product_image_url" alt="">
          <div>
            <p class="name">{{like.product_name}}</p>
            <p class="price">{{like.price/100}}元/{{like.show_entity_name}}</p>
          </div>
          
        </li>
      </ul>
    </div>
    
    
  </div>
</template>
<script>
  import axios from "axios";
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"

  export default{
    data(){
      //必须要有return 及时不返回任何东西，不然报错
      return{
        info:null
      }
      
    },
    mounted(){
      console.log(this.$route.params);
      // product/info/product_detail.json?
      axios.get(`/product/info/product_detail.json?product_id=${this.$route.params.myfirstId}&sub_product_id=${this.$route.params.mysecondId}`).then(res=>{
        console.log(res.data)
        this.info = res.data
      })
    },
    updated(){
        var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    }
  }
</script>

<style scoped lang="scss">
  div{

    h3{
        text-align: center;
      }
    div.basic{

      h2{
        font-size:25px;
        font-weight: normal;
        i{
          font-weight: bold;
          font-size: 25px;
          padding:2px;
        }
      }
      p{
        font-size: 18px;
        color: #92969c;
        .price{
          font-size: 20px;
          color: #fc3838
        }
        .origin{
          text-decoration: line-through;

        }
      }
    }
    div.store-info{
      margin-top: 30px;
      padding:0 10px;
      
      h2{
        padding: 38px 0 16px;
        font-size: 20px;
        font-weight: normal;
        color: #2c3038;
        border-bottom: 1px solid #e6e6e6;
        margin: 0;
      }
      div.address , div.tel{
        padding:12px 0;
        border-bottom: 1px solid #e6e6e6;
        p{
          margin: 0;
          span{
            display: inline-block;
            width: 80%;
            overflow: hidden;
            text-overflow:ellipsis;
            height: 21px;
            margin: 0;
            line-height: 21px;
          }
          
          i{
            padding-right: 15px;
          }
        }
      }

    }
    div.user-talking{
      
        div.user{
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          img{
            width: 30px;
            height: 30px;
            float: left;
          }
          span{
            padding-left: 10px;
            float: left;
          }
        }
        ul{
          list-style: none;
          overflow: hidden;
          padding:0;
          li{
            float: left;
            color: #92969c;
            margin:5px 0;
            font-size: 10px;
          }
          
        }
        div.tag{
          span{
            font-size: 18px;
            padding:2px;
            margin:5px;
            background: #f2f3f5;
            color: #92969c;
          }
        }
        p{
          font-size: 14px;
          color: #63666b;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        div.img{
          height: 60px;
          overflow: hidden;
          padding-bottom: 10px;
          border-bottom: 1px solid #e6e6e6;
          img{
            width: 30%;
            margin: 0 10px 5px 0;
          }
        }
        p{
          i{
            float: right;
          }
        }
    
    }
    div.menu{
      text-align: center;
      h4{
        
        color: #21242a;
        font-size: 18px;
        line-height: 1.6;
        font-weight: normal;
        margin:0;
      }
      p{
        font-size: 18px;
        line-height: 1.6;
        text-align: center;
        color: #76797e;
        margin:0;
      }
    }
    div.light{
      div{
        img{
          width: 100%;
        }
        p{
          line-height: 1.6;
          color: #63666b;
        }
      }
    }
    div.info{
      ul{
        font-size: 18px;
        line-height: 1.5;
        color: #63666b;
      }
      div{
        text-align: center;
        button{
          width: 30%;
          height: 40px;
          background: white;
          border: 1px solid #1a1a1a;
        }
      }
    }
    div.love{
      ul{
        list-style: none;
        margin:0;
        padding:0;
        li{
          padding:10px;
          height: 100px;
          overflow: hidden;
          img{
            height: 100%;
            float: left;
            width: 30%;
          }
          div{
            width: 65%;
            float: right;
            p.price{
              color:#ff3939;
            }
          }
        }
      }
    }
  }
  .swiper-container{
  img{
    width: 100%;
  }
}
</style>
<template>
<!--  导航条以及轮播-->
    <div class="main">
      <div class="logoText">

<!--        轮播图部分开始-->
        <div class="banner">
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" id="slide02">
            <!-- slides -->
            <swiper-slide>
              <div class="pc_pro1">
                <div>
                  <h1>属于你的365来了</h1>
                  <p>每天使用365office，了解它能实现哪些功能</p>
                  <p><a href="#">立即购买></a></p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="pc_pro2">
                <div>
                 <h1>surface 6</h1>
                  <p>百变,耀出众</p>
                  <p><a href="#">立即选购></a></p>
                </div>
              </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"  id="ol"></div>
            <div class="swiper-button-prev" slot="button-prev" id="arrow01"><img src="../assets/arrL.png"></div>
            <div class="swiper-button-next" slot="button-next" id="arrow02"><img src="../assets/arrR.png"></div>
          </swiper>
          <div class="swiper-pagination"></div>
         </div>
        </div>
      <!--        轮播图部分结束-->
      <!--  四样商品开始-->
      <ul class="store">
        <li>
          <img src="../assets/store01.jpg" width="100%">
          <p>Surface Book 2</p>
          <p>极致笔记本电脑的超强性能</p>
          <a href="#">立即选购></a>
        </li>
        <li>
          <img src="../assets/store02.png" width="100%">
          <p>匠心，耀出众</p>
          <p>借助全新 Surface Laptop 2 突破传统。</p>
          <a href="#">立即选购></a>
        </li>
        <li>
          <img src="../assets/store03.png" width="100%">
          <p>Xbox One X</p>
          <p>真4K 60帧超高清游戏机。</p>
          <a href="#">立即选购></a>
        </li>
        <li>
          <img src="../assets/store04.png" width="100%">
          <p>Xbox One S</p>
          <p>物超所值的游戏和娱乐设备，配备 4K 蓝光和视频流。</p>
          <a href="#">立即选购></a>
        </li>
      </ul>
      <!--  四样商品结束-->
<!--大图部分开始-->
      <div class="big_pic">
        <div class="item_pro1">
          <p>Xbox Game Pass</p>
          <p>
            每个月只要单一超低月费，即可无限畅玩超过100款精彩游戏和全新Xbox独家游戏
          </p>
          <el-row>
            <el-button style="background: #000000">立即选购></el-button>
          </el-row>
        </div>
      </div>
<!--大图部分结束-->

<!--      适用工作地开始-->
       <div class="workplace">
         <p>适用工作地</p>
         <ul>
           <li>
             <img src="../assets/place01.jpg" width="100%">
             <p>Windows 10 企业版</p>
             <p>下载IT专业人员用的 90 天免费评估版本。</p>
             <a href="#">立即选购></a>
           </li>
           <li>
             <img src="../assets/place02.jpg" width="100%">
             <p>商务用 Office 365</p>
             <p>不论你是连线还是离线，随时存储档案。</p>
             <a href="#">立即选购></a>
           </li>
           <li>
             <img src="../assets/place01.jpg" width="100%">
             <p>Microsoft Azure</p>
             <p>现在开始创建 Web App。</p>
             <a href="#">立即选购></a>
           </li>
           <li>
             <img src="../assets/place04.jpg" width="100%">
             <p>Surface Studio 2</p>
             <p>彩色快速的處理器，激发您的创造力。</p>
             <a href="#">立即选购></a>
           </li>
         </ul>
         <p>
           <span>关注 Microsoft</span>
           <img src="../assets/facebook.png">
           <img src="../assets/youtube.png">
         </p>
       </div>

<!--      适用工作地结束-->

<!--      底部开始-->
      <div class="footer">
        <div class="footer_pro">
          <ul>
            <li>
              <p>最新动向</p>
              <a href="#">Surface Go</a>
              <a href="#">Surface Book 2</a>
              <a href="#">Surface Pro</a>
              <a href="#">Xbox One X</a>
              <a href="#">Xbox One S</a>
              <a href="#">Windows 10 應用程式</a>
              <a href="#">Office 應用程式</a>

            </li>
            <li>
              <p>Microsoft Store</p>
              <a href="#">帳戶設定檔</a>
              <a href="#">下载中心2</a>
              <a href="#">Microsoft Store 支援</a>
              <a href="#">退货/退款</a>
              <a href="#">订单追踪</a>

            </li>
            <li>
              <p>教育</p>
              <a href="#">Microsoft 在教育领域的应用</a>
              <a href="#">学生适用的 Office</a>
              <a href="#">学校适用的 Office 365</a>
              <a href="#">Microsoft Azure 在教育領域的應用</a>

            </li>
            <li>
              <p>最新动向</p>
              <a href="#">Surface Go</a>
              <a href="#">Surface Book 2</a>
              <a href="#">Surface Pro</a>
              <a href="#">Xbox One X</a>
              <a href="#">Xbox One S</a>
              <a href="#">Windows 10 應用程式</a>
              <a href="#">Office 應用程式</a>

            </li>
            <li>
              <p>Microsoft Store</p>
              <a href="#">帳戶設定檔</a>
              <a href="#">下载中心2</a>
              <a href="#">Microsoft Store 支援</a>
              <a href="#">退货/退款</a>
              <a href="#">订单追踪</a>

            </li>
            <li>
              <p>教育</p>
              <a href="#">Microsoft 在教育领域的应用</a>
              <a href="#">学生适用的 Office</a>
              <a href="#">学校适用的 Office 365</a>
              <a href="#">Microsoft Azure 在教育領域的應用</a>

            </li>
          </ul>
          <div>
            <p><img src="../assets/earth.png" alt=""><a href="#">中国台湾</a></p>
            <ul>
              <li><a href="#">联络 Microsoft</a></li>
              <li><a href="#">隐私权说明</a></li>
              <li><a href="#">使用规则</a></li>
              <li><a href="#">联商标</a></li>
              <li><a href="#">有关我们的广告信息</a></li>
              <li><a href="#"> © Microsoft 2019</a></li>
            </ul>
          </div>
        </div>
      </div>
<!--      底部结束-->
    </div>



</template>

<script>
    export default {
        name: "xin",
      data() {
        return {
          swiperOption: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            pagination: {

              el: '.swiper-pagination',//el  获取分页器的css选择器
            },

          }
        }
      },
    }


</script>

<style scoped>
  .main{
    width:100%;
    height: 2240px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  }
  .logoText{
    width: 90%;
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  /*轮播部分开始*/
  .banner{
    width: 100%;
    height: 454px;
    background: #000000;
  }


  .pc_pro1{
    width: 100%;
    height: 100%;
    background-image: url("../assets/bn02.jpg");
  }
  .pc_pro1>div{
    width: 50%;
    /*height: 270px;*/
    position: absolute;
    left: 120px;
    top: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

  }
  .pc_pro1>div>p:nth-child(3){
    width: 120px;
    height:40px;
    background: #000000;
    text-align: center;
    line-height: 40px;

  }
  .pc_pro1>div>p>a{
    color: #ffffff;
    text-decoration: none;
  }
  .pc_pro1>div>p>a:hover{
    color: #ffffff;
    text-decoration: underline;
  }

  .pc_pro2{
    width: 100%;
    height: 100%;
    background-image: url("../assets/bn03.png");
  }
  .pc_pro2>div{
    width: 50%;
    /*height: 270px;*/
    position: absolute;
    left: 120px;
    top: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

  }
  .pc_pro2>div>h1{
    color: #ffffff;
  }
  .pc_pro2>div>p:nth-child(2){
    color: #ffffff;
  }
  .pc_pro2>div>p:nth-child(3){
    width: 120px;
    height:40px;
    background: #000000;
    text-align: center;
    line-height: 40px;

  }
  .pc_pro2>div>p>a{
    color: #ffffff;
    text-decoration: none;
  }
  .pc_pro2>div>p>a:hover{
    color: #ffffff;
    text-decoration: underline;
  }
  #arrow01{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #efefef;
   text-align: center;
    line-height: 70px;
    margin-top: -60px;
    opacity: 0.6;

  }
  #arrow02{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #efefef;
    text-align: center;
    line-height: 70px;
    margin-top: -60px;
    opacity: 0.6;
  }

  /*轮播结束*/


  /*四样商品部分开始*/
.store{
  width: 87%;
  height: 280px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .store>li{
    width: 25%;
    height: 280px;
    margin-left: -40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
  }
  .store>li>p:nth-child(2){
   font-size: 20px;
    font-weight: bolder;
    color: #000000;
    margin-bottom: -10px;
  }
  .store>li>a{
       text-decoration: none;
     }
  .store>li>a:hover{
    text-decoration: underline;
  }
  /*四样商品部分结束*/
  /*大图部分开始*/
  .big_pic{
    width: 90%;
    height: 454px;
    background-image: url("../assets/big01.jpg");
  }
  .item_pro1{
    width: 400px;
    height: 150px;
    margin: 200px 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .item_pro1>p:nth-child(1){
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin-bottom: -20px;
  }
  .item_pro1>p:nth-child(2){
    color: #000000;

  }

  /*大图部分结束*/
  /*适用工作地开始*/
  .workplace{
    width: 90%;
    height: 437px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .workplace>p:nth-child(1){
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bolder;
    color: #000;
  }
  .workplace>ul{
    width: 97%;
    height: 301px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .workplace>ul>li{
    width: 25%;
    height: 265px;
    margin-left: -40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;

  }
  .workplace>ul>li>p:nth-child(2){
    font-size: 20px;
    font-weight: bolder;
    color: #000000;
    margin-bottom: -10px;
  }
  .workplace>ul>li>p:nth-child(3){
   font-size: 15px;
  }
  .workplace>ul>li>a{
    text-decoration: none;
  }
  .workplace>ul>li>a:hover{
    text-decoration: underline;
  }
  .workplace>p:nth-child(3){
    width: 20%;
    height: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  /*适用工作地结束*/

  /*底部开始*/
  .footer{
    width: 100%;
    height: 363px;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer_pro{
    width: 90%;
    height: 303px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .footer_pro>ul{
    width: 97%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .footer_pro>ul>li{
    width: 15%;
    height: 200px;
    margin-left: -40px;
    font-size: 10px;
    color: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

  }
  .footer_pro>ul>li>a{
   text-decoration: none;
    color: #000;
    margin-bottom: 10px;
  }
  .footer_pro>ul>li>a:hover{
    text-decoration: underline;
    color: #000;

  }
  .footer_pro>div{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer_pro>div>p{
    width: 10%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer_pro>div>p>a{
   text-decoration: none;
    color: #616161;
  }
  .footer_pro>div>p>a:hover{
    text-decoration: underline;
    color: #616161;
  }
  .footer_pro>div>ul {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  .footer_pro>div>ul>li>a{
   color: #616161;
    text-decoration: none;
  }
  .footer_pro>div>ul>li>a:hover{
    color: #616161;
    text-decoration: underline;
  }
  /*底部结束*/
</style>


<template>
    <div class="main">
<!--      大图部分开始-->
      <div class="big_banner">
        <div>
          <h1>最强的Windows，持续增强</h1>
          <p>windows10 2019年5月更新，是最新更新·可为使用者提供全新功能和更新的安全性·而且不需要支付额外的费用，此更新是为了轻松保持最新状态而设计</p>
        </div>
      </div>
<!--      大图部分结束-->
<!--      帮助寻找部分开始-->
      <div class="find">
        <h1>我们可以帮您寻找什么</h1>
        <ul>
          <li>
            <img src="../assets/os.jpg" width="100%">
            <h2>Window 10 作业系统</h2>
            <p>Window 10选择多样化，寻找你的作业系统</p>
            <a href="#">取得WINDOW10家用版和作业版></a>
          </li>
          <li>
            <img src="../assets/gn.jpg" width="100%">
            <h2>功能</h2>
            <p>享用最新Window 10系统功能和内含不间断的安全性</p>
            <a href="#">探索最新功能></a>
          </li>
          <li>
            <img src="../assets/zy.jpg" width="100%">
            <h2>支援</h2>
            <p>取得Window 10说明、秘诀和常见问题的解决方法</p>
            <a href="#">WINDOW10支援></a>
          </li>
        </ul>

      </div>
<!--      帮助寻找部分结束-->
<!--      window7部分开始-->
      <div class="win7">
        <div>
          <h2>Window 7 相关须知</h2>
          <p>
            2020年1月14日之后，Microsoft将不再为windows7的电脑提供安全性更新和技术支持，了解如何为下一步做好准备
          </p>
          <a href="#">深入了解></a>
        </div>

      </div>
<!--      window7部分结束-->

<!--      轮播部分开始-->
      <div class="slide">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" id="slide02">
          <!-- slides -->
          <swiper-slide>
            <img src="../assets/pc01.jpg" width="100%" >
            <div class="pc_pro">
              <div>
                <p>绝不平凡</p>
                <span>工作时的最佳搭档</span>
                <span>为什么选择Windows10电脑</span>
              </div>
              <p>查看surface中的新功能</p>
              <a href="#">选择您的SURFACE></a>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/pc02.jpg" width="100%" >
            <div class="pc_pro">
              <div>
                <span>绝不平凡</span>
                <p>工作时的最佳搭档</p>
                <span>为什么选择Windows10电脑</span>
              </div>
              <p>Windows 上的 Office 订下了生产力的标准。 运用强大的笔记功能，聪明的工作，並以 3D 展示故事的每个角度。</p>
              <a href="#">取得OFFICE></a>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/pc03.jpg" width="99.8%" >
            <div class="pc_pro">
              <div>
                <span>绝不平凡</span>
                <span>工作时的最佳搭档</span>
                <p>为什么选择Windows10电脑</p>
              </div>
              <p>引领多元创新，包括笔记本电脑、二合一电脑、可携式 AIO 全方位电脑，以及可当作电脑用的手机。
                展现高电池导航能力、具备更快速的处理器和高清度显示器。</p>
              <a href="#">搜索原因></a>
            </div>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev" id="arrow01"><img src="../assets/arrL.png"></div>
          <div class="swiper-button-next" slot="button-next" id="arrow01"><img src="../assets/arrR.png"></div>

        </swiper>
      </div>
<!--      轮播部分结束-->
<!--      小图标部分开始-->
      <ul class="small_pic">
        <li>
          <img src="../assets/small01.svg" width="30%">
          <a href="#">Windows实测人员计算</a>
        </li>
        <li>
          <img src="../assets/small02.svg" width="30%">
          <a href="#">Windows支援</a>
        </li>
        <li>
          <img src="../assets/small03.svg" width="30%">
          <a href="#">Windows部落格</a>
        </li>
        <li>
          <img src="../assets/small04.svg" width="30%">
          <a href="#">询问社群</a>
        </li>
      </ul>
<!--      小图标部分结束-->
<!--      黑色背景内容部分开始-->
      <div class="black1">
        <div>
          Windows 10 2019 年 5 月更新会通过 Windows Update 自动开始执行。下载完成之后，我们会通知您选择合适的时间，以完成安裝。如果您的 Windows 10 版本已经<a href="#">终止服务</a>，
          请使用 <a href="#">更新小助手</a>，立即更新。

          **对于终止过期的裝置，新功能更新会通過过Windows Update 自动传递给具有足夠可用磁碟空间的裝置。可行时，Windows 会在已经沒有足夠可用空间的情況下自动释放空间，若自动清理仍然不夠，
          还会引导您释放更多的空间。对于沒有所需可用磁碟空间的裝置，將只會收到自动安全性更新 (若空间允许)。功能更新将会提供使用者下載，但不会通过 Windows Update 自动传递。可能必須支付 ISP
          费用。之后的更新可能會有額外的儲存空間及/或硬體需求。請前往 <a href="#">这里</a>，以了解詳細資訊。

          1 需要 Office 365 订阅和支援遥控的平板电脑或电脑，手写配件可能需另行购买。
        </div>
      </div>
<!--      黑色背景内容部分结束-->
<!--      关注与分享部分开始-->
      <div class="focus">
         <p>
           关注Windows
           <img src="../assets/pic02.png" >
           <img src="../assets/pic03.png" >
         </p>
        <p>
          分享此页面
          <img src="../assets/pic02.png" >
          <img src="../assets/pic03.png" >
        </p>
      </div>
<!--      关注与分享部分结束-->
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
        name: "Windows",
      data() {
        return {
          swiperOption: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      },

    }
</script>

<style scoped>
 .main{
   width: 100%;
   /*height: 1500px;*/
   /*background: pink;*/
   display: flex;
   align-items: center;
   flex-direction: column;
 }
  /*大图部分开始*/
 .big_banner{
   width: 90%;
   height: 554px;
   background-image: url("../assets/w01.jpg");
   background-repeat: no-repeat;
   background-size: 100% 554px;
 }
 .big_banner>div{
   width: 40%;
   height: 150px;
   /*background: orangered;*/
   margin-top: 165px;
   margin-left: 105px;

 }
  /*大图部分结束*/
  /*帮助寻找部分开始*/
 .find{
   width: 90%;
   height: 527px;
   border-bottom: 1px solid #cccccc;
   border-top: 1px solid #cccccc;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;
 }
 .find>ul{
   width: 96.7%;
   height: 320px;
   list-style: none;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .find>ul>li{
    width:32%;
    height: 320px;
    margin-left: -40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
 .find>ul>li>img{
   margin-bottom: -20px;
 }
 .find>ul>li>h2{
  margin-bottom: -20px;
 }
 .find>ul>li>p{
   margin-bottom: -10px;
 }
 .find>ul>li>a{
  text-decoration: none;
 }
 .find>ul>li>a:hover{
   text-decoration: underline;
 }
  /*帮助寻找部分结束*/
  /*win7部分开始*/
 .win7{
   width: 90%;
   height: 270px;
   border-bottom: 1px solid #cccccc;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .win7>div{
   width: 40%;
   height: 180px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
 }
 .win7>div>a{
  text-decoration: none;
 }
 .win7>div>a:hover{
   text-decoration: underline;
 }
  /*win7部分结束*/
  /*轮播部分开始*/
 .slide{
   width: 90%;
   height: 670px;
 }
.pc_pro{
  width: 50%;
  height: 200px;
  margin-left: 298px;
}
 .pc_pro>div{
   width: 100%;
   height: 40px;
   display: flex;
   justify-content: space-around;
   align-items: center;

 }
 .pc_pro>div>p{
   display: block;
   width: 200px;
   height: 36px;
   text-align: center;
   line-height: 40px;
   border-bottom: 2px solid #0067b8;
   color: #000000;
   font-weight: bold;
   cursor: pointer;

 }
 .pc_pro>a{
   text-decoration: none;
 }
 .pc_pro>a:hover{
   text-decoration: underline;
 }
 #arrow01{
   width: 30px;
   height: 50px;
   background: #efefef;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -170px;
 }
  /*轮播部分结束*/
  /*小图标部分开始*/
 .small_pic{
   width: 87%;
   height: 195px;
   background: #ffffff;
   border-top: 1px solid #cccccc;
   border-bottom: 1px solid #cccccc;
   display: flex;
   justify-content: space-around;
   align-items: center;
   list-style: none;
 }
 .small_pic>li{
   width: 20%;
   height: 100px;
   margin-left: -40px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;
 }
  /*小图标部分结束*/
  /*黑色背景部分开始*/
 .black1{
   width: 100%;
   height: 145px;
   background: #333333;
   margin-top: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .black1>div{
   width: 90%;
   font-size: 12px;
   height: 90px;
   color: #ffffff;
 }
 .black1>div>a{
   color: #009eaa;
 }
  /*黑色背景部分结束*/
  /*关注与分享部分开始*/
 .focus{
   width: 90%;
   height: 62px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .focus>p{
   width: 15%;
   height: 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
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
  /*关注与分享部分结束*/
</style>

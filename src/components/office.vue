<template>
  <div class="main">
    <div class="pos">
      <div class="bner">
        <p>这是为您打造的365</p>
        <p>使用offer365，每天都有机会达成目标</p>
        <div>
          <p @mouseenter="dian" @mouseout="out" id="home">家用</p>
          <p  @mouseenter="jinru" @mouseout="likai" id="shang">商务用</p>
        </div>
      </div>

    </div>

    <!--      什么是offer部分开始-->
    <div class="what">
      <div class="what_top">
        <p>什么是offer365</p>
        <p>
          Office 365 是一種雲端式訂閱服務，針對大家現今的工作方式提供整合的各種最佳工具。
          藉由結合最佳 App (例如 Excel 和 Outlook) 與功能強大的雲端服務 (例如 OneDrive 和
          Microsoft Teams)，Office 365 讓任何人都能隨時隨地透過任何裝置建立和共用內容。
        </p>
      </div>
      <div class="what_bot">
        <p>深入了解office 365</p>
        <ul>
          <li>
            <a href="#">家用版</a>
          </li>
          <li> <a href="#">小型企业版</a></li>
          <li> <a href="#">企业版</a></li>
          <li> <a href="#">教育版</a></li>
        </ul>
      </div>
    </div>

<!--   关注部分图标-->
    <div class="pic">
      <p>关注office</p>
      <img src="../assets/pic01.png" alt="">
      <img src="../assets/pic02.png" alt="">
      <img src="../assets/pic03.png" alt="">
      <img src="../assets/pic04.png" alt="">
      <img src="../assets/pic05.png" alt="">
    </div>

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
  // 引入axios来创建数据

    export default {
        name: "pos",
      data(){
          return{
           dian(){
             document.getElementById('home').style.background="#7E2D10";
           },
            out(){
              document.getElementById('home').style.background="#d83b01";
            },
            jinru(){
              document.getElementById('shang').style.background="#7E2D10";
            },
            likai(){
              document.getElementById('shang').style.background="#d83b01";
            }
          }
      }





      }


</script>

<style scoped>
  .main{
    width: 100%;
    height: 1404px;
    /*background: red;*/

  }
  /*大图背景部分开始*/
 .pos{
   width: 100%;
   height: 508px;
   background-image: url("../assets/bner02.jpg");
   background-repeat: no-repeat;
   background-size: 100% 508px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
.bner{
  width: 494px;
  height: 163px;
 margin-left:-600px;
 display: flex;
  justify-content:space-between;
  align-items: flex-start;
  flex-direction: column;

}
  .bner>p:nth-child(1){
   font-size: 35px;
    font-weight: bolder;
    color: #ffffff;
    margin-top: -10px;
    margin-bottom: -10px;
  }
  .bner>p:nth-child(2){
    font-size: 10px;
    color: #ffffff;
  }
  .bner>div{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bner>div>p{
    width: 45%;
    height: 50px;
    background: #d83b01;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    border: 3px solid #ffffff;
    cursor: pointer;
  }
/*什么是offer开始*/
  .what{
    width: 100%;
    height: 423px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  /*什么是office部分开始*/
  .what_top{
    width: 90%;
    height: 221px;
    /*background: pink;*/
    border-bottom: 1px solid #616161;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  .what_top>p:nth-child(1){
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: -20px;
  }
  .what_top>p:nth-child(2){
    width: 50%;
    height: 100px;
    /*background: blue;*/
  }
  .what_bot{
    width: 100%;
    height: 202px;
    /*background: yellowgreen;*/
    border-bottom: 1px solid #616161;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  .what_bot>p{
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: -20px;
  }
  .what_bot>ul{
       width: 40%;
       height: 30px;
       /*background: blue;*/
       list-style: none;
       display: flex;
       justify-content: space-between;
       align-items: center;

     }
  .what_bot>ul>li{
    width: 15%;
    height: 30px;
    /*background: yellow;*/
     margin-left: -40px;
    border-right: 2px solid #616161;
    text-align: center;
    line-height: 40px;
  }
  .what_bot>ul>li>a{
   text-decoration: none;
  }

  /*关注部分开始*/
  .pic{
    width: 273px;
    height: 50px;
    margin-left: 70px;
    margin-top: 30px;
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
    margin-top: 30px;
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

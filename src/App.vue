<template>
  <div id="app">

    <ul class="top_nav">
      <li>
          <router-link to="/"  class="logo1">
               <span class="icon iconfont iconweiruan-" style="height: 40px;color: red;"></span>
          </router-link>
          <router-link to="/office" style="text-decoration: none" id="nav_tab1">office</router-link>
          <router-link to="/Windows" style="text-decoration: none" id="nav_tab2">windows</router-link>
          <router-link to="/surface" style="text-decoration: none" id="nav_tab3">Surface</router-link>
          <router-link to="/" style="text-decoration: none" id="nav_tab4">Xbox</router-link>
          <router-link to="/" style="text-decoration: none" id="nav_tab5">支持</router-link>

      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link" @click="dian" @mouseout="out" id="la" >
            所有Microsoft<i class="el-icon-arrow-down el-icon--right"></i>
          </span>

<!--          </el-dropdown-menu>-->
<!--          下拉列表内容-->
           <div class="down_menu" @mouseenter="jinru">
             <div class="top_nav01">
               <el-tabs>
                 <el-tab-pane label="office">
                         <div class="content">
                           <ul>
                             <li>
                               <b>office</b>
                             </li>
                             <li>
                               <a href="#">游戏</a>
                             </li>
                             <li>
                               <a href="#">OneDrive</a>
                             </li>
                             <li>
                               <a href="#">Outlook</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                           </ul>

                           <ul>
                             <li>
                               <b>office</b>
                             </li>
                             <li>
                               <a href="#">游戏</a>
                             </li>
                             <li>
                               <a href="#">OneDrive</a>
                             </li>
                             <li>
                               <a href="#">Outlook</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                           </ul>

                           <ul>
                             <li>
                               <b>soffice</b>
                             </li>
                             <li>
                               <a href="#">游戏</a>
                             </li>
                             <li>
                               <a href="#">OneDrive</a>
                             </li>
                             <li>
                               <a href="#">Outlook</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                           </ul>

                           <ul>
                             <li>
                               <b>office</b>
                             </li>
                             <li>
                               <a href="#">游戏</a>
                             </li>
                             <li>
                               <a href="#">OneDrive</a>
                             </li>
                             <li>
                               <a href="#">Outlook</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                           </ul>

                           <ul>
                             <li>
                               <b>office</b>
                             </li>
                             <li>
                               <a href="#">游戏</a>
                             </li>
                             <li>
                               <a href="#">OneDrive</a>
                             </li>
                             <li>
                               <a href="#">Outlook</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                           </ul>

                           <ul>
                             <li>
                               <b>office</b>
                             </li>
                             <li>
                               <a href="#">游戏</a>
                             </li>
                             <li>
                               <a href="#">OneDrive</a>
                             </li>
                             <li>
                               <a href="#">Outlook</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                             <li>
                               <a href="#">Skeype</a>
                             </li>
                           </ul>
                         </div>
                 </el-tab-pane>
                 <el-tab-pane label="windows">
                   <div class="content">
                     <ul>
                       <li>
                         <b>windows</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>windows</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>windows</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>windows</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>windows</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>windows</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>
                   </div>
                 </el-tab-pane>
                 <el-tab-pane label="surface">
                   <div class="content">
                     <ul>
                       <li>
                         <b>surface</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>surface</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>surface</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>surface</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>surface</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>surface</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>
                   </div>
                 </el-tab-pane>
                 <el-tab-pane label="Xbox">
                   <div class="content">
                     <ul>
                       <li>
                         <b>Xboxs</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>Xbox</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>Xbox</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>Xbox</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>Xboxs</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>Xbox</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>
                   </div>
                 </el-tab-pane>
                 <el-tab-pane label="支持">
                   <div class="content">
                     <ul>
                       <li>
                         <b>支持</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>支持</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>支持</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>支持</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>支持</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>

                     <ul>
                       <li>
                         <b>支持</b>
                       </li>
                       <li>
                         <a href="#">游戏</a>
                       </li>
                       <li>
                         <a href="#">OneDrive</a>
                       </li>
                       <li>
                         <a href="#">Outlook</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                       <li>
                         <a href="#">Skeype</a>
                       </li>
                     </ul>
                   </div>
                 </el-tab-pane>
               </el-tabs>
             </div>
             <p>
               <a href="#">查看站点路线></a>
             </p>
           </div>
        </el-dropdown>
        <a href="#" class="icon iconfont iconsousuo" style="text-decoration: none"></a>
        <a href="#" class="icon iconfont iconcart-copy" style="text-decoration: none"></a>
        <a href="#" class="icon iconfont icongeren" style="text-decoration: none"></a>
      </li>
    </ul>
<!--       <oneText></oneText>-->
    <!--操作区域-->
    <div id="main" @click="likai">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

// import oneText from "./components/oneText";
export default {
  name: 'app',
  // components:{
  //   oneText
  //
  // }
  data(){
    return{
      dian() {
        document.getElementById('la').style.background="#f2f2f2";
        document.getElementById('la').style.border="1px dotted #000000";
        document.getElementsByClassName('down_menu')[0].style.display="block";
        console.log('00');

      },
      out() {
        document.getElementById('la').style.background="none";
        document.getElementById('la').style.border="none";

      },
      jinru(){
        document.getElementsByClassName('down_menu')[0].style.display="block";
      },
      likai() {
        document.getElementsByClassName('down_menu')[0].style.display="none";

      }
    }
  }

}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
  /*顶部导航条*/
  .top_nav{
    width: 88%;
    height: 35px;
    margin-left: 58px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top_nav>li:nth-child(1){
    width: 40%;
    height: 35px;

    margin-left: -40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
.logo1{
  margin-right: 80px;
  text-decoration: underline;
}
  .top_nav>li:nth-child(2){
    width: 25%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  /*#la{*/
  /*  color: #000000;*/
  /*}*/
  #la{
    display: block;
    width: 120px;
    height: 50px;
    /*background: #f2f2f2;*/
    /*border: 1px dotted #000000;*/
    text-align: center;
    line-height: 50px;
    color: #000000;
  }
  #la:hover{
    height: 49px;
    border-bottom: 1px solid #000000;
  }
  #nav_tab1:active{
    display: block;
    width: 80px;
    height: 70px;
    border: 1px dotted #000000;
    text-align: center;
    line-height: 70px;
    color: #000;
  }
  #nav_tab1:hover{
   border-bottom: 1px solid #000000;
  }
  #nav_tab2:active{
    display: block;
    width: 80px;
    height: 70px;
    border: 1px dotted #000000;
    text-align: center;
    line-height: 70px;
    color: #000;
  }
  #nav_tab2:hover{
    border-bottom: 1px solid #000000;
  }
  #nav_tab3:active{
    display: block;
    width: 80px;
    height: 70px;
    border: 1px dotted #000000;
    text-align: center;
    line-height: 70px;
    color: #000;
  }
  #nav_tab3:hover{
    border-bottom: 1px solid #000000;
  }
  #nav_tab4:active{
    display: block;
    width: 80px;
    height: 70px;
    border: 1px dotted #000000;
    text-align: center;
    line-height: 70px;
    color: #000;
  }
  #nav_tab4:hover{
    border-bottom: 1px solid #000000;
  }
  #nav_tab5:active{
    display: block;
    width: 80px;
    height: 70px;
    border: 1px dotted #000000;
    text-align: center;
    line-height: 70px;
    color: #000;
  }
  #nav_tab5:hover{
    border-bottom: 1px solid #000000;
  }
  .down_menu{
    width: 1232px;
    height: 350px;
    background:#f2f2f2;
    position: absolute;
    left: -962px;
    top: 58px;
    display: none;
    z-index: 999;

  }
  .top_nav01{
    width: 100%;
    height: 309px;
  }
  .content{
      width: 100%;
      height: 255px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    }
  .content>ul{
    width: 10%;
    height: 255px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  .content>ul>li{
    margin-left: -40px;
  }
  .content>ul>li>a{
    color: #000;
    text-decoration: none;
  }
  .content>ul>li>a:hover{
    color: #000;
    text-decoration: underline;
  }

  .down_menu>p{
    width: 100%;
    height: 41px;
    background:#e6e6e6;
    text-align: center;
    line-height: 41px;

  }
  .down_menu>p>a{
    text-decoration: none;
    color: #757868;
  }

</style>

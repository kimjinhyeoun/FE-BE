<template>
  <div id="wrap">

    <header id="top">
      <p class="all_menu">
        <img src="./assets/images/all_menu.png" alt="전체메뉴" width="42" height="59" @click="changeShow">
      </p>
      <div class="menu_wrap" v-if="menuWrap">
        <ul class="menu">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="ListWrap1">모바일웹</router-link></li>
          <li><router-link to="ListWrap2">HTML5란</router-link></li>
          <li><router-link to="ListWrap3">EZEN소개</router-link></li>
          <li><router-link to="ListWrap4">QR코드</router-link></li>
        </ul>
        <p class="menu_close" @click="changeShow">X</p>
      </div>
      <h1><router-link to="/">EZEN</router-link></h1>
      <nav id="main_menu">
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="ListWrap1">모바일웹</router-link></li>
          <li><router-link to="ListWrap2">HTML5란</router-link></li>
          <li><router-link to="ListWrap3">EZEN소개</router-link></li>
          <li><router-link to="ListWrap4">QR코드</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="menu_view">
      <router-view></router-view>
    </div>

    <EzenBottom/>

  </div>
</template>

<script>
import EzenBottom from './components/EzenBottom.vue'

export default {
  name: 'App',
  data() {
    return {
      menuWrap : false,
    }
  },
  components: {
    EzenBottom,
  },
  methods: {
    changeShow(){
      this.menuWrap = !this.menuWrap
    }
  },
}
</script>

<style>
  html,body{
    height:100%;
  }
  input{
    outline:none;
  }

  #wrap{
    width:100%;
    min-width:320px;
    font-family:"맑은 고딕","Malgun Gothic",sans-serif;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  #top{
    height:90px;
  }
  .all_menu{
    width:10%;
    height:60px;
    float:left;
    background-color:#009bde;
  }
  .menu_wrap{
    width:200px;
    height:100%;
    background-color:rgba(0,0,0,0.9);
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    overflow: hidden;
  }
  .menu{
    margin-top:100px;
  }
  .menu li{
    text-indent:2em;
    line-height:2.1em;
  }
  .menu li a{
    color:#fff;
    font-size:15px;
  }
  .menu_close{
    color:#fff;
    position:absolute;
    right:30px;
    top:40px;
    font-size:30px;
    cursor:pointer;
    z-index:11;
  }
  #top h1{
    float:left;
    width:90%;
    height:60px;
    background-color:#009bde;
    text-align:center;
    font-family:verdana,sans-serif;
    font-size:24px;
    line-height:60px;
    text-indent:-10%;
  }
  #top h1 a{
    color:#fff;
  }

  #main_menu{
    clear:both;
    width:100%;
    height:30px;
  }
  #main_menu ul{
    width:100%;
    height:30px;
    background-color:#eaeaea;
  }
  #main_menu ul li{
    float:left;
    width:20%;
    height:30px;
    text-align:center;
    line-height:30px;
  }
  #main_menu ul li a{
    color:#333;
    font-size:15px;
  }
</style>

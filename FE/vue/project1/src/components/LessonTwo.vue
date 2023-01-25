<template>
  <div>
    <ul class="menu">
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li>Menu4</li>
    </ul>
    <hr>
    <ul class="menu">
        <li>{{Menu[0]}}</li>
        <li>{{Menu[1]}}</li>
        <li>{{Menu[2]}}</li>
        <li>{{Menu[3]}}</li>
    </ul>
    <hr>
    <!-- 반복문 v-for="작명 in 반복할 횟수" :key="작명" -->
    <ul class="menu">
        <li v-for="i in 4" :key="i">{{Menu}}</li>
    </ul>
    <hr>
    <ul class="menu">
        <li v-for="i in 4" :key="i">{{i}}</li>
    </ul>
    <hr>
    <ul class="menu">
        <li v-for="i in Menu" :key="i">{{i}}</li>
    </ul>
    <hr>
    <!-- v-for="(작명,i) in 메뉴들":key="i" 왼쪽변수는 array내의 데이터 / 오른쪽 변수는 1씩 증가하는 정수 -->
    <ul class="menu">
        <li v-for="(Menu, i) in Menu" :key="i">{{i}}</li>
    </ul>
    <hr>
    <ul class="menu">
        <li v-for="(Menu, i) in Menu" :key="i">{{Menu}}</li>
    </ul>
    <hr>
    <!-- div 3개 출력 / div안에 데이터는 제목1/제목2/제목3 -->
    <div class="box" v-for="(title, i) in title" :key="i">
        <h6>{{title[i]}}</h6>
    </div> <!-- 제 목 3 -->
    <hr>
    <div class="box" v-for="(title, i) in title" :key="i">
        <h6>{{title}}</h6> 
    </div> <!-- 제목1 제목2 제목3 -->
    <hr>
    <div class="box" v-for="(titles, i) in title" :key="i">
        <h6>{{title[i]}}</h6>
    </div> <!-- 제목1 제목2 제목3 -->
    <hr>
  </div>
</template>

<script>
export default {
 data() {
    return {
        Menu : ["Menu1","Menu2","Menu3","Menu4"],
        title : ["제목1","제목2","제목3"],
    }
 },
}
</script>

<style>
.menu{
    list-style:none;
    height:30px;
    background-color:forestgreen;
    padding-top:10px;
}
.menu li{
    float:left;
    margin:0 20px;
}
hr{
    clear:both;
}
.box{
    border:1px solid green;
    width:100px;
    height:100px;
    text-align:center;
    font-size:25px;
    float:left;
    margin:10px;
}
</style>
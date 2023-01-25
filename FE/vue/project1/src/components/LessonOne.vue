<template>
  <div>
    <h1>인사 : {{Message}}</h1>
    <hr>
    <h2>{{id}}</h2>
    <h3>{{age}}</h3>
    <h2>{{id}}</h2>
    <h3>{{age}}</h3>
    <hr>
    <p id="con1">뷰 인스턴스1</p>
    <p :style="con2">뷰 인스턴스2</p>
    <p :style="con2">뷰 인스턴스3</p>
    <p v-bind:style="con2">뷰 인스턴스4</p>
    <hr>
    <ul>
        <li>{{contents[0]}}</li>
        <li>{{contents[1]}}</li>
        <li>{{contents[2]}}</li>
        <li>{{contents[3]}}</li>
    </ul>
    <ul>
        <li>name : {{contents2[0].name}} / age: {{contents2[0].age}}</li>
        <li>name : {{contents2[1].name}} / age: {{contents2[1].age}}</li>
        <li>name : {{contents2[2].name}} / age: {{contents2[2].age}}</li>
        <li>name : {{contents2[3].name}} / age: {{contents2[3].age}}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
    data(){ // (자료이름:자료내용)
        return{
            Message : 'Hello Vue.js',
            id : 'A0001',
            age : 35,
            con2 : 'color:red; background-color:pink',
            contents : ['리스트1','리스트2','리스트3','리스트4'],
            contents2 : [
                {name : "ABC", age : 11},
                {name : "DEF", age : 22},
                {name : "GHI", age : 33},
                {name : "JKL", age : 44},
            ]
        }
    },
}
</script>

<style>
    #con1{
        color:blue;
        background-color:yellow;
    }
</style>
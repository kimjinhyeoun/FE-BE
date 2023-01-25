<template>
  <div>
    <p>{{ msg }}</p>  <!--{{데이터 바인딩}}-->
  </div>
  <hr>
  <LessonOne  />
  <LessonTwo  />
  <LessonThree  />
  <LessonFour  />
  <hr>
  <div>
    <p>App.vue파일입니다.</p>
    <div>
      <p>{{web[0]}}</p>
      <p>{{web[1]}}</p>
      <p>{{web[2]}}</p>
      <p>{{web[3]}}</p>
    </div>
  </div>
  <LessonFive  v-bind:web="web" />
  <LessonFive  :web="web" />
  <LessonSix  />
  <LessonSeven  />
  <hr>
  <div>
    <p>수강 개월수 : <input type="text" id="month" v-model="month" placeholder="수강가능한 개월수 입력"></p>
  </div>
  <LessonEight />
  <LessonNine />
</template>

<script>
import LessonOne from './components/LessonOne.vue'
import LessonTwo from './components/LessonTwo.vue'
import LessonThree from './components/LessonThree.vue'
import LessonFour from './components/LessonFour.vue'
import LessonFive from './LessonFive.vue'
import LessonSix from './components/LessonSix.vue'
import LessonSeven from './LessonSeven.vue'
import LessonEight from './components/LessonEight.vue'
import LessonNine from './components/LessonNine.vue'

export default {
  name: 'App',
  data(){
    return {
      msg : "안녕안녕!!!",
      web : ['web1','web2','web3','web4'],
      month : "",
    }
  },
  components: { //compontnt : 긴 HTML을 한 단어로 줄일 수 있는 문법,반복적인 부분 재사용이 쉬움
    LessonOne,
    LessonTwo,
    LessonThree,
    LessonFour,
    LessonFive,
    LessonSix,
    LessonSeven,
    LessonEight,
    LessonNine,
  },
  beforeUpdate() { //업데이트 되기전에 실행
    if(this.month == 1){
      alert('너무 짧습니다.');
      this.month = 3;
    }

  },
}
</script>

<style>
#app {
  margin:20px;
}
</style>

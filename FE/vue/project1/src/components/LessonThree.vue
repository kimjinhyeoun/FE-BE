<template>
  <div>
    <div><!-- v-on:이벤트명 / @이벤트명 -->
        <p><button @click="num1++">클릭</button><span> :{{num1}}</span></p>
        <p><button @click="num2+=2">클릭</button><span> :{{num2}}</span></p>
    </div>
    <hr>
    <div>
        <p><button @click="num3[0]++">클릭</button><span> : {{num3[0]}}</span></p>
        <p><button @click="num3[1]++">클릭</button><span> : {{num3[1]}}</span></p>
        <p><button @click="num3[2]++">클릭</button><span> : {{num3[2]}}</span></p>
    </div>
    <hr>
    <div>
        <p><button @click="plus()">클릭</button><span> : {{num4}}</span></p>
    </div>
    <hr>
    <p>
        <button v-on:click="clickAlert">클릭!!</button>
        <button @click="clickAlert">클릭!!</button>
    </p>
    <hr>
    <div class="bg" v-if="popup1 == true"> <!-- v-if(조건식) true나 false따라 실행 -->
        <h4>제목</h4>
        <p>내용입니다</p>
        <p>
            <button v-on:click="popup1 = false">닫기</button>
            <button @click="close()">닫기</button>
        </p>
    </div>
    <div>
        <p><button @click="popup1 = true">팝업창1</button></p>
    </div>
    <hr>


    <transition name="opacity"><!--transition vue에서 제공-->
    <div class="bg" v-if="popup2 == true">
        <div>
            <h4>제목</h4>
            <p>내용입니다</p>
            <p>
                <button @click="popup2 = false">닫기</button>
            </p>
        </div>
    </div>
    </transition>
    <div>
        <p><button @click="popup2 = true">팝업창2</button></p>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num1 : 0,
            num2 : 0,
            num3 : [0,0,0],
            num4 : 5,
            popup1 : false,
            popup2 : false,
        }
    },
    methods: {
        plus(){
            this.num4 += 5
        },
        clickAlert : function(){
            return alert("클릭했구나");
        },
        close(){
            this.popup1 = false
        }
    },
}
</script>

<style>
.bg{
    width:200px;
    height:200px;
    background-color:rgba(107,175,238,1);
    border-radius:50%;
    padding:10px;
    text-align: center;
    position:fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
/* .name명-enter-from  /  start  */
.opacity-enter-from{opacity: 0;}
.opacity-enter-active{transition:all 1.5s;}
.opacity-enter-to{opacity: 1;}

/* .name명-leave-from  /  end  */
.opacity-leave-from{opacity: 1;}
.opacity-leave-active{transition:all 1.5s;}
.opacity-leave-to{opacity: 0;}
</style>
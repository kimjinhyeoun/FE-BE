<template>
    <div>
        <hr>
        <p><button id="ex1">클릭</button> : <span>여기에 출력</span></p>
        <p><button id="ex2">클릭</button></p>
        <div class="test">테스트</div>
        <hr>
        <div id="touchSlider11">
            <ul>
                <li>content 1</li>
                <li>content 2</li>
                <li>content 3</li>
                <li>content 4</li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import touchSlider from 'jquery.touchslider' // eslint-disable-line no-unused-vars

export default {
    mounted() { //인스턴스에 부착되고 호출되는 상태 // jquery 사용시 임포트 설정 후 마운트에 넣어야함
        $('#ex1').click(function(){
            alert("안녕하세요");
            $(this).next('span').text('인사');
        })
        $('#ex2').click(function(){
            $('.test').css({color : 'red', backgroundColor : "yellow", width : '100px', height : '100px'});
        })
        //https://github.com/dohoons/jquery.touchSlider
$('#touchSlider11').touchSlider({ // eslint-disable-line no-unused-vars
	autoplay: {
		enable: true,
		pauseHover: true,
		addHoverTarget: '', // 다른 오버영역 추가 ex) '.someBtn, .someContainer'
		interval: 3500
	}
});
    }
}
</script>

<style>
.ts-controls { height: 36px; position: relative; overflow: hidden; }
.ts-prev { display:none;}
.ts-next { display:none;}

.ts-paging { width:100%; text-align:center;}
.ts-paging-btn { display:inline-block; width:15px; height:15;padding-top:10px; margin-left:7px; border:1px solid #333; border-radius:50%; background:#3399CC; overflow: hidden; font-size:0;}
.ts-paging-btn:first-child { margin-left: 0; }
.ts-paging-active { background:#ff0000; }
.ts-paging-btn:hover{
    cursor:pointer;
}

#touchSlider11{
    width:95%;
    height:280px;
    margin:0 auto;
    position:relative;
    overflow:hidden;
}
#touchSlider11 ul{
    position:absolute;
    top:0;
    left:0;
    overflow: hidden;
}
#touchSlider11 ul li{
    width:100%;
    height:250px;
    color:#333;
    list-style:none;
}
#touchSlider11 ul li:nth-child(1){
    background-color:yellow;
}
#touchSlider11 ul li:nth-child(2){
    background-color:pink;
}
#touchSlider11 ul li:nth-child(3){
    background-color:orange;
}
#touchSlider11 ul li:nth-child(4){
    background-color:yellowgreen;
}
</style>
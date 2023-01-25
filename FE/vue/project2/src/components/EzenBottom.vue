<template>
  <aside class="notice">
    <h3>공지사항</h3>
    <p>EZEN 제품군 사용설명회 개최</p>
    <ul class="sns">
        <li><a href="#"><img src="../assets/images/sns_b_main.gif" alt="설명" width="23" height="23"></a></li>
        <li><a href="#"><img src="../assets/images/sns_f.gif" alt="설명" width="23" height="23"></a></li>
        <li><a href="#"><img src="../assets/images/sns_t.gif" alt="설명" width="23" height="23"></a></li>
    </ul>
  </aside>
  <footer id="bottom">
    <ul class="quick1">
        <li><a href="#">전체보기</a></li>
        <li><a href="#">모든제품보기</a></li>
        <li><a href="#">홈으로</a></li>
    </ul>
    <p class="btn_wrap">
        <input type="button" value="로그인">
        <input type="button" value="PC버전">
    </p>
    <ul class="quick2">
        <li><a href="#">개인정보취급방침</a></li>
        <li><a href="#">이용약관</a></li>
        <li><a href="#">고객센터</a></li>
    </ul>
    <p class="copy_t">COPYRIGHT &copy; 2013 CKY. ALL RIGHTS RESERVED.</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.notice{
    clear:both;
    background-color:#eaeaea;
    border-top:2px solid #666;
    height:30px;
}
.notice h3{
    float:left;
    margin-top:7px;
    margin-left:10px;
    font-size:12px;
}
.notice p{
    float:left;
    margin-top:7px;
    margin-left:15px;
    font-size:13px;
}
.sns{
    float:right;
    margin-top:3px;
}
.sns li{
    float:left;
    margin-left:1px;
}
.sns li:first-child{
    margin-left:0;
}

#bottom{
    clear:both;
    background-color:#333;
    text-align:center;
    font-size:13px;
}
#bottom a{
    color:#fff;
}
.quick1{
    height:40px;
    line-height:40px;
}
.quick1 li{
    display:inline-block;
    background:url(../assets/images/footer_line.png) no-repeat left center;
    margin:0 3px;
    padding-left:10px;
}
.quick1 li:first-child{
    background:none;
    padding-left:0;
    margin-left:0;
}
.quick1 li a{
    letter-spacing:-1px;
}
.btn_wrap{
    width:180px;
    height:32px;
    /* border:1px solid red; */
    margin:10px auto;
}
.btn_wrap input{
    float:left;
    border:1px solid #999;
    width:80px;
    height:30px;
    margin:0 5px;
    background-color:#fff;
}

.quick2{
    height:40px;
    line-height:40px;
}
.quick2 li{
    display:inline-block;
    background:url(../assets/images/footer_line.png) no-repeat left center;
    margin:0 3px;
    padding-left:10px;
}
.quick2 li:first-child{
    background:none;
    padding-left:0;
    margin-left:0;
}
.quick2 li a{
    letter-spacing:-1px;
}

.copy_t{
    color:#fff;
    font-size:11px;
    height:30px;
}
</style>
<template>
  <article id="list_wrap4">
    <h2>EZEN 찾아오기</h2>
    <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.444078124024!2d126.8488105155832!3d37.30830734663155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f81ed7be66b%3A0x4b5f72df9e8f8dd9!2z7JWI7IKwIOydtOygoOyVhOy5tOuNsOuvuOy7tO2TqO2EsO2VmeybkA!5e0!3m2!1sko!2skr!4v1668478127809!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <table id="information">
        <caption>EZEN 고객센터</caption>
        <tr>
            <th>TEL</th>
            <td>031-123-1234</td>
            <td><img src="../assets/images/tel.png" alt="통화하기" width="19" height="17" onclick="location.href='tel:031-123-1234'"></td>
        </tr>
        <tr>
            <th>E-MAIL</th>
            <td>master@ezen.co.kr</td>
            <td><img src="../assets/images/email.png" alt="이메일" width="19" height="17" onclick="location.href='mailto:master@ezen.co.kr'"></td>
        </tr>
        <tr>
            <th>SERVICE</th>
            <td colspan="2"><a href="#">고객센터 서비스 바로가기</a></td>
        </tr>
    </table>
  </article>
</template>

<script>
export default {

}
</script>

<style>
#list_wrap4{
    height:630px;
}
#list_wrap4 h2{
    font-size:20px;
    letter-spacing:-1px;
    margin-left:20px;
    margin-bottom:20px;
    margin-top:30px;
}

#map{
    border:1px solid #ccc;
    width:90%;
    height:400px;
    margin:0 auto;
    box-shadow: 5px 5px 5px #666;
}
#map iframe{
    width:100%;
    height:100%;
}
#information{
    width:90%;
    margin:20px auto;
    font-size:13px;
}
#information caption{
    display:none;
}
#information th, #information td{
    border-bottom:1px solid #999;
    padding:5px;
}
#information th{
    text-align:left;
    text-indent:1em;
    vertical-align:middle;
}
#information td a{
    color:#333;
}
</style>
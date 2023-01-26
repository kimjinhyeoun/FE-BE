// Defalut - 기본값 할당
function drawChart(width=200, height=400){
    console.log(`${width} x ${height} 차트를 그립니다.`);
}
drawChart(100);  // width값을 100 준다는 뜻이네
drawChart(); //얘는 아무값도 안줬으니 그대로 200 x 400이 나오는거고


function drawChart2(width=200, height=width/2){   //파라미터에 값을 줄 수 있다.
    console.log(`${width} x ${height} 차트를 그립니다.`);
}
drawChart2(300);
drawChart2();
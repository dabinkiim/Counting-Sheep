$(document).ready(function() {

  var $output = $("#output");
  var count = 0;
  var timerID=0;
  var sheep_count = "";

  timerID = setInterval(function() {
    //값 증가
    count++;

    //양 출력
    sheep_count = "";
    for (i = 0; i <count; i++) {
      sheep_count += "🐑";
    }
    $('.header').html(count+' sheep');
    $('.count').html(sheep_count);

    //제목으로 출력
    document.title = count+' sheep';

    //값 출력
    //$output.text("");
    //$output.text(count);
  },1000);



})

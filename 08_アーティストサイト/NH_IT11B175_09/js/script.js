$(function()
{
    $(window).on('load',function()
    {
      $("#loader-wrap").delay(2000).fadeOut('slow');
    });

    function loaderClose()
    {
      $("#loader-wrap").fadeOut('slow');
    }
    setTimeout(loaderClose,10000);
});

$(function()
{ 
  $('#scroll-box').scroll(function()
  { 
    var videoTop = $("#video1").offset().top;
    var video = document.getElementById('video1');
    var top = $(".css-fade-0").offset().top; // ターゲットの位置取得
    var top1 = $(".css-fade-1").offset().top;
    var top2 = $(".css-fade-2").offset().top;
    // console.log($(this).scrollTop());
    // console.log(top);
    var videoPostion = videoTop - $(window).height() + 50;
    var position = top - $(window).height();  // 発火させたい位置
    var position1 = top1 - $(window).height();
    var position2 = top2 - $(window).height();

    if($(window).scrollTop() > videoPostion)
    {
      video.play();
    }else{
      video.currentTime = 0;
    }
    
    if($(window).scrollTop() > position)
    {
      $(".css-fade-0").addClass('css-fade--in');
    }else{
      $(".css-fade-0").removeClass('css-fade--in');
    }

    if($(window).scrollTop() > position1)
    {
      $(".css-fade-1").addClass('css-fade--in');
    }else{
      $(".css-fade-1").removeClass('css-fade--in');
    }

    if($(window).scrollTop() > position2)
    {
      $(".css-fade-2").addClass('css-fade--in');
    }else{
      $(".css-fade-2").removeClass('css-fade--in');
    }

  })
});

// 操作対象のvideoを指定

// 動画の再生 
// $('#play').click(function(){
//   
// }); 
// // 動画の一時停止
// $('#stop').click(function(){
//  
// });
// // 動画の頭出し（任意の秒へ移動）
// $('#atama').click(function(){
//  video.currentTime = 0; // 入れた秒の位置へ移動（例は0秒）
// });
// // 音声ミュート（トグル式）
// $('#mute').click(function(){
//  video.muted = video.muted ? false : true;
// }); 
// //音量アップ
// $('vol-up').click(function(){
//  video.volume = v.volume + 0.25; 
// }); 
// //音量ダウン
// $('vol-down').click(function(){
//  video.volume = v.volume - 0.25;
// });
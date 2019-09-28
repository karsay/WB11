// ロード画面処理
$(function () {
  $(window).on('load', function () {
    $("#loader-wrap").delay(2000).fadeOut('slow');
    _fadeIn();
  });

  function loaderClose() {
    $("#loader-wrap").fadeOut('slow');
    _fadeIn();
  }

  function _fadeIn() {
    $("#content-box").fadeIn(5000);
  }
  setTimeout(loaderClose, 5000);
});


// フェード、ビデオ処理
$(function () {
  $('#scroll-box').scroll(function () {
    var video = document.getElementById('video');
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');

    var videoTop = $("#video").offset().top;
    var videoTop1 = $("#video1").offset().top;
    var videoTop2 = $("#video2").offset().top;

    var videoPostion = videoTop - $(window).height() + 50;
    var videoPostion1 = videoTop1 - $(window).height() + 50;
    var videoPostion2 = videoTop2 - $(window).height() + 50;

    var top = $(".css-fade-0").offset().top; // ターゲットの位置取得
    var top1 = $(".css-fade-1").offset().top;
    var top2 = $(".css-fade-2").offset().top;
    var top3 = $(".css-fade-3").offset().top;
    var top4 = $(".css-fade-4").offset().top;
    var top5 = $(".css-fade-5").offset().top;
    var top6 = $(".css-fade-6").offset().top;

    var position = top - $(window).height();  // 発火させたい位置
    var position1 = top1 - $(window).height();
    var position2 = top2 - $(window).height();
    var position3 = top3 - $(window).height();
    var position4 = top4 - $(window).height();
    var position5 = top5 - $(window).height();
    var position6 = top6 - $(window).height();

    // console.log($(this).scrollTop());
    // console.log(top);

    if ($(this).scrollTop() > 9000) {
      $('#scroll-nav').hide();
    } else {
      $('#scroll-nav').show();
    }

    if ($(window).scrollTop() > videoPostion) {
      video.play();
    } else {
      video.currentTime = 0;
    }

    if ($(window).scrollTop() > videoPostion1) {
      video1.play();
    } else {
      video1.currentTime = 0;
    }

    if ($(window).scrollTop() > videoPostion2) {
      video2.play();
    } else {
      video2.currentTime = 0;
    }

    if ($(window).scrollTop() > position) {
      $(".css-fade-0").addClass('css-fade--in');
    } else {
      $(".css-fade-0").removeClass('css-fade--in');
    }

    if ($(window).scrollTop() > position1) {
      $(".css-fade-1").addClass('css-fade--in');
    } else {
      $(".css-fade-1").removeClass('css-fade--in');
    }

    if ($(window).scrollTop() > position2) {
      $(".css-fade-2").addClass('css-fade--in');
    } else {
      $(".css-fade-2").removeClass('css-fade--in');
    }

    if ($(window).scrollTop() > position3) {
      $(".css-fade-3").addClass('css-fade--in');
    } else {
      $(".css-fade-3").removeClass('css-fade--in');
    }

    if ($(window).scrollTop() > position4) {
      $(".css-fade-4").addClass('css-fade--in');
    } else {
      $(".css-fade-4").removeClass('css-fade--in');
    }

    if ($(window).scrollTop() > position5) {
      $(".css-fade-5").addClass('css-fade--in');
    } else {
      $(".css-fade-5").removeClass('css-fade--in');
    }

    if ($(window).scrollTop() > position6) {
      $(".css-fade-6").addClass('css-fade--in');
    } else {
      $(".css-fade-6").removeClass('css-fade--in');
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
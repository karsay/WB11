
$(function()
{ 
  $('#scroll-box').scroll(function()
  {
    var top = $(".css-fade").offset().top; // ターゲットの位置取得
    var top1 = $(".css-fade1").offset().top;
    // console.log($(this).scrollTop());
    // console.log(top);
    var position = top - $(window).height();  // 発火させたい位置
    var position1 = top1 - $(window).height();
    
    if($(window).scrollTop() > position)
    {
      $(".css-fade").addClass('css-fade--in');
    }else{
      $(".css-fade").removeClass('css-fade--in');
    }
    if($(window).scrollTop() > position1)
    {
      $(".css-fade1").addClass('css-fade--in');
    }else{
      $(".css-fade1").removeClass('css-fade--in');
    }
  })
});



// // 操作対象のvideoを指定
// var video = $('#video01'); 
// // 動画の再生 
// $('#play').click(function(){
//   video.play();
// }); 
// // 動画の一時停止
// $('#stop').click(function(){
//  video.pause(); 
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
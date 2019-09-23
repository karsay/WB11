new WOW().init();

$(function() {
  $('.bg-slider').bgSwitcher({
    images: ['images/image00.jpg', 'images/image01.jpg', 'images/image02.jpg'], // 切り替える背景画像を指定
    interval: 5000,
    loop: true,
    shuffle: false,
    effect: "fade",
    duration: 3000,
    easing: "swing"
  });

});
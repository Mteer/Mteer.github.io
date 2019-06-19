
/*About of common.js from jquery */

/*点击qq\wechat\phone显示菜单*/
$(function(){
  $(".qq").mouseenter(function(){
      $("iframe").show();
      $(".wrapper .qq").css("background-color","#0956c6");
  })
  $(".qq").mouseleave(function(){
      $(".wrapper .qq").css("background-color","#1D6ED6");
  })
})
$(function(){
  $(".wechat").mouseenter(function(){
      $(".wechat-call").show();
      $(".wrapper .wechat").css("background-color","#0956c6");
  })
  $(".wechat").mouseleave(function(){
      $(".wechat-call").hide();
      $(".wrapper .wechat").css("background-color","#1D6ED6");
  })
})
$(function(){
  $(".phone").mouseenter(function(){
      $(".phone-call").show();
      $(".wrapper .phone").css("background-color","#0956c6");
  })
  $(".phone").mouseleave(function(){
      $(".phone-call").hide();
      $(".wrapper .phone").css("background-color","#1D6ED6");
  })
})

/* 点击返回顶层*/

$(function(){
  $('.clickTop').hide();       
  $(window).scroll(function(){
      // console.log($(this).scrollTop());
      //当window的scrolltop距离大于1时，go to 
      if($(this).scrollTop() > 100){
          $('.clickTop').fadeIn();
      }else{
          $('.clickTop').fadeOut();
      }
  });
  $('.clickTop').mouseenter(function(){
      $(".clickTop").css("background-color","#0956c6");
      $('.clickTop').click(function(){
          $('html ,body').animate({scrollTop: 0}, 300);
          return false;
      });
  })
  $('.clickTop').mouseleave(function(){
      $(".clickTop").css("background-color","#1D6ED6");
  })
});

/* swiper图片轮播 */
$(function(){
  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})

/* 业务显示 */
$(function(){
  var picWidth = $(".pic").width() + "px";
  var picHeight = $(".pic").height() + "px";
  $(".pic-wrapper").css({"width":picWidth,"height":picHeight,"right":"-"+picWidth})
  $(".business .col-md-4").hover(function(){
    $(this).find(".pic-wrapper").css({"right":"0","opacity":"0.8"})
  },function(){
    $(this).find(".pic-wrapper").css({"right":"-"+picWidth,"opacity":"0"})
  })
})

/* 底部展示轮播切换 */
$(document).ready(function () {
  function getContentSize() {
    var wh = document.documentElement.clientWidth;
    if (wh <= 1000) {
      $(".mr_frbox").slide({
        titCell: "",
        mainCell: ".mr_frUl ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 1
      });
    } else {
      $(".mr_frbox").slide({
        titCell: "",
        mainCell: ".mr_frUl ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 3
      });
    }
  }
  window.onload = getContentSize;
});




'use strict'
$(function(){
  $('.back').fadeIn(5000);

  var dero= ()=>{
   $('.deropic').fadeIn(5000).animate({
     'marginRight':'500px',

  },100).fadeOut(10);};

  var fire =()=>{
    $('.hide').animate({
      'width':'0'
    },200)
    $('.bom').animate({
      'padding':'0'
    },100)
  }


var bom2=()=>{
  $('.bom').animate({
    'padding':'0'
  },100),
  $('.bom').animate({
    'padding':'100'
  },100)

}

var bom=()=>{
  $('.bom').animate({
    'padding':'100'
  },100)

}

var fade=()=>{
  $('.animate').fadeOut();
  $('.tokeiten').fadeIn();
}

var dero2 =()=>{
  $('.deropic2').fadeIn().animate({
    'left':'0',

 },100).fadeOut();
}

setTimeout(dero,4000);//デロリアン動きだす時間
setTimeout(fire,9250);//fire動き出す時間
setTimeout(bom,9251);//bom消える時間
setTimeout(fade,9500);//animeからtokeiten

setTimeout(bom2,9700);//bom爆発
setTimeout(dero2,9700);//dero時計店にスリップ


// ここから時計店
// slide

var width=340*3;
$('.slider').css('width',width);
var  clickNum=0;
var  contNum=$('.slideCont').length;

$('.next-btn').click(function(){
clickNum++
if(clickNum>contNum-1){clickNum=0};
  $('.slideSet').stop().animate({
      left: -width*clickNum
  },300)
});

$('.prev-btn').click(function(){
clickNum--
if(clickNum<0){clickNum=contNum-1};
  $('.slideSet').stop().animate({
      left: -width*clickNum
  },300)
});
// nav
$('.nav-box a').hover(function(){
$(this).find('i').addClass('fas fa-cog')},
function(){$(this).find('i').removeClass('fas fa-cog')});

$('.nav-box a').click(function(){
var  id=$(this).attr('href');
var offset=$(id).offset().top;
$('body,html').animate({
  'scrollTop':offset
},500);
});

// topimg

$(function(){
  $(".top-img").hide();
             $(".top-pic").find("img:first").stop().fadeIn(2000);

             setInterval(function(){
                     $(".top-pic").find("img:first").fadeOut(2000)
                     .next("img").fadeIn(1000)
                     .end().appendTo(".top-pic");
             }, 3000);
});


});

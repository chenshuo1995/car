var audioEle = document.getElementsByTagName("audio");
var flag1=true,flag2=true,flag3=true;
$('.swiper-wrapper').css({
		width:$(window).width(),height:$(window).height()
})

  var mySwiper = new Swiper ('.swiper-container', {
  direction: 'vertical',
	initialSlide:0,
  autoplayDisableOnInteraction:false,
  grabCursor : true,
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	swiperAnimateCache(swiper); //隐藏动画元素 
	swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
  	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    if (swiper.activeIndex=="2") {
              $(".three .car").css({
                "bottom":"-10%",
                "left": "-30%"
                }); 
              $('.carlight').css('display','none');     
    }
    if (swiper.activeIndex == '3') {
          var startX,endX,a=0,b=0,n=0,time =null,flagx=true;
          var boxes =document.getElementById('box'); 
          boxes.addEventListener("touchstart",touchStartFunc1,false);   
          boxes.addEventListener("touchmove",touchStartFunc2,false);      
          function touchStartFunc1(e){
            startX = e.changedTouches[0].pageX;
          }
          function touchStartFunc2(e){ 
            endX = e.changedTouches[0].pageX;
            a = parseInt((endX -startX)/10);
            if (a > b) {
              n--;
              if (n<0) {
                n=71;
              }
              
            }else if(a == b){
              n=n;
            }else{
              n++;
              if (n>71) {
                n = 0;
              }
            }
            b=a;
            $('#box img').eq(n).show().siblings().hide();
          }
          $('.sll').click(function(){
            boxes.addEventListener("touchstart",touchStartFunc1,false);   
            boxes.addEventListener("touchmove",touchStartFunc2,false);  
            if (flagx) {
              clearInterval(time);
              var d = 0;
              function Animate(){
                $('#box img').css('display','none');
                $('#box img').eq(d).css('display','block');
                if (d>=71) {
                  d=0;
                }
                d++;
              }
              time = setInterval(Animate,50);
              flagx = false;
            }else{
              clearInterval(time);
              flagx = true;
              boxes.addEventListener("touchstart",touchStartFunc1,false);   
              boxes.addEventListener("touchmove",touchStartFunc2,false);  
            }
          })
          $('#box').click(function(){
            clearInterval(time);
            boxes.addEventListener("touchstart",touchStartFunc1,false);   
            boxes.addEventListener("touchmove",touchStartFunc2,false); 
            })
        }
    if (swiper.activeIndex =='4') {
      $('.five .title').css('display','block');
      $('.five .titles').css('display','block');
      $('.five .q').css('display','none');
      $('.five .w').css('display','none');
      $('.five .e').css('display','none');
      $('.five .r').css('display','none');
    } 
    if (swiper.activeIndex == '5') {
      $('.six .back').css('display','block');
      $('.six .demos').css('display','block');
      $('.six .ck').css('display','block');
    } 
	} 
});

$('.three .le').click(function(){
    if (flag1) {
      $('.carlight').css('display','block');
      flag1=false;
    }else{
      $('.carlight').css('display','none');
      flag1=true;
    }
  });
$('.three .ql').click(function(){
    if (flag2) {
      $('.three .car').animate({
        bottom:'10%',left:'0%'
      },100);
      flag2=false;
    }else{
      $('.three .car').animate({
        bottom:'-10%',left:'-30%'
      },100);
      flag2=true;
    }
  });
$('.three .sb').click(function(){
    if (flag3) {
      $('.three .car').animate({
        bottom:'0%',left:'-50%'
      },100);
      flag3=false;
    }else{
      $('.three .car').animate({
        bottom:'-10%',left:'-30%'
      },100)
      flag3=true;
    }
  });
$('.three .ql,.three .le,.three .sb').click(function(){
  $('.three .hand').css('display','none');
})

$('.five .title').click(function(){
  $('.five .title').fadeOut(100);
  $('.five .titles').fadeOut(100,function(){
    $('.q').fadeIn(1000);
    $('.w').fadeIn(1000,function(){
      $(".q").fadeOut(1000);
      $(".w").fadeOut(1000,function(){
        $(".e").fadeIn(1000);
        $(".r").fadeIn(1000,function(){
          $(".e").fadeOut(1000);
          $(".r").fadeOut(1000,function(){
            $(".five .title").css("display","block")
            $(".five .titles").css("display","block");
          });       
        });
      });
    })
  })
})


$('.six .ck').click(function(){
  $('.six .back').css('display','none');
  $('.six .demos').css('display','none');
  $('.six .ck').css('display','none');
})

var scale = 1;
$('.jia').click(function(){
  scale+=0.5;
  if (scale >= 2) {scale = 2} 
  $('#box').css('transform','scale('+scale+')') 
});
$('.jian').click(function(){
  scale-=0.5;
  if (scale<=0.5) {scale = 0.5}
    $('#box').css('transform','scale('+scale+')')
})

var flag4;
$('.music').click(function(){
  if (flag4) {
    audioEle[0].pause();
    $('.music').css('animation','none');
    flag4 = false;
  }else{
    audioEle[0].play();
    flag4 = true;
    $('.music').css('animation','dem 2s 0s linear infinite normal');
  }
})
var flag5=true;
$('.con').click(function(){
  if (flag5) {
    $('.hands').css('display','none');
    audioEle[1].play();
    audioEle[0].pause();
    $('.music').css('animation','none');
    flag5 = false;
  }
  else{
    audioEle[1].pause();
    flag5 = true;
  }
})


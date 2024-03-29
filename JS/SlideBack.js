$(document).ready(function(){
/*
        TweenLite.set(tb[0],{transform : 'translate3d(-100%,0,0)'});
        TweenLite.set(tb[1],{transform : 'translate3d(0%,0,0)'});
        TweenLite.set(tb[2],{transform : 'translate3d(100%,0,0)'});
        TweenLite.delayedCall(7,change);  
       */
 /* var img1 = document.getElementById("one");
  var img2 = document.getElementById("two");
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var Xoffset = 0;
  var Yoffset = 0;
  img1.addEventListener("mouseenter", dragStart, false);
  img1.addEventListener("mousemove", drag, false);
  img1.addEventListener("mouseleave", dragEnd, false);
  img2.addEventListener("mouseenter", dragStart, false);
  img2.addEventListener("mousemove", drag, false);
  img2.addEventListener("mouseleave", dragEnd, false);

  function dragStart(e){
    initialX = e.screenX;
    initialY = e.screenY;
  }
  function drag(e){

      e.preventDefault();
      currentX = e.screenX - initialX - Xoffset;
      currentY = e.screenY - initialY -Yoffset;
      if(currentY > 80){
        currentY = 80;
      }
      if(currentY < -80){
        currentY = -80;
      }
      translate(currentX,currentY,e.target);
      Xoffset = currentX;
      Yoffset = currentY;
  }
  function dragEnd(e){
    Xoffset = 0;
    Yoffset = 0;
    TweenLite.to(e.target,2,{transform:'translate3d(0px,0px,0)'});
  }




  function translate(X,Y,elem){
      TweenLite.to(elem,0.5,{transform:'translate3d('+X+'px,'+Y+'px,0)'});
  }*/
  var img1 = document.getElementById("one");
  var img2 = document.getElementById("two");
  var img3 = document.getElementById("three");
  var img4 = document.getElementById("four");
  var img5 = document.getElementById("five");


  TweenLite.delayedCall(0,tl1);
  TweenLite.delayedCall(2.5,tl2);
  TweenLite.delayedCall(0,tl3);
  TweenLite.delayedCall(2.5,tl4);
  TweenLite.delayedCall(1.25,tl5);

  function tl1(){
    TweenLite.to(img2,5,{transform:'translateY(-50px)',ease: Power1.easeInOut, y: -500});
    TweenLite.to(img2,5,{transform:'translateY(0px)',ease: Power1.easeInOut, y: -500 , delay:5});
    TweenLite.delayedCall(10,tl1);
  }

  function tl2(){
    TweenLite.to(img1,5,{transform:'translateY(-35px)',ease: Power1.easeInOut, y: -500});
    TweenLite.to(img1,5,{transform:'translateY(0px)',ease: Power1.easeInOut, y: -500 ,delay:5});
    TweenLite.delayedCall(10,tl2);
  }

  function tl3(){
    TweenLite.to(img3,5,{transform:'translateY(-50px)',ease: Power1.easeInOut, y: -500});
    TweenLite.to(img3,5,{transform:'translateY(0px)',ease: Power1.easeInOut, y: -500 ,delay:5});
    TweenLite.delayedCall(10,tl3);
  }

  function tl4(){
    TweenLite.to(img4,5,{transform:'matrix(0, -1, 1, 0, 0, -35)',ease: Power1.easeInOut, y: -500});
    TweenLite.to(img4,5,{transform:'matrix(0, -1, 1, 0, 0, 0)',ease: Power1.easeInOut, y: -500 ,delay:5});
    TweenLite.delayedCall(10,tl4);
  }
  function tl5(){
    TweenLite.to(img5,5,{transform:'translateY(42.5px)',ease: Power1.easeInOut, y: -500});
    TweenLite.to(img5,5,{transform:'translateY(0px)',ease: Power1.easeInOut, y: -500 ,delay:5});
    TweenLite.delayedCall(10,tl5);
  }

  $(".slide").mouseenter(overview);
  $(".slide").mousemove(overview);
  $(".slide").mouseleave(view);

  function overview(e){
    TweenLite.to(e.target,0.5,{scale: 1.2});
  }

  function view(e){
    TweenLite.to(e.target,3,{scale: 1});
  }





});

$(document).ready(function(){
/*
        TweenLite.set(tb[0],{transform : 'translate3d(-100%,0,0)'});
        TweenLite.set(tb[1],{transform : 'translate3d(0%,0,0)'});
        TweenLite.set(tb[2],{transform : 'translate3d(100%,0,0)'});
        TweenLite.delayedCall(7,change);  
       */
  var img1 = document.getElementById("one");
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
  }
});

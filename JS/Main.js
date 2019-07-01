$(document).ready(function(){
    var load = false;
    draw();
    window.addEventListener("load",loadding);

    function loadding(){
            /*var Al = new TimelineLite();
            var vidload = $('#vid-load').get(0);
            Al.to(vidload,3,{'opacity': '1'},"same");
            Al.to(vidload,3,{'opacity': '1',delay:7});
            Al.call(function(){
                load = true;
            });
            Al.to(vidload,3,{'opacity': '1',delay:0.5});
            Al.call(function(){
                vidload.play();
            });*/

        }

      var AP = [
        {
            Button: $('#button-white'),
            Viewer: $('#view-white'),
            Anim: $("#anim-white"),
            Active: false,
            Position: 0,
        },
        {
            Button: $('#button-black'),
            Viewer: $('#view-black'),
            Anim: $("#anim-black"),
            Active: false,
            Position:0,
        }
      ]

    $('.open').click(function(e){
        var double = false;
        var n = -1;
        var x = -1;
        for(var i = 0; i<AP.length;i++){
            if(AP[i].Button.get(0) == this){
                var data = AP[i];
                n = i;
            }
            if(AP[i].Active == true && n != i){
                double = true;
                x = i;
            }
        }
        if(!double){
            one(data);
        }
        else{
            doublee(data,AP[x]);
        }


    });



function one(data){
    video = data.Anim.get(0);
    if(data.Active == false){
        video.play();
        setTimeout(function(){
            video.pause();
        },1024);
        data.Button.children().text('Fermer');
        setTimeout(function(){
            data.Active = true;
            data.Position = 1;
            TweenLite.to($('#blur'),0,{height: '700px'});
            TweenLite.to(data.Viewer,0.3,{'transform': 'translateY(0%)'});
        },500);
        
    }
    else{
        video.play();
        data.Button.children().text('Ouvrir');
        setTimeout(function(){
            data.Active = false;
            data.Position = 0;
            TweenLite.to($('#blur'),0,{height: '0px'});
            TweenLite.to(data.Viewer,0.3,{'transform': 'translateY(105%)'});
        },500);
        
    }
}
function doublee(data,Sdata){
    var viewer = Sdata.Viewer;
    var image = viewer.children('.APC-Img');
    var title = viewer.children('.APC-Title');
    var power = viewer.children('.APC-Power');
    if(data.Active == false && data.Position != 2){
        one(data);
        Sdata.Position = 2;
        setTimeout(function(){
            TweenLite.to(viewer,0.3,{'transform': 'translateY(-250px)'});
            TweenLite.to(viewer,0.3,{'height': '75px'});
            viewer.css({'border-bottom-left-radius':'0','border-bottom-right-radius':'0','border-bottom':'3px solid #2b2b2d','flex-wrap':'wrap','justify-content':'flex-start'});
            data.Viewer.css({'border-top-left-radius':'0','border-top-right-radius':'0'});
        
            image.children().last().css({display:'none'});
            power.children().last().css({display:'none'});

            title.css({'order':'1','height':'50%','width':'70%'});
            image.css({'height':'100%','width':'30%','margin':'0'});
            power.css({'height':'50%','order':'2','width':'70%'});

            image.children().css({'height':'50%'});
            title.children().css({'margin':'0'});
            power.children().css({'flex-direction':'row-reverse','margin':'0','justify-content': 'flex-end'});
            
            power.children().children().css({'margin':'0'});
            power.children().children().first().css({'margin-top':'5px','margin-left':'5px'});

        },500);
    }
    if(data.Active && data.Position != 2){
        one(data);
        Sdata.Position = 1;
        setTimeout(function(){
            viewer.css({'border-bottom-left-radius':'29px','border-bottom-right-radius':'29px','border-bottom':'Initial','flex-wrap':'Initial','justify-content':'Initial'});
            data.Viewer.css({'border-top-left-radius':'29px','border-top-right-radius':'29px'});
            TweenLite.to(viewer,0.3,{'height': '252px'});
            TweenLite.to(viewer,0.3,{'transform': 'translateY(0%)'});

            image.removeAttr('style');
            title.removeAttr('style');
            power.removeAttr('style');

            image.children().removeAttr('style');
            title.children().removeAttr('style');
            power.children().removeAttr('style');

            image.children().last().removeAttr('style');
            power.children().last().removeAttr('style');

            power.children().children().removeAttr('style');
            //power.children().children().first().removeAttr('style');

        },500);
    }
    if(data.Active && data.Position == 2){
        data.Position = 0;
        video = data.Anim.get(0);
        video.play();
        data.Active = false;
        data.Button.children().text('Ouvrir');

        var viewer2 = data.Viewer;
        var image2 = viewer2.children('.APC-Img');
        var title2 = viewer2.children('.APC-Title');
        var power2 = viewer2.children('.APC-Power');
        var tl = new TimelineLite();
        setTimeout(function(){
            tl.to(viewer2,0.2,{'height': '252px'},"same");
            tl.to(viewer2,0.2,{'transform': 'translate3d(100%,-100%,0)'},"same");
            tl.to(viewer2,0,{'transform': 'translate3d(100%,105%,0)'});
            tl.to(viewer2,0,{'transform': 'translate3d(0%,105%,0)'});

            viewer.css({'border-top-left-radius':'29px','border-top-right-radius':'29px'});
            viewer2.css({'border-bottom-left-radius':'29px','border-bottom-right-radius':'29px','border-bottom':'Initial','flex-wrap':'Initial','justify-content':'Initial'});

            image2.removeAttr('style');
            title2.removeAttr('style');
            power2.removeAttr('style');

            image2.children().removeAttr('style');
            title2.children().removeAttr('style');
            power2.children().removeAttr('style');

            image2.children().last().removeAttr('style');
            power2.children().last().removeAttr('style');

            power2.children().children().removeAttr('style');
        },500);

    }

}
function draw(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    ctx.fillStyle = 'rgb(0, 98, 255)';
    var tab= [];
    var nbr = 7500;
  
  
    for(var i=0;i<nbr;i++){
      tab[i] = i;
      tab[i] = [0,0,(Math.random()*(0.01 -0.005)+0.005),initM()];
      ctx.beginPath();
      ctx.arc(Xini(tab[i][0],tab[i][1]), Yini(tab[i][0],tab[i][1]), 0.3, 0, Math.PI * 2, true);
      ctx.fill();
    }
    
  
  
    function animate() {
      ctx.clearRect(0,0,1000,500);
      for(var w = 0;w<nbr;w++){
          var prop = state(tab[w][0],tab[w][1],tab[w][2],tab[w][3]);
          anglee = prop[0];
          rayonn = prop[1];
          ctx.beginPath();
          ctx.arc(Xini(anglee,rayonn), Yini(anglee,rayonn), 0.3, 0, Math.PI * 2, true);
          ctx.fill();
          tab[w][0] = anglee;
          tab[w][1] = rayonn;
          tab[w][3] = prop[2];
        if(tab[w][0]>2*Math.PI){
          tab[w][0] = tab[w][0] - 2*Math.PI;
        }
        if(tab[w][0]<-2*Math.PI){
          tab[w][0] = tab[w][0] + 2*Math.PI;
        }
  
      }
      //window.requestAnimFrame(function(){animate()});
    }
    setInterval(function(){
      animate();
    },10);
    
    
  
  
  
  
  function Xini(a,r){
    var  x = 500+r*Math.cos(a);
    return x;
  }
  function Yini(a,r){
    var  y = 250+r*Math.sin(a);
    return y;
  }
  
  function state(a,r,v,m){
    if(r<100 && !load){
      prop = begin(a,r);
      return[prop[0],prop[1],m];
    }
    if(r>=100 && !load){
      prop = move(a,r,v,m);
      return[prop[0],prop[1],prop[2]];
    }
    if(load){
      prop =  end(a,r,v,m);
      return[prop[0],prop[1],prop[2]];
    }
  }
  
  
  function begin(a,r){
    r=Math.random()*(120-103)+103;
      if(a == 0){
        var prob = Math.random();
        if(prob > 0.1){
          a = Math.random()*(6.28 -0.01)+0.01;
        }
        if(prob <= 0.9){
          a = 0 - (Math.random()*(6.28 -0.01)+0.01);
        }
        return[a,r];
      }
  
  }
  function move(a,r,v,m){
    if(a>0){
      a = a + v;
    }
    if(a<0){
      a = a - v;
    }
    if(r > 100 && r<103){
      r=Math.random()*(120-103)+103;
    }
    if(m){
      r+=Math.random()*(0.3);
    }
    if(!m){
      r-=Math.random()*(0.3);
    }
    m = born(m,r,a);
    return[a,r,m];
  }
  
  
  
  function initM(){
    prob =Math.random();
    var bool;
    if(prob>0.5){
      bool = true;
    }
    if(prob<=0.5){
      bool = false;
    }
    return bool;
  }
  
  function born(m,r,a){
    if((a>2.61 && a<3.66) || (a<(-2.61) && a>(-3.66))){
      if(r>130){
        m = false;
      }
      if(r<115){
        m = true;
      }
    }
    if((a>0 && a<0.52) || (a<(-0) && a>(-0.52))){
      if(r>130){
        m = false;
      }
      if(r<115){
        m = true;
      }
    }
    else{
      if(r>140){
        m = false;
      }
      if(r<105){
        m = true;
      }
    }
    return m;
  }
  
  
  function end(a,r,v,m){
    if(a>=1 && a<=2){
      if(a>0){
        a = a + (Math.random()*(0.05 -0.001)+0.001);
      }
      if(r>0){
        r-=10;
        m = false;
      }
      if(a>1.8 && r>0){
        r=0;
        m = false;
      }
    }
    if(a<=-4.5 && a>=-5.5){
      if(a<0){
        a = a - (Math.random()*(0.05 -0.001)+0.001);
      }
      if(r>0){
        r-=5;
        m = false;
      }
      if(a<-5.4 && r>0){
        r=0;
        m = false;
      }
    }
    else{
      if(a>0){
        a = a + 0.05;
      }
      if(a<0){
        a = a - 0.05;
      }
      m = born(m,r,a);
      
    }
    return[a,r,m];
  }
}
});
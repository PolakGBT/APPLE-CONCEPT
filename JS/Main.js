$(document).ready(function(){
/*
        TweenLite.set(tb[0],{transform : 'translate3d(-100%,0,0)'});
        TweenLite.set(tb[1],{transform : 'translate3d(0%,0,0)'});
        TweenLite.set(tb[2],{transform : 'translate3d(100%,0,0)'});
        TweenLite.delayedCall(7,change);  
       */
    window.addEventListener("load",function(){
        var Al = new TimelineLite();
        Al.to($('#img-load'),3,{'height': '30%'},"same");
        Al.to($('#img-load'),3,{'opacity': '1'},"same");
        Al.to($('.loader'),2,{'height': '40px','width':'40px'},"same");
        Al.to($('#load-start'),0.5,{'opacity': '0'},"same1");
        Al.to($('#load-fin'),0.5,{'opacity': '1'},'same1');
        Al.to($('.loader'),2,{'opacity': '0'},"same2");
        Al.to($('.anim-load'),2,{'opacity': '0'},"same2");
        Al.to($('.contain-loader'),0,{'display': 'none'},"same3");
        Al.to($('.anim-load'),0,{'display': 'none'},"same3");
    });


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
            TweenLite.to(viewer,0.3,{'transform': 'translateY(-100%)'});
            TweenLite.to(viewer,0.3,{'height': '75px'});
            viewer.css({'border-bottom-left-radius':'0','border-bottom-right-radius':'0','border-bottom':'0.5px solid white','flex-wrap':'wrap','justify-content':'flex-start'});
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

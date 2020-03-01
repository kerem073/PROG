$(function(){
    // gsap.from(".titel", {duration:3, opacity:0, ease:"ease-out"});
    rotateTitle();
    levitate();
    $(document).mousemove(mouseMove);
    scrolled();
});

const $titel = $('.zweven-titel');
const $flying_dirt = $('#groot_grasblok1');

gsap.to($flying_dirt,{opacity:0});

function rotateTitle(){
    $('.zweven-titel').each(function(){
        let rotate_angle = 25;
        let random_deg = Math.random() * rotate_angle - rotate_angle/2;
        let random_height = Math.random()*40-20;
        $(this).css({"transform" : "rotate(" + random_deg + "deg) translate(0px," + random_height +"px)"});
    });
}

function levitate(){
    $(".zweven-titel").each(function(){
        // gsap.to(this, {duration:2, y: Math.random()*40 + 20, ease: "back.inOut(1.7)", yoyoEase:true, repeat:-1});
        gsap.to(this, {duration:2, rotation: Math.random()*10 - 20 + 10, ease:"power2.inOut", yoyoEase:true, repeat:-1, transformOrigin:(Math.random()*30 - 60) + "%"});
    })
}

function mouseMove(evt){
    let translatex = (evt.clientX / $(window).width()) - .5;
    let translatey = (evt.clientY / $(window).height()) - .5;


    TweenLite.to($titel, 0.2, {x:translatex * 30, y:translatey * 30});
}

function scrolled(){
    // Wanneer je scrolled moet de grootte grasblok  tevoorschijn komen
    if($('#groot_grasblok1').scrollBottom < 10){
        gsap.to($('#groot_grasblok1'), {duration:1, x:40, opacity:1});
        
    }
    console.log($('#groot_grasblok1') + " : " + $('#groot_grasblok1').scrollBottom);
}
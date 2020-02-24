$(function(){
    // gsap.from(".titel", {duration:3, opacity:0, ease:"ease-out"});
    rotateTitle();
    levitate();
    $("body").mousemove(mouseMove);
});

const $titel = $('.zweven-titel');

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
        gsap.to(this, {duration:2, y: Math.random()*40 + 20, ease: "back.inOut(1.7)", yoyoEase:true, repeat:-1});
        gsap.to(this, {duration:.8, rotation: Math.random()*10 - 20 + 10, ease:"power2.inOut", yoyoEase:true, repeat:-1, transformOrigin:(Math.random()*30 - 60) + "%"});
    })
}

function mouseMove(evt){
    let translatex = evt.pageX / 60;
    let translatey = evt.pageY / 60;


    TweenMax.to($titel, 0.2, {x:translatex, y:translatey})
}

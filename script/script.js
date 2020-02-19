$(function(){
    // gsap.from(".titel", {duration:3, opacity:0, ease:"ease-out"});
    rotateTitle();
    levitate();
});

function rotateTitle(){
    $('.zweven-titel').each(function(){
        let rotate_angle = 50;
        let random_deg = Math.random() * rotate_angle - rotate_angle/2;
        $(this).css({"transform" : "rotate(" + random_deg + "deg)"});
    });
}

function levitate(){
    $(".zweven-titel").each(function(){
        gsap.to(this, {duration:.7, x: Math.random()*20, y: Math.random()*20, ease: "linear", yoyoEase:true, repeat:-1});
        
    })
}


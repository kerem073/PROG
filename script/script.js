$(function(){
    gsap.from(".titel", {duration:3, opacity:0, ease:"ease-out"});
    rotateTitle();
});

function rotateTitle(){
    $('.zweven-titel').each(function(){
        let rotate_angle = 50;
        let random_deg = Math.random() * rotate_angle - rotate_angle/2;
        $(this).css({"transform" : "rotate(" + random_deg + "deg)"});
    });
}

function levitate(){
    
}
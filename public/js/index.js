var bodyClicked = false;
$(".nav-link").css("color", "#000");
// MAIN PAGE FADE IN
setTimeout(()=>{
    $(".hero-1").animate({
        opacity: "100%"
    }, 2500);
}, 1000);
setTimeout(()=>{
    $(".hero-2").animate({
        opacity: "100%"
    }, 2500);
}, 2000);
setTimeout(()=>{
    $(".hero-3").animate({
        opacity: "100%"
    }, 2500);
}, 3000);
setTimeout(()=>{
    $(".hero-4").animate({
        opacity: "100%"
    }, 2500);
}, 4000);

setTimeout(()=>{
    $(".nav-link").fadeIn(2500);
}, 4000);

setTimeout(()=>{
    let color = $("body").css("background-color");
    if (color === "rgb(255, 255, 255)"){
        $("body").animate({
            backgroundColor: "#3ef5f1"
        }, 2500);
    }
}, 4000);




// ON BODY CLICK, SKIP ANIMATIONS
$("body").on("click", ()=>{
    if (bodyClicked === false){
        $(".hero-1").css("display", "inline");
        $(".hero-2").css("display", "inline");
        $(".hero-3").css("display", "inline");
        $(".hero-4").css("display", "inline");
        $(".nav-link").css("display", "block");
        let color = $("body").css("background-color");
        if (color === "rgb(255, 255, 255)"){
            $("body").css("backgroundColor", "#3ef5f1");
        }
        bodyClicked = true;
    }
});

// FADE COLOR ON SLIDE-NAV CLICK
$(".home-nav").on("click", ()=>{
    $("body").animate({
        backgroundColor: "#3ef5f1"
    }, 1000);
    $(".nav-link").animate({
        color: "#000"
    });
});

$(".about-nav").on("click", ()=>{
    $("body").animate({
        backgroundColor: "#02ee69"
    }, 1000);
    $(".nav-link").animate({
        color: "#000"
    });
});

$(".projects-nav").on("click", ()=>{
    $("body").animate({
        backgroundColor: "#483092"
    }, 1000);
    $(".nav-link").animate({
        color: "#fff"
    });
});

$(".skills-nav").on("click", ()=>{
    $("body").animate({
        backgroundColor: "#f5f5f5"
    }, 1000);
    $(".nav-link").animate({
        color: "#000"
    });
});

$(".contact-nav").on("click", ()=>{
    $("body").animate({
        backgroundColor: "#d17fbd"
    }, 1000);
    $(".nav-link").animate({
        color: "#000"
    });
});


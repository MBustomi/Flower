$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");
    if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").on("webkitAnimationEnd oAnimationEnd msAnimationEnd animationend", function (e) {
            console.log("I Like You");
        });
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").on("webkitAnimationEnd oAnimationEnd msAnimationEnd animationend", function (e) {
            console.log("01010");
        });
    }
});

$(".message").on("webkitAnimationEnd oAnimationEnd msAnimationEnd animationend", function (e) {
    console.log("I Like You");
    if ($(".message").hasClass("closeNor")) {
        $(".message").addClass("closed");
    }
    $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on("webkitAnimationEnd oAnimationEnd msAnimationEnd animationend", function (e) {
    console.log("I Like You");
    if (!$(".heart").hasClass("closeHer")) {
        $(".heart").addClass("openHer").addClass("beating");
    } else {
        $(".heart").addClass("no-anim").removeClass("beating");
        $(".heart").removeClass("openHer").removeClass("closeHer");
    }
});
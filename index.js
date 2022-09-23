function facebook(){
    location.assign("https://www.facebook.com/profile.php?id=100074324105571");
}
function instagram(){
    location.assign("https://www.instagram.com/_.hp.unicorn/");
}
function linkedin(){
    location.assign("https://www.linkedin.com/in/nguyen-huu-phuc-26a091233/");
}
function github(){
    location.assign("https://github.com/Nonobeam");
}
function scroll1(){
    window.scrollTo({
        top: 750,
        behavior: "smooth"
    })
}
function scroll2(){
    window.scrollTo({
        top: 1850,
        behavior: "smooth"
    })
}
// const content1 = document.querySelector('content1')
// const content2 = document.querySelector('content2')
// window.addEventListener('Scroll', () =>{
//     if (window.scrollY >= 40){
//         content1.classList.add('ative_content');
//         content2.classList.add('ative_content');
//     } else {
//         content1.classList.remove('ative_content');
//         content2.classList.remove('ative_content');
//     }
// })

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".container_ava img").css({
    // "-webkit-filter": "blur(" + (scroll/100) + "px)",
    filter: "blur(" + (scroll/40) + "px)"
    })
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".hi p").css({
    // "-webkit-filter": "blur(" + (scroll/100) + "px)",
    filter: "blur(" + (scroll/40) + "px)"
    })
})


function openNav(){
    document.getElementById("mysidenav").style.width = "250px";
}

function closeNav(){
    document.getElementById("mysidenav").style.width = "0px";
}


var swiper = new Swiper(".home-slider", {
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
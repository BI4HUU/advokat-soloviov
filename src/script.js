
document.getElementsByClassName("burger")[0].onclick = function(){togleDropMenu()};
var menu_items = document.getElementsByClassName("menu-item")
document.getElementsByClassName("fon-menu")[0].onclick = function(){togleDropMenu()};

for (let menu_item of menu_items) {
    menu_item.onclick = function(){removeDropMenu()};;
}
function removeDropMenu() {
    document.getElementsByTagName("header")[0].classList.remove("menu-open");
};
function togleDropMenu() {
    document.getElementsByTagName("header")[0].classList.toggle("menu-open");
};




var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    slidesPerView: 3,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })

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

var oneRun1 = true;
var oneRun2 = true;

window.addEventListener('DOMContentLoaded', function () {
  var about = document.getElementsByClassName("about-section")[0];
  var I_img = document.getElementsByClassName("I-img")[0];
  var diplom = document.getElementsByClassName("diplom")[0];
  var advant = document.getElementsByClassName("advant")[0];
  var advant_img = document.getElementsByClassName("advant-img")[0];
  
  var examples = document.getElementById("examples");
  
  var card_img_trident = document.getElementsByClassName("card-img-trident");
  var card_img_bg = document.getElementsByClassName("card_img_bg");
  var call_bg = document.getElementsByClassName("call-bg")[0];
  var avatar_img = document.getElementsByClassName("avatar_img");



  var TikTok_img = document.getElementsByClassName("TikTok_img")[0];
  var inst_img = document.getElementsByClassName("inst_img")[0];
  var Telegram_img = document.getElementsByClassName("Telegram_img")[0];

  
  var contact_section = document.getElementsByClassName("contact-section")[0];


  window.addEventListener('scroll', function () {
    // about.offsetTop
    // about.offsetHeight
    // window.scrollY;
    if (window.scrollY > 200) {
      if (oneRun1) {
        oneRun1 = false;
        console.log(2);
        I_img.setAttribute("src", I_img.getAttribute("data-src"));
        setTimeout(function () {
          diplom.setAttribute("src", diplom.getAttribute("data-src"))
        }, 100);
        setTimeout(function () {
          advant_img.setAttribute("src", advant_img.getAttribute("data-src"))
        }, 150);
        setTimeout(function () {
          for (var i = 0; i < card_img_bg.length; i++) {
            card_img_trident[i].setAttribute("src", card_img_trident[i].getAttribute("data-src"))
            card_img_bg[i].setAttribute("style", "background-image: url('img/paper.jpg');")
          }
          for (var i = 0; i < avatar_img.length; i++) {
            avatar_img[i].setAttribute("src", avatar_img[i].getAttribute("data-src"))
          }
          call_bg.setAttribute("style", "background-image: url('img/testi1.jpg');")
        }, 210); 
      }
    }
    if (window.scrollY > 300) {

      if (oneRun2) {
        oneRun2 = false;
        TikTok_img.setAttribute("src", TikTok_img.getAttribute("data-src"));
        inst_img.setAttribute("src", inst_img.getAttribute("data-src"));
        Telegram_img.setAttribute("src", Telegram_img.getAttribute("data-src"));
        contact_section.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.46146287312!2d30.72697110073906!3d46.47461432689205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cbd8713492af%3A0xbacb4a27eb10d5dc!2z0JDQtNCy0L7QutCw0YIg0J7QtNC10YHRgdCwINCh0L7Qu9C-0LLRjNC10LIg0JTQvNC40YLRgNC40Lkg0JjQs9C-0YDQtdCy0LjRhw!5e0!3m2!1sru!2sua!4v1608105929899!5m2!1sru!2sua" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

      }
    }
    
  })



})
var mySwiper = new Swiper('.slider1', {
    // Optional parameters
    loop: true,
  
    slidesPerView: 4,
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
    breakpoints: {
      199: {
          slidesPerView: 1
      },
      999: {
          slidesPerView: 2
      },
      1400: {
          slidesPerView: 3
      }
  }
  
  })
  

  var mySwiper = new Swiper('.slider2', {
    // Optional parameters
    loop: true,
  
    slidesPerView: 4,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      199: {
          slidesPerView: 1
      },
      999: {
          slidesPerView: 2
      },
      1400: {
          slidesPerView: 3
      }
  }
  
  })

document.getElementsByClassName("burger")[0].onclick = function(){togleDropMenu()};
document.getElementsByClassName("fon-menu")[0].onclick = function(){togleDropMenu()};

function togleDropMenu() {
    document.getElementsByTagName("header")[0].classList.toggle("menu-open");
}
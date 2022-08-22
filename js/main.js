var elOpenNavBarBtn = document.querySelector(".js-open-navbar");

elOpenNavBarBtn.addEventListener("click", function(){
    elOpenNavBarBtn.closest(".site-header").classList.toggle("navbar-open");
});
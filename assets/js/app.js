let featuresTab = document.querySelector('.features__link');
let featuresTab1 = document.querySelector('.features__link1');
let featuresTab2 = document.querySelector('.features__link2');

let featuresTabs = document.querySelectorAll('.features__tab');

featuresTab.onclick = function () {
    featuresTabs[0].style.display = 'block';
    featuresTabs[1].style.display = 'none';
    featuresTabs[2].style.display = 'none';
}

featuresTab1.onclick = function () {
    featuresTabs[1].style.display = 'block';
    featuresTabs[2].style.display = 'none';
    featuresTabs[0].style.display = 'none';
}

featuresTab2.onclick = function () {
    featuresTabs[2].style.display = 'block';
    featuresTabs[1].style.display = 'none';
    featuresTabs[0].style.display = 'none';
}

const burger = document.querySelector(".hamburger");
const mobilePopup = document.querySelector(".mobile__menu");
const menuClose = document.querySelector(".cls-btn");
let mobMenuItems = document.querySelectorAll(".nav__panel-item");

for (var i = 0; i < mobMenuItems.length; i++) {
    mobMenuItems[i].onclick = function () {
        burger.classList.remove("is-active");
        mobilePopup.classList.remove("is-active");
        document.body.classList.remove("is-active");
    };
}

burger.onclick = function () {
    burger.classList.add("is-active");
    mobilePopup.classList.add("is-active");
    document.body.classList.add("is-active");
}
menuClose.onclick = function () {
    burger.classList.remove("is-active");
    mobilePopup.classList.remove("is-active");
    document.body.classList.remove("is-active");
}




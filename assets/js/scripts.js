//navigation

var hamburger = document.getElementById("hamburger");
var content = document.getElementById("nav-content");
var navigation = document.getElementById("navigation");
// On click

hamburger.addEventListener("click", function () {

    var aux = hamburger.classList.toggle("is-active");

    if (aux) {
        content.classList.add("is-visible");
        content.style.visibility = 'visible';
        navigation.classList.add("drop");

    } else {
        content.classList.remove("is-visible");
        content.style.visibility = 'hidden';
        navigation.classList.remove("drop");

    }

});




/*
* Navigation slideout and burger icon transform
*/
var burger = document.querySelector('.burger-icon');
var navMenu = document.querySelector('#navigation');
var navLink = document.querySelectorAll('.link');

burger.addEventListener('click', function(){
  toggleMenu();
});

/*
* Closes the navigation on click
*/
navLink.forEach(function (element){
  element.addEventListener("click", function(){
    toggleMenu();
  });
});

function toggleMenu() {
  burger.classList.toggle('closed');
  navMenu.classList.toggle('active');
}

var wobble = document.querySelector('.pulse');
wobble.addEventListener("click", function() {
  wobble.classList.remove("pulse");
});

// Navigation slideout and burger icon transform
var burger = document.querySelector('.burger-icon');
var navMenu = document.querySelector('#navigation');
var navLink = document.getElementsByClassName('link');

// Toggles Mobile Menu on click
burger.addEventListener('click', function(){
  toggleMenu();
});

// Closes the navigation on click
// This is a workaround for IE
for (var i in navLink) {
  navLink[i].onclick = function(){toggleMenu();};
}

// Toggles Mobile Menu Classes
function toggleMenu() {
  burger.classList.toggle('closed');
  navMenu.classList.toggle('active');
}

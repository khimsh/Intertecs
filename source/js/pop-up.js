// JS for displaying Pop-up
var popUp = document.getElementById('pop-up');
var btnClose = document.getElementById('btn-close');
var btnRedirect = document.getElementById('btn-redirect');

// Adds className 'active' on page load
document.addEventListener('DOMContentLoaded', function() {
  popUp.className += ' active';
}, true);

// Removes className 'active, when x is clicked
btnClose.addEventListener("click", function() {
  popUp.classList.remove('active');
});

// Removes className 'active, when Pop-up call to action link is clicked
btnRedirect.addEventListener("click", function() {
  popUp.classList.remove('active');
});

// Closes Pop-up when the area outside of the Pop-up is clicked
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.classList.remove('active');
  }
};

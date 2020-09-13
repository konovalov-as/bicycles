'use strict';

(function () {
  var nojs = document.querySelector('.nojs');
  nojs.classList.remove('nojs');

  var mainNav = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-menu-toggle');
  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--closed');
  });

})();

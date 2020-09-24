'use strict';

(function () {
  var nojs = document.querySelector('.nojs');
  nojs.classList.remove('nojs');

  var bodyContainer = document.querySelector('.body');

  // toggle main menu
  var closeMainNav = function () {
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--overlay');
    bodyContainer.classList.toggle('body--overlay');
  };

  var mainNav = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-menu-toggle');
  menuToggle.addEventListener('click', function () {
    closeMainNav();
  });


  var onNavListClick = function (evt) {
    if (!(evt.target.matches('.main-nav__link') || evt.target.matches('.main-nav__item'))) {
      return;
    }
    closeMainNav();
  };

  var navList = mainNav.querySelector('.main-nav__list');
  navList.addEventListener('click', onNavListClick);

  // validate form
  var helpForm = document.querySelector('.help-form form');
  var nameInput = helpForm.querySelector('#name');
  var phoneInput = helpForm.querySelector('#phone');

  var validateName = function () {
    if (nameInput.validity.valueMissing) {
      nameInput.setCustomValidity('Как тебя зовут?');
      return;
    }
    if (nameInput.validity.tooShort) {
      nameInput.setCustomValidity('Не меньше ' + nameInput.minLength + ' символов');
      return;
    }
    nameInput.setCustomValidity('');
  };

  var validatePhone = function () {
    if (phoneInput.validity.valueMissing) {
      phoneInput.setCustomValidity('Укажи номер телефона');
      return;
    }
    if (phoneInput.validity.patternMismatch) {
      phoneInput.setCustomValidity('Укажи 10 цифр номера телефона без 8 или +7');
      return;
    }
    phoneInput.setCustomValidity('');
  };

  nameInput.addEventListener('invalid', function () {
    validateName();
  });

  nameInput.addEventListener('input', function () {
    validateName();
  });

  phoneInput.addEventListener('invalid', function () {
    validatePhone();
  });

  phoneInput.addEventListener('input', function () {
    validatePhone();
  });

  helpForm.addEventListener('submit', function () {
    validateName();
    validatePhone();
  });

})();

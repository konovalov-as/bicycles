'use strict';

(function () {
  var nojs = document.querySelector('.nojs');
  nojs.classList.remove('nojs');

  // toggle main menu
  var mainNav = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-menu-toggle');
  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--closed');
  });

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

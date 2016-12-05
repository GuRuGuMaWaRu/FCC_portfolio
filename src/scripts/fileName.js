var css = require('../styles/main.scss');

'use strict';

$(document).ready(function() {

  var regexObj = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // highlight nav-button helper function
  function highlightButton(currentButton) {
    var buttons = ['about', 'portfolio', 'contact'];
    buttons.forEach(function(button) {
      if (button === currentButton) {
        $('.' + button).addClass('highlight');
      } else {
        $('.' + button).removeClass('highlight');
      }
    });
  }

  // highlight nav-button of the current section
  function checkPosition() {
    if (window.scrollY > 2800) {
      highlightButton('contact');
    } else if (window.scrollY > 400) {
      highlightButton('portfolio');
    } else if (window.scrollY < 400) {
      highlightButton('about');
    }

  }

  // show error message if input field is invalid
  function checkInput(inputField) {
    if (inputField.attr('id') === 'form-email') {
      return regexObj.test(inputField.val()) ? inputField.next().css('opacity', '0') : inputField.next().css('opacity', '1');
    } else {
      return inputField.val() ? inputField.next().css('opacity', '0') : inputField.next().css('opacity', '1');
    }
  }

  checkPosition();

  $(window).on('scroll', checkPosition);

  $('#form-email').on('keyup', function(event) {
    regexObj.test(event.target.value) ?
      $('#form-email').removeClass('false-input') : $('#form-email').addClass('false-input');
  });

  // scroll to a page section after nav-button click
  $('body').on('click', '.nav-bar a', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body,html').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
  });

  // form validation
  $('form').submit(function(event) {
    event.preventDefault();
    checkInput($('#form-name'));
    checkInput($('#form-email'));
    checkInput($('#form-message'));
    return false;
  });

});

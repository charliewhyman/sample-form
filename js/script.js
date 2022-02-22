'use strict';

const email = document.getElementById('emailInput');
const zipCode = document.getElementById('zipCodeInput');

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email address');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});

zipCode.addEventListener('input', function (event) {
  if (zipCode.validity.patternMismatch) {
    zipCode.setCustomValidity('Please enter a valid zip code');
    zipCode.reportValidity();
  } else {
    zipCode.setCustomValidity('');
  }
});

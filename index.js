// Scroll toggle menu bar

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 250 - document.getElementById('logo-search-login-2').offsetHeight
  ) {
    document.getElementById('logo-search-login-1').style.display = 'none';
    document.getElementById('logo-search-login-2').style.display = 'grid';
    document.getElementById('mainNav').style.display = 'none';
  } else {
    document.getElementById('logo-search-login-1').style.display = 'grid';
    document.getElementById('logo-search-login-2').style.display = 'none';
    document.getElementById('mainNav').style.display = 'flex';
    console.log('check');
  }
}

// Subscribe

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $window) {
  var emails = [];
  console.log(typeof emails);
  getEmails = () => {
    let JSONEmail = $window.localStorage.getItem('emails');
    let localStorageEmail = JSON.parse(JSONEmail);
    if (localStorageEmail != null) {
      emails = localStorageEmail;
    }
  };
  saveEmails = () => {
    console.log(typeof emails);
    emails.push($scope.emailInput);
    $window.localStorage.setItem('emails', JSON.stringify(emails));
  };

  $scope.getAndSave = () => {
    getEmails();
    saveEmails();
  };
});

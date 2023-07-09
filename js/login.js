let login = document.querySelector('.login');
let loginExit = document.querySelectorAll('.exit');

loginExit.forEach(function (exit) {
  exit.addEventListener('click', function () {
    login.classList.toggle('login--active');
    document.body.classList.toggle('stop-scroll');
  });
});

let closeLogin = login.querySelector('.login__close');

closeLogin.addEventListener('click', function () {
  login.classList.remove('login--active');
  document.body.classList.remove('stop-scroll');
});

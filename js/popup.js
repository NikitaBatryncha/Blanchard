let popup = document.querySelector('.gallery__popup');
let picture = document.querySelectorAll('.slide__button--2');

picture.forEach(function(picture) {
  picture.addEventListener('click', function () {
    picture.classList.toggle('picture--active');
    popup.classList.toggle('popup--active');
  });
});

let closePopup = popup.querySelector('.popup__close');
closePopup.addEventListener('click', function () {
    picture.forEach(function(picture) {
      picture.classList.remove('picture--active');
    });
    popup.classList.remove('popup--active');
});

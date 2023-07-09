let searchSubmits = document.querySelectorAll('.searchButton');
let searchUtility = document.querySelector('.search__popup');

for (let i = 0; i < searchSubmits.length; i++) {
  let search = searchSubmits[i];

  search.addEventListener('click', function() {
    search.classList.toggle('searchButton--active');
    searchUtility.classList.toggle('search__popup--active');
  });

  let searchClose = searchUtility.querySelector('.search__close');
  searchClose.addEventListener('click', function() {
    search.classList.remove('searchButton--active');
    searchUtility.classList.remove('search__popup--active');
  });
};

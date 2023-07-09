let tabsBtn = document.querySelectorAll('.tabBtn');
let tabsItem = document.querySelectorAll('.artist__info');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('tabBtn--active')});
    e.currentTarget.classList.add('tabBtn--active');

    tabsItem.forEach(function(element){element.classList.remove('artist__info--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('artist__info--active');
  });
});

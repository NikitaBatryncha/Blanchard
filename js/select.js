const elements = document.querySelectorAll('.select');
elements.forEach((element) => {
  new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
  });
});

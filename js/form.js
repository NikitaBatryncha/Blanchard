document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);
})

new JustValidate('#form')

var validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное'
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
  ]);

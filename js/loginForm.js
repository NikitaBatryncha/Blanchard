new JustValidate('#login-form')

  var validationLogin = new JustValidate('#login-form');

  validationLogin.addField('#login-name', [
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
    .addField('#login-tel', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      },
    ])
    .addField('#login-email', [
      {
        rule: 'required',
        errorMessage: 'Введите email',
      },
      {
        rule: 'email',
      },
    ]);

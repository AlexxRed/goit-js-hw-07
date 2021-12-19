import throttle from 'lodash.throttle';
// 1) получим элементы формы
const refs = {
  form: document.querySelector('.feedback-form'),
  emaile: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

// создадим объект данных для полей ввода
const FORMA = {
  name: 'forma',
  inputSave: { emaile: '', message: '' },
};

// тут мы загружаем значения из хранилища если в нем что-то есть
if (localStorage.getItem('emaile') || localStorage.getItem('message')) {
  loader();
}

// подписываемся на события
refs.form.addEventListener('input', throttle(onSaveInput, 500));
refs.form.addEventListener('submit', onSendSabmit);

function onSaveInput(e) {
  //   используем делегирование событий чтоб выполнять все одной функцией
  if (e.target.nodeName === 'INPUT') {
    FORMA.inputSave.emaile = `${e.target.value}`;
    localStorage.setItem(FORMA.name, JSON.stringify(FORMA.inputSave));
  } else if (e.target.nodeName === 'TEXTAREA') {
    FORMA.inputSave.message = `${e.target.value}`;
    localStorage.setItem(FORMA.name, JSON.stringify(FORMA.inputSave));
  }
}

function onSendSabmit(e) {
  //   откажемся от перезагрузки и отправим JSON сами
  e.preventDefault();

  // иммитируем отправку формы на сервер в виде JSON выводом в консоль
  console.log(JSON.stringify(FORMA));

  // очистим поля ввода
  e.currentTarget.reset();

  // очистим хранилище
  localStorage.removeItem(FORMA.name);
}

function loader() {
  //   вернем значения из хранилища ведь форма не отправлена
  refs.emaile.value = JSON.parse(localStorage.getItem(FORMA.inputSave.emaile));
  refs.message.value = JSON.parse(localStorage.getItem(FORMA.inputSave.message));
}

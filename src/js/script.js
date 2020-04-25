const mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
});
const buttonBurger = document.querySelector('.header__burger-line');
const menu = document.querySelector('.header__nav');
const menuLink = menu.querySelectorAll('.nav__link');
const callBackForm = document.querySelector('.form');
const inputName = document.getElementById('form__name');
const inputPhone = document.getElementById('form__phone');
const formSubmit = document.querySelector('.form__submit');
const inputPolicy = document.querySelector('.form__policy');
const phoneMask = IMask(inputPhone, {
  mask: '+{7}(000)000-00-00',
  lazy: false,  // make placeholder always visible
  placeholderChar: '_'     // defaults to '_'
});
let menuActive = false;
let flyElement = document.getElementsByClassName('elements');

setTimeout(activateElement, 500);
buttonBurger.addEventListener('click', openMobileMenu);
window.addEventListener('resize', bigWindowSize);
menu.addEventListener('click', goLink);
document.body.addEventListener('click', activeForm);
formSubmit.addEventListener('click', validateForm);

inputName.addEventListener('keydown', function(event) {
  if (!(event.key.match(/[А-Яа-яЁё]/) || event.key.match('Backspace') || event.key.match('Tab'))) {
    event.preventDefault();
  }
});

function activateElement() {
  flyElement[0].classList.add('elements--active');
}

function openMobileMenu() {
  if (menuActive === false) {
    menu.classList.add('header__nav--open');
    buttonBurger.classList.add('header__burger-line--opend');
    document.body.style.overflow = 'hidden';
    menuActive = true;
  } else {
    menu.classList.remove('header__nav--open');
    buttonBurger.classList.remove('header__burger-line--opend');
    document.body.removeAttribute('style');
    menuActive = false;
  }
}

function goLink(event) {
  if (event.target.matches('.nav__link') && menuActive === true) {
    menu.classList.remove('header__nav--open');
    buttonBurger.classList.remove('header__burger-line--opend');
    document.body.removeAttribute('style');
    menuActive = false;
  }
}

function activeForm(event) {
  if (event.target.closest('.button-inhert')  || event.target.closest('#order-project')) {
    callBackForm.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  if (event.target.matches('.form__close')) {
    callBackForm.removeAttribute('style');
    document.body.removeAttribute('style');
    inputName.classList.remove('form__input--error');
    inputPhone.classList.remove('form__input--error');
    event.preventDefault();
  }
  if (event.target.matches('.form__input')) {
    inputName.classList.remove('form__input--error');
    inputPhone.classList.remove('form__input--error');
  }
}

function bigWindowSize() {
  let widthOutput = window.innerWidth;
  if (widthOutput > 1200 && menuActive === true) {
    menu.classList.remove('header__nav--open');
    buttonBurger.classList.remove('header__burger-line--opend');
    document.body.removeAttribute('style');
    menuActive = false;
  }
}

function validateForm(event) {
  if (inputName.value.length === 0) {
    inputName.classList.add('form__input--error');
    event.preventDefault();
  }
  for (i = 0; i < inputPhone.value.length; i++) {
    if (inputPhone.value[i] == '_') {
      inputPhone.classList.add('form__input--error');
      event.preventDefault();
      break;
    }
  }
  if (inputPolicy.checked === false) {
    alert('Примите соглашение с Политикой обработки персональных данных');
    event.preventDefault();
  }
}
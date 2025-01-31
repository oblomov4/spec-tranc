const contentBox = document.querySelectorAll('.content__box');

const menuItem = document.querySelectorAll('.menu__item');

if (contentBox && menuItem) {
  menuItem.forEach((item, index) =>
    item.addEventListener('click', (e) => {
      document.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');

      document.querySelector('.activeBlock').classList.remove('activeBlock');

      contentBox[index].classList.add('activeBlock');
    }),
  );
}

let menuChoice = document.getElementById('menu-choice');

if (menuChoice) {
  menuChoice.onclick = (e) => {
    e.target.classList.toggle('show');
  };
}

//Открытие burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger) {
  burger.onclick = () => {
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}

//Работа с burger menu
const exit = document.querySelector('.burger__menu-exit');
const btnCall = document.querySelector('.burger__menu-btn');
const burgerLink = document.querySelectorAll('.burger__menu-a');
const activeLink = document.querySelector('.burger__menu-a.active-link');

const submenuBurger = document.querySelector('.submenu-burger');

if (exit && btnCall) {
  exit.onclick = () => {
    hiddenMenu(nav);
  };

  btnCall.onclick = () => {
    hiddenMenu(nav);
  };

  burgerLink.forEach((elem) => (elem.onclick = () => hiddenMenu(nav)));

  activeLink.onclick = (e) => {
    e.preventDefault();
    submenuBurger.classList.add('show');
  };
}

function hiddenMenu(elem) {
  elem.classList.remove('active');
  document.body.style.overflow = '';
}

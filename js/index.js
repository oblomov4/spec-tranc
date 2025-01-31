const contentBox = document.querySelectorAll('.content__box');

const menuItem = document.querySelectorAll('.menu__item');

menuItem.forEach((item, index) =>
  item.addEventListener('click', (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    document.querySelector('.activeBlock').classList.remove('activeBlock');

    contentBox[index].classList.add('activeBlock');
  }),
);

let menuChoice = document.getElementById('menu-choice');

menuChoice.onclick = (e) => {
  e.target.classList.toggle('show');
};

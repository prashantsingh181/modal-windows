'use strict';
import data from './data.js';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// setting content of modal for different domains
const setContent = function (domain) {
  document.getElementById('modal--heading').textContent = data[domain].fullform;
  document.getElementById('modal--content').textContent = data[domain].content;
};

// closing modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//opening modal
const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  if (e.target.id === 'button--html') {
    setContent('html');
  } else if (e.target.id === 'button--css') {
    setContent('css');
  } else if (e.target.id === 'button--js') {
    setContent('js');
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', e => {
    openModal(e);
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

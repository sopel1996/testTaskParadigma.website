const openModal = function (modalSelector) {
  modalOverlay = document.querySelector('.modalOverlay');
  modal = document.querySelector(modalSelector);
  modalOverlay.style.display = 'block';
  modal.style.display = 'block';
};
const closeModal = function (modalSelector) {
  modalOverlay = document.querySelector('.modalOverlay');
  modal = document.querySelector(modalSelector);
  modalOverlay.style.display = 'none';
  modal.style.display = 'none';
};
var modalOverlay = document.querySelector('.modalOverlay');
var closeBtn = document.querySelector('.closeModal');
let btns = [];
btns.push(document.querySelector('.openModal'));
modalOverlay.addEventListener('click', () => {
  closeModal('.modal-content');
});
closeBtn.addEventListener('click', () => {
  closeModal('.modal-content');
});
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal('.modal-content');
  });
});
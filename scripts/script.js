// Hamburger Menu
window.addEventListener('load', () => {
  const ham = document.querySelector('.header__icon');
  const nav = document.querySelector('.header__nav');

  ham.addEventListener('click', () => {
      nav.classList.toggle('header__nav--visible');
  });
});

// Contact form | No input
let vnaam = document.getElementById('vnaam');
vnaam.addEventListener('blur', () => {
  checkIfEmpty(vnaam);
});

let anaam = document.getElementById('anaam');
anaam.addEventListener('blur', () => {
  checkIfEmpty(anaam);
});

let email = document.getElementById('email');
email.addEventListener('blur', () => {
  checkIfEmpty(email);
});

let type = document.getElementById('type');
type.addEventListener('blur', () => {
  if(type.value == 'choosehere') {
    type.classList.add('form__invalid--visible')
  } else {
    type.classList.remove('form__invalid--visible')
  }
});

let subject = document.getElementById('subject');
subject.addEventListener('blur', () => {
  checkIfEmpty(subject);
});

function checkIfEmpty(element) {
  if(element.value == null || element.value == '') {
    element.classList.add('form__invalid--visible')
    document.getElementById('invalidFieldMessage').classList.add('form__invalid--message');
  } else {
    element.classList.remove('form__invalid--visible')
    document.getElementById('invalidFieldMessage').classList.remove('form__invalid--message');
  }
}
 
// Filter Overzicht

function showfilter() {
  const form = document.querySelector('form')
  form.classList.toggle('show-filter')

  const toggle = document.querySelector('.form__overzicht--button')
    for (const svg of toggle.children) {
      svg.classList.toggle('show')
    }
}
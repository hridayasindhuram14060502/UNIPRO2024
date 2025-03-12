const menuToggle = document.querySelector('.mobile__menu__toggle');
const menuBar = document.querySelector('.menu__bar');
const faqButtons = document.querySelectorAll('.faq-button');

let currentFaq = null; 
let currentButton = null;

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const faqId = button.getAttribute("data-faq");
    const faqAnswer = document.querySelector(`.answer-${faqId}`);

    if (currentFaq === faqAnswer) {
      faqAnswer.style.maxHeight = null;
      currentButton.querySelector("i").classList.remove('fa-minus');
      currentButton.querySelector("i").classList.add('fa-plus');
      currentFaq = null;
      currentButton = null;
    } else {
      if (currentFaq) {
        currentFaq.style.maxHeight = null;
        currentButton.querySelector("i").classList.remove('fa-minus');
        currentButton.querySelector("i").classList.add('fa-plus');
      }

      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      button.querySelector("i").classList.remove('fa-plus');
      button.querySelector("i").classList.add('fa-minus');

      currentFaq = faqAnswer;
      currentButton = button;
    }
  });
});

function toggleMenu() {
  menuBar.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

menuToggle.addEventListener('click', () => {
  toggleMenu();
});

const menuItems = menuBar.querySelectorAll('a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});
const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');
const btns = document.querySelectorAll('.faq-btn');
const headings = document.querySelectorAll('.faq-question .sub-heading');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('faq-answer_opened');
        btns[i].classList.toggle('faq-btn_rotated');
        headings[i].classList.toggle('faq-heading_active');
    })
}
// USING SELECTORS INSIDE THE ELEMENT
// ONLY 1 QUESTION CAN BE OPENED AT THE SAME TIME
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});


// TRAVERSING THE DOM 
// MULTIPLE QUESTIONS CAN BE OPENED
// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })

// })
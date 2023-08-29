const allQuestions = document.querySelectorAll('dt');

function handleToggle() {
    
    const isOpen = this.classList.contains('activeLink');

    allQuestions.forEach(ques => {
        ques.classList.remove('activeLink');
        ques.nextElementSibling.classList.remove('activePanel');
    });

    if(!isOpen) {
        this.classList.add('activeLink');
        this.nextElementSibling.classList.add('activePanel');
    }
}

allQuestions.forEach(question => question.addEventListener('click', handleToggle));


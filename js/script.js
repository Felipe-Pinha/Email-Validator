const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const error = document.querySelector('.error');

const errorClear = () => {
    error.innerHTML = ''
    error.style.display = 'none'
}

const validInput = () => {
    const emailValue = emailInput.value;

    if(emailValue === '') {
        error.innerHTML = '*Este campo é obrigatório!';
        error.style.display = "block";
        send = false
    } else if(!checkEmail(emailValue)) {
        error.innerHTML = '*Digite um email válido!';
        error.style.display = 'block';
        send = false;
    }
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validInput();
})

emailInput.addEventListener('focus', errorClear)

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
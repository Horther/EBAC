const form = document.getElementById('form-deposito');
const beneficiarioName = document.getElementById('beneficiario-name');
let formValid = false;

function validName(completeName) {
    const nameToArray = completeName.split(' ');
    return nameToArray.length >= 2;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const accountNumber = document.getElementById("account-number");
    const valueNumber = document.getElementById("value-number");
    const message = `Montante de: <b>${valueNumber.value}</b> depositado para o cliente <b>${beneficiarioName.value}</b> - conta <b>${accountNumber.value}</b>`;
    const errorMessage = `Insira o Nome Completo`
    formValid = validName(beneficiarioName.value);
    
    if(formValid){
        const containerSuccessMessage = document.querySelector('.success-message');
        containerSuccessMessage.innerHTML = message;
        containerSuccessMessage.style.display = 'block';


        beneficiarioName.value = '';
        accountNumber.value = '';
        valueNumber.value = '';

    } else {
        beneficiarioName.style.border = '1px solid red'

        const containerErrorMessage = document.querySelector('.error-message');
        containerErrorMessage.innerHTML = errorMessage;
        containerErrorMessage.style.display = 'block';
    }

    beneficiarioName.addEventListener('keyup', (e) => {
        console.log(e.target.value);
        formValid = validName(e.target.value)

        if(!formValid){
            beneficiarioName.classList.add('error');
            //beneficiarioName.style.border = '1px solid red'
            const containerErrorMessage = document.querySelector('.error-message');
            containerErrorMessage.style.display = 'block';
        } else {
            beneficiarioName.classList.remove('error');
            const containerErrorMessage = document.querySelector('.error-message');
            containerErrorMessage.style.display = 'none';
        }
    })
});


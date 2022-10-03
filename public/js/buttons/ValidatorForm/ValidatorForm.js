const validatorForm = {
    setErrorFor: function (input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    },
    setSuccessFor: function (input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    },
}

export const setErrorFor = validatorForm.setErrorFor;
export const setSuccessFor = validatorForm.setSuccessFor;





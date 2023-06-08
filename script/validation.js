const objects = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__input',
    submitButtonSelector: '.pop-up__edit',
    inactiveButtonClass: 'pop-up__edit_disabled',
    inputErrorClass: 'pop-up__input_invalid',

}

const showInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
};

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
};



const isValid = (formElement, inputElement, config) => {
    if (inputElement.checkValidity()) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleButtonState = (inputList, submitButton, config) => {

    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(config.inactiveButtonClass);
        submitButton.setAttribute('disabled', '');
    } else {
        submitButton.classList.remove(config.inactiveButtonClass);
        submitButton.removeAttribute('disabled');

    }
};

const setFormState = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    inputList.forEach((inputElement) => {
        hideInputError(formElement, config, inputElement);
    });
    toggleButtonState(submitButton, inputList, config);
}

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const submitButton = formElement.querySelector(config.submitButtonSelector);

    // toggleButtonState(inputList, submitButton, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, config);

            toggleButtonState(inputList, submitButton, config);
        });
    });
};


const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
     
        setEventListeners(formElement, config);
        
    });
};

enableValidation(objects);

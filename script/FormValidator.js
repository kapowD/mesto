// const showInputError = (formElement, inputElement, config) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     errorElement.textContent = inputElement.validationMessage;
//     inputElement.classList.add(config.inputErrorClass);
// };

// const hideInputError = (formElement, inputElement, config) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     errorElement.textContent = '';
//     inputElement.classList.remove(config.inputErrorClass);
// };

// const isValid = (formElement, inputElement, config) => {
//     if (inputElement.checkValidity()) {
//         hideInputError(formElement, inputElement, config);
//     } else {
//         showInputError(formElement, inputElement, config);
//     }
// };

// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => !inputElement.validity.valid);
// };

// const setEventListeners = (formElement, config) => {
//     const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//     const submitButton = formElement.querySelector(config.submitButtonSelector);


//     toggleButtonState(inputList, submitButton, config);
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             isValid(formElement, inputElement, config);
//             toggleButtonState(inputList, submitButton, config);
//         });
//     });
// };

// const toggleButtonState = (inputList, submitButton, config) => {

//     if (hasInvalidInput(inputList)) {
//         submitButton.classList.add(config.inactiveButtonClass);
//         submitButton.setAttribute('disabled', true);
//     } else {
//         submitButton.classList.remove(config.inactiveButtonClass);
//         submitButton.removeAttribute('disabled');
//     }
// };

// const enableValidation = (config) => {
//     const formList = Array.from(document.querySelectorAll(config.formSelector));
//     formList.forEach((formElement) => {

//         setEventListeners(formElement, config);

//     });
// };

// enableValidation(objects);



export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._config.inputErrorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(this._config.inputErrorClass);
    };

    _isValid(inputElement) {
        if (inputElement.checkValidity()) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => !inputElement.validity.valid);
    };

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);

        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        });
    };

    toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._submitButton.classList.add(this._config.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true);
        } else {
            this._submitButton.classList.remove(this._config.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
        });
        this._setEventListeners();
    }
}


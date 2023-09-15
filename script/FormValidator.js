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
        this._setEventListeners();
    }
}


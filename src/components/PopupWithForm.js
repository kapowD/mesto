import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, handlerSubmit) {
        super(popupSelector);

        this.handlerSubmit = handlerSubmit;
        this.submitButton = document.querySelector('.pop-up__edit');
        this.form = this.popup.querySelector('.pop-up__form');
        this.inputList = Array.from(this.popup.querySelectorAll('.pop-up__input'));
    }

    getInputValues() {
        const inputValues = {};
        this.inputList.forEach((inputElement) => {
            inputValues[inputElement.name] = inputElement.value;
        });
        return inputValues;
    }

    setInputValues(data) {

        this.inputList.forEach((inputElement) => {
            inputElement.value = data[inputElement.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();

        this.popup.addEventListener('submit', this.handlerSubmit);

    }

    closePopup() {
        super.closePopup();
        this.form.reset();

    }

}
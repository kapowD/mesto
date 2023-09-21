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
        // console.log(data);
        // console.log(this.inputList.map((el)=>{
        //     return [el.value, el.name, el.id];
        // }));
        this.inputList.forEach((inputElement) => {
            inputElement.value = data[inputElement.name];
        });
        // console.log(this.inputList.map((el)=>{
        //     return [el.value, el.name, el.id];
        //  }));
        // console.log(this.inputList);
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
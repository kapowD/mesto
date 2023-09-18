export default class Popup {

    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this.closePopupByOverlay = this.closePopupByOverlay.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }


    openPopup() {
        this.popup.classList.add('pop-up_opened'); //общая функция открытия попапа
        document.addEventListener('keydown', this._handleEscClose);
        this.popup.addEventListener('click', this.closePopupByOverlay);
        this.setEventListeners();
    }

    closePopup () {                             //общая функция закрытия
        this.popup.classList.remove('pop-up_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this.popup.removeEventListener('click', this.closePopupByOverlay);
    }

    _handleEscClose(event) {                              //закрытие по Esc

        if (event.key === 'Escape') {
            document.querySelector('pop-up_opened');
            this.closePopup();
        };
    };

    closePopupByOverlay(event) {                               //закрытие по клику

        document.querySelector('.pop-up_opened');

        if (event.target === event.currentTarget) {
            this.closePopup();
        };

    }

    setEventListeners() {

        this.closeButton = this.popup.querySelector('.pop-up__exit');
        this.closeButton.addEventListener('click', this.closePopup);

    }

}
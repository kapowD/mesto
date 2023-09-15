import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);

        this.zoomImage = this.popup.querySelector('.pop-up__image');
        this.zoomImageCaption = this.popup.querySelector('.pop-up__subtitle');
    };

    openPopup(cardData) {

        super.openPopup();

        this.zoomImage.src = cardData.link;
        this.zoomImageCaption.textContent = cardData.name;
        this.zoomImageCaption.alt = cardData.name;


    }

}
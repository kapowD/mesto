export class Card {
    constructor(cardData, tameplateSelector, popupOpen) {
        this._cardData = cardData;
        this._tameplateSelector = tameplateSelector;
        this._popupOpen = popupOpen;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._tameplateSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage = this._element.querySelector('.element__photo');
        this._elementTitle.textContent = this._cardData.name;
        this._elementImage.src = this._cardData.link;
        this._elementImage.alt = this._cardData.name;
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._addEventListeners();

        return this._element;
    }

    _handleLike() {
        this._likeButton.classList.toggle('element__like-button_active');
    }

    _handleDelete() {
        this._element.remove();
    }

    _addEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLike());
        this._deleteButton.addEventListener('click', () => this._handleDelete());
        this._elementImage.addEventListener('click', () => this._popupOpen(this._cardData));
    }
};

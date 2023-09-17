import { Card } from './Card.js';
import { initialCards, objects } from './constants.js'; // отследить за ипортом objects
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';

import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js"
// const elementTemplate = document.getElementById('elements-tameplate').content;
const elementsContainer = document.querySelector('.elements');
const editProfile = document.querySelector('.profile__edit-button');
const addCard = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.pop-up-edit');
const inputName = popupEdit.querySelector('.pop-up__input_type_name');
const inputDescription = popupEdit.querySelector('.pop-up__input_type_description');
const popupAdd = document.querySelector('.pop-up-add');
const inputPlace = popupAdd.querySelector('.pop-up__input_type_place');
const inputLink = popupAdd.querySelector('.pop-up__input_type_link');
// const popupSubmit = popupAdd.querySelector('.pop-up__edit');
const profileDescription = document.querySelector('.profile__description');
const profileName = document.querySelector('.profile__name');
const exitButton = document.querySelectorAll('.pop-up__exit');

const popups = document.querySelectorAll('.pop-up');
// popups.forEach(setPopupOverlayClose); // сделать общей с exitButton

const popupImage = document.querySelector('.pop-up-image');
const popupPhoto = popupImage.querySelector('.pop-up__image'); // 
const popupSubtitle = popupImage.querySelector('.pop-up__subtitle');


const popupEditValidation = new FormValidator(objects, popupEdit);
const popupAddValidation = new FormValidator(objects, popupAdd);
popupEditValidation.enableValidation();
popupAddValidation.enableValidation();


const editProfilePopup = new PopupWithForm('.pop-up-edit', submitEditProfileForm);


const addNewCard = new PopupWithForm('.pop-up-add', handlerAddCardSubmit);
addNewCard.setEventListeners();

const imagePopup = new PopupWithImage('.pop-up-image');

const profileInfo = new UserInfo('.profile__name', '.profile__description');
// console.log(profileInfo);

const openZoomImage = (cardData) => {
    imagePopup.openPopup(cardData);

}

const cardList = new Section({
    items: initialCards,
    renderer: (cardData) => {
        const card = new Card(cardData, '#elements-tameplate', openZoomImage);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
}, '.elements');

cardList.renderItems();

const profileFormElement = document.querySelector('.popup-edit-profile');
const cardFormElement = document.querySelector('.popup-add-card');


function openEditForm() {
    editProfilePopup.openPopup(); 
    const userData = profileInfo.getUserInfo();
    console.log(userData);
    editProfilePopup.setInputValues(userData);
};

function submitEditProfileForm(event) {
    event.preventDefault();

    profileInfo.setUserInfo({
        name: profileName.value,
        description: profileDescription.value
    });

    editProfilePopup.setEventListeners();
    editProfilePopup.closePopup();
}

function handlerAddCardSubmit(event) {                       //сохранение карточки
    event.preventDefault();
    const name = inputPlace.value;
    const link = inputLink.value;
    const inputs = Array.from(event.target.querySelectorAll('.pop-up__input'));
    const button = event.target.querySelector('.pop-up__edit');

    const cardData = {
        name: inputPlace.value,
        link: inputLink.value
    };

    const card = new Card(cardData, '#elements-tameplate', openZoomImage);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    addNewCard.closePopup();
    popupAddValidation.toggleButtonState();
}

editProfile.addEventListener('click', () => openEditForm());
addCard.addEventListener('click', () => addNewCard.openPopup());
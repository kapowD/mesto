
import '../pages/index.css';
import { Card } from '../components/Card.js';
import { initialCards, objects } from '../utils/constants.js'; 
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';

import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js"
const elementsContainer = document.querySelector('.elements');
const editProfile = document.querySelector('.profile__edit-button');
const addCard = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.pop-up-edit');
const inputName = popupEdit.querySelector('.pop-up__input_type_name');
const inputDescription = popupEdit.querySelector('.pop-up__input_type_description');
const popupAdd = document.querySelector('.pop-up-add');
const inputPlace = popupAdd.querySelector('.pop-up__input_type_place');
const inputLink = popupAdd.querySelector('.pop-up__input_type_link');
const profileDescription = document.querySelector('.profile__description');
const profileName = document.querySelector('.profile__name');
const popupImage = document.querySelector('.pop-up-image');



const popupEditValidation = new FormValidator(objects, popupEdit);
const popupAddValidation = new FormValidator(objects, popupAdd);
popupEditValidation.enableValidation();
popupAddValidation.enableValidation();


const editProfilePopup = new PopupWithForm('.pop-up-edit', submitEditProfileForm);
editProfilePopup.setEventListeners();

const addNewCard = new PopupWithForm('.pop-up-add', handlerAddCardSubmit);
addNewCard.setEventListeners();

const imagePopup = new PopupWithImage('.pop-up-image');

const profileInfo = new UserInfo({ profileName: '.profile__name', profileDescription: '.profile__description'}); // (ﾉ◕ヮ◕)ﾉ

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

function openEditForm() {
    editProfilePopup.openPopup(); 
    const userData = profileInfo.getUserInfo();
    editProfilePopup.setInputValues(userData);
};

function submitEditProfileForm(event) {
    event.preventDefault();

   profileInfo.setUserInfo(editProfilePopup.getInputValues())

    editProfilePopup.setEventListeners();
    editProfilePopup.closePopup();
}

function handlerAddCardSubmit(event) {                       //сохранение карточки
    event.preventDefault();
    addNewCard.getInputValues()

    const cardData = addNewCard.getInputValues();

    const card = new Card(cardData, '#elements-tameplate', openZoomImage);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    addNewCard.closePopup();
    popupAddValidation.toggleButtonState();
}

editProfile.addEventListener('click', () => openEditForm());
addCard.addEventListener('click', () => addNewCard.openPopup());
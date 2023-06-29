import { initialCards, objects } from './constants.js'; // отследить за ипортом objects
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
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

const popups = document.querySelectorAll(".pop-up");

exitButton.forEach((button) => {
    const popup = button.closest('.pop-up');
    button.addEventListener('click', () => closePopup(popup));
});

function openPopup(popup) {
    popup.classList.add('pop-up_opened');
    document.addEventListener('keydown', popupEscClose);


}
function closePopup(popup) {
    popup.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', popupEscClose);
}

editProfile.addEventListener('click', function () {
    openPopup(popupEdit);
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
})

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupEdit);
}
popupEdit.addEventListener('submit', handleFormSubmit);

// const createElement = (el) => {
//     const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
//     // const cardElement =  document.getElementById('elements-tameplate').content.querySelector('.element').cloneNode(true);
//     const titleElement = cardElement.querySelector('.element__title');
//     const imagePhoto = cardElement.querySelector('.element__photo');
//     titleElement.textContent = el.name;
//     imagePhoto.src = el.link;
//     imagePhoto.alt = el.name;

//     cardElement.querySelector('.element__image-open').addEventListener('click', () => {
//         openPopup(popupImage);
//         popupPhoto.src = el.link;
//         popupPhoto.alt = el.link;
//         popupSubtitle.textContent = el.name;

//     })
//     const deleteButton = cardElement.querySelector('.element__delete-button');
//     const likeButton = cardElement.querySelector('.element__like-button');
//     const handleDelete = () => {
//         cardElement.remove();
//     };
//     const handleLike = () => {
//         likeButton.classList.toggle('element__like-button_active');
//     };
//     deleteButton.addEventListener('click', handleDelete);
//     likeButton.addEventListener('click', handleLike);
//     return cardElement;
// };

const renderCardElement = (cardElement) => {
    elementsContainer.prepend(cardElement);
};

// initialCards.forEach((card) => {
//     renderCardElement(createElement(card));
// });


addCard.addEventListener('click', () => {
    openPopup(popupAdd);
});

function handleAddSubmit(evt) {
    evt.preventDefault();
    const name = inputPlace.value;
    const link = inputLink.value;
    const newPlaceItem = {
        name,
        link,
    };
    renderCardElement(createElement(newPlaceItem));

    closePopup(popupAdd);
    evt.target.reset();

    popupAddValidation.toggleButtonState();
    // editCardSubmitButtonState(popupSubmit)
}

function editCardSubmitButtonState(button) {
    button.classList.add('pop-up__edit_disabled');
    button.setAttribute('disabled', '');
}

popupAdd.addEventListener('submit', handleAddSubmit);

const popupEscClose = (evt) => {
    const popupOpen = document.querySelector('.pop-up_opened');
    if (evt.key === 'Escape') {
        closePopup(popupOpen);
    }
};

const popupOverlayClose = (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.currentTarget);
    }
};
function setPopupOverlayClose(popup) {
    popup.addEventListener("click", popupOverlayClose);
}

popups.forEach(setPopupOverlayClose); // сделать общей с exitButton

const popupImage = document.querySelector('.pop-up-image');
const popupPhoto = popupImage.querySelector('.pop-up__image'); // 
const popupSubtitle = popupImage.querySelector('.pop-up__subtitle');

const openImage = (data) => {
    openPopup(popupImage);
    popupPhoto.src = data.link;
    popupPhoto.alt = data.name;
    popupSubtitle.textContent = data.name;
}


const createElement = (data) => {
    const card = new Card(data, '#elements-tameplate', openImage);
    return card.generateCard();
}

initialCards.forEach((data) => {
    renderCardElement(createElement(data));

});

const popupEditValidation = new FormValidator(objects, popupEdit);
const popupAddValidation = new FormValidator(objects, popupAdd);
popupEditValidation.enableValidation();
popupAddValidation.enableValidation();

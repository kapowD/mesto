const elementTemplate = document.getElementById('elements-tameplate').content;
const elementsContainer = document.querySelector('.elements');

const editProfile = document.querySelector('.profile__edit-button');
const addCard = document.querySelector('.profile__add-button')

const popup = document.querySelector('.pop-up');
const editor = document.querySelector('.form');

const popupEdit = document.querySelector('.pop-up-edit');
const popupAdd = document.querySelector('.pop-up-add');

const inputName = document.querySelector('.pop-up__input_type_name');
const inputDescription = document.querySelector('.pop-up__input_type_description');
const popupSave = document.querySelector('.pop-up__edit')
const profileDescription = document.querySelector('.profile__description');
const profileName = document.querySelector('.profile__name');
const popupClose = document.querySelector('.pop-up__exit');








function openPopup(editPopup) {
    editPopup.classList.add('pop-up_opened'); //общая функция открытия попапа
}

function closePopup(editPopup) {
    editPopup.classList.remove('pop-up_opened');
}

editProfile.addEventListener('click', function () {
    openPopup(popup);
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;

})
popupClose.addEventListener('click', function () {
    closePopup(popup);
})
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popup);
}
editor.addEventListener('submit', handleFormSubmit);




const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//
const createElement = (el) => {
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    // const cardElement = elementTemplate.cloneNode(true);
    
    const titleElement = cardElement.querySelector('.element__title')
    const imageElement = cardElement.querySelector('.element__photo');

    titleElement.textContent = el.name;
    imageElement.src = el.link;
    imageElement.alt = el.name;
   
    
//
    const deleteButton = cardElement.querySelector('.element__delete-button');
    const likeButton = cardElement.querySelector('.element__like-button');


    const handleDelete = () => {
        console.log(':-)');
        cardElement.remove();
    };

    const handleLike = () => {
        console.log(':-)');
        likeButton.classList.toggle('element__like-button_active');
    };

 

    deleteButton.addEventListener('click', handleDelete);
    likeButton.addEventListener('click', handleLike);
//
    return cardElement;
};

const renderCardElement = (cardElement) => {
    elementsContainer.prepend(cardElement);
};

initialCards.forEach((card) => {

    const element = createElement(card);
    renderCardElement(element);
});

addCard.addEventListener('click', () =>{
    openPopup(popup);
})


//
// const deleteButton = (evt) => {
//     const delItem = evt.target.closest('.element');
//     delItem.remove();
// }






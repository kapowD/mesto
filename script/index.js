let editProfile= document.querySelector('.profile__edit-button');
let popup = document.querySelector('.pop-up');
let editor = document.querySelector('.form');
let inputName = document.querySelector('.pop-up__input_type_name');
let inputDescription = document.querySelector('.pop-up__input_type_description');
let popupSave = document.querySelector('.pop-up__edit')
let profileDescription = document.querySelector('.profile__description');
let profileName = document.querySelector('.profile__name');
let popupClose = document.querySelector('.pop-up__exit');
let avatar = document.querySelector('.profile__avatar');

function openPopup(editPopup){
    editPopup.classList.add('pop-up_opened');
}

function closePopup(editPopup){ 
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


openPopup(avatar);
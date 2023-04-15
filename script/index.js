let editProfile= document.querySelector('.profile__edit-button');
let popup = document.querySelector('.pop-up');
let editor = document.querySelector('.form');
let inputName = document.querySelector('.po-pup__input_name');
let inputDescription = document.querySelector('.po-pup__input_description');
let popupSave = document.querySelector('.pop-up__edit')
let profileDescription = document.querySelector('.profile__description');
let profileName = document.querySelector('.profile__name');
let popupClose = document.querySelector('.pop-up__exit');

editProfile.addEventListener('click', function () {
    popup.classList.add('pop-up_opened');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
   
})
popupClose.addEventListener('click', function () {
    popup.classList.remove('pop-up_opened');
})
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    popup.classList.remove('pop-up_opened');
}
editor.addEventListener('submit', handleFormSubmit);
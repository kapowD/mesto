let editProfile= document.querySelector('.profile__edit-button');
let popup = document.querySelector('.pop-up');
let editor = document.editor;
let myName = editor.name;
let about = editor.about;
let description = document.querySelector('.profile__description');
let profileName = document.querySelector('.profile__name');
let closeProfile = document.querySelector('.pop-up__exit');

editProfile.addEventListener('click', function () {
    popup.classList.add('pop-up__opened');
    myName.value = profileName .textContent;
    about.value = description.textContent;
   
})
closeProfile.addEventListener('click', function () {
    popup.classList.remove('pop-up__opened');
})
function handleFormSubmit(evt) {
    evt.preventDefault();
    if (myName.value.length > 0 && about.value.length > 0) {
        profileName.textContent = myName.value;
        description.textContent = about.value;
        popup.classList.remove('pop-up__opened');
    } else {
        myName.setAttribute("placeholder", 'Введите имя!');
        about.setAttribute("placeholder", 'Введите информацию о себе!');
    }
}
editor.addEventListener('submit', handleFormSubmit);
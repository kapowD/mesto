export default class UserInfo {

    constructor({ profileName, profileDescription }) {

        this.profileName = document.querySelector('.profile__name');
        this.profileDescription = document.querySelector('.profile__description');

        this.editPopup = document.querySelector('.pop-up-edit');
        this.inputList = Array.from(this.editPopup.querySelectorAll('.pop-up__input'));
    }

    getUserInfo() {

        return {
            name: this.profileName.textContent,
            description: this.profileDescription.textContent
        }
    }

    setUserInfo(data) {

        this.profileName.textContent = document.querySelector('.pop-up__input_type_name').value;
        this.profileDescription.textContent = document.querySelector('.pop-up__input_type_description').value;

    }



}

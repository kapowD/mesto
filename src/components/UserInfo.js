export default class UserInfo {

    constructor({ profileName, profileDescription }) {
        this.profileName = document.querySelector(profileName);
        this.profileDescription = document.querySelector(profileDescription);
    }

    getUserInfo() {

        return {
            name: this.profileName.textContent,
            description: this.profileDescription.textContent
        }
    }

    setUserInfo(data) {
        this.profileName.textContent = data.name;
        this.profileDescription.textContent = data.description;
    }



}


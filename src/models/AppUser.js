
class AppUser {

    id;
    userName;
    password;
    role;

    constructor(id, userName, password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }
}

export default AppUser;
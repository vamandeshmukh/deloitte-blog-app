
class AppUser {

    id;
    userName;
    password;
    role;

    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
    }
}

export default AppUser;
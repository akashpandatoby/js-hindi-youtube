class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password}akash`
    }

    set password(value){
        this._password = value
    }
}

const akash = new User("akash@.ai", "abc")
console.log(akash.email);
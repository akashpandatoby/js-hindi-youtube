function setUsername(Username){
    // complex DB calls
    this.Username = Username
    console.log("called");
}

function createUser(user, email, password){
    setUsername.call(this, user)
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
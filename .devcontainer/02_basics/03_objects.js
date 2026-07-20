//  singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Akash",
    "full name": "Akash Panda",
    [mySym]: "mykey1",
    age: 18,
    location: "kanpur",
    email: "akash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "akash@facebook.com"
// Object.freeze(JsUser)
JsUser.email = "akash@twitter.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


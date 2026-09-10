// let myName = "akash" 
// let myChannel = "chai"

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.akash = function(){
    console.log(`akash is present in all objects`);
}

Array.prototype.heyakash = function(){
    console.log(`Akash says hello`)
}
// heroPower.akash()
// myHeros.akash()
// myHeros.heyakash()
// heroPower.heyakash()


// inheritance

const User = {
    name: "chai",
    mail: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurcode     "


String.prototype.truelength = function(){
       console.log(`${this}`);
       console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.truelength()
"akash".truelength()
"icetea".truelength()
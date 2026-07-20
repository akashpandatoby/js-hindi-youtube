// const tinderUser = new Objects()
const tinderUser = {}

const tinderUserid = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Akash",
            lastName: "Panda"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "d" }
const obj4 = { 5: "a", 6: "d" }

// const obj3 = { obj1, obj2, }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const courses = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Akash"
}

// courses.courseInstructor

const {courseInstructor: instructor} = courses
console.log(instructor);


// {
//     "name": "Akash",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


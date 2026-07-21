
function sayMyName(){
console.log("A");
console.log("K");
console.log("A");
console.log("S");
console.log("H");
}


// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please provide a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Akash"))
// console.log(loginUserMessage("Akash"))

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Akash",
    price: 199
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({username: "Sam", 
    price: 399
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


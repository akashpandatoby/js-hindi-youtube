const myNums = [1, 2, 3,]

// const myTotal = myNums.reduce(function (acc, currval) { 
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

 console.log(myTotal);

 const shoppingCart = [
     {
         itemName: "js course",
            price: 999
     },
     {
         item: "python course",
            price: 1999
     },
         { itemName: "mobile dev course",
            price: 5999

         },
         { 
            itemName: "data science course",
            price: 12999
         },
 ]


 shoppingCart.reduce(( acc, item) => acc + item.price, 0)

 const priceTopay = shoppingCart.reduce((acc, item) => acc + item.
 price, 0)

 console.log(priceTopay);
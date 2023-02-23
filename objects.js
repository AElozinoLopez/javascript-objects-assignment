// All Exercises are captured in the index.html page for easy reference.

// Exercise 1
const address = {
    street: '20 Afolabi Street Okota',
    city: 'lagos',
    zipcode: 23423
}

// function showAddress(address) {
//     for (let key in address) {
//         console.log(key, ' : ' , address[key]);
//     }
// }

// showAddress(address);




// Exercise 2
// const address = {
//     street: '20 Afolabi Street Okota',
//     city: 'lagos',
//     zipcode: 23423
// }

// using factory function
// function showAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode
//     }
// }

// const myAddress = showAddress('20 Afolabi Street Okota', 'Lagos',  23423);
// console.log(myAddress);


// using constructor function
// function ShowAddress (street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// const myAddress = new ShowAddress('20 Afolabi Street Okota', 'lagos',  23423);
// console.log(myAddress);



// Exercise 3
function ShowAddress (street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// The first address
const address1 = new ShowAddress('57 Tapa Street Surulere', 'Lagos',  123456);

// The second address
const address2 = new ShowAddress('3 Jubrila Street, Surulere', 'Lagos',  234567);


// Funtion1

function areEqual(address1, address2) {
    const keys1 = Object.keys(address1);
    const keys2 = Object.keys(address2);

    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (address1[key] !== address2[key]) {
        return false;
      }
    }
    return true;
  
}

areEqual(address1, address2);
// Using Lodash
// _.isEqual(address1, address2);  //Just checking 

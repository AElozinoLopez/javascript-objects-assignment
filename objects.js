// Exercise 1
// const address = {
//     street: '20 Afolabi Street Okota',
//     city: 'lagos',
//     zipcode: 23423
// }

// function showAddress(address) {
//     for (let key in address) {
//         console.log(key, ' : ' , address[key]);
//     }
// }

// showAddress(address);




// Exercise 2
const address = {
    street: '20 Afolabi Street Okota',
    city: 'lagos',
    zipcode: 23423
}

// using factory function
// function showAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode
//     }
// }

// const myAddress = showAddress('20 Afolabi Street Okota', 'lagos',  23423);

// console.log(myAddress);


// using constructor function
function showAddress (street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

const myAddress = new showAddress('20 Afolabi Street Okota', 'lagos',  23423);
console.log(myAddress);
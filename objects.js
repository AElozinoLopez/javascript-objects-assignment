// Exercise 1
const address = {
    street: '20 Afolabi Street Okota',
    city: 'lagos',
    zipcode: 23423
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);
// console.log(address);
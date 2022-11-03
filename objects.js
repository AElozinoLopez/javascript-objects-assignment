// Exercise 1
const address = {
    street: '20 Afolabi Street Okota',
    city: 'lagos',
    zipcode: 23423
}

function showAddress(address) {
    for (let key in address) {
        console.log(address);
    }
}

console.log(address);
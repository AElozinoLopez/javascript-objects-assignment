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


// Funtion1 - areEqual

// function areEqual(address1, address2) {
//     const keys1 = Object.keys(address1);
//     const keys2 = Object.keys(address2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }
//     for (let key of keys1) {
//       if (address1[key] !== address2[key]) {
//         console.log(false);
//       }
//       else {
//         console.log(true);
//       }
//     }
// }

// areEqual(address1, address2);

//FUnction2 - areSame

// function areSame(address1, address2) {
//   return ( address1 === address2 ? true : false);
// }

// console.log(areSame(address1, address2));



// EXERCISE4

// const blogPost = {
//   title: "The Beauty of Flowers",
//   body: `FLowers come in variety of shapes, colors and sizes.
//           Their functions vary from improving the quality of
//           the air around us as well as detoxifying the environment,
//           to name a few. Examples include: Snake plant, Dunkin, Cudlin, African Bamble.`,
//   author: "Elozino Lopez",
//   views: 4000000,
//   comments : {
    
//     author: "Shapson",
//     body: "Nice piece. Which flower detoxifies?",
//     // author: "Faruq",  // Has to be placed in another object
//     // body: "Bros, leave flower alone abeg, you no be oyinbo! lol..." // Has to be placed in another object
//   },
//   isLive: "False"
// }

// for (let key in blogPost) {
//   console.log(blogPost[key]);
// }



// EXERCISE 5

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

// i. Adding The Word "GO" To Languages
programming.languages[3] = "Go";

// ii. Changing the diffulty to the value of 7
programming.difficulty = 7;

// iii. Using the delete keyword
delete programming.jokes

// iv. The commmand to add a new key 
programming.isFun = "True";

// v. Looping Over The Array
for (let index of languages) {
  console.log(languages);
}

// for (let key in programming) {
//   console.log(programming[key]);
// }




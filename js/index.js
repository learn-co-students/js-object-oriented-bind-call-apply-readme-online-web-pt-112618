
// Bind Call Apply
// Alternate Ways to Invoke Functions

// function greet() {
//     console.log(`my name is ${this.name}, hi!`);
// }
//
// greet(); // my name is , hi!
//
// let person = {
//     name: 'Bob',
//     greet: greet
// };

// person.greet(); // my name is Bob, hi!

// function greet(customerOne, customerTwo) {
//     console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// }
//
// let sally = { name: 'Sally' };
//
// greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

// greet.apply(sally, ['Terry', 'George'])
// Hi Terry and George, my name is Sally!

//EXAMPLE 2
// let sally = { name: 'Sally' };

// function greet(customer) {
  // console.log(`Hi ${customer}, my name is ${this.name}!`)
// }

// let newGreet = greet.bind(sally); // newGreet is context-bound to sally

// newGreet('Bob');
// Hi Bob, my name is Sally!

// greet('Bob');
// Hi Bob, my name is !

// greet.bind(sally)('Bob');
// Hi Bob, my name is Sally!

// EXAMPLE 3
// function hello(person) {
//   console.log(`Hello ${person}, welcome to ${this.place}!`)
// }
//
// let disney = { place: 'Disney'};
//
// hello.call(disney, 'Jason');
//
// let welcome = hello.bind(disney);
//
// welcome('Greg');
// hello.bind(disney)('Kate');

// EXAMPLE 4
// function shoeStock(shoe1, shoe2, shoe3) {
//   console.log(`Today at ${this.store}, ${shoe1} will be available at noon, ${shoe2} will be available at 2pm and at 6pm we will release ${shoe3}.`)
// }
//
// let nike = { store: 'Nike'};
//
// shoeStock.call(nike, 'Jordan 4', 'Fear Pack', 'Lebron James 2');
//
// shoeStock.apply(nike, ['Addidas NMD', 'Retro Jordans', 'Air Max 95'])
//
// let newShoes = shoeStock.bind(nike);
//
// newShoes('Jordan 4', 'Fear Pack', 'Lebron James 2');
//
// shoeStock.bind(nike)('Addidas NMD', 'Retro Jordans', 'Air Max 95')




// bind(), call(), and apply() in JavaScript code
// class Event {
//   constructor(title, keywords) {
//     this.title = title;
//     this.keywords = keywords;
//   }
// }
//
// class User {
//   constructor(name, interests) {
//     this.name = name;
//     this.interests = interests;
//   }
//
//   matchInterests(event) {
//     return event.keywords.some(function(word) {
//       return this.interests.includes(word);
//     }.bind(this)); // added to the and of the callback function
//     // Or Using Arrow Functions
//     return event.keywords.some(word => this.interests.includes(word));
//   }
// }
//
// let billy = new User('billy', ['music', 'art', 'movies']);
// let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
//
// billy.matchInterests(freeMusic);


// Call
function Product(name, price) {
  this.name = name;
  this.price = price;
};

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food'
}

console.log(new Food('cheese', 5).name);

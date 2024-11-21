// const team = [
//   'John',
//   'Jane',
//   'Doe',
//   'Smith',
//   'Alex',
// ];

// const staff = [
//   {
//     name: 'John',
//     position: 'Developer',
//   },
//   {
//     name: 'Anna',
//     position: 'Designer',
//   },
// ];

// function alphabetizeTeam(team) {
//   return [...team].sort();
// }

// console.log(alphabetizeTeam(team));

// console.log(alphabetizeTeam(staff));

// function getTeamNames(team) {
//   return team.map((member) => member.name);
// }

// console.log(getTeamNames(staff));

// function getTeamPositions(team) {
//   return team.map((member) => member.position);
// }

// console.log(getTeamPositions(staff));

// function filterDevelopers(team) {
//   return team.filter(m => m.position === 'Developer');
// }

// console.log(filterDevelopers(staff));

// const sections = ['shipping', 'billing', 'payment'];

// function displayShipping(sections) {
//   if (sections.indexOf('shipping') > -1) {
//     return true;
//   }

//   return false;
// }

// console.log(displayShipping(sections));


// function displayShipping_Second(sections) {
//   return sections.includes('shipping');
// }

// console.log(displayShipping_Second(sections));

// function removeItem(items, removable) {
//   const index = items.indexOf(removable);
//   items.splice(index, 1);
//   return items;
// }

// console.log(removeItem(sections, 'shipping'));

// function removeItem_Second(items, removable) {
//   const index = items.indexOf(removable);
//   return items.slice(0, index).concat(items.slice(index + 1));
// }

// console.log(removeItem_Second(sections, 'shipping'));

// function removeItem_Third(items, removable) {
//   const index = items.indexOf(removable);
//   return [...items.slice(0, index), ...items.slice(index + 1)];
// }

// console.log(removeItem_Third(removeItem_Second(sections, 'shipping'), 'billing'));

// const cart = [{
//   name: 'The Foundation Trilogy',
//   price: 19.99,
//   discount: false,
// }, {
//   name: 'Godel, Escher, Bach',
//   price: 15.99,
//   discount: false,
// }, {
//   name: 'Red Mars',
//   price: 5.99,
//   discount: true,
// }];

// const reward = {
//   name: 'Guide to Science Fiction',
//   discount: true,
//   price: 0,
// };

// function addFreeGift(cart) {
//   if (cart.length > 2) {
//     cart.push(reward);
//     return cart;
//   }

//   return cart;
// }

// console.log(addFreeGift(cart));

// function summarizeCart(cart) {
//   const cartWithReward = addFreeGift(cart);
//   const discountable = cart.filter(item => item.discount);
//   if (discountable.length > 1) {
//     return {
//       error: 'Can only have one discount',
//     };
//   }

  
//   return {
//     discounts: discountable.length,
//     // items: cartWithReward.length,
//     // cart: cartWithReward,
//   };
// }

// console.log(summarizeCart(cart));

function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}

const bill = getBill({
  name: 'Room Cleaning',
  price: 30,
});

function twoWeeksFromNow() {
  const today = new Date();
  const numberOfDays = 14;
  today.setDate(today.getDate() + numberOfDays);
  return today.toDateString();
}

function calculateTotal(price) {
  const taxRate = 0.1;
  return price + (price * taxRate);
}

function displayBill(bill) {
  return `The ${bill.name} bill is ${bill.total} and is due on ${bill.due}`;
}

console.log(displayBill(bill));

const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

function addBookDefaults(book, defaults) {
  const fields = Object.keys(defaults);
  // const bookFields = Object.keys(book);
  // console.log(fields);
  // console.log(bookFields);

  const updated = {};

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    updated[field] = book[field] || defaults[field];
  }
}

addBookDefaults(book, defaults);

let filters = new Map(
  [
    ['author', ''],
    ['title', ''],
    ['year', 2017],
    ['rating', null],
  ]
);

console.log(filters);r
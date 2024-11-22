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

// function getBill(item) {
//   return {
//     name: item.name,
//     due: twoWeeksFromNow(),
//     total: calculateTotal(item.price),
//   };
// }

// const bill = getBill({
//   name: 'Room Cleaning',
//   price: 30,
// });

// function twoWeeksFromNow() {
//   const today = new Date();
//   const numberOfDays = 14;
//   today.setDate(today.getDate() + numberOfDays);
//   return today.toDateString();
// }

// function calculateTotal(price) {
//   const taxRate = 0.1;
//   return price + (price * taxRate);
// }

// function displayBill(bill) {
//   return `The ${bill.name} bill is ${bill.total} and is due on ${bill.due}`;
// }

// console.log(displayBill(bill));

// const defaults = {
//   author: '',
//   title: '',
//   year: 2017,
//   rating: null,
// };

// const book = {
//   author: 'Joe Morgan',
//   title: 'Simplifying JavaScript',
// };

// function addBookDefaults(book, defaults) {
//   const fields = Object.keys(defaults);
//   // const bookFields = Object.keys(book);
//   // console.log(fields);
//   // console.log(bookFields);

//   const updated = {};

//   for (let i = 0; i < fields.length; i++) {
//     const field = fields[i];
//     updated[field] = book[field] || defaults[field];
//   }
// }

// addBookDefaults(book, defaults);

// let filters = new Map(
//   [
//     ['author', ''],
//     ['title', ''],
//     ['year', 2017],
//     ['rating', null],
//   ]
// );

// console.log(filters);

// const filters = new Map().set('색상', '검정색')
//                          .set('견종', '래브라도레트리버');

// function checkFilters(filters) {
//   for (const entry of filters) {
//     console.log(entry);
//   }
// }

// // checkFilters(filters);

// filters.entries();

// const dogs = [
//   { 이름: '맥스', 크기: '소형견', 견종: '보스턴테리어', 색상: '검정색' },
//   { 이름: '도니', 크기: '대형견', 견종: '래브라도레트리버', 색상: '검정색' },
//   { 이름: '섀도', 크기: '중형견', 견종: '래브라도레트리버', 색상: '갈색' },
// ];

// function getColors(dogs) {
//   return dogs.map(dog => dog['색상']);
// }

// console.log(getColors(dogs));

// function getColorsFilter(attr) {
//   const unique = [];

//   for (const check of attr) {
//     if (!unique.includes(check)) {
//       unique.push(check);
//     }
//   }

//   return unique;
// }

// console.log(getColorsFilter(getColors(dogs)));

// function solution(n, t) {
//   var answer = n;
//   for (let i = 0; i < t; i++) {
//     answer = answer * 2;
//   }
//   return answer;
// }

// console.log(solution(2, 10));

// function solution(my_string) {
//   var answer = '';
//   var strArr = my_string.split('');
//   var size = strArr.length - 1;
//   for (var i = 0; i < strArr.length; i++) {
//     answer += strArr[size];
//     size--;
//   }

//   return answer;
// }

// console.log(solution('world'));

// function solution(my_string) {
//   var answer = []; // Initialize an array

//   for (var i = my_string.length - 1; i >= 0; i--) {
//     answer.push(my_string[i]); // Push characters in reverse order
//   }

//   return answer.join(''); // Convert array back to a string
// }

// function solution(my_string) {
//   var answer = ''; // Initialize the answer string

//   for (var i = my_string.length - 1; i >= 0; i--) { // Start from the last character
//     answer += my_string[i]; // Add the current character to the answer
//   }

//   return answer; // Return the reversed string
// }

// function solution(num_list) {
//   var answer = [0, 0];
//   for (let i = 0; i < num_list.length; i++) {
//     if (num_list[i] % 2 === 0) answer[0]++;
//     if (num_list[i] % 2 === 1) answer[1]++;
//   }
//   return answer;
// }

// console.log(solution([12, 77, 38, 41, 53, 92, 85])); // [2, 5]

// function solution(slice, n) {
//   var answer = Math.ceil(n / slice);
//   return answer;
// }

// console.log(solution(7, 10));

// function solution(array, n) {
//   var answer = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === n) answer++;
//   }

//   return answer;
// }

// function solution(array, height) {
//   var answer = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= height) answer++;
//   }
//   return answer;
// }

// function solution(hp) {
//   var answer = 0;
//   const generalAnt = 5;
//   const soldierAnt = 3;
//   const workerAnt = 1;

//   while (hp > 0) {
//     if (hp >= generalAnt) {
//       hp -= generalAnt;
//       answer++;
//     } else if (hp >= soldierAnt) {
//       hp -= soldierAnt;
//       answer++;
//     } else if (hp >= workerAnt) {
//       hp -= workerAnt;
//       answer++;
//     }
//   }
//   return answer;
// }

// function event(x) {
//   const employee = {
//     name: 'John',
//     position: x,
//   };

//   if (!employee.position) {
//     return '포지션이 없습니다. 포지션을 입력해주세요.';
//   }

//   return `포지션은 ${employee.position} 입니다.`;
// }

// console.log(event('developer'));

const employee = {
  name: 'Eric',
  equimentTraining: true,
};

function listCerts(employee) {
  if (employee.equimentTraining) {
    employee.certificate = ['Equipment'];

    delete employee.equimentTraining;
  }

}

function checkAuthorization() {
  if (!employee.equimentTraining) {
    return 'Not Authorized';
  }

  return `hi ${employee.name}`;
}

listCerts(employee);
console.log(checkAuthorization(employee));
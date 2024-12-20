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

// const employee = {
//   name: 'Eric',
//   equimentTraining: true,
// };

// function listCerts(employee) {
//   if (employee.equimentTraining) {
//     employee.certificate = ['Equipment'];

//     delete employee.equimentTraining;
//   }

// }

// function checkAuthorization() {
//   if (!employee.equimentTraining) {
//     return 'Not Authorized';
//   }

//   return `hi ${employee.name}`;
// }

// listCerts(employee);
// console.log(checkAuthorization(employee));

// const userConfig = {
//   images: [],
// }

// function getImg(userConfig) {
//   let img = 'default.png';
//   if (userConfig.images) {
//     img = userConfig.images[0];
//   }
//   return img;
// }
// const img = getImg(userConfig);
// console.log(img);

// function capitalize(name) {
//   return name[0].toUpperCase() + name.slice(1);
// }

// console.log(capitalize('john'));

// function greet(name, callback) {
//   const capitalizedName = callback(name);
//   console.log(`Hello ${capitalizedName}`);
// }

// greet('john', capitalize);

// const prices = ['1.0', '2.15'];

// const formattedPrices = [];

// for (let i = 0; i < prices.length; i++) {
//   formattedPrices.push(parseFloat(prices[i]));
// }

// console.log(prices);

// console.log(formattedPrices);

// const prices = ['1,0', 'negotiable', '2.15'];

// const formattedPrices = [];

// for (let i = 0; i < prices.length; i++) {
//   const price = parseFloat(prices[i]);
//   if (price) {
//     formattedPrices.push(price);
//   }
// }

// console.log(prices);

// console.log(formattedPrices);

const team = [
  {
    name: 'melinda',
    position: 'developer',
    address : {
      city: 'seoul',
      country: 'korea',
    }
  },
  {
    name: 'john',
    position: 'designer',
  },
  {
    name: 'katy',
    position: 'manager',
  },
  {
    name: 'bob',
    position: 'developer',
  },
  {
    name: 'anna',
    position: 'designer',
  }
];

const copy = [];

// for (let i = 0; i < team.length; i++) {
//   const member = team[i];
//   if (member.position === 'developer') {
//     copy.push(member);
//   }
// }

// for (let i = 0; i < team.length; i++) {
//   const member = team[i];
//   if (member.position === 'developer') {
//     const memberCopy = {...member};
//     copy.push(memberCopy);
//   }
// }

// for (let i = 0; i < team.length; i++) {
//   const member = team[i];
//   if (member.position === 'developer') {
//     copy.push(Object.assign({}, member));
//   }
// }

// copy[0].name = 'honggildong';
// copy[0].address.city = 'busan';

// console.log(team);

// console.log(copy);

// function solution(array) {
//   var answer = 0;
//   const meddleArray = array.sort((a, b) => a - b);
//   answer = meddleArray[Math.floor(meddleArray.length / 2)];
//   return answer;
// }

// console.log(solution([2, 3, 1, 5, 4])); // 3

const band = [
  {
    name: 'corbett',
    instrument: 'guitar',
  },
  {
    name: 'evan',
    instrument: 'guitar',
  },
  {
    name: 'sean',
    instrument: 'bass',
  },
  {
    name: 'brett',
    instrument: 'drums',
  },
];

// const instruments = [];

// for (let i = 0; i < band.length; i++) {
//   const instrument = band[i].instrument;
//   instruments.push(instrument);
// }

const getInstument = (member => member.instrument);

// for (let i = 0; i < band.length; i++) {
//   instruments.push(getInstument(band[i]));
// }

const instruments = band.map(getInstument);

// console.log(instruments);

// function solution(n) {
//   var answer = [];
//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 1) {
//       answer.push(i);
//     }
//   }
//   return answer;
// }

// console.log(solution(10));

// function solution(n) {
//   var answer = 0;
//   return answer = Math.ceil(n / 7);
// }

// console.log(solution(15));

// function solution(price) {
//   var answer = 0;
//   if (price < 100000) answer = price;
//   if (price >= 100000) answer = Math.floor(price * 0.95);
//   if (price >= 300000) answer = Math.floor(price * 0.90);
//   if (price >= 500000) answer = Math.floor(price * 0.80);
//   return answer;
// }

// console.log(solution(100010));

// function solution(money) {
//   var answer = [0, 0];
//   while (money > 0) {
//     if (money >= 5500) {
//       answer[1] = money - 5500;
//       money = money - 5500;
//       answer[0]++;
//     } else {
//       answer[1] = money;
//       break;
//     }
//   }
//   return answer;
// }

// console.log(solution(15000));


// const instructorsD = [
//   {
//     name: '짐',
//     libraries: ['미디어교육정보 도서관'],
//   },
//   {
//     name: '새라',
//     libraries: ['기념 도서관', '대학 도서관'],
//   },
//   {
//     name: '엘리엇',
//     libraries: ['중앙 도서관'],
//   }
// ];

// let memorialInstructor = null;

// for (let i = 0; i < instructors.length; i++) {
//   if (instructors[i].libraries.includes('기념 도서관')) {
//     memorialInstructor = instructors[i].name;
//   }
// }

// const librarian = instructors.find(instructors => instructors.libraries.includes('우주 도서관')) || {librarian: '없음'};

// console.log(librarian);

// const findByLibrary = library => instructors => instructors.libraries.includes(library);

// const librarian = instructorsD.find(findByLibrary('기념 도서관'));

// console.log(librarian);

// function solution(strlist) {
//   var answer = [];
//   for (let i = 0; i < strlist.length; i++) {
//     answer.push(strlist[i].length);
//   }
//   return answer;
// }

// function solution(rsp) {
//   var answer = '';
//   var rsp = rsp.split('');
//   for (let i = 0; i < rsp.length; i++) {
//     if (rsp[i] == 2) {
//       answer += '0';
//     } else if (rsp[i] == 0) {
//       answer += '5';
//     } else {
//       answer += '2';
//     }
//   }
//   return answer;
// }

// console.log(solution('2'));

// function solution(my_string) {
//   var answer = '';
//   var strArr = my_string.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].charCodeAt() >= 65 && strArr[i].charCodeAt() <= 90) {
//       answer += strArr[i].toLowerCase();
//     } else {
//       answer += strArr[i].toUpperCase();
//     }
//   }
//   return answer;
// }
// function solution(arr) {
//   var answer = [];

//   if (arr.length === 0) {
//     answer.push(-1);
//     return answer;
//   }

//   if (arr.length === 1) {
//     answer.push(-1);
//     return answer;
//   }

//   var sortedArr = [...arr].sort((a, b) => a - b);
//   var popValue = sortedArr.shift();

//   let smallestRemoved = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (popValue !== arr[i] || smallestRemoved) {
//       if (arr[i] === 10) {
//         answer.push(-1);
//       } else {
//         answer.push(arr[i]);
//       }
//     } else {
//       if (popValue === 10) {
//         answer.push(-1);
//       }
//       smallestRemoved = true;
//     }
//   }

//   return answer;
// }
// function solution(arr) {
//   var answer = [];

//   if (arr.length === 0) {
//     answer.push(-1);
//     return answer;
//   }

//   if (arr.length === 1) {
//     answer.push(-1);
//     return answer;
//   }

//   var sortedArr = [...arr].sort((a, b) => a - b);
//   var popValue = sortedArr.shift();

//   let smallestRemoved = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (popValue !== arr[i] || smallestRemoved) {

//         answer.push(arr[i]);

//     } else {

//       smallestRemoved = true;
//     }
//   }

//   if (answer.length === 0) {
//     return [-1];
//   }

//   return answer;
// }

// console.log(solution([]));

// function solution(a, b) {
//   var answer = 0;
//   for (let i = 0; i < a.length; i++) {
//     answer += a[i] * b[i];
//   }
//   return answer;
// }

// function solution(arr)
// {
//     var answer = [];
//     let cnt = 0;
//     while (arr.length > cnt) {
//         if (arr[cnt] !== arr[cnt + 1]) {
//             answer.push(arr[cnt]);
//             cnt++;
//         } else {
//             cnt++;
//         }
//     }
//     return answer;
// }

// console.log(solution([1, 1, 3, 3, 0, 1, 1]));

// function solution(array, commands) {
//   var answer = [];
//   for (let i = 0; i < commands.length; i++) {
//     const start = commands[i][0] - 1;
//     const end = commands[i][1];
//     const target = commands[i][2] - 1;
//     const sliced = array.slice(start, end);
//     const sorted = sliced.sort((a, b) => a - b);
//     answer.push(sorted[target]);
//   }
//   return answer;
// }

// function solution(number) {
//   var answer = 0;
//   for (let i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//       for (let k = j + 1; k < number.length; k++) {
//         if (number[i] + number[j] + number[k] === 0) {
//           answer++;
//         }
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
// const arr = [12, 11, 13, 5, 6];

// const bubbleSort = (arr) => {
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }

//   return arr;
// }

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let comparedValue = arr[i];
//     let minIdx = i - 1;

//     while (minIdx >= 0) {
//       if (arr[minIdx] > comparedValue) {
//         arr[minIdx + 1] = arr[minIdx];
//         minIdx--;
//       } else {
//         break;
//       }
//     }

//     arr[minIdx + 1] = comparedValue;
//   }

//   return arr;
// }

// console.log(insertionSort(arr));

// const binarySearch = (arr, search) => {
//   let lower = 0;
//   let upper = arr.length - 1;

//   while (lower <= upper) {
//     let mid = Math.floor((upper + lower) / 2);

//     valueMid = arr[mid];

//     if (search === valueMid) {
//       return mid + 1;
//     } else if (search < valueMid) {
//       upper = mid - 1;
//     } else if (search > valueMid) {
//       lower = mid + 1;
//     }
//   }
// }

// const sortedArr = bubbleSort(arr);
// console.log(sortedArr);
// console.log(binarySearch(sortedArr, 5));


// function stack() {
//   const dataStore = [];
//   let top = -1;

//   return {
//     push(element) {
//       dataStore[++top] = element;
//     },

//     pop() {
//       if (top === -1) { return undefined; }
//       return dataStore[top--];
//     },

//     isEmpty() {
//       return top === -1;
//     },

//     peek() {
//       if (this.isEmpty()) { return undefined; }
//       return dataStore[top];
//     },

//     size() {
//       return top + 1;
//     },

//     printStack() {
//       if (this.isEmpty()) {
//         console.log("Stack is empty.");
//         return;
//       }
//       let stackElements = "";
//       for (let i = 0; i <= top; i++) {
//         stackElements += items[i] + (i < top ? ", " : "");
//       }
//       console.log(stackElements);
//     }
//   };
// }

// const stack1 = stack();

// stack1.push(1);
// stack1.push(2);
// stack1.push(3);

// console.log(stack1.pop());
// console.log(stack1.pop());

// function Queue() {
//   const dataStore = [];
//   let front = 0;
//   let rear = -1;

//   return {
//     enqueue(element) {
//       dataStore[++rear] = element;
//     },

//     dequeue() {
//       if (front > rear) {
//         return undefined;
//       }
//       return dataStore[front++];
//     },

//     peek() {
//       if (this.isEmpty()) {
//         return undefined;
//       }
//       return dataStore[front];
//     },

//     isEmpty() {
//       return front > rear;
//     },

//     size() {
//       return rear - front + 1;
//     },

//     printQueue() {
//       if (this.isEmpty()) {
//         console.log("Queue is empty.");
//         return;
//       }
//       let queueElements = "";
//       for (let i = front; i <= rear; i++) {
//         queueElements += dataStore[i] + (i < rear ? ", " : "");
//       }
//       console.log(queueElements);
//     }
//   };
// }

// function max(arr) {
//   if (arr.length === 1) return arr[0];

//   const maxOfRest = max(arr.slice(1));
//   return arr[0] > maxOfRest ? arr[0] : maxOfRest;
// }

// console.log(max([1, 2, 3, 4]));

// function solution(numbers) {
//   var answer = 0;
//   const sorted = numbers.sort((a, b) => a - b);
//   const max = sorted[sorted.length - 1];
//   const maxSecond = sorted[sorted.length - 2];
//   answer = max * maxSecond;
//   return answer;
// }

// function solution(n) {
//   var answer = 0;
//   const sqrt = Math.sqrt(n);
//   if (sqrt % 1 === 0) {
//     answer = 1;
//   } else {
//     answer = 2;
//   }
//   return answer;
// }

// function solution(cipher, code) {
//   var answer = '';
//   const cipherArr = cipher.split('');
//   for (let i = code - 1; i < cipherArr.length; i += code) {
//     answer += cipherArr[i];
//   }
//   return answer;
// }

// console.log(solution('dfjardstddetckdaccccdegk', 4));

// function solution(n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) answer.push(i);
//   }
//   return answer;
// }

// console.log(solution(24));

// function solution(order) {
//   var answer = 0;
//   const orderArr = order.toString().split('');
//   for (let i = 0; i < orderArr.length; i++) {
//     if (orderArr[i] % 3 === 0) answer++;
//   }
//   return answer;
// }

// function solution(order) {
//   var answer = 0;
//   const orderArr = order.toString().split('');
//   for (let i = 0; i < orderArr.length; i++) {
//     if (orderArr[i] === '0') continue;
//     if (orderArr[i] % 3 === 0) answer++;
//   }
//   return answer;
// }

// console.log(solution(1230));

// function solution(n) {
//   var answer = 0;
//   let 약수 = [];
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         약수.push(j);
//       }
//     }
//     if (약수.length >= 3) {
//       answer++;
//     }
//     약수 = [];
//   }
//   return answer;
// }

// console.log(solution(10));

// function solution(emergency) {
//   var answer = [emergency.length];
//   const copy = [...emergency];
//   const sorted = copy.sort((a, b) => b - a);
//   console.log(sorted);
//   for (let i = 0; i < emergency.length; i++) {
//     for (let j = 0; j < emergency.length; j++) {
//       if (sorted[i] === emergency[j]) {
//         answer[j] = i + 1;
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution([60, 96, 120, 90, 70]));

// function solution(n) {
//   if (n <= 1) return 1;
//   return n * solution(n - 1);
// }


// console.log(solution(4));

// function solution(n) {
//   let count = 0;
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       const j = n / i;
//       if (i === j) {
//         // (i, i) is a single unique pair
//         count += 1;
//       } else {
//         // (i, j) and (j, i) are two distinct ordered pairs
//         count += 2;
//       }
//     }
//   }
//   return count;
// }

// console.log(solution(20));

// function solution(age) {
//   var answer = '';
//   ageStr = age.toString();
//   ageArr = ageStr.split('');
//   for (let i = 0; i < ageArr.length; i++) {
//     if (ageArr[i] === '0') {
//       answer += 'a';
//     } else if (ageArr[i] === '1') {
//       answer += 'b';
//     } else if (ageArr[i] === '2') {
//       answer += 'c';
//     } else if (ageArr[i] === '3') {
//       answer += 'd';
//     } else if (ageArr[i] === '4') {
//       answer += 'e';
//     } else if (ageArr[i] === '5') {
//       answer += 'f';
//     } else if (ageArr[i] === '6') {
//       answer += 'g';
//     } else if (ageArr[i] === '7') {
//       answer += 'h';
//     } else if (ageArr[i] === '8') {
//       answer += 'i';
//     } else if (ageArr[i] === '9') {
//       answer += 'j';
//     }
//   }
//   return answer;
// }

// console.log(solution(23));

// function solution(board) {
//   var answer = 0;
//   const rows = board.length;
//   const cols = board[0].length;

//   for (let i = 0; i < board.length; i++) {

//     for (let j = 0; j < board[i].length; j++) {

//       if (board[i][j] === 1) {

//         if ((i - 1) >= 0 && (i - 1) < rows && j < cols && j < cols && board[i-1][j] === 0) {
//           board[i-1][j] = 2;
//         }

//         if ((i - 1) >= 0 && (i - 1) < rows && (j - 1) >= 0 && (j - 1) < cols && board[i-1][j-1] === 0) {
//           board[i-1][j-1] = 2;
//         }

//         if ((i - 1) >= 0 && (i - 1) < rows && (j + 1) >= 0 && (j + 1) < cols && board[i-1][j+1] === 0) {
//           board[i-1][j+1] = 2;
//         }

//         if (i >= 0 && i < rows && (j - 1) >= 0 && (j - 1) < cols && board[i][j - 1] === 0) {
//           board[i][j-1] = 2;
//         }

//         if (i >= 0 && i < rows && (j + 1) >= 0 && (j + 1) < cols && board[i][j + 1] === 0) {
//           board[i][j+1] = 2;
//         }

//         if ((i + 1) >= 0 && (i + 1) < rows && j >= 0 && j < cols && board[i + 1][j] === 0) {
//           board[i+1][j] = 2;
//         }

//         if ((i + 1) >= 0 && (i + 1) < rows && (j - 1) >= 0 && (j - 1) < cols && board[i + 1][j - 1] === 0) {
//           board[i+1][j-1] = 2;
//         }

//         if ((i + 1) >= 0 && (i + 1) < rows && (j + 1) >= 0 && (j + 1) < cols && board[i + 1][j + 1] === 0) {
//           board[i+1][j+1] = 2;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       board[i][j] === 0 ? answer++ : answer;
//     }
//   }

//   return answer;
// }

// console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]));


// function solution(array) {
//   var answer = 0;
//   let maxVal = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxVal) {
//       maxVal = array[i];
//     }
//   }

//   let countArr = new Array(maxVal + 1).fill(0);

//   for (let i = 0; i < array.length; i++) {
//     countArr[array[i]]++;
//   }

//   let maxCount = 0;
//   for (let i = 0; i < countArr.length; i++) {
//     if (countArr[i] > maxCount) {
//       maxCount = countArr[i];
//       answer = i;
//     } else if (countArr[i] === maxCount) {
//       answer = -1;
//     }
//   }

//   return answer;
// }

// console.log(solution([1, 2, 2, 1]));

function solution(n) {
  // var answer = [[]];

  // let spiral = Array.from({ length: n }, () => Array(n).fill(0));

  let answer = [];

  let x = n * n;
  let y = 1;

  for (let i = 0; i < n; i++) {

    answer[i] = [];

    for (let j = 0; j < n; j++) {
      answer[i][j] = 0;
    }

  }

  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {
      if (y <= x) {
        answer[i][j] = y++;
      }
    }

    if (answer[i][n - 1] != 0) {
      for (let k = i + 1; k < n; k++) {
        answer[k][n - 1] = y++;
      }

      if (answer[n - 1][n - 1] != 0) {
        // break;
        for (let l = n - 2; l >= 0; l--) {
          answer[n - 1][l] = y++;
        }

        // if (answer[n - 1][0] != 0) {
        //   for (let m = n - 2; m > 0; m--) {
        //     answer[m][0] = y++;
        //   }

        //   if (answer[1][0] != 0) {
            
        //     for (let o = 1; o < n - 1; o++) {
        //       answer[1][o] = y++;
        //     }

        //     if (answer[1][n - 2] != 0) {
              
        //       for (let p = 2; p > 0; p--) {
        //         answer[2][p] = y++;
        //       }

        //       if (answer[2][0] != 0) {
        //         break;
        //       }
        //     }
        //   }
        // }
        if (answer[n - 1][i] != 0) {
          for (let m = n - i - 2; m > i; m--) {
            answer[m][i] = y++;
          }

          if (answer[i+1][i] != 0) {
            for (let o = i+1; o < n - i - 1; o++) {
              answer[i+1][o] = y++;
            }

            if (answer[i+1][n - i - 2] != 0) {
              for (let p = i+2; p > i; p--) {
                answer[i+2][p] = y++;
              }

              if (answer[i+2][i] != 0) {
                break;
              }
            }
          }
        }
      }
    }

  }
  // console.log(x);
  // console.log(spiral);

  return answer;
}

console.log(solution(5));

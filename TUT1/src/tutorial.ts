let awesomeName="Blake";
awesomeName="something";

awesomeName=awesomeName.toUpperCase();
console.log(awesomeName);


//Type Inference
let amount = 12;
amount = 12 - 1;


let isAwesome = true;
isAwesome = false;

console.log(amount, isAwesome);


//Challenge
let greeting: string = 'Hello, TypeScript!';
greeting = greeting.toUpperCase(); // This should work fine

// 2. Number
let age: number = 25;
age = age + 5; // This should work fine

// 3. Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult; 

console.log(greeting, age, isAdult);


//Union Type
let tax: number | string = 10;
tax = 100;
tax = '$10';
console.log(tax);


let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
console.log(requestStatus);


//Type any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; 

console.log(notSure);

//Practical
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

//Challenge


let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
console.log(orderStatus);


// 2. Discount
let discount: number | string = 20;
discount = '20%';
console.log(discount);


//Arrays

let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot'); // This will result in a TypeScript error

let colors: string[] = ['red', 'green', 'blue'];



let mixedArray: (number | string)[] = [1, 'two', 3];

console.log(temperatures, colors, mixedArray);



//Objects

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';


let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };


let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

//items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property
console.log(items,car,car1,book,pen,notebook);



let bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };



let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };



let product1 = { title: 'Shirt', price: 20 };
let product2 = { title: 'Pants' };
let products: { title: string; price?: number }[] = [product1, product2];

console.log(bike, laptop, products);


//Challenge
const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = 'Jane';
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}


//optional and default parameters
function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

let priceWithoutDiscount = calculatePrice(300, 0);
console.log(priceWithoutDiscount); // Output: 300

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300

//rest parameter
//In JavaScript, a rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. These arguments are collected into an array, which can be accessed within the function.
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum('The total is:', 1, 2, 3, 4, 5); 
console.log(result);

//using objects as function parameeters
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
};

createStudent(newStudent);

//Alias and interface

//type User = { id: number; name: string; isActive: boolean };

//const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
//};
//const susan: User = {
  //id: 1,
  //name: 'susan',
  //isActive: false,
//};

//function createUser(user: User): User {
  //console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  //return user;
//}
//createUser(john);
//createUser(susan);
//createUser({ id: 3, name: 'Mike', isActive: true });


type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'hello'; 
value = 123; 
console.log(value);
type Theme = 'light' | 'dark'; 

let theme: Theme;
theme = 'light'; 
theme = 'dark'; 
console.log(theme);


function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); 

//challenge
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

//Intersection types
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};
console.log(book1, book2, discountedBook);

//interface
interface book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
};

deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

//challenge
interface Computer {
  readonly id: number; 
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

const Desktop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

Desktop.storage = 256;

console.log(Desktop.upgradeRam(4)); 
console.log(Desktop);

//Tuples and Enums
let person: [string, number] = ['john', 25];
console.log(person[0]); 
console.log(person[1])

let vick: [string, number?] = ['vick'];

function getPerson(): [string, number] {
  return ['vick', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]); // Outputs: john
console.log(randomPerson[1]);



let suson: readonly [string, number] = ['suson', 25];

console.log(suson);
console.log(vick);


//enum
enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

//enums:Reverse Mapping
// Define an enum named UserRole
//Type assertion
let someValue: any = 'This is a string';


let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};


let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';




let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};

const statusValue = 'pending';

const user: User = { name: 'john', status: statusValue as Status };

console.log(strLength);
console.log(user);

//unknown type
let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = 'Hello World'; 
unknownValue = [1, 2, 3]; 
unknownValue = 42.3344556; 



// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  
  console.log(unknownValue.toFixed(2)); 
}


//never type


// type theme = 'light' | 'dark';

// function checkTheme(theme: theme) {
//   if (theme === 'light') {
//     console.log('light theme');
//     return;
//   }
//   if (theme === 'dark') {
//     console.log('dark theme');
//     return;
//   }
//   theme;

  
//   // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
// }
// checkTheme("dark")


// enum Color {
//   Red,
//   Blue,
//   // Green,
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return 'Red';
//     case Color.Blue:
//       return 'Blue';
//     default:
//       // at build time
//       let unexpectedColor = color as never;
//       // at runtime
//       throw new Error(`Unexpected color value: ${unexpectedColor}`);
//   }
// }

// console.log(getColorName(Color.Red)); // Red
// console.log(getColorName(Color.Blue)); // Blue


import newPupil, { sayHello, human, type Student } from './action';

sayHello('TypeScript');
console.log(human);
console.log(newPupil);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent);


//Type guarding

// Problem 3
function square(num) {
  return num * num;
}
function double(num) {
  return num * 2;
}
function addFive(num) {
  return num + 5;
}
function composedFunction(num) {
  const squared = square(num);
  const doubled = double(squared); 
  return addFive(doubled);        
}
const result = composedFunction(3);
console.log("Result:", result);





// Problem 5
function findAndModify(people, name, newAge) {
  const person = people.find(person => person.name === name);
  
  if (person) {
      person.age = newAge;
  }
  
  return people;
}

// Example usage:
const people = [
  { name: "Saikot", age: 30, gender: "male" },
  { name: "Asif", age: 25, gender: "male" },
  { name: "sourov", age: 20, gender: "male" },
  { name: "Basam", age: 35, gender: "male" },
];

const updatedPeople = findAndModify(people, "Asif", 29);
console.log("Updated array:", updatedPeople);


// problem 6
function sumOfEvens(numbers) {
  return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
          return sum + num; 
      }
      return sum; 
  }, 0); 
}

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumEvens = sumOfEvens(numbers6);
console.log(`The sum of even numbers is: ${sumEvens}`);



// problem 7
function isLeapYear(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
  }
  return false;
}

const year = 2024; 
if (isLeapYear(year)) {
  console.log(`${year} is a leap year! Happy New Year! `);
} else {
  console.log(`${year} is not a leap year. Happy New Year!`);
}




//Problem 9

function findMaxValue(numbers) {
  if (numbers.length === 0) {
      throw new Error("Array cannot be empty");
  }
  return Math.max(...numbers);
}


const numbers = [12, 45, 2, 98, 23]; 
const maxValue = findMaxValue(numbers);
console.log(`The maximum value is: ${maxValue}`);
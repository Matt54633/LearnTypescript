// Variable Declarations

import { Employee } from "./classes";

let x: number = 0;
let forename: string = "Matt";
let surname: string = "Sullivan"
let fullName: string = `${forename} ${surname}`;
let ages: number[] = [1, 2, 3, 4, 5]
var town: string = "Yeovil";
const CURRENCY: string = "£";

// Looping Constructs
for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

let i: number = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

ages.forEach(age => {
    console.log(age);
});

let Matt: Employee = new Employee(20, "Matt", "Sullivan", new Date(), 1234, new Date('2022-07-30'))

console.log(Matt);
console.log(Matt.YearsOfService)
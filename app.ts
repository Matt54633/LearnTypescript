// Variable Declarations

import { Employee } from "./classes";
import { DaysOfWeek } from "./enums";
import { capitalise, lowercase } from "./functions";

let x: number = 0;
let forename: string = "matt";
let surname: string = "Sullivan"
let fullName: string = `${forename} ${surname}`;
var town: string = "Yeovil";
const CURRENCY: string = "£";

let Matt: Employee = new Employee(20, "Matt", "Sullivan", new Date(), 1234, new Date('2022-07-30'));

console.log(Matt);
console.log(Matt.YearsOfService);
console.log(capitalise(forename));
console.log(lowercase(surname));
console.log(DaysOfWeek.Monday);
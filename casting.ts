// Casting with as (explicit casting)
let x: unknown = 'Hello';
console.log((x as string).length);

// <> Works like as
let y: unknown = 'GoodBye';
console.log((<string>x).length);

// Force Casting - first cast to unknown, then to the target type
let z = 'Morning';
console.log(((x as unknown) as string).length);

// Using type function
let no: number = 25;
let stringNo: string = no.toString();
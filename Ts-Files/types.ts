// Simple Types
let bool: boolean;
let number: number;
let string: string;
let bigint: bigint;
let symbol: symbol;

// Special Types

// Any disables type checking
let any: any = true;

// Unknown prevents unknown types from being used, good for when you don't the type that will be used, but can cast to it later
let unknown: unknown = 1;

// Never effectively throws an error whenever it is defined
let never: never;

// Null and Undefined are only useful when strictNullChecks is enabled in tsconfig.json
let unDefined: undefined;
let Null: null;


// Explicit Type
let firstName: string = "Matt";

// Implicit Type
let forename = "Matt";

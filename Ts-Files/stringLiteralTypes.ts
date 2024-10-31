// String Literal Types are a subset of Template Literal Types. They allow for the creation of types that accept only a single string literal value.

type Status = "Pending" | "In Progress" | "Complete";

let ticketStatus: Status = "Pending";

// Valid
// ticketStatus = "Complete";

// Invalid
// ticketStatus = "Todo";
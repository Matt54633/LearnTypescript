// Standard Tuple
export let exampleTuple: [number, boolean, string] = [10, false, "Hello"];
exampleTuple.push("New Element");

// Read Only Tuple
export let readOnlyTuple: readonly [number, boolean, string] = [15, true, "GoodBye"];

// Named tuple
export const graph: readonly [x: number, y: number] = [55.2, 65.3];

// Destructuring
export const [x, y] = graph;
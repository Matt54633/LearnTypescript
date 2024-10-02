// Generics
// Take in two parameters, and return and tuple of generics (S, T)
function createPair<S, T>(x: S, y: T): [S, T] {
    return [x, y];
}

// Generics require the <T> or generic type before the method signature. 
function returnGeneric<T>(input: T): T {
    return input;
}

// Useful application could be returning a template literal for any type
// Take in a generic type, and return a string 
function returnTemplateLiteral<T>(input: T): string {
    return `Template Literal: ${input}`;
}

// e.g
// returnTemplateLiteral(8);
// returnTemplateLiteral('8');
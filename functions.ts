export function capitalise(input: string): string {
    return input[0].toUpperCase() + input.substring(1);
}

// Lambda function syntax
export const lowercase = (input: string): string => {
    return input.toLowerCase();
}

// Void return type
export function log(message: string): void {
    console.log(message);
}
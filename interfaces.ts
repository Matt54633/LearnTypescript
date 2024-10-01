interface Shape {
    Height: number;
    Width: number;
    Area(): number;
}

// A class can implement an interface by implementing it using the implements keyword
export class Square implements Shape {
    Height: number;
    Width: number;
    Area = (): number => {
        return this.Height * this.Width;
    }

    constructor(height: number, width: number) {
        this.Height = height;
        this.Width = width;
    }
}

// However they are normally used for JS objects
export const Circle: Shape = {
    Height: 10,
    Width: 10,
    Area() {
        return this.Height * this.Width;
    }
}
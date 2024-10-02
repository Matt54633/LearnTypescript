interface Point {
    x: number;
    y: number;
    z?: number;
}

// Partial changes all properties to optional
let partialPoint: Partial<Point> = { x: 10 };

// Required changes all properties to required
let requiredPoint: Required<Point> = { x: 10, y: 10, z: 10 };

// Omit removes keys from an object type
let omitXPoint: Omit<Point, 'x'> = { y: 10, z: 20 };

// Pick omits all keys except the keys specified
let pickYPoint: Pick<Point, 'y'> = { y: 10 };

// Record is a shortcut to defining an object type with a specific key and value type
const nameAgeMap: Record<string, number> = { 'Matt': 22, 'Mike': 43 };
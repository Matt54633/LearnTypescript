import { FuelType } from "./enums"


// Custom Car type that is equivalent to the Car class in classes.ts
// Advantages of using custom types:
// 1. No need to create a class
// 2. No need to create a constructor
// 3. No need to create properties
type Car = {
    Manufacturer: string;
    VehicleIdentificationNumber: string;
    NumberOfWheels: number;
    FuelType: FuelType;
    NumberOfDoors: number;
    Horsepower: number;
    MakeNoise(): void;
    SoundHorn(): void;
}

// Usage of Car
const car: Car = {
    Manufacturer: "Toyota",
    VehicleIdentificationNumber: "1234",
    NumberOfWheels: 4,
    FuelType: FuelType.Petrol,
    NumberOfDoors: 4,
    Horsepower: 200,
    MakeNoise: () => console.log("Brum"),
    SoundHorn: () => console.log("Beep")
}
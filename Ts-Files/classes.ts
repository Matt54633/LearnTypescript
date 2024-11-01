import { FuelType } from "./enums";

export class Person {
    Id: number;
    Forename: string;
    Surname: string;
    Dob: Date;

    constructor(id: number, forename: string, surname: string, dob: Date) {
        this.Id = id;
        this.Forename = forename;
        this.Surname = surname;
        this.Dob = dob;
    }
}

export class Employee extends Person {
    EmployeeNumber: number;
    StartDate: Date;

    
    constructor(id: number, forename: string, surname: string, dob: Date, employeeNumber: number, startDate: Date) {
        super(id, forename, surname, dob);
        this.EmployeeNumber = employeeNumber;
        this.StartDate = startDate;
    }

    get YearsOfService(): number {
        return new Date().getFullYear() - this.StartDate.getFullYear();
    }
}

abstract class Vehicle {
    VehicleIdentificationNumber: string;
    NumberOfWheels: number;
    FuelType: FuelType;
    NumberOfDoors: number;
    Horsepower: number;

    // Must be implemented by derived class
    public abstract MakeNoise(): void;

    // Virtual method can be overriden in derived classes
    public SoundHorn(): void {
        console.log("Honk");
    }

    constructor(vehicleIdentificationNumber: string, numberOfWheels: number, fuelType: FuelType, numberOfDoors: number, horsepower: number) {
        this.VehicleIdentificationNumber = vehicleIdentificationNumber;
        this.NumberOfWheels = numberOfWheels;
        this.FuelType = fuelType;
        this.NumberOfDoors = numberOfDoors;
        this.Horsepower = horsepower;
    }
}

export class Car extends Vehicle {

    // add property to derived class
    Manufacturer: string;

    // override abstract method
    public override MakeNoise(): void {
        console.log("Brum");
    }

    // override virtual method
    public override SoundHorn(): void {
        console.log("Beep");
    }

    // 
    constructor(
        vehicleIdentificationNumber: string,
        numberOfWheels: number,
        fuelType: FuelType,
        numberOfDoors: number,
        horsepower: number,
        manufacturer: string
    ) {
        super(vehicleIdentificationNumber, numberOfWheels, fuelType, numberOfDoors, horsepower);
        this.Manufacturer = manufacturer;
    }
}
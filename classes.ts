
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
    VehicleIdenfiticationNumber: string;
    NumberOfWheels: number;
    FuelType: string;
    NumberOfDoors: number;
    Horsepower: number;

    constructor(vehicleIdentificationNumber: string, numberOfWheels: number, fuelType: string, numberOfDoors: number, horsepower: number) {
        this.VehicleIdenfiticationNumber = vehicleIdentificationNumber;
        this.NumberOfWheels = numberOfWheels;
        this.FuelType = fuelType;
        this.NumberOfDoors = numberOfDoors;
        this.Horsepower = horsepower;
    }
}

export class Car extends Vehicle {

    // add property to derived class
    Manufacturer: string

    // 
    constructor(
        vehicleIdentificationNumber: string,
        numberOfWheels: number,
        fuelType: string,
        numberOfDoors: number,
        horsepower: number,
        manufacturer: string
    ) {
        super(vehicleIdentificationNumber, numberOfWheels, fuelType, numberOfDoors, horsepower);
        this.Manufacturer = manufacturer;
    }
}
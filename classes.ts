
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
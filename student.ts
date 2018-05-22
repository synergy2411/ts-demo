import { Person } from './person';

export class Student{
    private firstName : string;
    private lastName : string;
    constructor(obj : Person){
        // this.firstName = firstName;
        // this.lastName = lastName;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }
    getFullName(): string{
        return this.firstName + " " + this.lastName;
    }
}
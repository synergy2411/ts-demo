"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(obj) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstName, lastName, phoneNumber, password, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.age = age;
    }
    setId(value) {
        this.userID = value;
    }
    getId() {
        return this.userID;
    }
    setFullName(value, password) {
        if (password == this.password) {
            const [firstName, lastName] = value.split(" ");
            this.firstName = firstName;
            this.lastName = lastName;
        }
        else {
            console.log("Invalid password");
        }
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
exports.User = User;

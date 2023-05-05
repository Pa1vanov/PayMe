"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    isExist(user) {
        for (let _card of this.list) {
            if (user.phoneNumber === _card.phoneNumber) {
                return true;
            }
        }
        return false;
    }
    create(user) {
        if (this.isExist(user)) {
            throw new Error("This user already exists");
        }
        else {
            user.setId(++this.counterID);
            this.list.push(user);
        }
    }
    getList() {
        return this.list;
    }
    getUserByPhoneNumber(phoneNumber) {
        for (let user of this.list) {
            if (user.phoneNumber === phoneNumber) {
                return user;
            }
        }
    }
}
exports.UserRepository = UserRepository;

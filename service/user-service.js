"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repo_1 = require("../repositorys/user-repo");
class UserService extends user_repo_1.UserRepository {
    signIn(phoneNumber, password) {
        let user = this.getUserByPhoneNumber(phoneNumber);
        if ((user === null || user === void 0 ? void 0 : user.password) !== password)
            throw new Error("Xato parol");
        return user;
    }
}
exports.UserService = UserService;

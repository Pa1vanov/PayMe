"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
const card_repo_1 = require("../repositorys/card-repo");
const user_repo_1 = require("../repositorys/user-repo");
class MainService {
    constructor() {
        this._cardRepository = new card_repo_1.CardRepository();
        this._userRepository = new user_repo_1.UserRepository();
    }
    registerUser(user) {
        this._userRepository.create(user);
    }
    getUserList() {
        return this._userRepository.getList();
    }
    getCardList() {
        return this._cardRepository.getList();
    }
    registerCard(card) {
        this._cardRepository.create(card);
    }
    getCardByPhoneNumber(phoneNumber) {
        const user = this._userRepository.getUserByPhoneNumber(phoneNumber);
        return this._cardRepository.getCardsByOwnerId(user.getId());
    }
    transaction(fromCard, toCard, bill) {
        this._cardRepository.transactionCard(fromCard, toCard, bill);
    }
}
exports.MainService = MainService;

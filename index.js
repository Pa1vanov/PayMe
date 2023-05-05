"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./entitys/card");
const user_1 = require("./entitys/user");
const card_service_1 = require("./service/card-service");
const main_service_1 = require("./service/main-service");
const user_service_1 = require("./service/user-service");
const userService = new user_service_1.UserService();
const cardService = new card_service_1.CardService();
const mainService = new main_service_1.MainService();
const user = new user_1.User("John", "Wick", "+998975000", 'abc123', 21);
const user2 = new user_1.User('Adam', "Johnson", "+998989999", "abc212", 32);
userService.create(user);
userService.create(user2);
const card = new card_1.Card("8600 2323 4343", 1111, "UZCARD", '12/26', 500, user.getId());
const card2 = new card_1.Card("8600 2323 5003", 1212, "HUMO", '05/26', 2000, user2.getId());
cardService.create(card);
cardService.create(card2);
card.setBalance(1000); // 1500 
card2.setBalance(500); // 2500
// console.log(cardService.getList())
// console.log(userService.getList())
mainService.registerUser(user);
mainService.registerUser(user2);
mainService.registerCard(card);
mainService.registerCard(card2);
mainService.transaction(card, card2, 500);
// card has 1000 card2 has 3000 now >:
console.log(mainService.getCardByPhoneNumber(user.phoneNumber));
console.log(mainService.getCardByPhoneNumber(user2.phoneNumber));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(cardNumber, pin, cardType, expiryDate, balance, ownerID) {
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.cardType = cardType;
        this.expiryDate = expiryDate;
        this.balance = balance;
        this.ownerID = ownerID;
    }
    getCardNumber() {
        return this.cardNumber;
    }
    getOwnerID() {
        return this.ownerID;
    }
    getCardID() {
        return this.id;
    }
    setCardID(newID) {
        this.id = newID;
    }
    setOwnerID(newOwnerID) {
        this.ownerID = newOwnerID;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(deposite) {
        this.balance += deposite;
    }
}
exports.Card = Card;

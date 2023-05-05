"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
class CardRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    isExist(card) {
        for (let _card of this.list) {
            if (card.cardNumber === _card.cardNumber) {
                return true;
            }
        }
        return false;
    }
    create(card) {
        if (this.isExist(card)) {
            throw new Error("This card already exists");
        }
        else {
            card.setCardID(++this.counterID);
            this.list.push(card);
        }
    }
    getList() {
        return this.list;
    }
    getCardsByOwnerId(ownerID) {
        return this.list.filter(card => card.ownerID === ownerID);
    }
    transactionCard(fromCard, toCard, bill) {
        if (fromCard.balance < bill)
            throw new Error(`${fromCard.getCardNumber()} has not enough funds`);
        fromCard.balance -= bill;
        toCard.balance += bill;
    }
}
exports.CardRepository = CardRepository;

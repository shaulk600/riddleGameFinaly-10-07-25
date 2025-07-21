import { validRiddleO } from "../../middleWare/validRiddle.js";

export class RiddleO {
    constructor(Object) {
        this.id = Object._id;
        this.question = Object.question;
        this.answer = Object.answer
        this.title = Object.title;
        if (!validRiddleO) {
            return {};
        }
    }
}
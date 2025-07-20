import { validRiddleO } from "../../middleWare/validRiddleO.js";

export class RiddleO {
    constructor(Object) {
        this.id = Object._id;
        this.question = Object.question;
        this.answer = Object.answer
        this.level = Object.level;
        if (!validRiddleO) {
            return {};
        }
    }
}
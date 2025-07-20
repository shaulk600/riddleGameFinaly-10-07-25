import { validPlayerO } from "../../middleWare/validPlayerO.js";
export class RiddleO {
    constructor(Object) {
        this.id = Object.id;
        this.username = Object.username;
        this.answcreated_at = Object.created_at //|| now();
        this.best_time = Object.best_time ;
        if (!validPlayerO) {
            return {};
        }
    }
}
import { validPlayerO } from "../../middleWare/validPlayerO.js";
export class PlayerO {
    constructor(Object) {
        this.id = Object.id;
        this.username = Object.user_name;
        this.created_at = Object.created_at //|| now();
        this.best_time = Object.best_time ;
        if (!validPlayerO) {
            return {};
        }
    }
}
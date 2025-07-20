import {updateTinePlayer } from "../services/playerService.js";

import { ask } from "./flowGameRiddle.js";

//לערוך גם את זה - ערוך
export async function game_UpdateTimeInPlayer(idPlayer, objRiddle, cb) {
    try {
        const start = returnTime();
        cb(objRiddle);
        const end = returnTime();

        const obj = {
            id_player: idPlayer,
            id_riddle: objRiddle['idRiddle'],
            start: start,
            end: end
        }

        const data = await updateTinePlayer(idPlayer, obj);
        // return data;
        return;
    } catch (Err) {
        console.log('file: Util/time.js  --  function: game_UpdateTimeInPlayer', Err);
        return null;
    }
}
function returnTime() {
    return new Date.now();
}

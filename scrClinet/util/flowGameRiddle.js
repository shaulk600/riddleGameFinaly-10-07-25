import { question } from "readline-sync";
import { } from "../services/playerService.js";
import { getRiddleRandomS } from "../services/riddleService.js";
import { game_UpdateTimeInPlayer } from "./time.js";

export async function randomGame(id_player) {
    try {
        const dataRiddle = await getRiddleRandomS();
        await game_UpdateTimeInPlayer(id_player, dataRiddle, ask);
        return;
    } catch (Err) {
        console.log(`Error:  file: Flow game Riddle  --  function:  randomGame `, Err);
    }

}

export function ask(objRiddle) {
    console.log(objRiddle['question']);
    const anserCurrect = question('?');

    let flag = false;
    while (flag) {
        if (anserCurrect === objRiddle['anser']) {
            console.log('is seccess');
            flag = true;
            continue;
        }
        else {
            console.log('try agine');
            flag = false;
            continue;
        }
    }
    return;
}
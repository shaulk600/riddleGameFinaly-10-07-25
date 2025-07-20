import { question } from "readline-sync";
import {  } from "../services/playerService.js";
import { getRiddleRandom } from "../services/riddleService.js";
import { game_UpdateTimeInPlayer } from "./time.js";

export async function randomGame(id_player) {
    try {

        const dataRiddle = await getRiddleRandom();
        await game_UpdateTimeInPlayer(id_player, dataRiddle, ask);

    } catch (Err) {

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
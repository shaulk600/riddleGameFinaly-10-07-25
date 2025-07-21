import { question } from "readline-sync";
import { getMainMenuChoice, displayNamePlayer, clearUI } from "../UI/MenuUI.js";

import { searchNamePlayerS, initPlayerS } from "./playerService.js";
import { getRiddleRandomS, initRiddleS, getAllRiddlesS, updateRiddleByIdS, deleteRiddleByIdS } from "./riddleService.js";

import { randomGame } from "../util/flowGameRiddle.js";
// מקושר אל programManager

// הוא זה שמקשר בין ה UI לבין ה service 

// בחירה מהתפריט
export async function handleMenuSelection(namePlayer , obj = null) {

    // if not obj player ..
    if (!obj) {
        obj = await NamePlayer(namePlayer);
    }

    // variable
    
    let idPlayer;
    if (obj.idPlayer && obj.namePlayer) {
        idPlayer = obj['idPlayer'];
        namePlayer = obj['namePlayer'];
    }
    //defult
    else {
        obj = {
            idPlayer: null,
            namePlayer: null
        }
    }

    // programing dizain
    clearUI(); //clear menu
    displayNamePlayer(namePlayer); // show name player
    const valueCoice = getMainMenuChoice(); // selection of menu
    if (valueCoice !== Number) { throw new Error() }

    switch (valueCoice) {
        case "1":
            await randomGame() // randomal
            break;

        case "2":
            await initRiddleS(); // תיצור חידה - אם הרבה - צריך ליצור 
            break;

        case "3":
            const dataGetAll = await getAllRiddlesS(); //all riddles ./ S= services file / D= Dal file
            console.log(dataGetAll);
            break;

        case "4":
            const dataUpdate = await updateRiddleByIdS();
            console.log(dataUpdate);
            break;

        case "5":
            const dataDelete = deleteRiddleByIdS()
            break;

        case "6":
            //לעשות " טבלת מובילים " של השחקנים
            break;

        default:
            break;
    }

    //מתודה שאמורה לעדכן את השעות של השחקן - במידה והיו - או בסיום 1
}

export async function NamePlayer(name) {
    let idPlayer = await searchNamePlayerS(name);

    if (!idPlayer) { // אם לא נמצא השם בשרת
        idPlayer = await initPlayer(name); // יצירה
        if (!idPlayer) { // אם משהו התפקשש שם
            console.log(' !! An error occurred during execution - forwarded to the main !!');
            return null;
        }
    }

    const objPlayer = {
        idPlayer: idPlayer,
        namePlayer: name
    }
    return objPlayer;
}



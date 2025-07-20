import { question } from "readline-sync";
import { getMainMenuChoice, displayNamePlayer, clearUI } from "../UI/MenuUI.js";

import { searchNamePlayer, initPlayerS } from "./playerService.js";
import { getRiddleRandom, initRiddleS, getAllRiddlesS , updateRiddleByIdS , deleteRiddleByIdS} from "./riddleService.js";

import { randomGame } from "../util/flowGameRiddle.js";
// מקושר אל programManager

// הוא זה שמקשר בין ה UI לבין ה service 

// בחירה מהתפריט
export async function handleMenuSelection(namePlayer = null, obj = null) {

    // בדיקת שחקן ואם לא - יצירה
    if (!obj) {
        obj = await NamePlayer(namePlayer);
    }

    //סידור משתנים
    let idPlayer;
    if (obj.idPlayer && obj.namePlayer) {
        idPlayer = obj['idPlayer'];
        namePlayer = obj['namePlayer'];
    }

    // הצגת תפריט
    clearUI(); //מנקה תפריט 
    displayNamePlayer(namePlayer); // מציג את השם
    const valueCoice = getMainMenuChoice(); // בחר מהתפריט
    if (valueCoice !== Number) { return null }

    switch (valueCoice) {
        case "1":
            await randomGame()
            break;

        case "2":
            await initRiddleS();
            break;

        case "3":
            const dataGetAll = await getAllRiddlesS();
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
    let idPlayer = await searchNamePlayer(name);

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



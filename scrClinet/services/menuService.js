import { getMainMenuChoice, displayNamePlayer, clearUI } from "../UI/MenuUI.js";

import { searchNamePlayer, initPlayer , game_UpdateTimeInPlayer } from "./playerService.js";
import { getRiddleRandom } from "./riddleService.js";

// מקושר אל programManager

// הוא זה שמקשר בין ה UI לבין ה service 

// בחירה מהתפריט
export async function handleMenuSelection(namePlayer, obj = null) {
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
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
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



export async function randomGame(id_player){
    const data = getRiddleRandom();
    game_UpdateTimeInPlayer(id_player,data.idRiddle, ask);

}
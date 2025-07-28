import { question } from "readline-sync";
import { getMainMenuChoice, displayNamePlayer, clearUI } from "../UI/MenuUI.js";

import { searchNamePlayerS, initPlayerS } from "./playerService.js";
import { getRiddleRandomS, initRiddleS, getAllRiddlesS, updateRiddleByIdS, deleteRiddleByIdS } from "./riddleService.js";

import { randomGame } from "../util/flowGameRiddle.js";
// is file is connected betwwn UI file and Service file


/**
 * a function that select from Menu
 * @param {String} user_name 
 * @param {Object} players_obj 
 */
export async function handleMenuSelection(name) {

    //או לעשות while פה כדי לקלוט את הplayer
    // או לעשות מתודה של יציאה פה -ואז להעביר את הplayer הלאה

    let player = await NamePlayer(name);

    while (player) {
        
        // programing dizain
        clearUI(); //clear menu
        displayNamePlayer(user_name); // show name player
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
            case "7": // to exit
                player = null;
                break;


            default:
                
                break;
        }

    }
    //מתודה שאמורה לעדכן את השעות של השחקן - במידה והיו - או בסיום 1
}

/**
 * a function to get players_id create Object to while gameing
 * @param {*} name 
 * @returns 
 */
export async function NamePlayer(name) {
    try {
        //get id name player ..
        const { players_id } = await searchNamePlayerS(name);
        console.log(players_id);
        const user_name = name;

        //זה צריך להיות "תביא לי את ID - כל היצירה זה בשרת"
        // if (!player_id) { // if not exist
        //     player_id = await initPlayerS(name); // init player
        if (!players_id) { //if error ..
            console.log(' message Error clinet: An error occurred during execution - forwarded to the main !!');
            return null;
        }
        // }

        //create obj
        const objPlayer = {
            players_id: Number(players_id),
            user_name: String(user_name)
        }
        return objPlayer;

    } catch (Err) {
        console.log('logging error: size:clinet, file: MenuService.js, function: namePlayer: ', Err);
        return null;
    }
}



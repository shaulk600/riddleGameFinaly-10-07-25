import { getNamePlayer , makeAnotherRound } from "../UI/MenuUI.js";

import { handleMenuSelection } from "../services/menuService.js";



export async function playGame() {
    const name = getNamePlayer();
    const obj = await handleMenuSelection(name);
    
    //האם תרצה עוד סיבוב - חזרה בלופ
    let flag = true;
    while (flag) {
        const obj = await handleMenuSelection(name , obj); // obj = player
        flag = makeAnotherRound();
    }
}


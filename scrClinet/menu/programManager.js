import { getNamePlayer, makeAnotherRound } from "../UI/MenuUI.js";

import { handleMenuSelection } from "../services/menuService.js";

// started of plane
async function playGame() {
    const obj = await handleMenuSelection();

    // loop if make Another Round
    let flag = makeAnotherRound();
    while (flag) {
        let obj;
        obj = await handleMenuSelection(obj); // obj = player
        flag = makeAnotherRound();
    }
}

playGame();
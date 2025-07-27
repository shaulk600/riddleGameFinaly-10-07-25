import { getNamePlayer , makeAnotherRound } from "../UI/MenuUI.js";

import { handleMenuSelection } from "../services/menuService.js";

// started of plane
async function playGame() {
    let user_name = getNamePlayer()
    const obj = await handleMenuSelection(user_name);

    // loop if make Another Round
    let flag = makeAnotherRound();
    while (flag) {
        let obj;
        obj = await handleMenuSelection(user_name , obj); // obj = player
        flag = makeAnotherRound();
    }
}

export {playGame};
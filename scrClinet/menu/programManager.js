import { getNamePlayer, makeAnotherRound } from "../UI/MenuUI.js";

import { handleMenuSelection } from "../services/menuService.js";

// started of plane
async function playGame() {
    let namePlayer = getNamePlayer()
    const obj = await handleMenuSelection(namePlayer);

    // loop if make Another Round
    let flag = makeAnotherRound();
    while (flag) {
        let obj;
        obj = await handleMenuSelection(namePlayer , obj); // obj = player
        flag = makeAnotherRound();
    }
}

playGame();
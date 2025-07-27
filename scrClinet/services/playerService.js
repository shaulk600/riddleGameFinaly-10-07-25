import { searchIfPlayerExistD, getPlayerDataD, initPlayerD, updatePlayerDataD, deletePlayerD } from "../dals/playerDal.js";

export async function getPlayerDataS() {
    try {
        return await getPlayerDataD();
    } catch (Err) {
        console.log('loggin Error: file: playerService, function: getPlayerDataS - ', Err);
        return null;
    }

}
//getPlayerDataD
export async function searchNamePlayerS(user_name) {
    try {
        const data = await searchIfPlayerExistD(user_name);

        if (data) {
            const  players_id  = data["players_id"]; 
            return players_id;
        }
        else {
            console.log('not player exist');
            return null;
        }
    } catch (err) {
        console.log('logging error: file: playerService, function: searchNamePlayerS', err);
        return null;
    }
}
export async function initPlayerS(name) {
    try {
        //צריך לעשות מתודה שקובעת את "הזמן הטוב ביותר" בעידכון לשאול - אם הזמן החדש קצר מ"הזמן הטוב ביותר" - בשרת
        const obj = {
            user_name: name
        }

        const data = await initPlayerD(obj);
        if (!data) {
            console.log('not created player');
            return null;
        }
        else {
            const idPlayer = data["id"];
            return idPlayer;
        }
    } catch (Err) {
        console.log('player service - initPlayerS', Err);
        return null;
    }
}

export async function updateTinePlayerS(id_player, obj) {
    try {
        return await updatePlayerDataD(id_player, obj);
    } catch (Err) {
        console.log(' file: playerService  --  function: updateTinePlayerS', Err);
        return null;
    }
}


//עדיין לא מוכן
export async function showAveragePlayerS(id) { // לא טוב - להסתכל שוב
    try {
        const data = await getPlayerDataD(id);
        if (!data) {
            return null;
        }
        else {
            data[''] //לערוך את זה ולערוך טוב
        }
    } catch (Err) {
        console.log('player service - calculateAvarage ', Err);
        return null;
    }
}

// צריך להשלים
export async function deletePlayerS(id) {
    try {
        const data = await deletePlayerD(id);
        if (!data) {
            console.log('not deleted player');
            return null;
        }
        else {
            console.log('deleted player'); //לעשות גם שימחק הדאטה של הציוני שחקן - לעשות
        }
    } catch (Err) {
        console.log('player service - deletePlayerS ', Err);
        return null;
    }
}



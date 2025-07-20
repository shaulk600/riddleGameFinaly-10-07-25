import { searchIfPlayerExist, getPlayerData, initPlayerD, updatePlayerData, deletePlayer } from "../dals/playerDal.js";


export async function searchNamePlayer(name) {
    try {
        // const name = displayNamePlayer()
        const data = await searchIfPlayerExist(name);

        if (data) {
            const idPlayer = data["id"];
            return idPlayer;
        }
        else {
            console.log('not player exist');
            return null; // אם אין שחקן - החזר null
        }
    } catch (Err) {
        console.log('player service - searchNamePlayer', Err);
        return null;
    }
}
export async function initPlayer(name) {
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
        console.log('player service - initPlayerD', Err);
        return null;
    }
}

//לערוך גם את זה
export async function game_UpdateTimeInPlayer(idPlayer, idRiddle, cb) {
    try {
        const start = returnTime();
        await cb();
        const end = returnTime();
        const obj = {
            id_riddle: idRiddle,
            start: start,
            end: end
        }
        const data = await updatePlayerData(id, obj);
        return data;

    } catch (Err) {
        console.log('player service - updateTimeInPlayer', Err);
        return null;
    }
}
function returnTime() {
    return new Date.now();
}

//עדיין לא מוכן
export async function showAveragePlayer(id) { // לא טוב - להסתכל שוב
    try {
        const data = await getPlayerData(id);
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
export async function deletePlayer(id) {
    try {
        const data = await deletePlayer(id);
        if (!data) {
            console.log('not deleted player');
            return null;
        }
        else {
            console.log('deleted player'); //לעשות גם שימחק הדאטה של הציוני שחקן - לעשות
        }
    } catch (Err) {
        console.log('player service - deletePlayer ', Err);
        return null;
    }
}



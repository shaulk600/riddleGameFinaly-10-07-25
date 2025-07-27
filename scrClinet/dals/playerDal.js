//כרגע !! להריץ הכל על פורט 3000
// כרגי יש לשנות את הריצה של עידכון ומחיקה
const URL = "http://localhost:3000";


export async function searchIfPlayerExistD(name) { // בודק אם קיים שחקן במאגר
    try {
        const response = await fetch(`${URL}/player/player/user_name = ${name}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        });
        const data = await response.json();
        if (response.status === 200) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error:  file: playerDal.js  -- function: searchIfPlayerExist: ', Err);
        return null;
    }
}

//לערוך את זה שיוציא גם שחקן ועוד מתודה להוציא את ציוניו - שיעשו חיפוש בשרת על השחקן - לא כאן
export async function getPlayerDataD(id) { // מביא נתוני שחקן במאגר - מתוכם להוציא average and sum
    try {
        const response = await fetch(`${URL}/player/playerData/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        const data = await response.json();
        if (response.status === 201) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: file: playerDal.js  -- function: getPlayerData: ', Err);
        return null;
    }
}

export async function initPlayerD(obj) { //יוצר שחקן = obj = name , את כל הייתר ליצור בשרת
    try {
        const response = await fetch(`${URL}/player/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(obj)
        });
        const data = await response.json();
        if (response.status === 201) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: file: playerDal.js  -- function: initPlayer: ', Err);
        return null;
    }
}


export async function updatePlayerDataD(id, obj) {
    try {
        const response = await fetch(`${URL}/player/submit-score/user_name = ${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(obj)
        });
        const data = await response.json();
        if (response.status === 201) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: playerDal.js - updatePlayerData: ', Err);
        return null;
    }
}

// not route connected !!
export async function deletePlayerD(id) { 
    try {
        const response = await fetch(`${URL}/player/delete/allPlayer/user_name = ${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
        const data = await response.json();
        if (response.status === 201) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: playerDal.js - deletePlayer: ', Err);
        return null;
    }
}

/**
 * a function to returned all result Time is anser to riddles
 * @param {Object} player_id 
 * @returns {Array} 
 */
export async function getAllResultTime(id) { // מוחק שחקן עפ"י ID
    try {
        const response = await fetch(`${URL}/player/leaderboard/user_name = ${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        const data = await response.json();
        if (response.status === 200) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: playerDal.js - getAllResultTime: ', Err);
        return null;
    }
}
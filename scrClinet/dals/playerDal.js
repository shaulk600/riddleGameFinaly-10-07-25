//כרגע !! להריץ הכל על פורט 3000
// כרגי יש לשנות את הריצה של עידכון ומחיקה
const URL = "http://localhost:3000";


export async function searchIfPlayerExistD(name) { // בודק אם קיים שחקן במאגר
    try {
        const response = await fetch(`${URL}/player/get/playerExist/${name}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
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
        console.log('Error:  file: playerDal.js  -- function: searchIfPlayerExist: ', Err);
        return null;
    }
}

//לערוך את זה שיוציא גם שחקן ועוד מתודה להוציא את ציוניו - שיעשו חיפוש בשרת על השחקן - לא כאן
export async function getPlayerDataD(id) { // מביא נתוני שחקן במאגר - מתוכם להוציא average and sum
    try {
        const response = await fetch(`${URL}/player/get/playerData/${id}`, {
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
        const response = await fetch(`${URL}/player/post/init`, {
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

// יש צורך בעריכה
export async function updatePlayerDataD(id, obj) { // בסוף כל שאלה- זה ישלח ובו ציוני השעה וכדומה 
    try {
        const response = await fetch(`${URL}/player/update/playerDataDate/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
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

export async function deletePlayerD(id) { // מוחק שחקן עפ"י ID
    try {
        const response = await fetch(`${URL}/player/delete/allPlayer/${id}`, {
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
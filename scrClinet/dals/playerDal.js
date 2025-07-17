
const URL = "http://localhost:3000";

export async function searchIfPlayerExist(name) { // בודק אם קיים שחקן במאגר
    try {
        const response = await fetch(`${URL}/player/get/playerExist/${name}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        });
        console.log(typeof response); // לבדוק אם הוא json or text
        return response;
    } catch (Err) {
        console.log('Error: playerDal.js - searchIfPlayerExist: ', Err);
        return null;
    }
}

export async function getPlayerData(id) { // מביא נתוני שחקן במאגר
    try {
        const response = await fetch(`${URL}/player/get/playerData/${id}`, { //obj = ID/name
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        return response;
    } catch (Err) {
        console.log('Error: playerDal.js - getPlayerData: ', Err);
        return null;
    }
}

export async function initPlayer(obj) { //יוצר שחקן = obj = name , ?מה עוד
    try {
        const response = await fetch(`${URL}/player/post/init`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(obj)
        });
        return response;
    } catch (Err) {
        console.log('Error: playerDal.js - initPlayer: ', Err);
        return null;
    }
}

export async function updatePlayerData(id, obj) { // בסוף כל שאלה- זה ישלח ובו ציוני השעה וכדומה 
    try {
        const response = await fetch(`${URL}/player/update/playerDataDate/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(obj)
        });
    } catch (Err) {
        console.log('Error: playerDal.js - updatePlayerData: ', Err);
        return null;
    }
}

export async function deletePlayer(id) { // מוחק שחקן עפ"י ID
    try {
        const response = await fetch(`${URL}/player/delete/allPlayer/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
        return response; // מחזיר את פרטי השחקן
    } catch (Err) {
        console.log('Error: playerDal.js - deletePlayer: ', Err);
        return null;
    }
}
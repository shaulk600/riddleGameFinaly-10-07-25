// פונקציות CRUD to featch!!!
//גם לשחקן לעשות עדכן שם תביא ציונים - ועוד כמה דברים

const URL = "http://localhost:3000";

export async function searchIfPlayerExist(name){ // בודק אם קיים שחקן במאגר
     const response = await fetch(`${URL}/player/get/playerExist/${name}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        // body: JSON.stringify(obj)
    });
}
export async function getPlayerData(id){ // מביא נתוני שחקן במאגר
    const response = await fetch(`${URL}/player/get/playerData/${id}`, { //obj = ID/name
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        // body: JSON.stringify(obj)
    });
} 
export async function initPlayer(obj){ //יוצר שחקן = obj = name , ?מה עוד
    const response = await fetch(`${URL}/player/post/init`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj)
    });
}

export async function updatePlayerData(id){ // בסוף כל שאלה- זה ישלח ובו ציוני השעה וכדומה 
    const response = await fetch(`${URL}/player/update/playerDataDate/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(obj)
    });
} 
export async function updatePlayerData(id){ // מוחק שחקן עפ"י ID
    const response = await fetch(`${URL}/player/delete/allPlayer/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
        body: JSON.stringify(obj)
    });
}
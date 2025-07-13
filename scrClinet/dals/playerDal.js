// פונקציות CRUD to featch!!!
//גם לשחקן לעשות עדכן שם תביא ציונים - ועוד כמה דברים

const URL = "http://localhost:3000";
export async function initPlayer(obj){ //obj = name , ?
    const response = await fetch(`${URL}/player/init`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj)
    });
} 
export async function getPlayerData(obj){ // צריך עפ"י שם - ואז לבדוק אם שם השחקן קיים במאגר
    const response = await fetch(`${URL}/player/playerData/get`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        body: JSON.stringify(obj)
    });
} 
export async function updatePlayerData(obj){ // בסוף כל שאלה- זה ישלח ובו ציוני השעה וכדומה 
    const response = await fetch(`${URL}/player/playerData/update`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(obj)
    });
} 
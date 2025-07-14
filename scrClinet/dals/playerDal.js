// פונקציות CRUD to featch!!!
//גם לשחקן לעשות עדכן שם תביא ציונים - ועוד כמה דברים

const URL = "http://localhost:3000";

export async function initPlayer(obj){ //obj = name , ?מה עוד
    const response = await fetch(`${URL}/player/post/init`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj)
    });
} 

export async function searchIfPlayerExist(obj){ // obj=name // האם לשלב את זה והבא שאחריו ביחד אן לא - לבדוק 
     const response = await fetch(`${URL}/player/get/playerExist/:name`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        // body: JSON.stringify(obj)
    });
}

export async function getPlayerData(obj){ // צריך עפ"י שם - ואז לבדוק אם שם השחקן קיים במאגר
    const response = await fetch(`${URL}/player/get/playerData`, { //obj = ID/name
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        // body: JSON.stringify(obj)
    });
} 
export async function updatePlayerData(obj){ // בסוף כל שאלה- זה ישלח ובו ציוני השעה וכדומה 
    const response = await fetch(`${URL}/player/update/playerDataDate`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(obj)
    });
} 
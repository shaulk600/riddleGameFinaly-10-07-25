import { getPlayerByNameD, initPlayerD, updateTimePlayerD, updateSubmitScoreD, getSubmitScoreByIdPlayerD } from "../dalCloudDBs/playerDalMysql.js";

// CREATE TABLE player_scores (
//   id SERIAL PRIMARY KEY,
//   player_id INT REFERENCES players(id),
//   riddle_id TEXT,
//   time_to_solve INT,
//   solved_at TIMESTAMP DEFAULT NOW()

/**
 * a function insided geting data to player by name
 * @param {String} user_name 
 * @returns {Object} obj
 */
async function getDataPlayer(user_name) {
    try {
        const res = await getPlayerByNameD(user_name);
        console.log(`test: to response: ${res}`);
        if (!res) {
            return null;
        }
        else {
            return res;
        }
    }
    catch (err) {
        console.log(`loggin error: file: playerService , function: getPlayerByNameD , Error: ${err}`);
        return null;
    }
}

/**
 * 
 * @param {Object} data 
 * @returns {Boolean} if exist return true
 */
function validationToGeting(data) {
    try {
        console.log(`test: data ${data}`);

        const { player_id, user_name, created_at, best_Time } = data;

        console.log('test: ' + player_id + user_name + created_at + best_Time);
        if (!player_id || !user_name || !created_at || !best_Time) {
            return false;
        }
        return true;
    } catch (err) {
        console.log(`loggin error: file: playerService , function: getDataPlayerByNameS , Error: ${err}`);
        return false;
    }
}

/**
 * 
 * @param {Object} data 
 * @returns {Boolean} if exist user_name return true
 */
function validationToInit(data) {
    const { user_name } = data;
    console.log('test: ' + user_name);
    if (!user_name || user_name === undefined) {
        return false;
    }
    return true;
}

//exporting: הנוסח הוא player_id

export async function getIdPlayerS(user_name) {
    try {
        const data = await getDataPlayer(user_name);
        console.log(`test: to data ${data}`);
        if (!data) {
            return null;
        }
        else {
            return data.player_id
        }
    }
    catch (err) {
        console.log(`loggin error: file: playerService , function: getIdPlayerS , Error: ${err}`);
        return null;
    }
}

/**
 * a function that geting data to player by name
 * @param {String} user_name 
 * @returns {Object} obj to player
 */
export async function getDataPlayerS(user_nameP) {
    //תביא את כל הפרטים שלו
    try {
        const data = await getDataPlayer(user_nameP);
        console.log(`test: to data ${data}`);
        if (!data) {
            return null;
        }
        else {
            const f = validationToGeting();
            if (f) {
                return data;
            }
            return null;
        }

    }
    catch (err) {
        console.log(`loggin error: file: playerService , function: getDataPlayerByNameS , Error: ${err}`);
        return null;
    }
}

export async function initPlayerS(obj) {
    try {
        const f = validationToInit(obj);
        if (f) {
            const data = initPlayerD(obj);
            return data;
        }
        else {
            console.log(`user_name not exist - try agine`);
            return null;
        }
    }
    catch (err) {
        console.log(`loggin error: file: playerService , function: initPlayerS , Error: ${err}`);
        return null;
    }
}


/**
 *  a function that updateing 'PlayerScore' by user_name
 * @param {String}{Object} user_name 
 * @return {Number} Id to PlayerScore
 */
export async function updateSubmitScoresS(user_name, obj) {
    try {
        const objPlayer = await getDataPlayerS(user_name); // inclode val
        
        const { player_id, best_Time } = objPlayer;
        const { riddle_id, time_to_solve } = obj;
        
        if (time_to_solve < best_Time) {
            best_Time = time_to_solve;
            // best_Time- לעדכן את ה בתוך הDB
            const p = updateTimePlayerD({ player_id, best_Time });
        }
        const objUpdate = { player_id, best_Time, riddle_id, time_to_solve };
        const data = await updateSubmitScoreD(objUpdate);
        console.log(`test: data to "updateSubmitScoresS" ${data}`);
        if (!data) {
            return null;
        }
        else {
            return data; // id to 'player_scores' ? or all obj
        }
    }
    catch (err) {
        console.log(`loggin error: file: playerService , function: updateSubmitScoresS , Error: ${err}`);
        return null;
    }
}

/**
 *  a function that geting 'PlayerScore' by user_name
 * @param {*} user_name 
 * @returns {Array} [{PlayerScore1} , {PlayerScore2}]
 */
export async function getPlayerScoreByIdPlayerS(user_name) {
    try {
        const objPlayer = await getDataPlayerS(user_name); 
        const {player_id} = objPlayer;

        const data = getSubmitScoreByIdPlayerD(player_id);
        //אם זה מערך יהיה בדיקה אם הוחזר מערך
        return data;
    }
    catch (err) {
        console.log(`loggin error: file: playerService , function: getPlayerScoreByIdPlayerS , Error: ${err}`);
        return null;
    }
}

import { PlayerO } from "../classs/classForCloudeDB/playerObjClass.js";
import { supabase } from "../dbConfig/MySql.js";

/**
 * 
 * @param {string} userName 
 * @returns {object}  player = {,id , user_name , created_at ,best_Time}
 */
//אמור להביא לי גם id וגם את כל פרטיו - בסרוויס אני אמור לטפל בזה
export async function getPlayerByNameD(user_name) {
    try {
        const { data, err } = await supabase
            .from('player')
            .select('*')
            .eq('user_name', user_name)
            .limit(1);


        if (data) {
            console.log(`test : data is: ${data}`);
            return data;
        }
        if (err) {
            console.log('Error:  -- getPlayerByNameD');
            return null;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: playerDalMysql -- function getAllPlayerD = ', Err);
        return null;
    }
}

/**
 * 
 * @param {object} userName 
 * @returns {object}  player = {,player_id , user_name , created_at ,best_Time}
 */
export async function initPlayerD(obj) {
    try {
        const { user_name } = obj.user_name;
        const d = new Date.now();

        const { data, err } = await supabase
            .from('player')
            .insert([
                { user_name: user_name, created_at: d, best_Time: 0 }
            ]);
        if (data) {
            console.log(`test : dal: data created is: ${data}`);
            return data;
        }
        if (err) {
            console.log('Error:  -- initPlayerD');
            return null;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: playerDalMysql -- function initPlayerD = ', Err);
        return null;
    }
}

/**
 * 
 * @param {object} user_name && best_time
 * @returns {object}  player = {,player_id , user_name , created_at ,best_Time}
 */
export async function updateTimePlayerD(obj) {
    try {
        const { user_name, best_Time } = obj.user_name;
        const { data, err } = await supabase
            .from('player')
            .update({ best_Time: best_Time })
            .eq('user_name', user_name);

        if (data) {
            console.log(`test: dal: data update is: ${data}`);
            //הבדיקות מה חזר - יהיו בתוך הסרוויס
            return data;
        }
        if (err) {
            console.log('Error:  -- updateTimePlayerD');
            return null;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: playerDalMysql -- function updateTimePlayerD = ', Err);
        return null;
    }
}


/**
 * 
 * @param {object} obj 
 * @returns {object}  player_scores = {,id_scores , player_id : players(id) , riddle_id : text ,time_to_solve : int ,solved_at : Date }
 */
// solved_at = כמו נוצר בשעה
//ליצור חיבורים בסרוויס ולשלוח לפה אובייקט מוכן
export async function updateSubmitScoreD(obj) {
    try {
        const { player_id, riddle_id, time_to_solve, } = obj;

        const d = new Date.now(); //create solved_at Variable

        const { data, err } = await supabase
            .from('player_scores')
            .insert([
                { player_id: player_id, riddle_id: riddle_id, time_to_solve: time_to_solve, solved_at: d }
            ]);
        if (data) {
            console.log(`test : data created is: ${data}`);
            // if (!data.user_name) { //לבדוק מה המוחזר - בטסט ולהחזיר ID
            //     return {};
            // }
            return data;
        }
        if (err) {
            console.log('Error:  -- updateSubmitScore');
            return null;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: playerDalMysql -- function initPlayerD = ', Err);
        return null;
    }
}

/**
 * a function to return row desepoint to id_player By user_Name
 * @param {object} obj 
 * @returns {object}  player_scores = [{,id_scores , player_id , riddle_id ,time_to_solve,solved_at } , {...} ]
 */
export async function getSubmitScoreByIdPlayerD(player_id) {
    try {
        const { data, err } = await supabase
            .from('player_scores')
            .select('*')
            .eq('player_id', player_id);

        if (data) { // return [{} , {}]  ?
            console.log(`test : data created is: ${data}`);
            return data;
        }
        if (err) {
            console.log('Error:  -- getSubmitScoreByIdPlayer');
            return null;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: playerDalMysql -- function getSubmitScoreByIdPlayer = ', Err);
        return null;
    }
}

// const { data, error } = await supabase
//   .from('table_name')
//   .delete()
//   .eq('id', 5);



// //plane B
// /**
//  * search player by user_name to reade history Player
//  * @param {string} id
//  * @returns {object}  player = {,id , user_name , created_at ,best_Time}
//  */
//  async function getPlayerByUserNameD(user_name) {
//     try {
//         const { data, err } = await supabase
//             .from('player')
//             .select('*')
//             .eq('user_name' , user_name);
//         // gt('age',18)
//         // limit(10)

//         if (data) {
//             return data;
//         }
//         if (err) {
//             console.log('Error: getPlayerByNameD');
//             return null;
//         }
//     }
//     catch (Err) {
//         console.log('Err Server: --  file:  -- function  = ', Err);
//         return null;
//     }
// }

// //mysql2
// //sequelize
// //supebase
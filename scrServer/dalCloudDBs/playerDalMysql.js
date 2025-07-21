// import { RiddleO } from "../classs/classForCloudeDB/playerObjClass.js";

// import { supabase } from "../dbConfig/MySql.js";

// export async function getAllPlayerD() {
//     try {
//         const { data, err } = await supabase
//             .from('player')
//             .select('*')
//         if (data) {
//             // console.log(data[0]);
//             return data;
//         }
//         if (err) {
//             console.log('Err');
//             return null;
//         }
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: playerDalMysql -- function getAllPlayerD = ', Err);
//         return null;
//     }
// }

// //mysql2

// //sequelize

// //supebase
// export async function getAllPlayerByIdD(id) {
//     try {
//         const { data, err } = await supabase
//             .from('player')
//             .eq()
//             .select()
//         if (data) {
//             // console.log(data[0]);
//             return data;
//         }
//         if (err) {
//             console.log('Err');
//             return null;
//         }
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: playerDalMysql -- function getAllPlayerD = ', Err);
//         return null;
//     }
// }
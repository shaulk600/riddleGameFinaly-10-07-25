//old function
// import { createRiddleDB, getAllRiddle, getRiddleById, updateRiddleById, deleteRiddleById } from "../dals/riddleDal.js"; 
// import Riddle from "../classs/riddleClass.js";

//new function
import { getAllRiddleD, getRiddleByIdD, initRiddleOneD , updateRiddleByIdD , deleteRiddleByIdD } from "../dalCloudDBs/riddleDalMongo.js";
import { RiddleO } from "../classs/classForCloudeDB/riddleObjClass.js";

export async function getRiddleRandomS() {
    try {
        const data = await getAllRiddleD();
        if (!data) {
            return null;
        }
        else if ((Array.isArray(data)) && (data.length >= 0)) {
            const l = data.length;
            let num = Math.floor(Math.random(0) * l);
            return data[num];
        }
    } catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getRiddleRandomS = ', Err);
        return null;
    }
}
export async function getAllRiddleS() {
    try {
        const data = await getAllRiddleD();
        if (!data) {
            return null;
        }
        else if ((Array.isArray(data)) && (data.length >= 0)) {
            return data;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getAllRiddleByS = ', Err);
        return null;
    }
}
/***
 * 
 * @param: id:
 * @returns: obj
 */
export async function getRiddleByIdS(id) {
    try {
        const data = await getRiddleByIdD(id);
        const newObj = new RiddleO(data)
        return newObj;
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getRiddleByIdD = ', Err);
        return null;
    }
}
/***
 * 
 * @param: {title , question , anser}:
 * @returns: id
 */
export async function initRiddleOneS(dataToInputToInit) { // obj = שמגיע מהבקשה = request
    try {
        const newObj = {
            question: dataToInputToInit.question,
            answer: dataToInputToInit.answer,
            title: dataToInputToInit.title
        }
        //val - לשלוח
        return await initRiddleOneD(newObj); // ID מוחזר ע"י mongoDB
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function initRiddleOneS = ', Err);
        return null;
    }
}
/***
 * 
 * @param: id , {title , question , anser}:
 * @returns: id
 */
export async function updateRiddleByIdS(id, dataToInputToUpdate) {
    let id_update = Number(id);
    console.log(`test = to id: ${id}`);
    try {
        const newObj = {
            question: dataToInputToUpdate.question,
            answer: dataToInputToUpdate.answer,
            level: dataToInputToUpdate.level
        }
        //val - לשלוח
        return await updateRiddleByIdD(id, newObj); // ID מוחזר ע"י mongoDB
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function updateRiddleByIdS = ', Err);
        return null;
    }
}
export async function deleteRiddleByIdS(id) {
    try {
        const data =  await deleteRiddleByIdD(id);
        if(!data){
            return null;
        }
        else{
            return data;
        }
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function deleteRiddleByIdS = ', Err);
        return null;
    }
}



// //עובד - רק בצורה של גישה ויצירת אובייקט - לפני השליחה חזרה- 
// async function getRandRiddleS() {
//     const response = await getAllRiddleWithArrObjS();
//     if (!response || response.length === 0) return null;
//     const num = Math.floor(Math.random(0) * response.length);
//     return response[num];
// }

// async function getAllRiddleWithArrObjS() {
//     try {
//         const data = await getAllRiddleD();
//         const newArr = [];
//         for (let i = 0; i < data.length; i++) {
//             newArr.push(createObjToArrS(data[i]));
//         }
//         return newArr;
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleService -- function getAllRiddleWithArrObjS = ', Err);
//         return null;
//     }
// }

// function createObjToArrS(data) {
//     const newObj = new RiddleO(data);
//     return newObj;
// }
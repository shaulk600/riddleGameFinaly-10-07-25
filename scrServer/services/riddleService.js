//old function
// import { createRiddleDB, getAllRiddle, getRiddleById, updateRiddleById, deleteRiddleById } from "../dals/riddleDal.js"; 
// import Riddle from "../classs/riddleClass.js";

//new function
import { getAllRiddleD, initRiddleOneD } from "../dalCloudDBs/riddleDalMongo.js";
// import { RiddleO } from "../classs/classForCloudeDB/riddleObjClass.js";

export async function getRiddleRandomS() {
    try {
        const data = await getAllRiddleD();
        const l = data.length;
        let num = Math.floor(Math.random(0) * l);
        return data[num];

    } catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getRiddleRandomS = ', Err);
        return null;
    }
}
export async function getAllRiddleS() {
    try {
        return await getAllRiddleD();
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getAllRiddleByS = ', Err);
        return null;
    }
}
// export async function getRiddleByIdS(id) {
//     try {
//         const data = await getRiddleByIdD(id);
//         const newObj = new RiddleO(data)
//         return newObj;
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleService -- function getRiddleByIdD = ', Err);
//         return null;
//     }
// }
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

// export async function updateRiddleByIdS(id, dataToInputToUpdate) {
//     try {
//         const newObj = {
//             id: dataToInputToUpdate.id,
//             question: dataToInputToUpdate.question,
//             answer: dataToInputToUpdate.answer,
//             level: dataToInputToUpdate.level
//         }
//         //val - לשלוח
//         return await updateRiddleByIdD(id, newObj); // ID מוחזר ע"י mongoDB
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleService -- function updateRiddleByIdS = ', Err);
//         return null;
//     }
// }
// export async function deleteRiddleByIdS(id) {
//     try {
//         return await deleteRiddleByIdD(id);
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleService -- function deleteRiddleByIdS = ', Err);
//         return null;
//     }
// }

// export async function getRandRiddleS() {
//     const response = await getAllRiddleWithArrObjS();
//     if (!response || response.length === 0) return null;
//     const num = Math.floor(Math.random(0) * response.length);
//     return response[num];
// }

// export async function getAllRiddleWithArrObjS() {
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

// export function createObjToArrS(data) {
//     const newObj = new RiddleO(data);
//     return newObj;
// }
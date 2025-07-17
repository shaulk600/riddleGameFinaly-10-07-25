// import { createRiddleDB, getAllRiddle, getRiddleById, updateRiddleById, deleteRiddleById } from "../dals/riddleDal.js"; 
// import Riddle from "../classs/riddleClass.js";

//החשיבה : אם יוצרים קלאס - אז צריך service folder (and logic)
import { getAllRiddleD, getRiddleByIdD, initRiddleOneD, updateRiddleByIdD, deleteRiddleByIdD } from "../dalCloudDBs/riddleDalMongo.js";
import { RiddleO } from "../classs/classForCloudeDB/riddleObjClass.js";


export async function getAllRiddleS() {
    try {
        return await getAllRiddleD();
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getAllRiddleByS = ', Err);
        return null;
    }
}
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
export async function initRiddleOneS(dataToInputToInit) { // obj = שמגיע מהבקשה = request
    try {
        const newObj = {
            question: dataToInputToInit.question,
            answer: dataToInputToInit.answer,
            level: dataToInputToInit.level
        }
        //val - לשלוח
        return await initRiddleOneD(newObj); // ID מוחזר ע"י mongoDB
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function initRiddleOneS = ', Err);
        return null;
    }
}

export async function updateRiddleByIdS(id, dataToInputToUpdate) {
    try {
        const newObj = {
            id: dataToInputToUpdate.id,
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
        return await deleteRiddleByIdD(id);
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function deleteRiddleByIdS = ', Err);
        return null;
    }
}


export async function getRandRiddleS() {
    const response = await getAllRiddleWithArrObjS();
    if (!response || response.length === 0) return null;
    const num = Math.floor(Math.random(0) * response.length);
    return response[num];
}

export async function getAllRiddleWithArrObjS() {
    try {
        const data = await getAllRiddleD();
        const newArr = [];
        for (let i = 0; i < data.length; i++) {
            newArr.push(createObjToArrS(data[i]));
        }
        return newArr;
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleService -- function getAllRiddleWithArrObjS = ', Err);
        return null;
    }
}

export function createObjToArrS(data) {
    const newObj = new RiddleO(data);
    return newObj;
}
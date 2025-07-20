import { getInitRiddle, getIDRiddle, } from "../UI/MenuUI.js"; //רק מתודות של הכנסת Id or create riddle
import { getAllRiddlesD, getRiddleByIdD, initRiddleD, updateRiddleByIdD, deleteRiddleByIdD, randomRiddleD } from "../dals/riddleDal.js";

// import { updateTimeInPlayer } from "./playerService.js"; // החיבור הזה דרך השלישי -  לא פה

export async function getRiddleRandomS() {
    try {
        return data = await randomRiddleD();
    } catch (Err) {
        console.log('', Err);
    }
}

export async function initRiddleS() {
    try {
        const obj = getInitRiddle();
        const data = await initRiddleD(obj);
        if (!data) {
            console.log('not created');
        }
        else {
            console.log('created is seccess !!');
            // console.log(data);
            // return data;
        }
    } catch (Err) {
        console.log('Error: riddleService.js - initRiddle: ', Err);
        return null;
    }
}

export async function getAllRiddlesS() { 
    try {
        const data = await getAllRiddlesD();
        if (!data) {
            console.log('not geted');
        }
        else {
            console.log('geted is seccess !!');
            console.log(data);
            return data;
        }
    } catch (Err) {
        console.log('Error: - file: riddleService  --  function: getAllRiddlesS ', Err);
    }
}

export function getRiddleByIdS() {
    try {
        const id = getIDRiddle();
        return await getRiddleByIdD(id);
    } catch (Err) {
        console.log('Error: - file: riddleService  --  function: getRiddleByIdS ', Err);
    }
}

export function updateRiddleByIdS() {
    try {
        const id = getIDRiddle();
        const obj = getInitRiddle();
        const data = await updateRiddleByIdD(id, obj);
        if (!data) {
            console.log('not updated');
        }
        else {
            console.log('updated is seccess !!');
        }
    } catch (Err) {
        console.log('Error: - file: riddleService  --  function: updateRiddleByIdS ', Err);
    }
}


export function deleteRiddleByIdS() {
    try {
        const id = getIDRiddle();
        const data = await deleteRiddleByIdD(id);
        if (!data) {
            console.log('not deleted');
        }
        else {
            console.log('delete is seccess !!');
        }
    } catch (Err) {
        console.log('Error: - file: riddleService  --  function: deleteRiddleByIdS ', Err);
    }
}








// //שונות
// //2 אלה צריכים לעבור לשרת
// function validRiddleObj(riddel) {
//     if (riddel.id && riddel.name && riddel.taskDescription && riddel.correctAnswer) { //אם צריך את name ?
//         // riddleReturn = new Riddle(riddel.name, riddel.taskDescription, riddel.correctAnswer);
//         return true;
//     }
//     return false;
// }
// function validAllRiddles(riddles) {
//     const newRiddles = riddles.filter(riddle => validRiddleObj(riddle));
//     return newRiddles;
// }
import { getInitRiddle } from "../UI/MenuUI.js";
import {  } from "../dals/riddleDal.js";


export function initRiddle(obj) {// הוסף חידה חדשה
    const obj = getInitRiddle();
    //val
}

export function getAllRiddle() { // לקרוא את כל החידות

}
export function getRiddleByID(id) { 
    //לקרוא למתודה תביא ID
}
export function updateRiddle() {
    //לקרוא למתודה תביא ID
    
}

export function deleteRiddle() {
    //לקרוא למתודה תביא ID
}




//שונות
//2 אלה צריכים לעבור לשרת
function validRiddleObj(riddel) {
    if (riddel.id && riddel.name && riddel.taskDescription && riddel.correctAnswer) { //אם צריך את name ?
        // riddleReturn = new Riddle(riddel.name, riddel.taskDescription, riddel.correctAnswer);
        return true;
    }
    return false;
}  
function validAllRiddles(riddles) {
    const newRiddles = riddles.filter(riddle => validRiddleObj(riddle) );
    return newRiddles;
}
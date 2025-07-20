import { getInitRiddle } from "../UI/MenuUI.js"; // זה לא צריך להיות פה
import { getRiddles, getRiddleById, initRiddle, UpdateRiddleById, deleteRiddleById, randomRiddle } from "../dals/riddleDal.js";

// import { updateTimeInPlayer } from "./playerService.js"; // החיבור הזה דרך השלישי -  לא פה

export async function getRiddleRandom(){
    const data = await randomRiddle();
    if(data.idRiddle && data.title && data.question && data.anser ){
        return data;
    }
    else{
        return null;
    }


    // await updateTimeInPlayer(id_player ,)
}


export async function initRiddle(obj) {// הוסף חידה חדשה
    try {
        const objR = getInitRiddle();
        const data = await initRiddle(objR);
        if (!data) {
            console.log('create riddle not seccess. ');
            return null;
        }
        else {
            console.log('create riddle seccess... ');
            return data['id']; // צריך את הID????
        }
    } catch (Err) {
        console.log('Error: riddleService.js - initRiddle: ', Err);
        return null;
    }
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

//זה צריך להיות ב UI ??
export async function ask(objRiddle){
    console.log(objRiddle.question); 
    // if()
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
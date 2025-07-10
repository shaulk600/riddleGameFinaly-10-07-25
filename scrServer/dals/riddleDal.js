import { rejects } from "assert";
import { promises } from "dns";
import fs from "fs";
import { resolve } from "path";
//פה כותבים לקבצים
const pathRiddle = process.env.RIDDLES_FILE;

async function getAllRiddles() {
    try {
        const respons = await fs.readFile(pathRiddle, { encoding: 'utf-8' });
        return respons ? JSON.parse(respons) : [];
    } catch (Err) {
        console.log('Error to function reafeFile in riddleDal.js: ', Err);
        return [];
    }
}
async function setAllRiddles(riddles) {
    try {
        await fs.writeFile(pathRiddle, JSON.stringify(riddles, null, 2), { encoding: 'utf-8' });
    } catch (Err) {
        console.log('Error to function writeFile in riddleDal.js: ', Err);
    }
}


export async function createRiddleDB(Riddle) {
    //שליחה לוולידציה על הRiddle 
    const riddles = getAllRiddles(); //מתודה אחרת שנמצאץ פה להבאת כל הנתונים
    users.push(Riddle);
    setAllRiddles(USERS_FILE, riddles); // גם כן מתודה שנמצאת פה
    return Riddle;
}

export async function getAllRiddle() {
    return await getAllRiddle();
}

export async function getRiddleById(idRiddle) { //חיפוש item כללי לשם המטלות הבאות
    const riddles = await getAllRiddles();
    const newRiddles = riddles ?  riddles.find(Riddle => Riddle.id === idRiddle) : null
    return newRiddles;
}

export async function updateRiddleById(idRiddle,Riddle){
    const flag = await deleteRiddleById(idRiddle);
    flag ? await createRiddleDB(Riddle) : ''
}

export async function deleteRiddleById(idRiddle){
    const riddles = await getAllRiddles();
    const newRiddles = riddles ? riddles.filter(Riddle => Riddle.id !== idRiddle) : null
    await setAllRiddles(newRiddles);
    return newRiddles;
}
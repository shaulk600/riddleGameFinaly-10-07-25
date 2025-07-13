//בעמוד זה יש לי -הצגת תפריט- מה השעאלה מה התשובה בהוספת חידה - הצגת שם השחקן(אולי לעשות את זה בקובץ UI player) - ותביא לי ID של חידה
import { question } from "readline-sync";

// show selection menu
function displayMainMenu() {
    // displayNamePlayer(); // printed "hello {namePlayer}" - אולי יוצג דרך התפריט מנהל עקב כך שהוא צריך את השם שלו - ועדיף על פי השכבות
    console.log("  What do you want to do?    ");
    console.log(" 1. Play the game              ");
    console.log(" 2. Create a new riddle        ");
    console.log(" 3. Read all riddles           ");
    console.log(" 4. Update an existing riddle  ");
    console.log(" 5. Delete a riddle            ");
    console.log(" 6. View leaderboard           ");
    return parseInt(question(" Enter the selection number : ")); //converting to Int from String

    //הוולידציה אם הגיע ערך תהיה בפונקציית הלוגיקה 
    //יהיה עוד םונקצייה שתפקידה יהיה לבדוק אם הגיע ערך ואם הוא תואם - שיופנה אליו אחרי ההפנייה לפה 
    // - כולם מופנים ע"י programManager
}
// User selection input function Main menu
export function getMainMenuChoice() {//החזרת ערך הבחירה
    let choice;
    do {
        choice = displayMainMenu();
    } while (choice < 1 && choice > 6);
    return choice; // יוצא החוצה כ"number"
}

// show selection init riddle
function displayInitRiddleMenu() {
    console.log(" New riddle update : ");
    const questionA = question("Write the question here: ");
    const answerA = question("Write the answer here: ");
    return { questionA: answerA };
}
// User selection input function init riddle
export function getInitRiddle() {
    do {
        const objInitRiddle = displayInitRiddleMenu();
    } while (! objInitRiddle.questionA && ! objInitRiddle.answerA);
    return objInitRiddle;
}

// printed hello {name player}
export function displayNamePlayer(name) {
    console.log(` ${name ? `   hello ${name}   ` : `   hello player 1   `} `)
}
// clear in UI
export function clearUI() {
    return console.clear();
}

function displayIDRiddleMenu() {
    return question("What is the ID of the riddle?");
}
export function getIDRiddle() {
    let id;
    do {
        id = displayIDRiddleMenu();
    } while (typeof id !== Number);
    //כל עוד שזה true
    //  זה חוזר ?? לבדוק
}






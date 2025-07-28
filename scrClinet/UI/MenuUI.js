import { question } from "readline-sync";

//menu
// show selection menu
function displayMainMenu() {
    console.log("  What do you want to do?    ");
    console.log(" 1. Play the game            ");
    console.log(" 2. Create a new riddle      ");
    console.log(" 3. Read all riddles         ");
    console.log(" 4. Update an existing riddle");
    console.log(" 5. Delete a riddle          ");
    console.log(" 6. View leaderboard         ");
    console.log(" 7. to exit                  ");
    return parseInt(question(" Enter the selection number : ")); //converting a number
}
// User selection input function Main menu
export function getMainMenuChoice() {
    let choice;
    do {
        choice = displayMainMenu();
    } while (choice < 1 && choice > 6);
    return choice; //number
}

// printed hello {name player} / player1 if not name player
export function displayNamePlayer(name) {
    console.log(` ${name ? `   hello ${name}   ` : `   hello player 1   `} `)
}
// clear in UI
export function clearUI() {
    return console.clear();
}


//riddle function

// show selection init riddle
function displayInitRiddleMenu() {
    console.log(" New riddle update : ");
    const titleA = question("Write the title here: ");
    const questionA = question("Write the question here: ");
    const answerA = question("Write the answer here: ");
    const obj = {
        title: titleA,
        question: questionA,
        anser: answerA
    }
    return obj;
}

// User selection input function init riddle
export function getInitRiddle() {
    do {
        const obj = displayInitRiddleMenu();
    } while (!obj.title && !obj.question && !obj.anser);
    return obj;
}


// show selection id from riddle
function displayIdRiddleMenu() {
    return parseInt(question("What is the ID of the riddle?"));
}
// User selection input function id riddle
export function getIDRiddle() {
    let id;
    do {
        id = displayIdRiddleMenu();
    } while (typeof id !== Number);
}


//player function
// show selection name from player
function displayNamePlayerMenu() {
    return (question("What is the Name player of you?"));
}
export function getNamePlayer() {
    let name;
    do {
        name = displayNamePlayerMenu();
    } while (name === '');
    return name;
}
// show selection if make another round
export function makeAnotherRound() {
    const p = (question(" make another round ? (y/n) "));
    if (p === 'y') { return true; }
    else if (p === 'n') { return false; }
    else { return makeAnotherRound() }
}





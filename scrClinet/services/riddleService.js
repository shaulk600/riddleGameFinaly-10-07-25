// רוב הפונקציות שפה - לבדוק שהכל בסג=דר - ולשלוח ל DAL לעשות
function addingNewRiddle() {// הוסף חידה חדשה

}

function readAllRiddle() { // לקרוא את כל החידות


}

function updateRiddleIfExistById() {
    // צריך ליצור מתודת הדפסה של "תביא לי ID"
}

function deleteRiddleIfExist() {
    // צריך ליצור מתודת הדפסה של "תביא לי ID"
}

//נשאר לי 2 בCRUD שבשאלה 2



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
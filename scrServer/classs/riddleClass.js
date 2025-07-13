import NumProgram from "./NumProgramClass.js";
export default class Riddle {
    constructor(name, taskDescription = null, correctAnswer = null) {
        this.id = NumProgram.addRiddle();
        this.name = name;
        taskDescription ? this.taskDescription = taskDescription : null
        correctAnswer ? this.correctAnswer = correctAnswer : null
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getTaskDescription() {
        return this.taskDescription;
    }
    getCorrectAnswer() {
        return this.correctAnswer;
    }
    setUpdateRiddle(TaskDescription=null, correctAnswer=null) {
            TaskDescription ? this.taskDescription = taskDescription : '' //|| null
            correctAnswer ? this.correctAnswer = correctAnswer : ''  
    }
}
//delete = לעשות filter
//כל מה ששונה מה ID תחזיר True
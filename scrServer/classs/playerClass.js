import NumProgram from "./NumProgramClass.js";

export default class Player {
    constructor(name) {
        this.id = NumProgram.addPlayer();
        this.name = name;
        this.lowestTime = 0   //הזמן הקטן ביותר

        //more methods calculate
        this.Times = [];
        this.RecordTimes = []; //השאלה אם זה נחשב כ undefine או שיש עוד ערך
        this.NumberQuestion = 0;
    }
    recordTime(start, end) { // בסיום שאלה להפעיל את זה - כמובן אחרי שקיבלנו את ערכי השעות
        //start and and Types Date !!!
        // איך למצוא טווח שעה בצורה פשוטה
       

        const durationMilliseconds = end - start;
        const durationHours = durationMilliseconds / (1000 * 60 * 60); // ממיר בערך של שעות
        if (durationHours < 1) { // היינו פחות משעה
            const durationMinutes = (durationMilliseconds % (1000 * 60 * 60)) / (1000 * 60); // ממיר את זה לערך דקות
        }
        //סוף
        durationMinutes ? this.lowestTime = durationMinutes : durationHours //אם ערך דקות נמצא -עדכן את דקות אם לא - שעות

        obj1 = { start.toISOString() : end.toISOString() }
        this.RecordTimes.push(obj1);
        this.Times.push(calculateTime);
        ++this.NumberQuestion;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getlowestTime() {
        return this.lowestTime;
    }

    showTotalTime() { //display total and average time
        let total = 0;
        this.Times.forEach(element => {
            total += element;
        });
        return total;
    }
    showAverageTime() {
        const total = this.showTotalTime();
        let average = total / this.NumberQuestion;
        return average;
    }
}

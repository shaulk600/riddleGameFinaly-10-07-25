import { searchIfPlayerExist } from "../dals/playerDal.js";
function calculateAvarage() {
    //חלק מפונקציות הלוגיקה שקיימות בקלאס player להעביר לפה 
    //או ששם יערכו את כל החישובים וישלחו לפה רק את הדברים הרלוונטיים
}

export async function searchNamePlayer(name) {
    const response = searchIfPlayerExist(name);
    if (!response) { //return null
        //לא הגיע - שדר תקלה בfetch
    }
    else {
        if (response === "") {//כלומר שהגיע response- אבל הגיע ריק
            //תיצור חדש
        }
        else {
            //עדכן את הקיים
            //או- הבא את הקיים לפה(ID)
        }

    }
}
export async function startTime(){
    //או שזה יהיה במשהו נפרד
}

export async function endTime(){
       //או שזה יהיה במשהו נפרד
}

export async function showAveragePlayer(){
    
}

export async function deletePlayer(){
    
}



export async function validRiddleO(obj){ // Riddle Obj
    if(!obj._id || !obj.question || !obj.answer || !obj.level){
        return false;
    }
    else{
        return true;
    }
}
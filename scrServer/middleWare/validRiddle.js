export async function validRiddleO(obj){ // Riddle Obj
    if(!obj._id || !obj.question || !obj.answer || !obj.title){
        return false;
    }
    else{
        return true;
    }
}
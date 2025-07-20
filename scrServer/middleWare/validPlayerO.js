export async function validPlayerO(obj) { // Riddle Obj
    if (!obj._id || !obj.username || !obj.answcreated_at || !obj.best_time) {
        return false;
    }
    else {
        return true;
    }
}
export async function validPlayerO(obj) { // Riddle Obj
    if (!obj._id || !obj.username || !obj.answcreated_at || !obj.best_time) {
        return false;
    }
    else {
        return true;
    }
}

// בדבר הזה אתה אמור לדעת מה התקבל - במידה והתקבל משהו שגוי לעשות res.status לטפל בזה פה
// אם תרצה בנוסף - לעשות איזשהו וולידציה פנימית לערכים שיוצאים - בכיף
import {  } from "../dalCloudDBs/playerDalMysql/js";

//צריך לעשות מתודה שקובעת את "הזמן הטוב ביותר" בעידכון לשאול - אם הזמן החדש קצר מ"הזמן הטוב ביותר" - בשרת
    const obj = {
        user_name : name ,
        create_at: new Date.now() ,
        best_time: 0
    }
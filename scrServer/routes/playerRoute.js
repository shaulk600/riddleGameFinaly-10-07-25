import express from "express";
import { getPlayerExist , getPlayerC, initPlayerC, submitScoreC, leaderboardC } from "../controlles/playerCTRL.js";

const router = express.Router();


router.get('/player/:user_name', getPlayerExist); //מחפש אם שחקן קיים
//  מביא את כל הדאטה של השחקן
router.post('/player/', initPlayerC);
router.post('/submit-score/:user_name', submitScoreC);
router.get('/leaderboard/:user_name', leaderboardC); //החזרת לוח תוצאות לפי הזמן 

router.use(() => {
    res.status(404).jso({ msg: 'path not found' });
});

export default router;
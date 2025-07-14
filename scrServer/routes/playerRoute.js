import express from "express";
import {  } from "../controllers/.js";

const router = express.Router();


router.get('/get/playerExist/:name' , ); //מחפש אם שחקן קיים
router.get('/get/playerData/:id' , );  // מביא נתוני שחקן קיים עפ:י ID

router.post('/post/init' , );
router.put('/update/playerDataDate' , ); // מעדכן את נתוני השחקן

router.delete('/delete/playerExist/:id' , );

export default router;
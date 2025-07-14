import express from "express";
import {  } from "../controllers/.js";

const router = express.Router();


router.get('/get/playerExist/:name' , ); //מחפש אם שחקן קיים
router.get('/get/playerData/:id' , );  // מביא נתוני שחקן קיים עפ:י ID

router.post('/post/init' , );

router.put('/update/playerDataDate/:id' , ); // מעדכן את נתוני השחקן

router.delete('/delete/allPlayer/:id' , ); // מוחק את השחקן 


router.use(()=>{res.status(404).jso({msg: 'path not found'})});

export default router;
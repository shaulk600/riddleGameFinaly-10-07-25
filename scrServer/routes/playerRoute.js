import express from "express";
import { getPlayerByName } from "../controlles/playerCTRL.js";

const router = express.Router();


router.get('/get/playerExist/:name' , getPlayerByName); //מחפש אם שחקן קיים


router.use(()=>{res.status(404).jso({msg: 'path not found'})});

export default router;
import express from "express";
import { getRiddleRandomC , getAllRiddleC , getRiddleByIDC , initRiddleC} from "../controlles/riddleCTRL.js";

const router = express.Router();

router.get('/get/random' , getRiddleRandomC); //random
router.get('/get/all' , getAllRiddleC); // all riddele
router.get('/riddle/get/:id' , getRiddleByIDC); // by ID
router.post('/post/init' , initRiddleC); //init

router.use(()=>{res.status(404).json({msg: 'path not found'})});

export default router;
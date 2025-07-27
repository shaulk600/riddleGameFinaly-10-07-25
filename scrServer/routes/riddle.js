// להעתיק את זה אל תוך riddle route
import express from "express";
import { getRiddleRandomC , getAllRiddleC ,initRiddleC} from "../controlles/riddleCTRL.js";

const router = express.Router();

router.get('/get/random' , getRiddleRandomC); //random
router.get('/get/all' , getAllRiddleC); // all riddele
// router.get('/riddle/get/:id' , getRiddleRandomC); // 
router.post('/post/init' , initRiddleC); //init
// router.put('/update/:id' , getRiddleRandomC);
// router.delete('/delete/:id' , getRiddleRandomC);

router.use(()=>{res.status(404).json({msg: 'path not found'})});

export default router;
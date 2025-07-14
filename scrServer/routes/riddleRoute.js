import express from "express";
import {  } from "../controllers/.js";

const router = express.Router();

router.get('/get/all' , );
router.get('/riddle/get/:id' , );
router.post('/post/init' , );
router.put('/update/:id' , );
router.delete('/delete/:id' , );

router.use(()=>{res.status(404).jso({msg: 'path not found'})});

export default router;
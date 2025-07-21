// route to service / to dalCloudDBs files
import express from "express";
import { getRiddleRandomS, getAllRiddleS, getRiddleByIdS, initRiddleOneS } from "../services/riddleService.js";

export async function getRiddleRandomC(req, res) {
    try {
        const data = await getRiddleRandomS();
        res.status(200).json({ data });
    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function getRiddleRandomC = ', Err);
        res.sendStatus(500);
    }
}
export async function getAllRiddleC(req, res) {
    try {
        const data = await getAllRiddleS();
        res.status(200).json({ data });
    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function getAllRiddleC = ', Err);
        res.sendStatus(500);
    }
}

export async function getRiddleByIDC(req, res) {
    try {
        const id = req.params['id'];
        const data = await getRiddleByIdS(id);
        if (!data) {
            console.log("return null -- getRiddleByIDC");
            res.sendStatus(502);
        }
        else {
            res.status(200).json({ data });
        }

    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function getRiddleByIDC = ', Err);
        res.sendStatus(500);
    }
}

export async function initRiddleC(req, res) {
    try {
        const obj = {
            title: req.body['title'],
            question: req.body['question'],
            anser: req.body['anser']
        }
        if (!obj.title && !obj.question && !obj.anser) {
            const data = await initRiddleOneS(obj);
        }
        else {
            console.log(`404 - not create riddle`);
            res.sendStatus(400);
        }

        res.status(200).json({ data });
    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function initRiddleC = ', Err);
        res.sendStatus(500);
    }
}
// export async function updateRiddle(req, res) {

// }
// export async function deleteRiddle(req, res) {

// } 
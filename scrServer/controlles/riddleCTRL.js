// route to service / to dalCloudDBs files
import express from "express";
import { getRiddleRandomS, getAllRiddleS, getRiddleByIdS, initRiddleOneS, updateRiddleByIdS, deleteRiddleByIdS } from "../services/riddleService.js";

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

/**
 * 
 * @param {,title , question , anser} req 
 * @param {id} res 
 */
export async function initRiddleC(req, res) {
    try {
        const obj = {
            title: req.body['title'],
            question: req.body['question'],
            anser: req.body['anser']
        }
        if (!obj.title || !obj.question || !obj.anser) {
            res.status(200).json({ msg: 'not enter value to create - try agime' });
        }
        else {
            const data = await initRiddleOneS(obj);
            res.status(200).json({ msg: 'create is seccess', data });
        }
    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function initRiddleC = ', Err);
        res.sendStatus(500);
    }
}

/**
 * 
 * @param { , question , anser , title} + id from requesting 
 * @returns obj to response
 */
export async function updateRiddleC(req, res) {
    try {
        const id = req.params['id'];
        const { title, question, anser } = req.body;
        if (!title || !question || !anser) {
            res.status(200).json({ msg: "To update - data is needed" })
        }
        else {
            const data = await updateRiddleByIdS(id, { title, question, anser });
            if (!data) {
                console.log("ID not found - try again --  updateRiddleC");
                res.sendStatus(502);
            }
            else {
                res.status(200).json({ data });
            }
        }
    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function updateRiddleC = ', Err);
        res.sendStatus(500);
    }
}
export async function deleteRiddle(req, res) {
    try {
        const id = req.params['id'];
        // const { title, question, anser } = req.body;
        // if (!title || !question || !anser) {
        //     res.status(200).json({ msg: "To update - data is needed" })
        // }
        // else {
        const data = await deleteRiddleByIdS(id);
        if (!data) {
            console.log("ID not found - try again --  deleteRiddle");
            res.sendStatus(502);
        }
        else {
            res.status(200).json({ msg: 'data is deleted', data });
        }
        // }
    } catch (Err) {
        console.log('Err Server: --  file: riddleCTRL -- function deleteRiddleByIdS = ', Err);
        res.sendStatus(500);
    }
} 
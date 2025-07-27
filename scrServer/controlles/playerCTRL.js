import express from "express";
import { getPlayerByNameS } from "../services/playerService.js";


export async function getPlayerByNameC(req, res) {
    try {
        const user_name = req.params['name'];
        const data = await getPlayerByNameS(user_name);
        if (!data) {
            console.log("");
            res.sendStatus(502);
        }
        else {
            res.status(200).json({ data });
        }

    } catch (Err) {
        console.log('Err Server: --  file: playerCTRL -- function getPlayerByName = ', Err);
        res.sendStatus(500);
    }

}


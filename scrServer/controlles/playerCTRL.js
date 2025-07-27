import express from "express";
import { getPlayerExistS, getDataPlayerS, initPlayerS, getPlayerScoreByIdPlayerS } from "../services/playerService.js";

export async function getPlayerExist(req,res){
    try {
        const user_name = req.params['user_name'];
        const data = await getPlayerExistS(user_name);
        if (!data) {
            console.log(`test to CTRL exist player : !data`);
            res.sendStatus(502);
        }
        else {
            res.status(200).json({ data });
        }
    } catch (Err) {
        console.log('logging: file: playerCTRL, function getPlayerC = ', Err);
        res.sendStatus(500);
    }
}
/**
 * a function returned data player
 * @param {} req user_name in param
 * @param {Object } res - json
 */
export async function getPlayerC(req, res) {
    try {
        const user_name = req.params['user_name'];
        const data = await getDataPlayerS(user_name);
        if (!data) {
            console.log(`test to CTRL player : !data`);
            res.sendStatus(502);
        }
        else {
            res.status(200).json({ data });
        }
    } catch (Err) {
        console.log('logging: file: playerCTRL, function getPlayerC = ', Err);
        res.sendStatus(500);
    }
}

/**
 * a function that created new player
 * @param {Body} req Body = {user_name , pass }
 * @param {Object } res - json
 */
export async function initPlayerC(req, res) {
    try {
        const { user_name, pass } = req.body;

        const data = await initPlayerS({ user_name });
        if (!data) {
            console.log("test CTRL = data not created");
            res.sendStatus(502);
        }
        else {
            console.log("test CTRL = data is created");
            res.status(200).json({ data });
        }
    } catch (Err) {
        console.log('logging: file: playerCTRL, function initPlayerC = ', Err);
        res.sendStatus(500);
    }
}

/**
 * a function that saveing data time to anser player
 * @param {Body} req Body = {user_name , pass }
 * @param {Object } res - json
 */
export async function submitScoreC(req, res) {
    try {
        const { user_name } = req.params['user_name'];

        const data = await initPlayerS({ user_name });
        if (!data) {
            console.log("test CTRL = data not created");
            res.sendStatus(502);
        }
        else {
            console.log("test CTRL = data is created");

            console.log(`test : id: ${data['player_id']}`);
            res.status(201).json({ player_id: data['player_id'] });
        }
    } catch (Err) {
        console.log('logging: file: playerCTRL, function initPlayerC = ', Err);
        res.sendStatus(500);
    }
}

/**
 * a function that get all data time player
 * @param {} req Body = {user_name , pass }
 * @param {Object } res - json
 */
export async function leaderboardC(req, res) {

    try {
        const user_name = req.params['user_name'];

        const data = await getPlayerScoreByIdPlayerS(user_name);
        if (!data) {
            console.log("test CTRL = data to player not found");
            res.sendStatus(502);
        }
        else {
            console.log(`test : array:: ${data}`);
            res.status(200).json({ data });
        }


    } catch (err) {
        console.log('logging: file: playerCTRL, function leaderboardC: ', err);
        res.sendStatus(500);
    }
}
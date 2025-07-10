import express from "express";
import * as fsP from "fs/promises";

const pathLogger = process.env.ENTER_SERVER_FILE || '../logs/enterServer.txt'; //האם קולט את המסמך או לא

export default async function logger(req, res, next) {
    const ipC = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const newLogger = {
        ipC: [req.method, req.url]
    };

    try {
        const respons = await fsP.readFile(pathLogger, { encoding: 'utf-8' });
        const loggers = respons ? JSON.parse(respons) : [];
        loggers.push(newLogger);
        await fsP.writeFile(pathLogger, JSON.stringify(loggers,null,2), { encoding: 'utf-8' });
    }
    catch (Err) { console.log(`Error System Logger: `,Err); }
    next();
}
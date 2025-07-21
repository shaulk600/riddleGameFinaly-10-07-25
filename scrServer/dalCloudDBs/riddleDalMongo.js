import { connect } from "../dbConfig/MongoDb.js";
import { ObjectId } from "mongodb";

import { RiddleO } from "../classs/classForCloudeDB/riddleObjClass.js";

const collectionName = process.env.DB_MONGO_COLLECTION_NAME || "riddles";

export async function getAllRiddleD() {
    try {
        const db = await connect();
        const data = await db.collection(collectionName)
            .find()
            .toArray();
        return data;
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleDalMongo -- function getAllRiddleD = ', Err);
        return null;
    }
}

// export async function getRiddleByIdD(id) {
//     try {
//         const db = await connect();
//         const data = await db.collection(collectionName)
//             .findOne({ _id: new ObjectId(id) })
//             .toArray();
//         return data;
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleDalMongo -- function getRiddleByIdD = ', Err);
//         return null;
//     }
// }

export async function initRiddleOneD(obj) {
    try {
        const db = await connect();
        return await db.collection(collectionName)
            .insertOne(obj);
    }
    catch (Err) {
        console.log('Err Server: --  file: riddleDalMongo -- function initRiddleOneD = ', Err);
        return null;
    }
}

// export async function updateRiddleByIdD(id, obj) {
//     try {
//         const db = await connect();
//         // סינון שדות שערכם null או undefined
//         const filteredObj = Object.fromEntries(
//             Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined)
//         );
//         return await db.collection(collectionName)
//             .updateOne( 
//                 { _id: new ObjectId(id) }, // if Id=object.id to browser
//                 { $set: filteredObj },
//             );
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleDalMongo -- function updateRiddleByIdD = ', Err);
//         return null;
//     }
// }

// export async function deleteRiddleByIdD(id) {
//     try {
//         const db = await connect();
//         return await db.collection(collectionName)
//             .deleteOne(
//                 { _id: new ObjectId(id) }
//             );
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: riddleDalMongo -- function deleteRiddleByIdD = ', Err);
//         return null;
//     }
// }


//תוספות
// export async function getHighReportsD() {
//     try {
//         const db = await connect();
//         const data = await db.collection('intel_reports')
//             .find(
//                 { threatLevel: { $gt: 4 } } // מביא אם threatLevel - מספר הדוחות - גדול מ-4
//             )
//             .toArray();
//         return data;
//     }
//     catch (Err) {
//         console.log('Err Server: --  file: reportDal -- function getHighReportsD = ', Err);
//         res.status(500).json({ msg: 'getAllPost Server Error' })
//     }
// }


// //חיפוש ערך אם שווה למה שהבאת לו
// const adults = await db.collection('users')
//     .find({ name: { $eq: name='שם משתנה נוכחי' } })
//     .toArray();
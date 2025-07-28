import { config } from "dotenv";
config({ path: '../.env' })
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




/**
 * a middle ware that take pass and hash then
 * @param {*} requesting_to_Server
 */
function hashPass(pass) {
    const rand = Math.floor(Math.random(0) * 160);
    return bcrypt.hashSync(pass, rand);
}

/**
 * a function that check is hash to pass תואם to my
 * @param {String} passHash
 * @returns {Boolean} is seccess
 */
function comparePass(passHash) {
    if (bcrypt.compareSync(passHash, process.env.SECURET_TOKEN)) {
        return { isValid: true };
    }
    return { isValid: false };
}

/**
 * a middle ware that take user_name and pass to create logining for system security
 * @param {*} requesting_to_Server
 */


async function createToken(obj) {
    try {
        const payloadToken = jwt.sign({ user_name: user_name, role: role }, process.env.SECURET_TOKEN, { maxAge: 360000 })
        const r = await sendTokenToRes(myToken);
    } catch (err) {

    }
}
async function sendTokenToRes(myToken) {

    const { seccess, payloadToken } = verifyToken(myToken);
    if (seccess) {
        return { isToken: true, myToken: myToken }
    }

}



async function verifyToken(myToken) {
    try {
        const payloadToken = jwt.verify(myToken, process.env.SECURET_TOKEN)
        return { seccess: true, payloadToken }
    } catch (err) {
        console.log(`error: file: loginService -- function: verifyToken -- err: ${err} +-_-+ end msg.`);
        return { seccess: false, payloadToken: {} } //return payloadToken = undefined
    }
}

/**
 * a middle ware that take user_name and pass to create logining for system security
 * @param {*} requesting_to_Server
 * @returns {Object} if seccess in connected or to login
 */
export async function getTokenToCheck(req, res, next) {
    try {
        const { myToken } = req.headers;

        if (!myToken || myToken === undefined) {

            if (pass in req.headers && user_name in req.headers) {//צריך לבדוק אם זה הסינטקס המדויק
                const { user_name } = req.headers;
                const pass = hashPass(req.headers['pass']);
                //createToken
            }
            else {
                //if not login and Token == user (regular)
                req.headers.role = 'user';
            }
        }
        else {
            // if exist Token:
            const { seccess, payloadToken } = verifyToken(myToken);
            if (seccess) {
                req.headers.payloadToken = payloadToken;
            } else {
                res.status(403).json({ msg: 'this Token not Invilid' });
            }
        }


        next();
    } catch (err) {

    }
}
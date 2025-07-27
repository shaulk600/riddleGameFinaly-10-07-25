import { config } from "dotenv";
config()
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function AccountInSys(user) {
    const name = user.username;
    const pass = hashPass(user.pass);


}
function hashPass(pass) {
    const rand = Math.floor(Math.random(0) * 160);
    return bcrypt.hashSync(pass, rand);
}


export async function createToken(obj) {


    await sendTokenToRes(myToken);
}
async function sendTokenToRes(myToken) {
    const{payloadToken} = verifyToken(myToken)
    return { isToken: true, myToken: myToken }
}



export async function verifyToken(myToken) {
    try {
        const payloadToken = jwt.verify(myToken, process.env.SECURET_TOKEN, { maxAge: 360000 })// לבדוק בסופו של דבר את השם ב env ולהשוות
        return { seccess: true, payloadToken }
    } catch (err) {
        console.log(`error: file: loginService -- function: verifyToken -- err: ${err} +-_-+ end msg.`);
        return { seccess: false, payloadToken: {} } //return payloadToken = undefined
    }

}

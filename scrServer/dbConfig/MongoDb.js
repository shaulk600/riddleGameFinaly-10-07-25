// התקן ספריות mongodb , dotenv
import { MongoClient , Db} from "mongodb";
import { config } from "dotenv";
config({ path: '../.env' });

const clinet =  new MongoClient(process.env.DB_CONNECTION_MONGO || "mongodb+srv://shaullk600:AAAAWEFGETGHRT@cluster0.c6nsnbj.mongodb.net/");
const DBNAME = process.env.DB_MONGO_DB_NAME || "RiddleGame";

/**
 * @type {Db | null}
 */
let db = null; //חייבים להגדיר ערך - אז נגדיר null
/**
 * @returns {Promise<Db>}
 */

export async function connect() {
    if(!db){
        await clinet.connect();
        db = clinet.db(DBNAME); // Data Base Name
        console.log(`connect to mongoDB in data base: ${DBNAME}.`);
    }
    return db;
}
export default connect;

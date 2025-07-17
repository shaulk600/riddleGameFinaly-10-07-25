// התקן ספריות mongodb , dotenv
import { config } from "dotenv";
config();
import { MongoClient , Db} from "mongodb";

const clinet =  new MongoClient(process.env.DB_CONNECTION_MONGO);
const DBNAME = process.env.DB_MONGO_DB_NAME || "RiddleGame";

/**
 * @type {Db | null}
 */
let db = null; //חייבים להגדיר ערך - אז נגדיר null
/**
 * @returns {Promise<Db>}
 */

// const DBNAME = "Threat_report_terminal_exercise";
export async function connect() {
    if(!db){
        await clinet.connect();
        db = clinet.db(DBNAME); // Data Base Name
        console.log(`connect to mongoDB in data base: ${DBNAME}.`);
    }
    return db;
}
export default connect;

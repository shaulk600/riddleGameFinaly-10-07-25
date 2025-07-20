import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

//create a single supabase clinet for interacting with your database

const supabase = createClient(process.env.DB_URL, process.env.BD_PUBLIC_SECRET);
export default supabase;
export { supabase };
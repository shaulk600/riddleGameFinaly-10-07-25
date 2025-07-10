import express from "express";
import  configRoutes  from "./routes/configRoute.js";

const app = express();

app.use(express.json()); //תמיד קולט את כל הנתונים

configRoutes(app); // מפנה אותם הלאה

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=> console.log('server to RiddleGame running .. '));
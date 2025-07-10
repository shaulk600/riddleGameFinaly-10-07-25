import riddleRoute from "./riddleRoute.js";
// import usersRoutes from "./usersRoutes.js";
// import postsRoutes from "./postsRoutes.js";

import enterServerLogger from "../utils/enterServerLogger.js";

export default function configRoutes(app) {

    //printed loggger
    app.use(enterServerLogger);

    app.use('/riddles', greetRoutes);
    app.use('/players', usersRoutes);
    app.use('/loggers', postsRoutes);


    app.use((req, res) => { // כל ניתוב שאינו קיים - יכנס לפה 
        res.status(404).json({ msg: 'Route not found' })
    })
    
}
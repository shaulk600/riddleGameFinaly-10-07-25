//להעתיק את זה config routes אל תוך 
import riddleRoute from "./riddleRoute.js";
// import loggerRoute from "./loggerRoute.js";
// import playerRoute from "./playerRoute.js";

// import enterServerLogger from "../utils/enterServerLogger.js";

export default function configRoutes(app) {

    //printed loggger
    // app.use(enterServerLogger);

    app.use('/riddle', riddleRoute);
    // app.use('/logger', loggerRoute);
    // app.use('/player', playerRoute);

    app.use((req, res) => { 
        res.status(404).json({ msg: 'Route not found' })
    })

}
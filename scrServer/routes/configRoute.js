import riddleRoute from "./riddleRoute.js";
import playerRoute from "./playerRoute.js";


export default function configRoutes(app) {
    
    app.use('/riddle', riddleRoute);
    app.use('/player', playerRoute);
    
    app.use((req, res) => {
        res.status(404).json({ msg: 'Route not found' })
    })

}
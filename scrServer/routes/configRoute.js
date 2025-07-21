import riddleRoute from "./riddleRoute.js";


export default function configRoutes(app) {
    
    app.use('/riddle', riddleRoute);
    app.use((req, res) => {
        res.status(404).json({ msg: 'Route not found' })
    })

}
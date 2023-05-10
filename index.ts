import Server from "./clases/server";
import Router from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';


const server = new Server();

//BodyParser, nota: tiene que ser antes de la configuración de la ruta pq en la ruta ya se está usando
server.app.use(bodyParser.urlencoded({extended: true}) );
server.app.use(bodyParser.json() );

//CORS
server.app.use( cors({ origin: true, credentials: true }) );

//Rutas de servicios
server.app.use('/', Router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);

});
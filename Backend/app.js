
/*const express = require('express');
const app = express();
const port = 4000;

const router = require('./routes/index');

app.use(router);

app.listen(port, () => {
    console.log('Servidor escuchando por el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});
*/

const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 4000;

// Cargar los certificados SSL/TLS
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// Habilitar CORS
app.use(cors());

// Cargar las rutas desde el archivo separado
const router = require('./routes/index');
app.use('/api', router);

// Crear el servidor HTTPS
const server = https.createServer(options, app);

// Iniciar el servidor HTTPS
server.listen(port, () => {
    console.log('Servidor HTTPS escuchando en el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor HTTPS:', err);
});

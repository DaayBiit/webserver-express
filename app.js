const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'David',
        edad: 39,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3001);

console.log("Escuchando en el puerto 3001");
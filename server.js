const hbs = require('hbs');
require('./hbs/helpers')
const express = require('express');
const app = express();

//Un middleware esta para ser ejecutado siempre independiente de la url que invoquen.
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

//Express engine hbs
app.set('view engine', 'html');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'David Soliz'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
      
    });
})


app.listen(port, () => {
    console.log("Escuchando en las peticiones en el port", port);
});
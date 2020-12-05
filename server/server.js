require('./config/config');
const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('<h1>Bienvenido a mi servidor Rest</h1>');
});
app.get('/usuario', function (req, res) {
    res.send('<h1>Bienvenido a usuario</h1>');
});
app.get('/saludo', function (req, res) {
    res.json({
          ok: '200',
          mensaje: 'Bienvenida Pau'
    })
});
app.post('/usuario', function(req, res){
    res.json({
        ok:200,
        mensaje: 'usuario insertado con exito'
    });
});
app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea en el puerto:  ',process.env.PORT);

});
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicia express
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs')

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//variables globales
app.use((req, res, next) =>{
    next();
})

//rutas
app.use(require('./routes/'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//codigo publico para el servidor
app.use(express.static(path.join(__dirname, 'public')));

//iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

//ejecuta la aplicacion con npm run dev
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

app.use(express.json({extended:true}))
app.use('/spaceStations', require('./routes/spaceStations'))
app.use('/planets', require('./routes/planets'))
app.use('/cargos', require('./routes/cargos'))

const PORT=config.get('port')||5000

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true
        }))
        app.listen(PORT,()=>{console.log(`Started at ${PORT}`)})
    }catch (e) {
        console.log("Server ERROR" ,e.message)
        process.exit(1)
    }
}

var db = mongoose.connection;

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

start()


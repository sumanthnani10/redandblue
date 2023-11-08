const express = require('express');
const app = express();
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/routes'));

PORT = 4746

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/assets', express.static(__dirname + '/views/assets'));
app.use('/js', express.static(__dirname + '/views/js'));
app.use('/css', express.static(__dirname + '/views/css'));


app.use(async (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
});

app.listen(PORT, console.log("Server running on port: " + PORT))
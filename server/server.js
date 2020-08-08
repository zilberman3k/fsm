/**
 *
 * Echo server for FSM exercise.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {logRequest} = require('./utils');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logRequest);
app.use('/', function (req, res) {
    res.send({serverResponse: req.body, responseTimeStamp: Date.now()});
});

app.listen(4000, function () {
    console.log("Listening at port 4000");
});
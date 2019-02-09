const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app, path);
require('./app/routing/htmlRoutes')(app, path);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');


//Logger will be called for all routes
app.use(middleware.logger);

//Now this is used only in about
app.get('/about',middleware.requireAuthentication,function(req,res) {
 res.send('We are the cool dudes of NodeJS express!!');
});

app.use(express.static(__dirname+'/public'));



app.listen(PORT,function() {
    console.log('Server started @ Port ' + PORT);
});

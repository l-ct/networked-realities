const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for css/js/img
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index');
});

app.get('/hi/:path', function(req, res) {
    console.log(req.params.path)
    // ejs render automatically looks in the views folder
    res.json({path: req.params.path});
});



app.listen(3000);
console.log('listening on port 3000');
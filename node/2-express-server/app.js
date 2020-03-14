const express = require('express');
const app = express();

// ------------------------------------ Server Setup

// set the view engine to ejs
app.set('view engine', 'ejs');
// make express look in the public directory for css/js/img
app.use(express.static(__dirname + '/public'));


// ------------------------------------------ Routes

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('hello');
});

app.get('/api', function(req, res) {
    // res.json() returns raw json
    res.json({some: 'json data'});
});

// express allows you to match patterns to routes
// the colon : creates a variable named path
app.get('/:path', function(req, res) {
    console.log(req.params.path)
    // ejs render automatically looks in the views folder
    res.render('hi', {path: req.params.path});
});


// ------------------------------------ Server Start

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

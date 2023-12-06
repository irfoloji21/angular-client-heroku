let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/multikart'));

app.get('/*', function(req,res) {
    resp.sendFile(path.join(__dirname + '/dist/multikart/index.html'));
});

app.listen(process.env.PORT || 8080);
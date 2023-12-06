let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/multikart/browser'));

app.get('/*', (req,resp)=>{
    resp.sendFile(__dirname + '/dist/multikart/index.html');
});

app.listen(process.env.PORT || 8080);
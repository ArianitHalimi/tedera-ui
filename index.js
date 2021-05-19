const express = require('express')
const app = express()
app.use(express.static('public'));

const PORT = process.env.PORT || 80

app.get('/', function(req, res){
    res.sendFile('index.html');
}); 

app.listen(PORT)
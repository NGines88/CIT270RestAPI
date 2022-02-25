const express = require('express');
const bodyParser = require('body-parser');
const port = 443;
const app = express();
const md5 = require('md5');
const https = require('https');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Browser");
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
  console.log('Listening...');
});


app.post('/login', (req,res)=> {
    console.log(JSON.stringify(req.body));
    
    if (req.body.userName == "Anakin" && md5(req.body.password) == 'cbace61a82ad3afd5737bc5c78072689') {
        res.send("Welcome Master")
    } else {
        res.send("Only a sith hacks a computer")
    }
});

//app.listen(port, () => {});

console.log("Hello");

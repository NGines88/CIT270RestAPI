const express = require('express');
const bodyParser = require('body-parser');
const port = 443;
const app = express();
const md5 = require('md5');
const https = require('https');
const fs = require('fs');


app.use(express.static('public'));


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

let logAttempts = 0;
app.post('/login', (req,res)=> {
    console.log(JSON.stringify(req.body));
    
    if (req.body.userName == "Anakin" && md5(req.body.password) == '351df55da05e67c4e69ce3cce27c62f2') {
        res.send("Welcome Master")
    } else {
        logAttempts += 1;
        if (logAttempts >= 5) {
            
        }
        res.status(401); //Unauthorized
        res.send("Only a sith hacks a computer")
    }
});

//app.listen(port, () => {});

console.log("Hello");

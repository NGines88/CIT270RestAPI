const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const md5 = require('md5');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Browser");
});

app.post('/login', (req,res)=> {
    console.log(JSON.stringify(req.body));
    
    if (req.body.userName == "Anakin" && md5(req.body.password) == 'cbace61a82ad3afd5737bc5c78072689') {
        res.send("Welcome Master")
    } else {
        res.send("Only a sith hacks a computer")
    }
});

app.listen(port, () => {});

console.log("Hello");

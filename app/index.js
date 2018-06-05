const Blockchain = require("../blockchain"); //will find index.js file automaticaly
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const bc = new Blockchain();
app.use(bodyParser.json());

const HTTP_PORT=process.env.HTTP_PORT || 3001;

app.get('/blocks',(req,res)=>{
    res.json(bc.chain);
});

app.post('/mine',(req,res)=>{
    const block=bc.addBlock(req.body.data);
    console.log(`New block added : ${block.toString()}`);
    res.redirect('./blocks');
})

app.listen(HTTP_PORT,()=> console.log(`app running   port ${HTTP_PORT}`));
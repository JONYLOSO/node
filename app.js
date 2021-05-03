const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to the home page!');
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Sever open on port ${PORT}`);
})
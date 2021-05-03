const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('well donw! sadfsd');
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Sever open on port ${PORT}`);
})
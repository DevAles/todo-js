const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(8080, function(){
    console.log("> Listening in port: 8080")
});


const express = require('express');
const routers = require('./routes/api');

const app = express();


app.use(express.static('public'));
app.use(routers);




app.listen(process.env.PORT || 3000, ()=>{
  console.log('listening for requests!')
})

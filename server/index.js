const express = require('express');
const app = express();

app.use(express.static('./client/dist'))

app.listen(3033, function(){
  console.log('Navbar is live on port #3033')
})

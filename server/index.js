const express = require('express');
const app = express();

app.use(express.static('./client/dist'))

// app.get('/', function(req, res){
//   res.send('thank you!')
// })

app.listen(3033, function(){
  console.log('Navbar is live on port #3033')
})

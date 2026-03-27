const express = require('express');
 
const app = express();
const route=require('./route/route.js');
const PORT = 3000;

app.use('/home', route);
 

app.get('/', (req, res) => {
  res.send('Hello from Express server ');
});
 

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 
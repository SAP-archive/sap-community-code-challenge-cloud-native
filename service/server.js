const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Your Node.js service is running on port ${PORT}... try with these path /hello`)	
});

app.get("/hello", (req, res) => {
  res.send("Hello, Spocky! &#128406");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
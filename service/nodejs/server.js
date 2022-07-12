const { default: axios } = require('axios');
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Your Node.js service is running on port ${PORT}... try with these path /character/:id`);
});

app.get("/character/:id", async (req, res) => {
  res.send((await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)).data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
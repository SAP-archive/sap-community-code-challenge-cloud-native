const express = require('express')
const app = express()

app.get('/greeting/:communityID', (req, res) => {
  res.send(`Hey ${req.params.communityID}, really nice seeing you here! 🙂`);
});

app.use(express.static(__dirname));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
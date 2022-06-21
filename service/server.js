const express = require('express')
const app = express()

app.get('/greeting/:communityID', (req, res) => {
  res.send(`Hey ${req.params.communityID}, really nice seeing you here! 🙂`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
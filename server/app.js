const express = require('express');
const app = express();
const port = 3200;

app.use('/', express.static('./dist', {
    index: "index.html"
}));

app.listen(port, () => console.log(`ERN App listening on port ${port}!`));
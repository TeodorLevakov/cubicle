const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Cubi');
});





app.listen(5000, () => console.log(`Cubi is listening on....`));
const path = require('path');
const express = require('express');
const bandInfoGetter = require('./bandInfoGetter');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('../../front-end/dist/angular-bands'));

app.get('/api/band/:bandName', async (req, res, next) => {
    const bandData = await bandInfoGetter.getBandInfo(req.params.bandName);
    res.json(bandData);
    res.end();
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front-end/dist/angular-bands/index.html'));
})

app.listen(3000, () => {
    console.log("TEST");
});
const express = require('express');
const bandInfoGetter = require('./bandInfoGetter');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/band/:bandName', async (req, res, next) => {
    const bandData = await bandInfoGetter.getBandInfo(req.params.bandName);
    res.json(bandData);
    res.end();
});
app.use(express.static('../../front-end/dist/angular-bands'));

app.listen(3000, () => {
    console.log("TEST");
});
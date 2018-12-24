const request = require('r2');
const apiKey = 'CONFIDENTIAL';
const apiUrl = `http://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&format=json`;
module.exports = {
    async getBandInfo(bandName) {
        const urlParts = [
            apiUrl,
            `method=artist.getinfo`,
            `artist=${bandName}`
        ];
        const url = urlParts.join('&');

        const rawData = await request.get(url).text;
        const data = JSON.parse(rawData);
        return data;
    }
};
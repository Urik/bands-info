const request = require('r2');
const apiKey = '9376cbcf6d8fab4fccebc3264e46310c';
const apiUrl = `http://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&format=json`;
module.exports = {
    async getBandInfo(bandName) {
        const urlParts = [
            apiUrl,
            `method=artist.getinfo`,
            `artist=${bandName}`,
            'autocorrect=1'
        ];
        const url = urlParts.join('&');

        const rawData = await request.get(url).text;
        const data = JSON.parse(rawData);
        return data;
    }
};
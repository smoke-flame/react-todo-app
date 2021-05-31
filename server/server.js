const express = require('express');

const app = express();
let pathToServerFile = __dirname.split('\\');
pathToServerFile.pop();
pathToServerFile = pathToServerFile.join('\\');

app.use('/static', express.static(pathToServerFile + '/client/build/static'));
app.use('/img', express.static(pathToServerFile + '/client/build/img'));
app.use('/style', express.static(pathToServerFile + '/client/build/style'));





//main page
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(pathToServerFile + '/client/build/index.html');
});
app.get('/manifest.json', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(pathToServerFile + '/client/build/manifest.json');
});





app.listen(5000)
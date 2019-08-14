const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getShows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(getShows()));


app.use(express.static(path.join(__dirname, '../..build'))); //Serve static files

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../..build', 'index.html'))); //React routing

app.listen(port, () => console.log(`App listening on port ${port}!`));
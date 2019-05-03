const path = require('path');
const express = require('express');

const app = express();
const publicDir = path.join(__dirname, 'public');
const buildDir = path.resolve(__dirname, '../build');

app.use(express.static(publicDir));
app.use(express.static(buildDir));

app.get('*', (req, res) => res.sendFile(`${buildDir}/index.html`));

app.listen(process.env.PORT || 5010);


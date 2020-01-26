const express = require('express');
const fs = require('fs');
const app = express();

let data = fs.readFileSync('users.json');
let users = JSON.parse(data);


app.get('/', (req, res) => res.send(users.map(element =>
    `${element.name} ${element.username}`).join('///')
));

app.listen(8080, () =>
    console.log('running')
);
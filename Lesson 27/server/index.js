const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const users = [
    {
        id: 1,
        name: 'Vasya'
    }
];
app
    .use('/public', express.static('public'))
    .use(cors())
    .use(express.json());

app.get('/', (req, res) => res.send(users));
app.get('/users', (req, res) => res.send(users));
app.post('/users', (req, res) => {
    users.push(req.body);
    res.status(201).send(req.body);
});
app.listen(port, () =>
    console.log("server is runing")
);
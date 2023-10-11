const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send(Object.keys(req.query).map(k => `${k}: ${req.query[k]}`).join('<br>')));

app.post('/', (req, res) => res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('<br>')));
app.put('/', (req, res) => res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('<br>')));
app.delete('/', (req, res) => res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('<br>')));


app.listen(port, () => console.log(`Server listening on port ${port}!`));
import express from 'express'

const app = express();
const port = 3000;

app.get("/add", (req, res) => {
    res.status(201); //CREATED
    res.send('Hello');
});

app.listen(port, () => { console.log(`Hey, go to http://localhost:${port}`) });
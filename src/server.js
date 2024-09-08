import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const port = 3000;

app.get("/hello-world", (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello World');
});

app.listen(port, () => { console.log(`Hey, go to http://localhost:${port}`) });
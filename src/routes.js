import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
const port = 3000;

const STATUS = {
    status: 'OK',
    failure: 'NO'
}

router.get("/hello-world", (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello World');
});

router.post("/add", (req, res) => {
    const data = [];
    const { body } = req;

    if (!body.name) {
        res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.failure,
            message: 'Name is required'
        });
    }


    return res.status(StatusCodes.CREATED).send({
        status: STATUS.status,
        message: body.name,
    });
})

export default router;
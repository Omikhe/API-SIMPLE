import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.services'

const router = express.Router();

const STATUS = {
    success: 'OK',
    failure: 'NO'
}

router.get("/ping", (req, res) => {
    res.status(StatusCodes.OK);
    res.send('OK');
});

router.post("/add", (req, res) => {
    // const data = [];
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    // if (!user.name) {
    //     res.status(StatusCodes.BAD_REQUEST).send({
    //         status: STATUS.failure,
    //         message: 'Name is required'
    //     });
    // }


    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        message: addedUser,
    });
})

router.put('/update/:id', (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id, 10)

    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: addedUser,
        });
    } else {
        return res.status(StatusCodes.OK).send({
            status: STATUS.failure,
            message: `User "${id}" is not found`,
        });
    }
})

export default router;
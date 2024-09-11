import userDao from '../models/persistence/user.dao'

const getUser = (userId) => {
    userDao.get(userId);
};

const updateUser = (userId, details) => {
    return userDao.upadate(userId, details);
};

const addUser = (userId) => {
    userDao.insert(userId);
};

const removeUser = (userId) => {
    userDao.remove(userId);
};

export default {
    getUser,
    updateUser,
    addUser,
    removeUser
}


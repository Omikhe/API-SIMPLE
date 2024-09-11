import users from '../data/users.data'

const get = (userId) => {
    const findUser = users.find((user) => {
        if (users.id === userId) {
            return user;
        }
        return null;
    })
};

const getAll = () => {
    return users;
}

// const update = (newDetails) => {
//     users.map(user, index) => {
//         if (user.id === newDetails.id) {

//         }
//     }
// };

const insert = (userId) => {
    const newUser = { ...userId, id: users.length + 1 }
    users.push(newUser);

    return newUser;
};

const remove = (userId) => {
    const findUser = (user, index) => {
        if (user.id === userId) {
            users.splice(index, 1)
            return true;
        }
        return false;
    };

    return users.find(findUser)

};



export default {
    get,
    getAll,
    update,
    insert,
    remove
}
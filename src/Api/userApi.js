
import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://tim-inukshuk-69924.herokuapp.com';

export const addUser = async (user) => {
    try {
        return await axios.post(`http://localhost:7000/signup`, user);
    } catch (error) {
        console.log("there was an error", error);
    }

}
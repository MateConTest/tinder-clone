import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-matecon.herokuapp.com'
});

export default instance;
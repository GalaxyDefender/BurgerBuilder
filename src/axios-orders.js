import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-81e96.firebaseio.com/'
});

export default instance;
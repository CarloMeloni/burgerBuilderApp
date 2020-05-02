import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-project-af88a.firebaseio.com/'
});

export default instance;
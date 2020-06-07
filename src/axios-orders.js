import axios from 'axios';

const Instance=axios.create({
    baseURL:'https://burger-builder-6468f.firebaseio.com/'
});

export default Instance;

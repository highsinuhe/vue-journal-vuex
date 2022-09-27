
import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-demos-b46ed-default-rtdb.firebaseio.com/'
})

export default journalApi

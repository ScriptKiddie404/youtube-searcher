import axios from "axios";

const KEY = 'AIzaSyCGU7EOhods3Kow7B4GJVUPHuw8WCnDPLk';
const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: URL,
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});

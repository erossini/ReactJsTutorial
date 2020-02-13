import axios from 'axios';

// AIzaSyDHXwHkXorAjSHQbn-Sb9cDUYAG0NlKeDk
const KEY = '<your key>';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
    }
});
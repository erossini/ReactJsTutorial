import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 938e2e9f5bdb6a2cd76823b6322cca7654e6f3b4c2eddc946d3c5d7a5a4b87fb"
      }
});
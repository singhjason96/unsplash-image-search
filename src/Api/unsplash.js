import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cda9f5b1278b52ceeb95a9053b3c56de315a939cfc3d1fbe6ec0a3f41d5ed2dc'
      }
});
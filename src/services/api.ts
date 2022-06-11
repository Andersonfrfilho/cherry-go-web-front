import axios from 'axios';

const api = axios.create({
  baseURL: 'https://staging.cherry-go.com',
});

export { api };

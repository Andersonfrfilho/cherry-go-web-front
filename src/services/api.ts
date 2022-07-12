import axios from 'axios';

const api = axios.create({
  baseURL: 'https://staging.api.cherry-go.com',
});

export { api };

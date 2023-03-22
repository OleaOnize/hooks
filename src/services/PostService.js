import { http } from './BaseService';

export const listPost = () => http.get('/posts');
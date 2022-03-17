import {API_POSTS, API_USERS} from './api';

class ApiService {
  async getUsersAll() {
    const response = await fetch(API_USERS);
    const users = await response.json();
    return users;
  }

  async getPostAll() {
    const response = await fetch(API_POSTS);
    const posts = await response.json();
    return posts;
  }
}

export default new ApiService();

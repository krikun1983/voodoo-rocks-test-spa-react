import {API_POSTS, API_POSTS_USER_ID, API_USERS} from './api';

class ApiService {
  async getUsersAll() {
    const response = await fetch(API_USERS);
    const users = await response.json();
    return users;
  }

  async getUserById(id: number) {
    const response = await fetch(`${API_USERS}/${id}`);
    const user = await response.json();
    return user;
  }

  async getPostAll() {
    const response = await fetch(API_POSTS);
    const posts = await response.json();
    return posts;
  }

  async getPostAllByUserId(userId: number) {
    const response = await fetch(`${API_POSTS_USER_ID}${userId}`);
    const posts = await response.json();
    return posts;
  }
}

export default new ApiService();

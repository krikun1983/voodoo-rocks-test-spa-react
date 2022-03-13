import {API_POSTS, API_POSTS_USER_ID, API_USERS} from './api';

class ApiService {
  async getUsersAll() {
    const responsive = await fetch(API_USERS);
    const users = await responsive.json();
    return users;
  }

  async getUserById(id: number) {
    const responsive = await fetch(`${API_USERS}/${id}`);
    const user = await responsive.json();
    return user;
  }

  async getPostAll() {
    const responsive = await fetch(API_POSTS);
    const posts = await responsive.json();
    return posts;
  }

  async getPostAllByUserId(userId: number) {
    const responsive = await fetch(`${API_POSTS_USER_ID}${userId}`);
    const posts = await responsive.json();
    return posts;
  }
}

export default new ApiService();

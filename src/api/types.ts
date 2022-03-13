export interface UserType {
  id: number;
  name: string;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

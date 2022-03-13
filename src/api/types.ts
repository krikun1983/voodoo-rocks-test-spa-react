export interface UserType {
  id: number;
  name: string;
}

export interface UserFullType extends UserType {
  address: {city: string};
  company: {
    name: string;
  };
  email: string;
  username: string;
  website: string;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

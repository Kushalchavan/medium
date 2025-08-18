export type UserType = {
  username: string;
  email: string;
  password: string;
};

export type JwtUserPayload = {
  userId: string;
};


export type BlogType = {
  title: string;
  content: string;
  image?: string;
  author: string;
}
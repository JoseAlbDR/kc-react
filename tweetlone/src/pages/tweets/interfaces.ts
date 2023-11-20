export interface Tweet {
  content: string;
  userId: number;
  updatedAt: string;
  id: number;
  user: {
    username: string;
  };
}

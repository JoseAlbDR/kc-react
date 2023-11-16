import client from '../../api/client';

export const login = (user: {
  username: string;
  password: string;
}): Promise<{ accessToken: string }> => {
  return client.post('/auth/login', user);
};

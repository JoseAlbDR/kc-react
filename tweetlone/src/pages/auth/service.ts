import client, { removeAuthorizationHeader } from '../../api/client';
import storage from '../../utils/storage';

interface LoginResponse {
  accessToken: string;
}

export const login = async (user: {
  username: string;
  password: string;
}): Promise<LoginResponse> => {
  const { accessToken } = (await client.post(
    '/auth/login',
    user
  )) as LoginResponse;

  storage.set('accessToken', accessToken);
  return { accessToken };
};

export const logout = async () => {
  removeAuthorizationHeader();
  storage.remove('accessToken');
};

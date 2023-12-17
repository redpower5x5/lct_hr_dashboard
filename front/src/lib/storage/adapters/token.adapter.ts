import storage from '../storage';

export const setToken = async (token: string): Promise<void> => {
  await storage.set('access_token', token);
};

export const getToken = async (): Promise<string | null> => {
  return await storage.get('access_token');
};

export const removeToken = async (): Promise<void> => {
  await storage.remove('access_token');
};

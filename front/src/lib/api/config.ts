interface IConfig {
  baseURL: string
  authToken?: string
}

export const config: IConfig = {
  authToken: '',
  baseURL: ''
};

export const setBaseURL = (baseURL: string): void => {
  config.baseURL = baseURL;
};

export const setAuthToken = (token: string | null): void => {
  if (token) config.authToken = token;
};

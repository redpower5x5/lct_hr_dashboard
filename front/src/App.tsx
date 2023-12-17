import React, { type FC, useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { useAPI } from '@hooks/useAPI';
import { useAuthToken } from '@hooks/useAuthToken';
import { getProfile } from '@lib/api';
import { router } from '@router/router';
import { GlobalStyle } from '@styles/globalStyles';

import 'react-toastify/dist/ReactToastify.css';

import { userState } from './store';

export const App: FC = () => {
  const { getAccessToken } = useAuthToken();
  const token = getAccessToken();
  const { data, runRequest } = useAPI({ apiService: getProfile });
  const [, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (token) runRequest();
  }, [token]);

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={15000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
      <RouterProvider router={router} />
    </>
  );
};

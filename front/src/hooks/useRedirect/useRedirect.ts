import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = (path: string, options?: { state?: any }) => {
    const { state } = options ?? {};
    navigate(path, { state });
  };

  return { redirect };
};

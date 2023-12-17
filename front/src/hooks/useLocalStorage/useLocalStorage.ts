import { useStorage } from '@hooks/useStorage';

export const useLocalStorage = () => {
  const { getValue, setValue, removeValue } = useStorage(localStorage);

  return { getValue, setValue, removeValue };
};
